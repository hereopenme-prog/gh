# Reused website assets

The website owner requested the existing first page and website colours. The following files were copied from the rendered https://www.hereopen.me/ homepage on 13 September 2026:

- `public/assets/original-homepage.png`: https://www.hereopen.me/hero-screenshot.png (unchanged, 1593 x 892).
- `public/fonts/inter-latin.woff2`: the site's Inter font, `_next/static/media/e4af272ccee01ff0-s.p.woff2`.
- `public/fonts/space-grotesk-latin.woff2`: the site's Space Grotesk font, `_next/static/media/36966cca54120369-s.p.woff2`.
- `public/fonts/space-grotesk-latin-ext.woff2`: the site's Space Grotesk extended Latin subset, `_next/static/media/b7387a63dd068245-s.woff2`.

The original stylesheet supplied the hero treatment and image edge mask reimplemented in `src/app/brand.css`. The website now retains its earlier green palette; the supplied circular H logo remains blue. This package does not embed the original compiled application or depend on it at runtime. Preserve the existing project's applicable asset and font licence notices when integrating this handoff.

`public/assets/device-bank-qr.png` is the previously approved illustrative device artwork from this design project.

`public/assets/our-solution.png` began as a copy of the owner's supplied `ChatGPT Image Sep 14, 2026, 01_43_54 AM.png` (1536 x 1024). This latest bank QR graphic replaces the previous Our Solution image. Its six features and two concluding paragraphs are also readable HTML on smaller screens.

`public/assets/merchant-phone-frame.svg` is an original vector phone illustration created for this website. The screen, buttons and status are accessible HTML, so they stay sharp and interactive at different screen sizes.

`public/assets/merchant-value-overview.png` is an unchanged copy of the owner's `ChatGPT Image Sep 14, 2026, 12_49_00 AM.png` (1536 x 1024). The three-circle relationship graphic replaces the previous merchant-value image immediately after How It Works. The next section provides readable HTML benefits for smaller screens.

`public/assets/hereopen-logo.svg` is a clean vector adaptation of the circular blue-and-white H in the owner-supplied `image_925a0e54.jpg`. The primary blue, `#165AAC`, was sampled from that image. The same SVG is used by `public/favicon.svg`; `LogoMark.jsx` shares it across the header, footer, merchant phone and vision diagram. The hero and three-audience graphics keep their supplied colours. The solution graphic has the authorised wording corrections described below.

Latest asset updates:
- `public/assets/merchant-problems-hero.png` is copied unchanged from `ChatGPT Image Sep 14, 2026, 05_42_34 PM.png`, supplied by the owner for the top-right hero image.
- `public/assets/our-solution.png` was edited with the built-in image generation tool to correct merchant spelling and grammar while preserving the device, six cards, icons and layout. The image remains 1536 × 1024.
- Edit prompt: preserve the original layout and colours; render merchant/merchants correctly; use “Instant alerts to the merchant’s mobile”, “Merchant App Control”, “Merchants control the device from the Here Open merchant app”, and “YOUR BANK’S QR CODE”. In the lower paragraph, use “promote their businesses” and “manage safety and security needs”. Keep all other text, graphics and the 3:2 aspect ratio.
