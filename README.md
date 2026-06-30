# Verdant bioAgri LLP, — Complete React Website

Full multi-page React + Vite website replica of **duroilab.co.za** with all pages.

## Quick Start

```bash
npm install
npm run dev   # → http://localhost:5173
```

## All Pages & Routes

| Route                  | Page                     | File                              |
|------------------------|--------------------------|-----------------------------------|
| `#/`                   | Home                     | `src/App.jsx → HomePage`          |
| `#/about-us`           | About Us                 | `src/pages/AboutUs.jsx`           |
| `#/our-people`         | Our People               | `src/pages/OurPeople.jsx`         |
| `#/csi`                | Corporate Social Investment | `src/pages/CSI.jsx`            |
| `#/banana-plants`      | Banana Plants            | `src/components/BananaPlants.jsx` |
| `#/formosana`          | Formosana                | `src/pages/Formosana.jsx`         |
| `#/media-publications` | Media & Publications     | `src/pages/MediaPublications.jsx` |
| `#/gallery`            | Gallery                  | `src/pages/Gallery.jsx`           |
| `#/contact`            | Contact Us               | `src/pages/Contact.jsx`           |

## Project Structure

```
duroilab/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx
    ├── App.jsx                         ← Hash router (all 9 routes)
    ├── styles/
    │   └── global.css                  ← Single global CSS (915 lines)
    │       Variables, Reset, Keyframes,
    │       Reveal utilities, Layout helpers,
    │       Typography, Cards, Buttons,
    │       Nav, Footer, Inner-page grids
    ├── hooks/
    │   ├── useReveal.js                ← Home section reveal hook
    │   └── usePageReveal.js            ← Inner page reveal hook
    ├── components/
    │   ├── Navbar.jsx                  ← Sticky logo + all routes + active states
    │   ├── PageHero.jsx                ← Shared inner-page hero banner
    │   ├── Hero.jsx                    ← Home hero (logo + quote card)
    │   ├── Specialists.jsx
    │   ├── YouNeed.jsx
    │   ├── WhyChooseUs.jsx
    │   ├── WorldClass.jsx
    │   ├── IsoSection.jsx
    │   ├── GroupLogos.jsx
    │   ├── BananaPlants.jsx
    │   └── Footer.jsx
    └── pages/
        ├── AboutUs.jsx                 ← Who We Are + Strengths + Timeline + ISO CTA
        ├── OurPeople.jsx               ← Team cards + Core Values
        ├── CSI.jsx                     ← Initiatives + quote banner
        ├── Formosana.jsx               ← TR4 overview + facts strip + benefits
        ├── Gallery.jsx                 ← Photo grid + category filter + lightbox
        ├── MediaPublications.jsx       ← Article cards + type filter + press CTA
        └── Contact.jsx                 ← Full form + Google Maps + office hours + socials
```

## Routing

Hash-based router — no react-router needed:

```js
// Navigate from any component:
window.location.hash = '#/contact'
window.scrollTo({ top: 0, behavior: 'smooth' })

// Or use a plain link:
<a href="#/about-us">About Us</a>
```

## CSS Architecture

**One file: `src/styles/global.css`** — imported once in `main.jsx`.

| Layer | Contents |
|---|---|
| CSS Variables | Colours, fonts, spacing scale, radii, shadows, transitions |
| Reset | Box-sizing, margin/padding, smooth scroll, body |
| Keyframes | heroZoom, fadeUp, fadeInLeft, fadeInRight, dropIn |
| Reveal | .reveal, .reveal-left, .reveal-right, .delay-1…6 |
| Layout | .container, .section-pad, .grid-2, .grid-4 |
| Typography | .heading-cursive-*, .body-text, .text-* |
| Components | .card, .glass, .btn-nav, .btn-lang, .soc-btn, overlays |
| Lists | .bullet-list, .check-list, .check-item |
| Nav | .nav-dropdown, .drop-link, sticky header states |
| Footer | .footer-root, .footer-grid, .footer-tagline, etc. |
| Inner pages | .page-tag, .page-h2, .pg-body, .pg-two-col, .pg-grid-2/3/4 |
| Responsive | Breakpoints at 900px, 820px, 680px, 600px, 440px |
