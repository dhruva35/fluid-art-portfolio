# Continuation Guide for AI Assistants

> **Purpose**: This document enables any LLM (GPT, Claude, Gemini, etc.) to understand and continue work on this project efficiently. Read this FIRST before making any changes.

---

## 🏗️ Project Overview

**What is this?** A fluid art portfolio website for an Indian artist. It showcases artworks and lets customers inquire about purchases (no online payment — all transactions are handled offline via UPI/bank transfer).

**Tech Stack**: Next.js 14 (App Router) + TypeScript + Tailwind CSS v3 + Framer Motion

**Live Status**: Not yet deployed. Needs `npm install` + `npm run build` verification.

---

## 📂 Architecture at a Glance

```
src/
├── app/              → Pages (Next.js App Router — file-based routing)
│   ├── layout.tsx    → Root layout: Google Fonts, Navbar, Footer
│   ├── page.tsx      → Homepage (hero, featured, about preview, CTA, testimonials)
│   ├── gallery/
│   │   ├── page.tsx  → Gallery listing (filters, search, sort, grid)
│   │   └── [slug]/
│   │       └── page.tsx → Individual artwork detail
│   ├── about/        → Artist story, values, FAQ
│   ├── commission/   → Commission process + form
│   ├── contact/      → Contact info + form
│   ├── privacy/      → Privacy policy
│   ├── terms/        → Terms & conditions
│   └── not-found.tsx → Custom 404
├── components/
│   ├── Navbar.tsx    → Scroll-aware, glass-morphism, mobile slide-in menu
│   ├── Footer.tsx    → 4-column footer with social links
│   ├── AnimatedSection.tsx → Scroll-triggered fade-in wrapper
│   └── ui/           → Design system components
│       ├── Button.tsx          → 4 variants, Framer Motion
│       ├── SectionHeading.tsx  → Section title + gold divider
│       ├── ArtworkCard.tsx     → Gallery card with hover effects
│       ├── InquiryModal.tsx    → Contact modal (mailto-based)
│       ├── ImageLightbox.tsx   → Fullscreen image viewer
│       ├── TestimonialCarousel.tsx → Auto-advancing carousel
│       └── CommissionForm.tsx  → 10-field commission request form
├── data/
│   ├── artworks.ts      → Artwork entries + utility functions
│   ├── siteConfig.ts    → All site-wide config (brand, contact, SEO, nav)
│   └── testimonials.ts  → Customer reviews
├── hooks/
│   └── useScrollDirection.ts → Scroll tracking for navbar
└── lib/
    └── utils.ts         → cn(), formatPrice(), share URLs, validators
```

---

## 🎨 Design System

Defined in `tailwind.config.ts`:

| Token | Purpose | Values |
|-------|---------|--------|
| `cream-*` | Background palette | 50-500, warm whites |
| `charcoal` | Text / dark elements | DEFAULT, light, dark |
| `gold` | Accent color | DEFAULT, light, dark, muted |
| `available/sold/onHold` | Status badges | Green, red, gold |
| `font-serif` | Headlines | Playfair Display |
| `font-sans` | Body text | Inter |

**Key CSS classes** (in `globals.css`):
- `.glass` — Glassmorphism (blurred background)
- `.text-gradient-gold` — Gold gradient text
- `.skeleton` — Loading shimmer
- `.section-padding` / `.container-wide` — Layout
- `.divider-gold` — Decorative accent line
- `.badge-available/sold/on-hold` — Status badges

---

## 🔑 Key Design Decisions

1. **No Backend/Database**: Content lives in TypeScript files under `src/data/`. The artist edits these files to update content. This keeps hosting 100% free (Vercel).

2. **No Payment System**: Every "Buy" action is replaced with "Inquire" — opening a mailto link or WhatsApp message. The artist handles payment offline.

