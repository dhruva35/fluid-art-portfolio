'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Palette,
  Truck,
  Award,
  MessageCircle,
  Mail,
} from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import ArtworkCard from '@/components/ui/ArtworkCard';
import InquiryModal from '@/components/ui/InquiryModal';
import TestimonialCarousel from '@/components/ui/TestimonialCarousel';
import Button from '@/components/ui/Button';
import { siteConfig } from '@/data/siteConfig';
import {
  getFeaturedArtworks,
  getNewArrivals,
  Artwork,
} from '@/data/artworks';

export default function HomePage() {
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

  const featured = getFeaturedArtworks();
  const newArrivals = getNewArrivals();

  const handleInquire = (artwork: Artwork) => {
    setSelectedArtwork(artwork);
    setInquiryOpen(true);
  };

  return (
    <>
      {/* ============================================
          HERO SECTION
          ============================================ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background — gradient with subtle pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-cream-100 via-cream-200 to-cream-300" />

        {/* Decorative floating elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-[15%] right-[10%] w-64 h-64 rounded-full bg-gold/5 blur-3xl"
          />
          <motion.div
            animate={{ y: [0, 15, 0], rotate: [0, -3, 0] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            }}
            className="absolute bottom-[20%] left-[5%] w-80 h-80 rounded-full bg-gold/8 blur-3xl"
          />
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 2,
            }}
            className="absolute top-[40%] left-[30%] w-40 h-40 rounded-full bg-cream-400/20 blur-2xl"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Subtle label */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-6"
            >
              Original Fluid Art & Resin Paintings
            </motion.p>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="font-serif text-4xl sm:text-5xl md:text-display-xl font-bold text-charcoal mb-6 leading-tight"
            >
              Where Colors
              <br />
              <span className="text-gradient-gold">Flow Freely</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-gray-soft text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              Discover unique handcrafted fluid art paintings — each piece tells
              a story of color, movement, and emotion. Original artworks, resin
              art, and limited edition prints.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button
                href="/gallery"
                variant="primary"
                size="lg"
                icon={<ArrowRight size={18} />}
              >
                Explore Gallery
              </Button>
              <Button href="/commission" variant="outline" size="lg">
                Commission Artwork
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============================================
          TRUST BADGES
          ============================================ */}
      <section className="py-12 border-y border-cream-300/60 bg-cream-50">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                icon: <Palette size={24} />,
                label: 'Handcrafted',
                sub: 'Original Artworks',
              },
              {
                icon: <Award size={24} />,
                label: 'Certificate',
                sub: 'of Authenticity',
              },
              {
                icon: <Truck size={24} />,
                label: 'Safe Delivery',
                sub: 'Across India',
              },
              {
                icon: <MessageCircle size={24} />,
                label: 'Direct Contact',
                sub: 'With the Artist',
              },
            ].map((item, i) => (
              <AnimatedSection
                key={i}
                delay={i * 0.1}
                className="flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold mb-3">
                  {item.icon}
                </div>
                <p className="font-serif font-semibold text-charcoal text-sm">
                  {item.label}
                </p>
                <p className="text-xs text-gray-soft">{item.sub}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          FEATURED COLLECTION
          ============================================ */}
      <section className="py-section bg-cream-100">
        <div className="container-wide">
          <SectionHeading
            title="Featured Collection"
            subtitle="Curated pieces that capture the essence of fluid art — each one unique, each one a conversation starter."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((artwork, i) => (
              <ArtworkCard
                key={artwork.slug}
                artwork={artwork}
                index={i}
                onInquire={handleInquire}
              />
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <Button href="/gallery" variant="outline" size="lg">
              View All Artworks <ArrowRight size={16} className="ml-1" />
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* ============================================
          ABOUT PREVIEW
          ============================================ */}
      <section className="py-section bg-cream-50">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <AnimatedSection direction="left">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-elevated bg-cream-200">
                <Image
                  src="/images/artist.jpg"
                  alt="Artist Portrait"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </AnimatedSection>

            {/* Content */}
            <AnimatedSection direction="right">
              <p className="text-gold font-medium tracking-[0.15em] uppercase text-sm mb-4">
                About the Artist
              </p>
              <h2 className="font-serif text-heading md:text-display font-bold text-charcoal mb-6">
                Every Pour Tells
                <br />a Story
              </h2>
              <div className="divider-gold mb-6 mx-0" />
              <p className="text-gray-soft text-base leading-relaxed mb-4">
                With a deep passion for fluid art, every piece I create is a
                journey into the unpredictable beauty of flowing colors. Each
                pour is unique — shaped by gravity, chemistry, and intuition.
              </p>
              <p className="text-gray-soft text-base leading-relaxed mb-8">
                From vibrant acrylic pours to mesmerizing resin artworks, my
                studio is where creativity meets craftsmanship. Every painting
                comes with a story, a certificate of authenticity, and a piece of
                my heart.
              </p>
              <Button href="/about" variant="outline">
                Read My Story <ArrowRight size={16} className="ml-1" />
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ============================================
          NEW ARRIVALS
          ============================================ */}
      {newArrivals.length > 0 && (
        <section className="py-section bg-cream-100">
          <div className="container-wide">
            <SectionHeading
              title="New Arrivals"
              subtitle="Fresh from the studio — discover the latest additions to the collection."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {newArrivals.map((artwork, i) => (
                <ArtworkCard
                  key={artwork.slug}
                  artwork={artwork}
                  index={i}
                  onInquire={handleInquire}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============================================
          COMMISSION CTA
          ============================================ */}
      <section className="py-section-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-charcoal" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-dark/90 to-charcoal/80" />

        {/* Decorative */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold/5 blur-3xl"
        />

        <div className="container-wide relative z-10 text-center">
          <AnimatedSection>
            <p className="text-gold font-medium tracking-[0.15em] uppercase text-sm mb-4">
              Custom Artwork
            </p>
            <h2 className="font-serif text-heading md:text-display font-bold text-cream-50 mb-6">
              Want a Unique Piece
              <br />
              Made Just for You?
            </h2>
            <div className="divider-gold mb-6" />
            <p className="text-cream-400 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Commission a custom fluid art painting tailored to your space,
              colors, and vision. Every commissioned piece is crafted with the
              same passion and attention to detail as my original collection.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/commission" variant="secondary" size="lg">
                Start Your Commission
              </Button>
              <Button
                href="/contact"
                variant="ghost"
                size="lg"
                className="text-cream-200 hover:text-cream-50 border border-cream-400/20 hover:border-cream-400/40"
              >
                Ask a Question
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ============================================
          TESTIMONIALS
          ============================================ */}
      <section className="py-section bg-cream-50">
        <div className="container-wide">
          <SectionHeading
            title="What Collectors Say"
            subtitle="Hear from art lovers who have brought a piece of fluid art into their homes."
          />
          <TestimonialCarousel />
        </div>
      </section>

      {/* ============================================
          NEWSLETTER
          ============================================ */}
      <section className="py-section bg-cream-200/50">
        <div className="container-wide">
          <AnimatedSection className="max-w-xl mx-auto text-center">
            <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center text-gold mx-auto mb-6">
              <Mail size={24} />
            </div>
            <h2 className="font-serif text-heading font-bold text-charcoal mb-4">
              Stay Inspired
            </h2>
            <p className="text-gray-soft mb-8">
              Get notified about new artworks, behind-the-scenes content, and
              exclusive offers. No spam, just art.
            </p>
            <form
              className="flex flex-col sm:flex-row gap-3"
              onSubmit={(e) => {
                e.preventDefault();
                // Newsletter signup — can be connected to Mailchimp, ConvertKit, etc.
                alert('Thank you for subscribing! (Connect to email service)');
              }}
            >
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="flex-1 px-5 py-3.5 rounded-xl border border-cream-400 bg-cream-50 text-charcoal text-sm focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
              />
              <Button type="submit" variant="primary" size="md">
                Subscribe
              </Button>
            </form>
            <p className="text-xs text-gray-muted mt-3">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Inquiry Modal */}
      <InquiryModal
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
        artwork={selectedArtwork}
      />
    </>
  );
}
