/**
 * Testimonials Data
 * =================
 * Customer reviews and testimonials.
 * Edit this array to add/remove testimonials.
 */

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  artwork?: string; // Name of artwork purchased
  rating: number;   // 1-5
}

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Priya Sharma',
    location: 'Mumbai',
    text: 'The "Oceanic Dreams" painting has completely transformed my living room. The colors are even more stunning in person — photographs simply cannot capture the depth and movement. The artist was incredibly patient and helpful throughout the process.',
    artwork: 'Oceanic Dreams',
    rating: 5,
  },
  {
    id: 'testimonial-2',
    name: 'Arjun Mehta',
    location: 'Bangalore',
    text: 'I commissioned a custom resin piece for my office, and the result exceeded all expectations. The attention to detail, the rich colors, and the glossy finish make it a true conversation starter. Highly recommended!',
    artwork: 'Custom Commission',
    rating: 5,
  },
  {
    id: 'testimonial-3',
    name: 'Sneha Kulkarni',
    location: 'Pune',
    text: 'Bought one of the limited edition prints as a gift for my mother, and she absolutely loved it. The print quality is exceptional, and the Certificate of Authenticity was a wonderful touch. Will definitely be ordering more!',
    artwork: 'Sapphire Veil (Print)',
    rating: 5,
  },
  {
    id: 'testimonial-4',
    name: 'Rohan Desai',
    location: 'Delhi',
    text: 'The packaging was incredibly secure — the artwork arrived in perfect condition across the country. The colors and textures are mesmerizing; I find myself staring at it for minutes at a time.',
    artwork: 'Autumn Whisper',
    rating: 5,
  },
  {
    id: 'testimonial-5',
    name: 'Ananya Reddy',
    location: 'Hyderabad',
    text: 'Working with the artist on a custom piece for our new home was a beautiful experience. They understood our vision perfectly and created something truly unique. The entire process was smooth and professional.',
    artwork: 'Custom Commission',
    rating: 5,
  },
];
