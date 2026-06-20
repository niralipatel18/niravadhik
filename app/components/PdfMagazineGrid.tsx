"use client";

import dynamic from "next/dynamic";
import type { MagazineIssue } from "../data/content";

const PdfViewer = dynamic(() => import("./PdfViewer"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center py-16">
      <p className="font-guj text-base text-ink-soft/60 animate-pulse">
        લોડ થઈ રહ્યું છે…
      </p>
    </div>
  ),
});

export default function PdfMagazineGrid({ issues }: { issues: MagazineIssue[] }) {
  return (
    <div className="space-y-20">
      {[...issues].reverse().map((issue) => {
        return (
          <div key={issue.issue}>
            <div className="bg-[#525659]">
              <PdfViewer src={encodeURI(issue.pdf)} title={issue.title} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
