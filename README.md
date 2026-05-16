# Taufik Ismail — Portfolio

Next.js (App Router) build of the portfolio site.

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm run start
```

## Structure

```
app/
  layout.js              Root layout — fonts, header, tweaks, Lenis
  page.js                Home (hero, marquee, works, about, footer)
  globals.css            Site styles
  work/[slug]/           Dynamic case-study route
  _components/           Header, Footer, Hero, Marquee, WorkCard, Tweaks…
  _hooks/                useClock, useReveal
lib/
  works.js               WORKS + SKILLS data
public/
  image-slot.js          Reusable <image-slot> Web Component (not auto-used)
```

## Tweaks panel

The floating tweaks panel persists theme/accent/motion/marquee settings via
the host postMessage protocol (`__edit_mode_*`). Defaults live in
`app/_components/Tweaks.js` inside the `EDITMODE-BEGIN`/`EDITMODE-END` block.
