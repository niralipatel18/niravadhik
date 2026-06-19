// In-brand SVG motifs. Poppy colors. Never 404.

export function SahityaArt({ className = "" }: { className?: string }) {
  // open book / lotus of words
  return (
    <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <circle cx="100" cy="100" r="92" fill="#f3ead8" />
      <circle cx="100" cy="100" r="92" stroke="#e8462b" strokeWidth="3" strokeDasharray="2 8" />
      {/* book spine */}
      <path d="M100 58 C82 48 60 48 44 56 L44 142 C60 134 82 134 100 144 Z" fill="#3a4ea8" />
      <path d="M100 58 C118 48 140 48 156 56 L156 142 C140 134 118 134 100 144 Z" fill="#e8462b" />
      <path d="M100 58 L100 144" stroke="#1a1410" strokeWidth="2.5" />
      {/* page lines */}
      <g stroke="#fbf6ec" strokeWidth="2" opacity="0.85">
        <path d="M56 72 H90" /><path d="M56 84 H88" /><path d="M56 96 H90" /><path d="M56 108 H86" />
        <path d="M110 72 H144" /><path d="M112 84 H144" /><path d="M110 96 H144" /><path d="M114 108 H142" />
      </g>
      {/* saffron sun */}
      <circle cx="100" cy="40" r="11" fill="#f6a01a" />
    </svg>
  );
}

export function CinemaArt({ className = "" }: { className?: string }) {
  // film reel + frames
  return (
    <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <circle cx="100" cy="100" r="92" fill="#f3ead8" />
      <circle cx="100" cy="100" r="92" stroke="#3a4ea8" strokeWidth="3" strokeDasharray="2 8" />
      <circle cx="100" cy="100" r="58" fill="#1a1410" />
      <circle cx="100" cy="100" r="16" fill="#f6a01a" />
      {/* reel holes */}
      <g fill="#e8462b">
        <circle cx="100" cy="58" r="9" /><circle cx="142" cy="100" r="9" />
        <circle cx="100" cy="142" r="9" /><circle cx="58" cy="100" r="9" />
        <circle cx="130" cy="70" r="7" /><circle cx="130" cy="130" r="7" />
        <circle cx="70" cy="130" r="7" /><circle cx="70" cy="70" r="7" />
      </g>
      {/* film strip */}
      <rect x="14" y="92" width="172" height="16" fill="#128a7d" opacity="0.25" />
    </svg>
  );
}

export function SangeetArt({ className = "" }: { className?: string }) {
  // tanpura strings + note
  return (
    <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <circle cx="100" cy="100" r="92" fill="#f3ead8" />
      <circle cx="100" cy="100" r="92" stroke="#128a7d" strokeWidth="3" strokeDasharray="2 8" />
      {/* gourd */}
      <ellipse cx="100" cy="138" rx="42" ry="46" fill="#c2317f" />
      <ellipse cx="100" cy="138" rx="42" ry="46" stroke="#1a1410" strokeWidth="2.5" />
      {/* neck */}
      <rect x="92" y="30" width="16" height="80" rx="4" fill="#b8862f" />
      {/* strings */}
      <g stroke="#1a1410" strokeWidth="1.5" opacity="0.7">
        <path d="M96 34 L92 178" /><path d="M100 34 L100 184" /><path d="M104 34 L108 178" />
      </g>
      {/* sound waves */}
      <g stroke="#e8462b" strokeWidth="3" fill="none" strokeLinecap="round">
        <path d="M150 96 q10 14 0 28" /><path d="M162 88 q18 26 0 52" />
      </g>
      <circle cx="100" cy="40" r="10" fill="#f6a01a" />
    </svg>
  );
}
