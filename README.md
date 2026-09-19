# Here Open website

A complete responsive website built with Next.js, React, JavaScript/JSX and CSS. The public Here Open site uses Next.js/React; this is a new implementation in the same framework. The original designer's source code was not available.

This version uses the owner's latest opening, **LOSING THE COMPETITIVE EDGE OVER FINTECHS?**, with a **PARTNER WITH US** button and the supplied wording about the budget-friendly smart device (patent). It retains the new supplied merchant-problems artwork and the earlier green/navy website colours while keeping the circular H logo blue, with consistent audience headings and readable buttons in both themes. It includes all nine of the owner's FAQs and the Simple Vision PDF's audience context: 90+ crore internet users, 6.3+ crore MSMEs and the bank strip. The updated MSME and Banks descriptions lead into **To Provide a Platform Where Banks Lead.**, with the owner's direct-banking vision statement. The old Vision/Mission pair, Promise and Belief are removed.

The corrected feature image appears under **OUR SOLUTION**, immediately before **How It Works**. Desktop, phone and narrow side-panel previews keep the same complete image. On smaller screens, **Read the six features** optionally expands readable text; it starts closed so there is no repeated card section. **View full image** opens the original graphic for closer inspection. The Open/Closed example uses a phone illustration with two large controls and a three-step explanation. An animated hand points to CLOSED when the shop is OPEN, and to OPEN when it is CLOSED. The animation starts when the controls enter view, plays briefly and respects reduced-motion preferences.

The **Smart device** menu link opens the owner's three-audience image immediately after How It Works, under the heading **SMART DEVICE**. The **FAQ** menu link opens the nine questions under the title **FAQ**, with no For Banks label. It links to the full-size image and to the readable bank, merchant and customer benefits below.

The Challenge, Our Solution, How It Works, Smart Device, One Device and Our Vision use centered green section labels. The main Our Vision label sits separately above the navy section; the small label inside the vision statement card keeps its earlier plain, left-aligned style. Challenge audience headings put the audience name first, with a smaller dimension label. The section numbering and Vocal for Local suffix are removed.

## Quick preview - no package installation

1. Extract the entire ZIP.
2. Install Node.js 22 or newer if it is not already installed.
3. Open a terminal in the `hereopen-website` folder and run:

```sh
node scripts/serve.mjs
```

4. Open **http://127.0.0.1:4317**. Keep that terminal open. Press Ctrl+C to stop.

This serves the included production build in `out/`. Do not open `out/index.html` by double-clicking: its assets need a web server.

## Edit and run

```sh
npm install
npm run dev
```

Open **http://127.0.0.1:3000**. Changes to source files appear in this development preview.

To regenerate the production files after editing:

```sh
npm run build
npm start
```

The package also includes `pnpm-lock.yaml`. For the exact dependency installation used to validate this handoff, use:

```sh
pnpm install --frozen-lockfile
pnpm run build
pnpm start
```

Use one package manager consistently. The included build was tested with pnpm, Next.js 16.3.5 and React 19.3.0.

## Files to edit

| File | Purpose |
| --- | --- |
| `src/content/site.js` | Problem descriptions, all audience benefits, workflow text, FAQs and contact details |
| `src/app/page.jsx` | Page section order, mobile navigation, theme control and contact form |
| `src/components/OurSolution.jsx` | Supplied Smart Device image and optional readable feature details |
| `src/components/HowItWorks.jsx` | Interactive phone illustration and Open/Closed results |
| `src/components/MerchantValueImage.jsx` | New merchant-value graphic immediately below How It Works |
| `src/app/solution-how.css` | Responsive solution image, feature disclosure and phone demo styles |
| `src/app/comparisons.css` | The compact, simultaneous three-dimension and device-benefit layouts |
| `src/app/globals.css` | Overall colour palette, typography and responsive styles |
| `src/app/brand.css` | Earlier green website palette with the blue logo, local fonts and homepage styling |
| `src/components/OriginalHero.jsx` | Owner's latest competitive-edge opening and partnership invitation |
| `src/components/Vision.jsx` | The supplied Simple Vision PDF's content and relationship diagram |
| `src/app/vision.css` | Responsive layout for the new vision section |
| `src/app/layout.jsx` | Page title, search/social metadata and global CSS imports |
| `src/components/Icon.jsx` | Consistent SVG icon library |
| `src/components/LogoMark.jsx` | Shared circular H logo component |
| `public/assets/hereopen-logo.svg` | Crisp blue-and-white vector adaptation of the supplied logo |
| `public/assets/device-bank-qr.png` | Approved illustrative device artwork |
| `public/assets/merchant-problems-hero.png` | Latest supplied hero infographic, with a full-image link |
| `public/assets/original-homepage.png` | Archived earlier opening illustration |
| `public/assets/our-solution.png` | Supplied graphic with corrected merchant wording and grammar |
| `public/assets/merchant-value-overview.png` | Unchanged merchant-value graphic supplied by the owner |
| `public/assets/merchant-phone-frame.svg` | Scalable phone illustration behind accessible HTML controls |
| `public/fonts/` | Inter and Space Grotesk files reused from the existing website |
| `next.config.mjs` | Static export settings |
| `out/` | Generated production website; rebuild rather than editing this folder |

Read **DESIGNER-HANDOFF.md** before changing layouts or wording.

## Hosting

Upload the **contents of `out/`** to the root of the production website. Keep `_next/`, `assets/` and the generated files intact. The export needs no Node.js server in production and no database. It assumes the site is served at a domain root, not inside a subfolder. Configure `basePath` and asset URLs if a subfolder is required.

This handoff has not been published to hereopen.me. The designer should use their existing deployment process and preserve existing legal pages and integrations.

## Contact form and integrations

The **Submit** button directly below **How can we help?** opens an email draft addressed to `contact@hereopen.me`. It does not submit to a backend, store leads or send an email automatically. The visitor reviews and sends the draft in their email app; the helper text below Submit explains this behaviour.

If the existing site's form API is to be reused, replace `prepareEmail` in `page.jsx`, connect that endpoint, and handle validation, spam protection, loading, success and failure states. Keep credentials on the server. Do not label a lead as sent until the server confirms it.

The shop controls are an explicitly labelled demonstration, not a live device integration. Contact email and WhatsApp are the public contact details observed on the existing site. Footer links use the existing site's `/privacy`, `/terms` and `/security` URLs; preserve those routes or update the links when deploying.

## Validation

- Production build passed.
- At 1366 x 768, all 8 bank challenges and both sets of 3 merged issues are visible together.
- At 1366 x 768, all 7 bank, 6 merchant and 4 customer benefits are visible together, with the device.
- Open/Closed demo updates the public status and workflow correctly.
- No audience benefit tabs or hidden audience panels.
- Mobile menu and Escape handling checked; internal anchor targets and images checked.

Screens smaller than a laptop, increased browser zoom and larger text settings naturally need scrolling. Content remains present and readable; the page does not shrink everything to force it into a phone screen.

Latest review: Our solution is in the header and footer menus immediately after The challenge. Its heading appears above the corrected feature graphic. The first-page image is uncropped, top-aligned and links to the full image. Section gaps, caption spacing and navigation spacing are consistent across desktop and mobile. The compact Challenge and One Device layouts remain intact.

The menu starts with **Home** (`#home`) and ends with **Contact** (`#contact`). The vision section now introduces the three sides of the problem, with updated MSME and Banks copy and the new bank-led platform statement.
#   n e w  
 