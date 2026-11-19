# Crazy Ice Cream 🍦 Website Redesign

A premium, animated, fully responsive redesign of [crazyicecream.in](https://crazyicecream.in/).
Built with **React 18 + Vite (JSX)**, **Tailwind CSS 3**, **Framer Motion**, **Lenis**, **Swiper**, **React Router**, **lucide-react** and **react-helmet-async**.

> *Indulge in the Craziest Ice Cream Delights!* · Sweetening lives since 1999

---

## Quick start

Requires **Node.js 18+**.

```bash
npm install       # install dependencies
npm run dev       # start dev server → http://localhost:5173
npm run build     # production build → dist/
npm run preview   # preview the production build locally
```

(The project was set up to match `npm create vite@latest crazy-icecream -- --template react`, with Tailwind and the other libraries added.)

---

## Project structure

```
src/
  main.jsx                 # Providers: HelmetProvider + BrowserRouter
  App.jsx                  # Routes, page transitions, loader, global UI
  index.css                # Tailwind directives + custom component classes
  data/products.js         # ALL content: products, flavours, stats, copy, contact info
  hooks/                   # useScrollDirection, useCountUp, useMediaQuery,
                           # useSmoothScroll (Lenis), useScrollToTop
  components/
    layout/                # Navbar, MobileMenu, Footer, Loader, WhatsAppButton,
                           # CustomCursor, PageTransition
    ui/                    # ProductCard, ProductModal, SectionTitle, MagneticButton,
                           # TiltCard, Marquee, DripDivider, Counter, PageHero,
                           # SmartImage (lazy + fallback), Seo, SocialIcons
    home/                  # Hero, LovedFlavours, CategoryShowcase, Story, Stats,
                           # WhyChooseUs, Highlights, InstagramGrid, DealerCTA
  pages/                   # Home, About, Products, FlavouredMilk, DairyProducts,
                           # Achievements, Contact, NotFound
```

## Editing content

Everything lives in **`src/data/products.js`**: products, image URLs, descriptions, stats, timeline, achievements, phone, email, address and social links. Components never hardcode product data.

**Before going live, please check:**

- `stats`: placeholder numbers (100+, 500+, 50+, 10+).
- `timeline`: 1999 and "Today" are correct; the in-between years are placeholders.
- `achievements`: written as milestones. Replace them with your real awards and certificates.
- `brand.socials.facebook` / `linkedin`: set the official page URLs.
- `highlights`: Shahi Kulfi, Cookies & Cream and Almond Brownie Candy reuse category images. Swap in dedicated photos when you have them.

## Features

- Sticky glass navbar that shrinks on scroll, hides when you scroll down and comes back when you scroll up. The active link gets an animated pill. On mobile, an animated burger opens a full-screen menu.
- Loading screen where a scoop drops into a cone.
- Page transitions with AnimatePresence. Each page scrolls to the top on route change.
- Hero with a word-by-word headline reveal, parallax floating ice creams and animated blobs.
- Swiper carousel of tilt cards, plus count-up stats, an infinite marquee and drip SVG dividers.
- Products page with animated filter tabs (also linkable, e.g. `/products?category=cones`), live search and an accessible modal.
- Contact form with floating labels and client-side validation. A valid enquiry opens WhatsApp or email with the message already filled in.
- Magnetic buttons, 3D tilt and a custom cursor on desktop only. These are disabled on touch devices.
- `prefers-reduced-motion` is respected throughout via `MotionConfig`, `useReducedMotion` and a CSS fallback. Lenis is turned off too.
- Lazy images with aspect-ratio boxes, a fallback image when a load fails, code-split routes and vendor chunking.
- Per-page titles, meta descriptions and Open Graph tags; a skip link; visible focus rings; ARIA labels; 44px+ tap targets.

### Connecting the form to a backend (optional)

The form needs no server: it hands the enquiry off to WhatsApp or email. To store submissions instead, post `values` to [Formspree](https://formspree.io), Netlify Forms or your own API inside `onSubmit` in `src/pages/Contact.jsx`.

---

## Deployment

React Router uses client-side routes, so the host must send every path to `index.html`. Both configs below are already in the repo.

### Netlify

1. Push to GitHub, then go to **Netlify → Add new site → Import from Git**.
2. Build command: `npm run build` · Publish directory: `dist`
3. The SPA fallback is handled by `netlify.toml` and `public/_redirects`:
   ```
   /*    /index.html   200
   ```

Or deploy from the CLI: `npm run build && npx netlify deploy --prod --dir=dist`

### Vercel

1. **Vercel → Add New Project → Import** your repo. It detects the Vite framework preset.
2. Build command: `npm run build` · Output directory: `dist`
3. The SPA fallback is handled by `vercel.json`:
   ```json
   { "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }
   ```

Or deploy from the CLI: `npx vercel --prod`

---

## Performance notes (Lighthouse 90+)

- Product images are hotlinked from `crazyicecream.in`. For the best score, download them into `public/images/`, convert them to **WebP/AVIF**, and update the paths in `products.js`.
- Fonts load with `display=swap` and preconnect hints.
- Routes are lazy-loaded. React, Framer Motion and Swiper are split into separate cacheable chunks.
