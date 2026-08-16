# Project Context — Muhammad Nazimuddaula Portfolio

## What this is
A portfolio website covering ~20 years of work (case studies + a "scrapbook" of side projects). This is NOT a throwaway/fun project — a lot of effort went into digging up old material, so every file here matters and should be treated carefully.

## End goal / deployment
- Will live at **https://nazim.uddau.la/portfolio**, as a subsection of the existing site https://nazim.uddau.la/
- The existing site is hosted on **GitHub Pages**, managed via the **GitHub Desktop app**
- Favicon is served from the existing site at **/img/ico/mn-144x144.png** (root-relative, not part of this project's files) — every page's `<helmet>` links to it directly.
- Every page (`index.html`, `Resume.dc.html`, all case studies, all scrapbooks) has a `<title>`, `<meta name="description">`, canonical link, and Open Graph/Twitter Card tags (per-page cover image) pointing at `https://nazim.uddau.la/portfolio/<file>`. Keep these in sync if a page's title/cover/URL changes.
- Owner is **not technical / not a coder** — avoid requiring build steps, terminal commands, etc.
- Final deliverable: a **clean, self-contained package** ready to drop into the GitHub repo via GitHub Desktop — meaning: strip dev-only scaffolding (dev-responsive-toggle.js, unused v1/backup files, stray exports) before final handoff. Do NOT do this cleanup yet — only when explicitly asked; work is still in progress page by page.

## Critical rule: images
- The owner keeps a **local folder per case study / scrapbook item** with the actual source images.
- When adding images to a page, the owner drags them in from those local folders into `<image-slot>` placeholders.
- **Past incident: images were lost once already — this must never happen again.**
- Workflow per page (established with Neura, repeat for each future page):
  1. Owner drops images into `<image-slot>` elements in the live preview.
  2. We persist each slot's data-URI into a real project asset file under `assets/` (via a run_script decode step — see chat history for the exact technique used on Neura: read the slot's img src through eval_js_user_view, temp-store it, decode+saveFile as `.webp`).
  3. Replace the `<image-slot>` with a plain `<img src="assets/...">` (no more drag-to-replace) once finalized for that page.
  4. Remove now-unused `image-slot.js`/`natural-fit.js` `<script>` includes from that page's helmet once all its slots are converted.
- **Image sizing rule (from CLAUDE.md, repeated many times):** never force `aspect-ratio` or fixed `height` on an image — width only, height stays natural/proportionate to the source image.
- **Exception: cover/hero images.** Cover images (the full-bleed banner under the header) keep a forced `aspect-ratio:16/9;object-fit:cover`, regardless of source image proportions. This is the one place a fixed ratio is correct — applies to Neura, KONA, Chaldal, Chaldal-Brand covers and any future case-study cover.

## Process
- Going through pages **one at a time**, owner-led. Do not get ahead of yourself building/finalizing pages that haven't been reviewed yet.
- Neura and KONA case studies are fully completed end-to-end (copy reviewed + finalized, images baked in as static assets). Use them as the reference pattern for the rest.
- Copy voice: direct, understated, plain — not corporate, not "AI-slop." Avoid restating the same point twice across adjacent sections/paragraphs.

## Page finalization process (repeat per page)
1. **Copy review first.** Read the whole page. Flag issues (repetition between adjacent sections, tone mismatches, grammar slips) as a short list — never rewrite unprompted. Wait for owner's go-ahead per item before editing.
2. **Images, once owner confirms all slots are filled in the live preview:**
   - Check each `<image-slot>` on the page via `eval_js_user_view` (query `shadowRoot img.src` per slot id) to confirm it has an image.
   - For each filled slot: read its data-URI through `eval_js_user_view`, write it to a small temp file (`<page>-temp-<slotid>.state.json`) via `window.omelette.writeFile` (direct decode-in-browser of large payloads fails — this temp-file relay is the working method).
   - `run_script`: read each temp file, `fetch()` the data-URI, `saveFile` as a real asset under `assets/<page>-<name>.webp`.
   - Delete the temp files.
   - Replace each `<image-slot>` with a plain `<img src="assets/...">` (no `aspect-ratio`/fixed height — width only, natural proportions per the image sizing rule below).
   - Remove `image-slot.js` / `natural-fit.js` `<script>` includes from that page's `<helmet>` once all its slots are converted.
   - `ready_for_verification`.
3. Mark the page as done in the Screen map below.

