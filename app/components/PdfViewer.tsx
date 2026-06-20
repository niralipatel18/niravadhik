"use client";

import { useState, useEffect, useRef } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const ZOOM_STEP = 0.25;
const ZOOM_MIN  = 0.25;
const ZOOM_MAX  = 3;

export default function PdfViewer({ src, title }: { src: string; title: string }) {
  const [numPages, setNumPages]       = useState(0);
  const [containerWidth, setW]        = useState(0);
  const [zoom, setZoom]               = useState(1);
  const [isMobile, setIsMobile]       = useState(false);
  const containerRef                  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new ResizeObserver(([e]) => {
      const w = e.contentRect.width;
      setW(w);
      setIsMobile(w < 640);
    });
    obs.observe(el);
    setW(el.clientWidth);
    setIsMobile(el.clientWidth < 640);
    return () => obs.disconnect();
  }, []);

  const pageWidth = isMobile ? containerWidth : containerWidth * zoom;

  return (
    <div ref={containerRef} className="w-full">

      {/* ── Zoom bar — desktop only ── */}
      {!isMobile && (
        <div className="sticky top-[56px] z-30 flex items-center justify-center gap-3 bg-[#2e2e2e] py-2.5">
          <button
            aria-label="Zoom out"
            disabled={zoom <= ZOOM_MIN}
            onClick={() => setZoom(z => Math.max(ZOOM_MIN, +(z - ZOOM_STEP).toFixed(2)))}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 font-mono text-base font-700 text-white transition hover:bg-white/30 disabled:opacity-30"
          >
            −
          </button>

          <span className="w-14 text-center font-mono text-xs font-600 text-white/70">
            {Math.round(zoom * 100)} %
          </span>

          <button
            aria-label="Zoom in"
            disabled={zoom >= ZOOM_MAX}
            onClick={() => setZoom(z => Math.min(ZOOM_MAX, +(z + ZOOM_STEP).toFixed(2)))}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 font-mono text-base font-700 text-white transition hover:bg-white/30 disabled:opacity-30"
          >
            +
          </button>

          <button
            aria-label="Reset zoom"
            onClick={() => setZoom(1)}
            className="ml-1 rounded-full bg-white/10 px-3 py-1 font-mono text-[0.6rem] font-600 uppercase tracking-[0.12em] text-white/60 transition hover:bg-white/20 hover:text-white"
          >
            Reset
          </button>
        </div>
      )}

      {/* ── Pages ── */}
      <div className={isMobile ? "" : "overflow-x-auto"}>
        <Document
          file={src}
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
          loading={
            <div className="flex items-center justify-center py-16">
              <p className="animate-pulse font-guj text-base text-white/50">
                લોડ થઈ રહ્યું છે…
              </p>
            </div>
          }
          error={
            <div className="py-10 text-center">
              <p className="font-guj text-base text-red-400">PDF લોડ ન થઈ.</p>
            </div>
          }
        >
          <div className={isMobile ? "" : "flex flex-col items-center"}>
            {containerWidth > 0 &&
              Array.from({ length: numPages }, (_, i) => (
                <Page
                  key={i + 1}
                  pageNumber={i + 1}
                  width={pageWidth}
                  className="mb-px"
                  renderTextLayer
                  renderAnnotationLayer
                />
              ))}
          </div>
        </Document>
      </div>
    </div>
  );
}
