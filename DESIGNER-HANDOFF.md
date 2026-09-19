# Design directions for Here Open

## Main requirement

Keep the website as clear as the supplied PDFs. A visitor should understand the relationship between banks, merchants and customers without switching tabs or opening separate cards. Banks are the primary audience.

## Page flow

1. Use the owner's latest opening: **LOSING THE COMPETITIVE EDGE OVER FINTECHS?**, followed by **Not Because the Payment Sound Box Is Weak. Because the Product Is the Same.** Preserve the supplied paragraphs in `OriginalHero.jsx`, including **budget-friendly smart device (patent)** and the revised direct-relationship sentence. The **PARTNER WITH US** button links to contact. Use the latest merchant-problems image in the top-right hero column and green/navy styling with the blue logo. Omit the announcement banner and the Request a Demo button.
2. The challenge: all three dimensions together.
3. Feature overview: the owner's complete feature graphic at every width, with optional readable feature details on smaller screens.
4. How it works: a phone illustration with OPEN and CLOSED controls, a state-aware animated hand, and three clear results for each choice.
5. Smart Device: the three-audience merchant-value graphic, followed by One Device with all three audiences and every benefit together. The Smart device menu link points to `#merchant-overview`, where the heading is SMART DEVICE. The feature overview after The Challenge has the centered heading OUR SOLUTION and its own Our solution menu link to `#our-solution`. Keep it separate from Smart device.
6. Vision: keep the PDF's audience context, 90+ crore internet users, 6.3+ crore MSMEs and bank strip, followed by one **OUR VISION** card using the owner's latest wording. Remove the separate Mission card, Promise and Belief.
7. Bank partnership: responsibilities of the bank and Here Open, immediately before the FAQs.
8. The owner's nine final questions under the single heading FAQ, followed by contact. The menu label is also FAQ and points to `#faq`. Remove the For Banks eyebrow and Bank FAQs title from this section.

## The challenge - preserve this arrangement

The bank panel spans the full width. Its 8 challenges use a compact 4-by-2 grid. Merchant and customer panels sit side by side underneath, with 3 merged issues each. All headings and icons use the site's green palette; the customer panel no longer uses a violet accent.

Show **BANKS — DIMENSION 01**, **MERCHANTS — DIMENSION 02**, and **CUSTOMERS — DIMENSION 03**. The audience name comes first; the dimension label is 78% of its font size with a lighter weight. Keep matching line icons, clear borders and a visible gap between panels. Avoid separate oversized introduction blocks inside this section.

The complete overview was checked at a 1366 x 768 browser viewport, including the sticky header. All panel content fits without clipping. Do not replace this arrangement with a carousel, tabs, accordions or separate full-screen sections.

The older problem PDF has 9 bank cards and 6 items in each lower panel. The user's later corrections take precedence: retain 8 bank cards, label the lending item **Loan distribution**, remove **Merchant cost pressure**, and preserve all ideas through the merged merchant and customer descriptions. Keep **Theft and fire worries** and **No real-time certainty** (including wasted trips, time, fuel and effort).

## One device - preserve this arrangement

On desktop, bank benefits are on the left, the device and customer benefits are in the centre, and merchant benefits are on the right. All **17 benefits** stay visible: 7 for banks, 6 for merchants and 4 for customers. Curved connectors relate the device to the side panels.

Keep the full device visible and proportional. Its screen reads **YOUR BANK'S QR CODE**, with no Open/Closed word or control buttons. Open/Closed buttons belong in the mobile app demonstration.

Preserve the direct lending message: **Give loans directly without paying brokerage fees to fintechs or other intermediaries.** The mobile-status benefit must describe mobile control, public open/closed visibility and a confidence score. Do not hide audience benefits behind tabs.

On tablets and phones, let panels reflow and scroll naturally. Keep every benefit expanded. Phone reading order is device, banks, merchants, customers. Never crop content or reduce it to unreadably small text to force a single screen.

## Feature overview - preserve the supplied graphic

Place `public/assets/our-solution.png` immediately before How It Works. Keep the complete image proportional and uncropped on desktop, phones and narrow side panels. Do not automatically add a second heading, expanded feature cards or repeated summary beneath it. On screens up to 1000px wide, **Read the six features** starts closed and optionally reveals all six descriptions and the image's concluding text in readable HTML. Keep the native disclosure keyboard accessible. A **View full image** link opens the original graphic. This graphic does not replace the QR device in the later bank-benefit section, whose audience benefits remain expanded.

## How it works - preserve the approved distinction

- The merchant controls the device from the mobile app.
- Show the vector phone image with live HTML buttons. When OPEN, show **Shop is OPEN. Tap CLOSED.** and an animated hand on CLOSED. When CLOSED, show **Shop is CLOSED. Tap OPEN.** and move the hand to OPEN. The hand is decorative and never intercepts taps. It animates for three short cycles when the controls enter view or the target changes; keep the reduced-motion fallback. Status changes only after the visitor chooses a button.
- Show three results beside the phone on desktop and below it on phones. Keep both controls visible, preserve keyboard operation, and announce the updated results to assistive technology.
- Open shop: Business Mode; the public app shows OPEN and **Motion 2 minutes ago**.
- Close shop: Security Mode; the public app shows CLOSED; intrusion, motion or tampering can trigger merchant alerts.
- Keep fire and smoke wording out of the closed-mode steps. Keep the separate 24/7 fire and smoke monitoring strip.
- Preserve the message: instant open/closed status to the public; safety and security alerts to merchants.
- The interactive controls are a labelled illustration, not a live connection to hardware.

