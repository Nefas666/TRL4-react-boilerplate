# Clash Display Font Setup

This project uses **Clash Display** for titles and headings. To complete the font setup, you need to add the Clash Display font files to your project.

## Download Clash Display

1. Download Clash Display from one of these sources:
   - [Indian Type Foundry](https://www.indiantypefoundry.com/fonts/clash-display)
   - [FontShare](https://www.fontshare.com/fonts/clash-display) (Free version)
   - [GitHub](https://github.com/indiantype/clash-display)

2. Download the WOFF2 format files for better web performance

## Installation Steps

1. Create a `fonts` directory in your `public` folder:
   \`\`\`
   public/
   └── fonts/
   \`\`\`

2. Add the following Clash Display font files to `public/fonts/`:
   - `ClashDisplay-Regular.woff2`
   - `ClashDisplay-Medium.woff2`
   - `ClashDisplay-Semibold.woff2`
   - `ClashDisplay-Bold.woff2`

3. The font is already configured in `app/layout.tsx` and `app/globals.css`

## Usage

Use the `font-display` class on any heading or title element:

\`\`\`tsx
<h1 className="font-display text-4xl font-bold">Your Title</h1>
<h2 className="font-display text-2xl font-semibold">Your Heading</h2>
\`\`\`

## Font Weights Available

- Regular: `font-normal` (400)
- Medium: `font-medium` (500)
- Semibold: `font-semibold` (600)
- Bold: `font-bold` (700)

## Fallback

If Clash Display files are not found, the font will fallback to Space Grotesk, then system sans-serif fonts.