3. **Mailto for Forms**: All forms (inquiry, commission, contact) generate a `mailto:` link with pre-filled subject/body. No EmailJS, Formspree, or backend needed. If the client wants server-side forms later, integrate [Formspree](https://formspree.io) or [EmailJS](https://emailjs.com) free tier.

4. **SVG Placeholders**: The `public/images/artworks/` folder contains SVG files saved as `.jpg`. They work as placeholders. Replace with real JPG/PNG/WebP photos and the site will look production-ready.

5. **All Pages are Client Components**: Since we use Framer Motion and interactivity heavily, most pages use `'use client'`. The Privacy and Terms pages are Server Components with static metadata.

---

## 🚧 Known Issues & TODOs

### Must Fix Before Deploying
- [ ] **Replace placeholder images** with real artwork photos
- [ ] **Update `siteConfig.ts`** with real artist name, email, phone, Instagram, address
- [ ] **Run `npm install` and `npm run build`** to verify zero errors
- [ ] Image files in `/public/images/artworks/` are SVGs saved as `.jpg` — Next.js Image component may error. Replace with actual image files or rename to `.svg` and update image paths in `artworks.ts`

### Nice-to-Have Improvements
- [ ] **EmailJS/Formspree integration** for forms (currently using mailto)
- [ ] **Instagram feed** integration (currently static placeholder section)
- [ ] **Newsletter signup** backend (currently just an alert)
- [ ] **Blog section** at `/blog`
- [ ] **Events/Exhibitions page** at `/events`
- [ ] **Dark mode** toggle
- [ ] **Sanity CMS** integration to replace JSON data files
- [ ] **Google Analytics** integration
- [ ] **SEO**: Add structured data (JSON-LD schema markup) for artworks
- [ ] **Performance**: Convert placeholder SVGs to optimized WebP images
- [ ] **Accessibility**: Full WCAG 2.1 AA audit
- [ ] **WhatsApp chat widget** (floating button)
- [ ] **Cookie consent banner** (if analytics are added)

### Future Phase Features (from original brief)
- AR "View on Your Wall"
- 360° Artwork Viewer
- User accounts & wishlist
- Admin dashboard
- Razorpay/UPI payment integration
- Order tracking

---

## 🔧 Common Tasks

### Add a new page
1. Create `src/app/your-page/page.tsx`
2. Add to `siteConfig.ts` → `nav` array (if it should appear in navigation)
3. Add to `footerLinks` if needed

### Add a new artwork
1. Put images in `public/images/artworks/`
2. Add entry to `artworks` array in `src/data/artworks.ts`
3. It auto-generates a gallery card + detail page

### Change the color scheme
1. Edit `tailwind.config.ts` → `theme.extend.colors`
2. Update gradient definitions in the same file
3. Adjust `globals.css` if needed

### Add a new component
1. Create in `src/components/ui/YourComponent.tsx`
2. Use `'use client'` directive if it has interactivity
3. Import Framer Motion for animations
4. Use design tokens from Tailwind (not hardcoded colors)

### Deploy to Vercel
```bash
# Push to GitHub first
git init
git add .
git commit -m "Initial commit: Fluid Art Portfolio"
git remote add origin https://github.com/dhruva35/fluid-art-portfolio.git
git push -u origin main

# Then import in Vercel dashboard
```

---

## ⚠️ Terminal Note for Windows Users

The IDE terminal sandbox on this Windows machine has an ACL issue blocking `NUL` device access. If commands fail in the IDE terminal, use **regular PowerShell** or **Windows Terminal** instead:

```powershell
cd "C:\Users\GANGARI DHRUVAVEER\Downloads\Website_for_client\F_art"
npm install
npm run dev
```

---

## 📊 Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| next | ^14.2.15 | Framework |
| react | ^18.3.1 | UI library |
| react-dom | ^18.3.1 | React DOM |
| framer-motion | ^11.11.0 | Animations |
| lucide-react | ^0.454.0 | Icons |
| @emailjs/browser | ^4.4.1 | Form service (optional, not yet wired) |
| tailwindcss | ^3.4.14 | CSS framework |
| typescript | ^5.6.3 | Type system |

---

## 🤝 For Future LLM Sessions

When continuing this project:

1. **Read this file first** — it has all the context you need
2. **Check `src/data/siteConfig.ts`** — it's the single source of truth for site content
3. **Check `src/data/artworks.ts`** — it defines the artwork data model
4. **Tailwind config** is heavily customized — don't use default Tailwind colors, use the custom palette
5. **Test with `npm run build`** before pushing changes
6. **Keep the aesthetic** — luxury, minimal, museum-inspired, warm cream/gold/charcoal palette
7. **Framer Motion** is used everywhere for animations — maintain consistency
8. **No backend** philosophy — if adding features, prefer static/client-side solutions or free-tier SaaS
