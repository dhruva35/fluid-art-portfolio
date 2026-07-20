/**
 * Site Configuration
 * ==================
 * Central config for all site-wide content.
 * Edit this file to update artist info, contact details, social links, etc.
 */

export const siteConfig = {
  // Brand
  name: 'Pravāha Kalā',
  tagline: 'The Art of Flow',
  description:
    'Discover handcrafted fluid art inspired by the beauty of flow. Original paintings and resin creations where every piece is one of a kind.',

  // Contact
  contact: {
    email: 'rithikashyam94@gmail.com',
    phone: '+91 63029 33904',
    whatsapp: '+9163029 33904',
    address: 'Bengaluru, Karnataka, India',
  },

  // Social Media
  social: {
    instagram: 'https://www.instagram.com/rithika.shyam/',
    instagramHandle: '@rithika.shyam',
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
    title: 'Pravāha Kalā — Original Fluid Art & Resin Paintings',
    description:
      'Discover original fluid art paintings, resin artworks, and limited-edition creations, each handcrafted with passion and inspired by the beauty of flow. Proudly created in India and shipped nationwide.',
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
    url: 'https://pravahakala.com',
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
