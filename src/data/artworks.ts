/**
 * Artworks Data
 * =============
 * All artwork entries live here. To add a new artwork:
 * 1. Add your image(s) to /public/images/artworks/
 * 2. Add a new entry to the `artworks` array below
 * 3. The artwork will automatically appear in the gallery and get its own detail page
 */

export type ArtworkCategory = 'original' | 'resin' | 'canvas' | 'limited-edition';
export type ArtworkAvailability = 'available' | 'sold' | 'on-hold';

export interface Artwork {
  slug: string;
  title: string;
  category: ArtworkCategory;
  medium: string;
  dimensions: string;
  year: number;
  price: string;
  availability: ArtworkAvailability;
  description: string;
  story: string;
  images: string[];
  featured: boolean;
  newArrival: boolean;
  certificate: boolean;
  weight?: string;
  frameInfo?: string;
}

export const artworks: Artwork[] = [
  {
    slug: 'oceanic-dreams',
    title: 'Oceanic Dreams',
    category: 'original',
    medium: 'Acrylic Pour on Canvas',
    dimensions: '24" × 36"',
    year: 2024,
    price: '₹12,500',
    availability: 'available',
    description:
      'A mesmerizing blend of deep ocean blues and turquoise, this fluid art piece captures the eternal dance of waves under moonlight.',
    story:
      'Inspired by a midnight walk along the Konkan coast, this piece was created in a single pour session. The way the blues and teals merged on the canvas reminded me of bioluminescent waves I once witnessed — nature painting itself.',
    images: [
      '/images/artworks/oceanic-dreams-1.jpg',
      '/images/artworks/oceanic-dreams-2.jpg',
    ],
    featured: true,
    newArrival: false,
    certificate: true,
    weight: '1.2 kg',
    frameInfo: 'Gallery-wrapped canvas, ready to hang',
  },
  {
    slug: 'golden-cascade',
    title: 'Golden Cascade',
    category: 'resin',
    medium: 'Resin Art on Wood Panel',
    dimensions: '18" × 24"',
    year: 2024,
    price: '₹18,000',
    availability: 'available',
    description:
      'Liquid gold meets deep burgundy in this stunning resin artwork. The glossy finish creates a mirror-like depth that changes with light.',
    story:
      'This piece was born from experimenting with metallic pigments in resin. I wanted to capture the feeling of watching a sunset through amber glass — warm, rich, and infinitely deep.',
    images: [
      '/images/artworks/golden-cascade-1.jpg',
      '/images/artworks/golden-cascade-2.jpg',
    ],
    featured: true,
    newArrival: true,
    certificate: true,
    weight: '2.0 kg',
    frameInfo: 'Wood panel with resin coat, ready to hang',
  },
  {
    slug: 'ethereal-bloom',
    title: 'Ethereal Bloom',
    category: 'original',
    medium: 'Acrylic Pour on Canvas',
    dimensions: '30" × 30"',
    year: 2024,
    price: '₹15,000',
    availability: 'available',
    description:
      'Soft pinks, lavender, and white dance together in this delicate fluid art piece, evoking the first blooms of spring.',
    story:
      'Created during the cherry blossom season, I let the soft pastels guide themselves across the canvas. Each cell formation resembles a tiny flower, making the entire piece feel like a garden viewed from above.',
    images: [
      '/images/artworks/ethereal-bloom-1.jpg',
      '/images/artworks/ethereal-bloom-2.jpg',
    ],
    featured: true,
    newArrival: false,
    certificate: true,
    weight: '1.5 kg',
    frameInfo: 'Gallery-wrapped canvas, ready to hang',
  },
  {
    slug: 'midnight-galaxy',
    title: 'Midnight Galaxy',
    category: 'canvas',
    medium: 'Mixed Media on Canvas',
    dimensions: '36" × 48"',
    year: 2024,
    price: '₹22,000',
    availability: 'available',
    description:
      'Deep space blacks, shimmering purples, and stardust whites create a cosmic journey on canvas.',
    story:
      'I have always been fascinated by astrophotography. This piece is my attempt to bring the cosmos into your living room — every swirl represents a nebula, every speck of white a distant star.',
    images: [
      '/images/artworks/midnight-galaxy-1.jpg',
      '/images/artworks/midnight-galaxy-2.jpg',
    ],
    featured: false,
    newArrival: true,
    certificate: true,
    weight: '2.5 kg',
    frameInfo: 'Stretched canvas with wooden frame',
  },
  {
    slug: 'coral-reef',
    title: 'Coral Reef',
    category: 'resin',
    medium: 'Resin Art on Round Panel',
    dimensions: '20" diameter',
    year: 2024,
    price: '₹14,000',
    availability: 'sold',
    description:
      'Vibrant corals, emerald greens, and crystal-clear blues recreate the magic of an underwater reef system.',
    story:
      'After a diving trip to the Andaman Islands, I was overwhelmed by the colors beneath the surface. This round resin piece captures that kaleidoscope of marine life in a format that feels like looking through a porthole.',
    images: [
      '/images/artworks/coral-reef-1.jpg',
      '/images/artworks/coral-reef-2.jpg',
    ],
    featured: false,
    newArrival: false,
    certificate: true,
    weight: '1.8 kg',
    frameInfo: 'Round wood panel with resin finish',
  },
  {
    slug: 'autumn-whisper',
    title: 'Autumn Whisper',
    category: 'original',
    medium: 'Acrylic Pour on Canvas',
    dimensions: '24" × 24"',
    year: 2023,
    price: '₹10,000',
    availability: 'available',
    description:
      'Warm oranges, burnt sienna, and touches of forest green evoke the quiet beauty of autumn leaves floating on a still pond.',
    story:
      'This was one of my first successful "dirty pour" pieces. The warm tones naturally separated into leaf-like patterns, and I knew I had captured something special — the gentle goodbye of autumn.',
    images: [
      '/images/artworks/autumn-whisper-1.jpg',
      '/images/artworks/autumn-whisper-2.jpg',
    ],
    featured: false,
    newArrival: false,
    certificate: true,
    weight: '1.0 kg',
    frameInfo: 'Gallery-wrapped canvas, ready to hang',
  },
  {
    slug: 'sapphire-veil',
    title: 'Sapphire Veil',
    category: 'limited-edition',
    medium: 'Giclée Print on Fine Art Paper',
    dimensions: '16" × 20"',
    year: 2024,
    price: '₹4,500',
    availability: 'available',
    description:
      'A limited edition print of the original "Sapphire Veil" painting. Rich sapphire blues with delicate silver veining.',
    story:
      'The original "Sapphire Veil" was one of my most loved pieces. By popular demand, I created this limited edition print series — only 25 copies, each signed and numbered.',
    images: [
      '/images/artworks/sapphire-veil-1.jpg',
      '/images/artworks/sapphire-veil-2.jpg',
    ],
    featured: true,
    newArrival: true,
    certificate: true,
    weight: '0.3 kg',
    frameInfo: 'Unframed, ships in protective tube',
  },
  {
    slug: 'molten-earth',
    title: 'Molten Earth',
    category: 'canvas',
    medium: 'Acrylic & Mixed Media on Canvas',
    dimensions: '30" × 40"',
    year: 2023,
    price: '₹20,000',
    availability: 'on-hold',
    description:
      'Fiery reds, molten golds, and volcanic blacks clash and merge in this intense, large-format piece.',
    story:
      'Inspired by documentary footage of volcanic eruptions, I used heavy body acrylics mixed with metallic pigments to create actual texture on the canvas. The surface catches light differently from every angle.',
    images: [
      '/images/artworks/molten-earth-1.jpg',
      '/images/artworks/molten-earth-2.jpg',
    ],
    featured: false,
    newArrival: false,
    certificate: true,
    weight: '3.0 kg',
    frameInfo: 'Stretched canvas, wooden frame included',
  },
];