## Site structure (as of now)
**Case studies** (Home.dc.html rows 01–14, in this order):
01 Neura *(done — copy + images finalized)*
02 KONA *(done — copy + images finalized)*
03 Chaldal *(done — copy + images finalized)*
04 Chaldal-Brand *(done — copy + images finalized)*
05 Maya *(done — copy + images finalized)*
06 Deligram *(done — copy + images finalized)*
07 GR-IPO *(done — copy + images finalized)*
08 GR-Horizon *(done — copy + images finalized)*
09 GR (G&R Ad Network) *(done — copy + images finalized)*
10 JossPay *(done — copy + images finalized, 2 extra images added for brand naming + docs)*
11 Lekhok *(done — copy + images finalized)*
12 Robi *(done — copy + images finalized)*
13 Newspapers (file: Case-Study-Newspapers.dc.html, renamed from Case-Study-ProthomAlo.dc.html — covers both The Daily Star and Prothom Alo) *(done — copy + images finalized)*
14 CARE *(done — copy + images finalized)*

**Scrapbook** (Home.dc.html, separate list):
01 Lokofo (file: Scrapbook-Lokofo.dc.html, formerly "Goromcha") *(done — copy + images finalized)*
02 AjkerWeather *(done — copy + images finalized)*
03 Foo.run *(done — copy + images finalized)*
04 Alap *(done — copy + images finalized)*
05 Satz für Satz *(done — copy + images finalized)*

Other pages: `Home.dc.html`, `Resume.dc.html`, `Note.dc.html`.

Stray/backup files present in the project root that are NOT part of the live structure (candidates for later cleanup, do not touch without asking): `Case-Study-* v1.dc.html` variants, `Home v1.dc.html`, `Home-standalone-src.html`, `Muhammad Nazimuddaula - Portfolio.html`, `Case-Study-Chaldal v1.dc.html`.

## Design rules
**Fonts** (loaded via one Google Fonts link in each page's `<helmet>`: `family=Hepta+Slab:wght@300;400&family=Offside&family=Over+the+Rainbow`):
- **Offside** — headings (h1), nav labels, section eyebrow labels, UI-ish text.
- **Hepta Slab**, weight 300 (occasionally 400) — all body paragraph copy. This is the workhorse text font.
- **Over the Rainbow** (cursive/handwritten) — used sparingly for photo captions, in navy (`#000080`), giving a "handwritten note" feel under images.
- If body text ever renders in a plain serif/system font instead of Hepta Slab's slab-serif look, that's a font-load failure (Google Fonts hiccup), not an intentional or code change — fix is reloading the page, not editing files.

**Colors** (CSS custom properties set per-page on the outer wrapper div):
- `--ink: #1A1A1A` (primary text), `--paper: #F5F5F5` (page background), `--muted: #6B6B6B` (secondary text), `--rule: #DDDDDD` (hairline borders).
- `--accent` varies by page/section — case studies mostly use `--ink` itself as accent (near-monochrome); scrapbook pages each get their own themed accent color (e.g., violet for Foo.run, red for Satz für Satz, teal for Goromcha/Lokofo).
- Overall palette stays restrained/monochrome for case studies; scrapbook pages are the more colorful/playful counterpart.

**Layout & code conventions:**
- Every page is a single `.dc.html` Design Component: inline styles only, no external stylesheets/classes.
- Case-study pages share one structural template: sticky nav → header (eyebrow label, h1, intro paragraph) → optional cover image → sticky in-page section nav (desktop) + numbered sections → shared footer.
- Image sizing rule (critical, from CLAUDE.md): never force `aspect-ratio` or fixed `height` on images — width only; height stays proportionate to the real source image, not a preset ratio.

## Shared conventions across pages
- All pages (case studies, Home, Resume, scrapbook) now share **one identical footer**: bio block (name + "Senior UI/UX Designer · Neura Robotics, Germany"), LinkedIn/Journal/Resume links, copyright line, and an NDA disclaimer line. Scrapbook pages additionally have a "← Back to Scrapbook" link; case studies have prev/next case-study nav.
- Scrapbook pages share a collage-cover structural pattern: mobile single-column stack + desktop overlapping-photo-card collage (white card frames, tape/washi accents), fixed at **740px height** on desktop, background gradient spans full width while the image collage sits in a centered 1100px inner wrapper. Each scrapbook page has its own accent color + themed decorative motifs.
- **Rule: the desktop collage canvas height is fixed at 740px, no exceptions** (`overflow:hidden` enforces it). This is the one place scrapbook images don't get pure natural-height treatment — after any image swap, re-check every photo's rendered bounding box against the 740px canvas (via eval_js_user_view on the live page). If a source image's aspect ratio would overflow/clip within its card's layout slot, don't silently crop it — flag it to the owner and ask for a corrected/re-cropped source image instead.
- Design components (`.dc.html`) are the file format in use throughout — see system-level authoring rules (inline styles only, no stylesheets, etc.) if creating new pages.

## If you (Claude) lose context
Read this file first. Then check `Home.dc.html` for current nav structure, and open whichever case-study/scrapbook file the owner names next to see its current state before making any changes.
