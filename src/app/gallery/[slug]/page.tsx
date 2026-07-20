'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Share2,
  MessageCircle,
  Shield,
  Truck,
  Ruler,
  Layers,
  Calendar,
  Weight,
  Frame,
  Copy,
  Check,
} from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import ArtworkCard from '@/components/ui/ArtworkCard';
import InquiryModal from '@/components/ui/InquiryModal';
import ImageLightbox from '@/components/ui/ImageLightbox';
import Button from '@/components/ui/Button';
import { getArtworkBySlug, getRelatedArtworks, Artwork } from '@/data/artworks';
import { siteConfig } from '@/data/siteConfig';
import { getWhatsAppUrl, getShareUrls } from '@/lib/utils';

export default function ArtworkDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const artwork = getArtworkBySlug(slug);

  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);

  if (!artwork) {
    return (
      <div className="pt-22 pb-section">
        <div className="container-wide text-center py-20">
          <h1 className="font-serif text-3xl font-bold text-charcoal mb-4">
            Artwork Not Found
          </h1>
          <p className="text-gray-soft mb-8">
            This artwork may have been removed or the link may be incorrect.
          </p>
          <Button href="/gallery" variant="primary">
            <ArrowLeft size={16} /> Back to Gallery
          </Button>
        </div>
      </div>
    );
  }

  const related = getRelatedArtworks(slug, 4);
  const shareUrls = getShareUrls(
    typeof window !== 'undefined' ? window.location.href : '',
    `Check out "${artwork.title}" by ${siteConfig.name}`
  );

  const handleInquire = (art: Artwork) => {
    setSelectedArtwork(art);
    setInquiryOpen(true);
  };

  const handleCopyLink = async () => {
    if (typeof navigator !== 'undefined') {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const availabilityConfig = {
    available: {
      label: 'Available',
      className: 'badge-available',
      message: 'This artwork is available for purchase.',
    },
    sold: {
      label: 'Sold',
      className: 'badge-sold',
      message: 'This artwork has been sold. Contact us for similar pieces.',
    },
    'on-hold': {
      label: 'On Hold',
      className: 'badge-on-hold',
      message: 'This artwork is currently on hold.',
    },
  };

  const status = availabilityConfig[artwork.availability];

  return (
    <div className="pt-22 pb-section">
      {/* Back Button */}
      <div className="container-wide py-4">
        <Link
          href="/gallery"
          className="inline-flex items-center gap-2 text-sm text-gray-soft hover:text-charcoal transition-colors"
        >
          <ArrowLeft size={16} /> Back to Gallery
        </Link>
      </div>

      {/* Main Content */}
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <AnimatedSection direction="left">
            <div className="space-y-4">
              {/* Main Image */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="relative aspect-artwork rounded-2xl overflow-hidden shadow-elevated cursor-zoom-in bg-cream-200"
                onClick={() => {
                  setLightboxIndex(0);
                  setLightboxOpen(true);
                }}
              >
                <Image
                  src={artwork.images[0]}
                  alt={artwork.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </motion.div>

              {/* Thumbnail Row */}
              {artwork.images.length > 1 && (
                <div className="flex gap-3">
                  {artwork.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setLightboxIndex(i);
                        setLightboxOpen(true);
                      }}
                      className="relative w-20 h-20 rounded-xl overflow-hidden border-2 border-cream-300 hover:border-gold transition-colors bg-cream-200"
                    >
                      <Image
                        src={img}
                        alt={`${artwork.title} view ${i + 1}`}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </AnimatedSection>

          {/* Artwork Info */}
          <AnimatedSection direction="right">
            <div className="lg:sticky lg:top-28">
              {/* Category */}
              <p className="text-gold font-medium tracking-[0.15em] uppercase text-xs mb-3">
                {artwork.category.replace('-', ' ')}
              </p>

              {/* Title */}
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-charcoal mb-4">
                {artwork.title}
              </h1>

              {/* Availability */}
              <div className="mb-6">
                <span className={status.className}>{status.label}</span>
                <p className="text-sm text-gray-soft mt-2">{status.message}</p>
              </div>

              {/* Price */}
              <div className="mb-6 pb-6 border-b border-cream-300/60">
                <p className="font-serif text-3xl font-bold text-charcoal">
                  {artwork.price}
                </p>
                <p className="text-xs text-gray-muted mt-1">
                  Payment handled directly with the artist
                </p>
              </div>

              {/* Details Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-cream-300/60">
                <div className="flex items-center gap-3">
                  <Layers size={16} className="text-gold" />
                  <div>
                    <p className="text-xs text-gray-muted">Medium</p>
                    <p className="text-sm font-medium text-charcoal">
                      {artwork.medium}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Ruler size={16} className="text-gold" />
                  <div>
                    <p className="text-xs text-gray-muted">Dimensions</p>
                    <p className="text-sm font-medium text-charcoal">
                      {artwork.dimensions}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar size={16} className="text-gold" />
                  <div>
                    <p className="text-xs text-gray-muted">Year</p>
                    <p className="text-sm font-medium text-charcoal">
                      {artwork.year}
                    </p>
                  </div>
                </div>
                {artwork.weight && (
                  <div className="flex items-center gap-3">
                    <Weight size={16} className="text-gold" />
                    <div>
                      <p className="text-xs text-gray-muted">Weight</p>
                      <p className="text-sm font-medium text-charcoal">
                        {artwork.weight}
                      </p>
                    </div>
                  </div>
                )}
                {artwork.frameInfo && (
                  <div className="col-span-2 flex items-center gap-3">
                    <Frame size={16} className="text-gold" />
                    <div>
                      <p className="text-xs text-gray-muted">Frame</p>
                      <p className="text-sm font-medium text-charcoal">
                        {artwork.frameInfo}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Artwork Story */}
              <div className="mb-6 pb-6 border-b border-cream-300/60">
                <h3 className="font-serif text-lg font-semibold text-charcoal mb-3">
                  The Story Behind
                </h3>
                <p className="text-gray-soft text-sm leading-relaxed">
                  {artwork.story}
                </p>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4 mb-6 pb-6 border-b border-cream-300/60">
                {artwork.certificate && (
                  <div className="flex items-center gap-2 text-sm text-charcoal">
                    <Shield size={16} className="text-gold" />
                    Certificate of Authenticity
                  </div>
                )}
                <div className="flex items-center gap-2 text-sm text-charcoal">
                  <Truck size={16} className="text-gold" />
                  {siteConfig.shipping.countries} •{' '}
                  {siteConfig.shipping.estimatedDays}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <Button
                  variant="primary"
                  size="lg"
                  className="flex-1"
                  onClick={() => handleInquire(artwork)}
                  icon={<MessageCircle size={18} />}
                >
                  {artwork.availability === 'available'
                    ? 'Inquire / Book This Artwork'
                    : 'Contact About This Piece'}
                </Button>

                {/* WhatsApp */}
                <Button
                  variant="outline"
                  size="lg"
                  href={getWhatsAppUrl(
                    siteConfig.contact.whatsapp,
                    `Hi! I'm interested in "${artwork.title}" (${artwork.price}). Is it still available?`
                  )}
                >
                  WhatsApp
                </Button>
              </div>

              {/* Share */}
              <div className="relative">
                <button
                  onClick={() => setShareOpen(!shareOpen)}
                  className="inline-flex items-center gap-2 text-sm text-gray-soft hover:text-charcoal transition-colors"
                >
                  <Share2 size={14} /> Share this artwork
                </button>

                {shareOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute bottom-full left-0 mb-2 bg-cream-50 rounded-xl shadow-elevated border border-cream-300/60 p-3 flex gap-2"
                  >
                    <a
                      href={shareUrls.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-cream-200 text-xs font-medium hover:bg-cream-300 transition-colors"
                    >
                      WhatsApp
                    </a>
                    <a
                      href={shareUrls.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-cream-200 text-xs font-medium hover:bg-cream-300 transition-colors"
                    >
                      Facebook
                    </a>
                    <a
                      href={shareUrls.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-cream-200 text-xs font-medium hover:bg-cream-300 transition-colors"
                    >
                      Twitter
                    </a>
                    <button
                      onClick={handleCopyLink}
                      className="px-3 py-1.5 rounded-lg bg-cream-200 text-xs font-medium hover:bg-cream-300 transition-colors flex items-center gap-1"
                    >
                      {copied ? (
                        <>
                          <Check size={12} /> Copied
                        </>
                      ) : (
                        <>
                          <Copy size={12} /> Link
                        </>
                      )}
                    </button>
                  </motion.div>
                )}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Related Artworks */}
      {related.length > 0 && (
        <section className="mt-section">
          <div className="container-wide">
            <AnimatedSection>
              <h2 className="font-serif text-heading font-bold text-charcoal mb-2 text-center">
                You May Also Like
              </h2>
              <div className="divider-gold mb-12" />
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {related.map((art, i) => (
                <ArtworkCard
                  key={art.slug}
                  artwork={art}
                  index={i}
                  onInquire={handleInquire}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Lightbox */}
      <ImageLightbox
        images={artwork.images}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setLightboxIndex}
        alt={artwork.title}
      />

      {/* Inquiry Modal */}
      <InquiryModal
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
        artwork={selectedArtwork}
      />
    </div>
  );
}
