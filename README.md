# નિર્વાધિક — Nirvadhik

સાહિત્ય | સિનેમા | સંગીત · Literature | Cinema | Music — ગાંધીનગર
*'કોઈ કલા સ્વરૂપે જગતથી જુદા બનો'*

A vibrant bilingual arts site in the spirit of Rekhta Gujarati, covering three
equal strands: literature, cinema, music.

## Stack
- Next.js 16 (App Router) + TypeScript + Tailwind CSS v4
- Fonts via CSS import (Noto Serif Gujarati, Playfair Display, Mukta, IBM Plex Mono)
- In-brand SVG art motifs + Unsplash photo thumbnails

## Run
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production
```

## Design
- **Vibrant poppy palette**: vermilion #e8462b, marigold #f6a01a, peacock #3a4ea8,
  teal #128a7d, bandhani pink #c2317f, on warm paper #fbf6ec.
- Each strand has its own accent: સાહિત્ય=poppy, સિનેમા=indigo, સંગીત=teal,
  driven by `data-accent` + `--accent` CSS var. Cards, chips, links, banners
  all pick it up automatically.
- SVG motifs live in `app/components/Art.tsx` (book / film reel / tanpura).

## Bilingual approach
Gujarati leads where it's natural (titles, poetry, section names); English is
added only where it helps (nav helpers, labels, descriptions) — not a full
translation of everything. Add `titleEn`, `kindEn`, `blurbEn` per item.

## Images
- Thumbnails use Unsplash CDN (no API key). Swap any `image:` URL in
  `app/data/content.ts`. Allowed host is set in `next.config.ts` →
  `images.remotePatterns`. To add another host, add it there.
- If a photo ever 404s, the SVG motifs/colors keep the page intact.

## Adding a piece
Add to `sahitya` / `cinema` / `sangeet` in `app/data/content.ts`:
```ts
{
  slug: "url-slug",
  title: "શીર્ષક", titleEn: "Title",
  author: "લેખક",
  kind: "ગઝલ", kindEn: "Ghazal",
  excerpt: "ટૂંકો પરિચય…",
  body: ["પંક્તિ ૧", "પંક્તિ ૨", "", "નવો ફકરો"],  // "" = blank line
  year: "2024",
  image: "https://images.unsplash.com/...",
}
```
Pages regenerate automatically (generateStaticParams).

## Structure
- `app/data/content.ts` — all content + palette image map (edit here)
- `app/page.tsx` — home: art hero + strand blocks + latest
- `app/sahitya|cinema|sangeet/` — list + `[slug]` reader
- `app/about/` — about
- `app/components/` — Header, Footer, Hero, Cards, Reader, Art
- `app/globals.css` — palette + accent theming
# niravadhik
