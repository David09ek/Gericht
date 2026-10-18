# Gerícht

The Gerícht restaurant site, built with Next.js (App Router, TypeScript,
CSS Modules).

This branch carries the **imageless** treatment: it keeps the original
palette, typography, copy and section order, but every photograph is replaced
with CSS and SVG ornament — ring motifs, gold double-frames, drawn medals and
a typographic statement band. The site ships no raster artwork at all, so the
page weighs the same on a phone as on a desktop.

## Running locally

```bash
npm install
npm run dev        # http://localhost:3000
```

```bash
npm run build && npm run start   # production build
```

## Scripts

| Script | What it does |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |
| `npm run audit:responsive` | Reports any element overflowing the viewport at 1440/1024/768/390/360px |

## Project layout

```
src/
  app/
    layout.tsx        Fonts, metadata, Restaurant JSON-LD
    page.tsx          Composes the sections
    globals.css       Design tokens, reset, shared section utilities
    icon.svg          Favicon (the brand G mark)
  components/
    sections/         One component per band of the page
    ui/               Reusable primitives
  data/               Menu, awards, gallery and site content
  fonts/              Self-hosted Bestermind (the signature face)
public/
  images/             WebP assets
  icons/              Logo and G watermark
scripts/              Asset pipeline and responsive audit
```

Content lives in `src/data/` rather than in the markup, so menu items, awards
and contact details can be edited without touching components.

## Design tokens

Defined once on `:root` in `src/app/globals.css`:

| Token | Value |
| --- | --- |
| `--color-bg` | `#0C0B08` |
| `--color-gold` | `#DCCA87` |
| `--color-cream` | `#F5EFDB` |
| `--color-grey` | `#AAAAAA` |
| `--font-display` | Cormorant Upright |
| `--font-body` | Open Sans |
| `--font-signature` | Bestermind (self-hosted) |

Type scales use `clamp()`, so headings interpolate between the mobile and
desktop sizes instead of switching at a breakpoint.

## Artwork

There are no raster images. Everything visual is drawn:

| Element | How it is made |
| --- | --- |
| Hero and Find Us ornaments | `PlateMotif` — concentric SVG rings with an offset frame |
| Chef and Laurels panels | `FramedPanel` — gold double-frame with a monogram |
| Award medals | `Medal` — CSS rings carrying the numeral |
| Laurels emblem | `CrossedSpoons` — two copies of the spoon rule in a ring |
| Section texture | Layered CSS gradients plus a 3px dot grid |
| Signature Plates | Gold-ruled typographic cards |
| Share card | Generated at build time by `src/app/opengraph-image.tsx` |

The only files served from `public/` are the logo and the G watermark, both
SVG. `sharp` stays in `dependencies` so adding photographs later needs no
other change.

## Deployment

Deployed as a **Render Static Site**. `next build` exports the whole site to
`out/`, which Render serves from its CDN — no server process, so no cold
starts.

Render service settings:

| Setting | Value |
| --- | --- |
| Build Command | `npm ci && npm run build` |
| Publish Directory | `out` |
| `NODE_VERSION` | `22` |

`render.yaml` describes the same configuration for anyone provisioning this
from scratch as a Blueprint.

Because the site ships no raster artwork, nothing needs per-device resizing,
so a static export costs nothing in image quality. Adding photographs later
would mean either pre-generating sized variants or moving to a Node web
service.

## Audits

Both audit scripts drive a headless Chrome against a running server, so start
`npm run start` first:

```bash
npm run audit:responsive   # fails loudly if anything overflows the viewport
npm run audit:a11y         # axe-core, at 1440px and 390px
```