// ============================
// Utility Functions
// ============================

export const categoryLabels: Record<ArtworkCategory, string> = {
  'original': 'Original Paintings',
  'resin': 'Resin Art',
  'canvas': 'Canvas Collection',
  'limited-edition': 'Limited Editions',
};

export function getArtworkBySlug(slug: string): Artwork | undefined {
  return artworks.find((a) => a.slug === slug);
}

export function getArtworksByCategory(category: ArtworkCategory): Artwork[] {
  return artworks.filter((a) => a.category === category);
}

export function getFeaturedArtworks(): Artwork[] {
  return artworks.filter((a) => a.featured);
}

export function getNewArrivals(): Artwork[] {
  return artworks.filter((a) => a.newArrival);
}

export function getAvailableArtworks(): Artwork[] {
  return artworks.filter((a) => a.availability === 'available');
}

export function getRelatedArtworks(slug: string, limit = 4): Artwork[] {
  const current = getArtworkBySlug(slug);
  if (!current) return artworks.slice(0, limit);

  return artworks
    .filter((a) => a.slug !== slug)
    .sort((a, b) => {
      // Prioritize same category
      const aMatch = a.category === current.category ? 1 : 0;
      const bMatch = b.category === current.category ? 1 : 0;
      return bMatch - aMatch;
    })
    .slice(0, limit);
}
