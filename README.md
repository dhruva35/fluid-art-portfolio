# Fluid Art Studio — Portfolio & Inquiry Website

A stunning, museum-inspired portfolio website for a fluid art artist. Built with Next.js 14, Tailwind CSS v3, and Framer Motion.

## 🎨 Overview

This website is designed to:
- **Showcase** fluid art paintings in an immersive gallery
- **Allow inquiries** — customers contact the artist directly to purchase
- **Accept commissions** — custom artwork request form
- **Build credibility** — testimonials, about page, certificates of authenticity

**No e-commerce checkout.** All payments are handled directly between the artist and customer (UPI, bank transfer, etc.).

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18+ installed
- **npm** 9+ installed

### Installation

```bash
# Navigate to the project folder
cd F_art

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
F_art/
├── public/
│   └── images/
│       ├── artworks/          # Artwork images (replace placeholders with real photos)
│       └── og-image.jpg       # Social sharing image
├── src/
│   ├── app/                   # Next.js App Router pages
│   │   ├── page.tsx           # Home page
│   │   ├── layout.tsx         # Root layout (Navbar + Footer)
│   │   ├── globals.css        # Global styles & Tailwind
│   │   ├── gallery/           # Gallery & artwork detail pages
│   │   ├── about/             # About the artist
│   │   ├── commission/        # Commission request form
│   │   ├── contact/           # Contact page
│   │   ├── privacy/           # Privacy policy
│   │   ├── terms/             # Terms & conditions
│   │   └── not-found.tsx      # Custom 404
│   ├── components/            # Reusable UI components
│   │   ├── Navbar.tsx         # Navigation with mobile menu
│   │   ├── Footer.tsx         # Site footer
│   │   ├── AnimatedSection.tsx # Scroll animation wrapper
│   │   └── ui/               # Design system components
│   ├── data/                  # Content data (edit these to update the site)
│   │   ├── artworks.ts        # All artwork entries
│   │   ├── siteConfig.ts      # Site-wide configuration
│   │   └── testimonials.ts    # Customer testimonials
│   ├── hooks/                 # Custom React hooks
│   └── lib/                   # Utility functions
├── tailwind.config.ts         # Design system tokens
├── next.config.js             # Next.js configuration
└── package.json               # Dependencies
```

---

## ✏️ How to Update Content

### Add a New Artwork

1. **Add images** to `public/images/artworks/` (name them like `my-artwork-1.jpg`)
2. **Edit** `src/data/artworks.ts` — add a new entry to the `artworks` array:

```typescript
{
  slug: 'my-new-artwork',           // URL-friendly name (no spaces)
  title: 'My New Artwork',
  category: 'original',             // 'original' | 'resin' | 'canvas' | 'limited-edition'
  medium: 'Acrylic Pour on Canvas',
  dimensions: '24" × 36"',
  year: 2024,
  price: '₹15,000',                 // Display price or 'Price on Request'
  availability: 'available',        // 'available' | 'sold' | 'on-hold'
  description: 'Short description for cards...',
  story: 'The longer story behind this piece...',
  images: [
    '/images/artworks/my-artwork-1.jpg',
    '/images/artworks/my-artwork-2.jpg',
  ],
  featured: true,                   // Show on homepage featured section
  newArrival: true,                 // Show in "New Arrivals"
  certificate: true,
  weight: '1.5 kg',
  frameInfo: 'Gallery-wrapped canvas',
}
```

3. The artwork will automatically appear in the gallery and get its own detail page at `/gallery/my-new-artwork`

### Update Contact Info / Social Links

Edit `src/data/siteConfig.ts` — change email, phone, Instagram, etc.

### Update Testimonials

Edit `src/data/testimonials.ts` — add or remove testimonial objects.

### Replace Placeholder Images

The `public/images/artworks/` folder contains SVG placeholder images. Replace them with actual artwork photos (JPG/PNG/WebP). Keep the same filenames, or update the paths in `artworks.ts`.

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| **Primary BG** | Warm White `#FAF8F5` |
| **Secondary BG** | Cream `#F5F0EB` |
| **Text** | Charcoal `#2C2C2C` |
| **Accent** | Gold `#C9A96E` |
| **Muted Text** | Soft Gray `#6B6B6B` |
| **Headlines** | Playfair Display (serif) |
| **Body** | Inter (sans-serif) |

---

## 🚢 Deployment

### Vercel (Recommended — Free)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel auto-detects Next.js — click "Deploy"
5. Your site will be live at `your-project.vercel.app`

### Custom Domain

1. In Vercel dashboard → Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions

---

## 📋 Tech Stack

| Technology | Purpose |
|-----------|---------|
| Next.js 14 | React framework, SSR, routing |
| Tailwind CSS v3 | Utility-first styling |
| Framer Motion | Animations & transitions |
| Lucide React | Icon system |
| TypeScript | Type safety |
| Google Fonts | Playfair Display + Inter |

---

## 📄 License

This project is private and owned by the artist. Not for redistribution.
