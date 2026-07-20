'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Eye, ArrowRight } from 'lucide-react';
import { Artwork } from '@/data/artworks';
import { cn } from '@/lib/utils';

interface ArtworkCardProps {
  artwork: Artwork;
  index?: number;
  onInquire?: (artwork: Artwork) => void;
}

/**
 * Gallery artwork card with hover effects, availability badge, and animated entrance.
 */
export default function ArtworkCard({
  artwork,
  index = 0,
  onInquire,
}: ArtworkCardProps) {
  const availabilityBadge = {
    available: { label: 'Available', className: 'badge-available' },
    sold: { label: 'Sold', className: 'badge-sold' },
    'on-hold': { label: 'On Hold', className: 'badge-on-hold' },
  };

  const badge = availabilityBadge[artwork.availability];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group"
    >
      <div className="bg-cream-50 rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500 border border-cream-300/40">
        {/* Image Container */}
        <Link href={`/gallery/${artwork.slug}`}>
          <div className="relative aspect-artwork overflow-hidden">
            <Image
              src={artwork.images[0]}
              alt={artwork.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 ease-premium group-hover:scale-110"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-all duration-500 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{ opacity: 1, scale: 1 }}
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-cream-50/90 backdrop-blur-sm flex items-center justify-center shadow-medium">
                  <Eye size={20} className="text-charcoal" />
                </div>
              </motion.div>
            </div>

            {/* Availability Badge */}
            <div className="absolute top-3 left-3">
              <span className={badge.className}>{badge.label}</span>
            </div>

            {/* New Arrival Badge */}
            {artwork.newArrival && (
              <div className="absolute top-3 right-3">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gold text-charcoal-dark">
                  New
                </span>
              </div>
            )}
          </div>
        </Link>

        {/* Card Info */}
        <div className="p-5">
          <Link href={`/gallery/${artwork.slug}`}>
            <h3 className="font-serif text-lg font-semibold text-charcoal group-hover:text-gold transition-colors duration-300 mb-1">
              {artwork.title}
            </h3>
          </Link>
          <p className="text-sm text-gray-soft mb-1">{artwork.medium}</p>
          <p className="text-xs text-gray-muted mb-3">{artwork.dimensions}</p>

          <div className="flex items-center justify-between">
            <span className="font-serif text-lg font-bold text-charcoal">
              {artwork.price}
            </span>
            <div className="flex items-center gap-2">
              {artwork.availability === 'available' && onInquire && (
                <button
                  onClick={() => onInquire(artwork)}
                  className="text-xs font-medium text-gold hover:text-gold-dark transition-colors"
                >
                  Inquire
                </button>
              )}
              <Link
                href={`/gallery/${artwork.slug}`}
                className="flex items-center gap-1 text-xs font-medium text-charcoal/60 hover:text-charcoal transition-colors"
              >
                Details <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
