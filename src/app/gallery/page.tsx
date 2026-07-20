'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import ArtworkCard from '@/components/ui/ArtworkCard';
import InquiryModal from '@/components/ui/InquiryModal';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedSection from '@/components/AnimatedSection';
import {
  artworks,
  categoryLabels,
  Artwork,
  ArtworkCategory,
} from '@/data/artworks';

type SortOption = 'newest' | 'price-low' | 'price-high' | 'name';
type FilterCategory = 'all' | ArtworkCategory;

const categories: { value: FilterCategory; label: string }[] = [
  { value: 'all', label: 'All Artworks' },
  { value: 'original', label: 'Originals' },
  { value: 'resin', label: 'Resin Art' },
  { value: 'canvas', label: 'Canvas' },
  { value: 'limited-edition', label: 'Limited Editions' },
];

const sortOptions: { value: SortOption; label: string }[] = [
  { value: 'newest', label: 'Newest First' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'name', label: 'Name: A-Z' },
];

function extractPrice(priceStr: string): number {
  const match = priceStr.replace(/,/g, '').match(/\d+/);
  return match ? parseInt(match[0], 10) : 0;
}

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('all');
  const [sortBy, setSortBy] = useState<SortOption>('newest');
  const [searchQuery, setSearchQuery] = useState('');
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

  const filteredArtworks = useMemo(() => {
    let result = [...artworks];

    // Category filter
    if (activeCategory !== 'all') {
      result = result.filter((a) => a.category === activeCategory);
    }

    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (a) =>
          a.title.toLowerCase().includes(query) ||
          a.medium.toLowerCase().includes(query) ||
          a.description.toLowerCase().includes(query)
      );
    }

    // Sort
    switch (sortBy) {
      case 'newest':
        result.sort((a, b) => b.year - a.year);
        break;
      case 'price-low':
        result.sort((a, b) => extractPrice(a.price) - extractPrice(b.price));
        break;
      case 'price-high':
        result.sort((a, b) => extractPrice(b.price) - extractPrice(a.price));
        break;
      case 'name':
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
    }

    return result;
  }, [activeCategory, sortBy, searchQuery]);

  const handleInquire = (artwork: Artwork) => {
    setSelectedArtwork(artwork);
    setInquiryOpen(true);
  };

  return (
    <div className="pt-22 pb-section">
      {/* Page Header */}
      <section className="py-12 md:py-16 bg-cream-50">
        <div className="container-wide">
          <SectionHeading
            title="Gallery"
            subtitle="Explore the complete collection — from original fluid paintings to resin art and limited edition prints."
          />
        </div>
      </section>

      {/* Filters & Search Bar */}
      <section className="bg-cream-100/95 border-b border-cream-300/40 py-4">
        <div className="container-wide">
          {/* Category Pills */}
          <div className="flex flex-wrap gap-2 mb-4">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat.value
                    ? 'bg-charcoal text-cream-50 shadow-soft'
                    : 'bg-cream-50 text-charcoal/70 hover:bg-cream-200 border border-cream-300/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search & Sort Row */}
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Search */}
            <div className="relative flex-1">
              <Search
                size={16}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-muted"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search artworks..."
                className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-cream-400 bg-cream-50 text-charcoal text-sm focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-muted hover:text-charcoal"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Sort */}
            <div className="flex items-center gap-2">
              <SlidersHorizontal size={14} className="text-gray-muted" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="px-3 py-2.5 rounded-xl border border-cream-400 bg-cream-50 text-charcoal text-sm focus:border-gold outline-none"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-8 md:py-12">
        <div className="container-wide">
          {/* Results Count */}
          <p className="text-sm text-gray-soft mb-6">
            {filteredArtworks.length}{' '}
            {filteredArtworks.length === 1 ? 'artwork' : 'artworks'} found
          </p>

          {filteredArtworks.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              <AnimatePresence mode="popLayout">
                {filteredArtworks.map((artwork, i) => (
                  <ArtworkCard
                    key={artwork.slug}
                    artwork={artwork}
                    index={i}
                    onInquire={handleInquire}
                  />
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <AnimatedSection className="text-center py-20">
              <div className="w-16 h-16 rounded-full bg-cream-200 flex items-center justify-center mx-auto mb-4">
                <Search size={24} className="text-gray-muted" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-charcoal mb-2">
                No artworks found
              </h3>
              <p className="text-gray-soft text-sm">
                Try adjusting your filters or search term.
              </p>
            </AnimatedSection>
          )}
        </div>
      </section>

      {/* Inquiry Modal */}
      <InquiryModal
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
        artwork={selectedArtwork}
      />
    </div>
  );
}
