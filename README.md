# Gerícht

The Gerícht restaurant site, migrated from a two-file static page to Next.js
(App Router, TypeScript, CSS Modules) without changing the design.

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
| `npm run optimize:assets` | Re-encode the original PNGs to WebP (see below) |
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

## Assets

`scripts/optimize-assets.mjs` is a one-off pipeline that reads the original
repository, renames every file to lowercase kebab-case and re-encodes the
rasters to WebP at roughly twice their display size:

```bash
npm run optimize:assets -- /path/to/Gericht-original
```

The renaming matters: the original referenced `./images/Chef image.png` and
`./icons/line.png` while the files on disk were `Chef Image.png` and
`Line.png`. That works on a case-insensitive macOS filesystem and 404s on
Render's Linux one, which is why the Chef's Word section rendered empty in
production.

## Deployment

`render.yaml` describes a Node web service:

- **Build:** `npm ci && npm run build`
- **Start:** `npm run start`

`sharp` is a runtime dependency, not a dev one — Next.js needs it for
production image optimization.

On Render's free tier a web service spins down when idle, so the first request
after a quiet period takes roughly 50 seconds. A paid instance type, or a
static export deployed as a Render Static Site, avoids that.

## Audits

Both audit scripts drive a headless Chrome against a running server, so start
`npm run start` first:

```bash
npm run audit:responsive   # fails loudly if anything overflows the viewport
npm run audit:a11y         # axe-core, at 1440px and 390px
```
