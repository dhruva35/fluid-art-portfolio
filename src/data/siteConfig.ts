/**
 * Site Configuration
 * ==================
 * Central config for all site-wide content.
 * Edit this file to update artist info, contact details, social links, etc.
 */

export const siteConfig = {
  // Brand
  name: 'Fluid Art Studio',
  tagline: 'Where Colors Flow Freely',
  description:
    'Discover unique fluid art paintings — original artworks, resin art, and limited edition prints. Handcrafted with passion, each piece tells a story of color and movement.',

  // Contact
  contact: {
    email: 'hello@fluidartstudio.com',
    phone: '+91 98765 43210',
    whatsapp: '+919876543210',
    address: 'Mumbai, Maharashtra, India',
  },

  // Social Media
  social: {
    instagram: 'https://instagram.com/fluidartstudio',
    instagramHandle: '@fluidartstudio',
    youtube: '',
    pinterest: '',
    facebook: '',
  },

  // Shipping & Policies
  shipping: {
    countries: 'India Only',
    estimatedDays: '5-10 business days',
    freeAbove: '₹5,000',
    note: 'All artworks are carefully packaged to ensure safe delivery within India.',
  },

  // Business
  currency: '₹',
  paymentNote:
    'All payments are handled directly with the artist via UPI or bank transfer. Please inquire about your preferred artwork to begin the process.',
  certificateNote:
    'Every original artwork comes with a signed Certificate of Authenticity.',

  // SEO
  seo: {
    title: 'Fluid Art Studio — Original Fluid Art & Resin Paintings',
    description:
      'Discover stunning original fluid art paintings, resin artworks, and limited edition prints. Each piece is handcrafted with love and passion. Based in India, shipping nationwide.',
    keywords: [
      'fluid art',
      'resin art',
      'original paintings',
      'abstract art',
      'fluid painting',
      'acrylic pour',
      'Indian artist',
      'buy art online India',
      'canvas art',
      'limited edition prints',
    ],
    ogImage: '/images/og-image.jpg',
    url: 'https://fluidartstudio.com',
  },

  // Navigation
  nav: [
    { label: 'Home', href: '/' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'About', href: '/about' },
    { label: 'Commission', href: '/commission' },
    { label: 'Contact', href: '/contact' },
  ],

  // Footer Links
  footerLinks: {
    quickLinks: [
      { label: 'Gallery', href: '/gallery' },
      { label: 'About the Artist', href: '/about' },
      { label: 'Commission Artwork', href: '/commission' },
      { label: 'Contact', href: '/contact' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms & Conditions', href: '/terms' },
    ],
  },
};

export type SiteConfig = typeof siteConfig;