The new sections are in `src/components/OurSolution.jsx`, `src/components/HowItWorks.jsx` and `src/app/solution-how.css`. The phone frame is `public/assets/merchant-phone-frame.svg`; state-dependent step text remains in `src/content/site.js`.

Immediately after How It Works, show the owner's `merchant-value-overview.png` in `src/components/MerchantValueImage.jsx`, with the centered heading **SMART DEVICE** above it. This is the target of the Smart device menu link and the challenge section's Explore the smart device link. Preserve the complete image without cropping or distortion. Include a full-image link and a link to the readable benefit cards immediately below it, so mobile visitors can read the details without relying on small image text.

## Vision and content

Retain the introductory vision heading and connected banks/MSMEs/customers diagram. Use **THE THREE SIDES OF THE PROBLEM WE WANT TO SOLVE** above the audience context. Keep **90+ Crore / INTERNET USERS** and its existing text. Replace the MSME description with the owner's statement about missing visibility, security monitoring and a direct customer voice, leading to lost visits, revenue and safety and security worries. Replace the old bank strip with **Banks** and the owner's paragraph about banking power, reputation, resources, dependence on third parties and loan brokerage. These audience figures are not adoption numbers.

The full-width OUR VISION card is headed **To Provide a Platform Where Banks Lead.** Keep these paragraphs in order: a platform connecting banks directly with merchants and customers; **No middlemen. No brokerage. No dependence.**; banks reaching MSMEs and serving merchants directly; real-time visibility, communication, safety and security; and **Banks put their banking power to work — directly, profitably, and at scale.** The full copy is in `Vision.jsx`. Do not restore the old smart-platform heading, Mission, Promise or Belief. Keep the green website colours and blue logo.


Retain **zero intermediaries** in the device section and retain credit eligibility and supported-hardware qualifications. Do not add bank logos, testimonials, guaranteed growth or guaranteed protection claims without approved evidence.

## Visual direction

Center **THE CHALLENGE**, **OUR SOLUTION**, **HOW IT WORKS**, **SMART DEVICE**, **ONE DEVICE** and the main **OUR VISION** heading with the shared `.section-label` style: a compact rounded pale-green background, a subtle border and readable green text. Put the main Our Vision heading in its own light section above the navy introduction. Inside the later vision statement card, restore the small plain, left-aligned Our Vision label with its link icon; do not style it as another section heading. Keep the main labels centered on desktop and mobile, and preserve the complete laptop overviews below them.

Use the earlier website palette: primary green #004A00, hover green #073A16, navy #010C28 and white. Hero and dark-mode accents use #00E28A with readable dark text on bright buttons. Audience panels use light green and pale blue. Keep the circular H logo blue #165AAC at every size and in both themes. Use the shared LogoMark component and public/assets/hereopen-logo.svg; the favicon uses the same mark. Keep supplied image colours unchanged. The opening uses the existing Space Grotesk typeface and the latest merchant-problems image; body text uses Inter. Local fonts are included so no external font request is required. Keep headings still and readable. Increase spacing only where it improves grouping, and preserve the compact comparison sections.

The overview styles are isolated in `src/app/comparisons.css` so these layouts can be maintained independently. Base responsive styles are in `src/app/globals.css`; updated brand colours, typefaces and opening styles are in `src/app/brand.css`. The opening JSX is in `src/components/OriginalHero.jsx`. The PDF-based vision is in `src/components/Vision.jsx` and `src/app/vision.css`. FAQs and other copy are in `src/content/site.js`. Keep all nine questions and their meaning; minor grammar edits use consistent Here Open merchant app terminology.

## Delivery and integration

The package contains editable Next.js/React source and the ready-to-host static export in `out/`. Run instructions are in `README.md`. The current public site uses Next.js/React; JavaScript/JSX and CSS are used here because the original source was not supplied.

Show the **Submit** button directly below **How can we help?** in the contact form. It currently opens an email draft; keep the explanatory helper text and never show a message-sent confirmation for this action. Connect the existing site's actual form endpoint if automatic lead submission is required, and preserve all existing legal pages. Keep the current site available until the replacement has been reviewed and deployed through the designer's normal process.

Latest review: Our solution is in the header and footer menus immediately after The challenge. Its heading appears above the corrected feature graphic. The first-page image is uncropped, top-aligned and links to the full image. Section gaps, caption spacing and navigation spacing are consistent across desktop and mobile. The compact Challenge and One Device layouts remain intact.

Navigation: Home is the first menu link and returns to `#home`. Contact is the final link and opens `#contact`. Both work in the desktop and compact menus. At 1000px and below, use the compact scrollable menu to avoid crowding.
