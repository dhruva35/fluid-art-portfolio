'use client';

import { motion } from 'framer-motion';
import {
  Palette,
  Heart,
  Eye,
  Sparkles,
  Award,
  Calendar,
  ChevronDown,
} from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { siteConfig } from '@/data/siteConfig';
import { useState } from 'react';

const faqs = [
  {
    q: 'What is fluid art?',
    a: 'Fluid art is a form of abstract art that uses acrylic paints in a fluid, liquid state. By pouring, tilting, and manipulating the canvas, the paint creates organic patterns, cells, and movements that are impossible to replicate exactly — making each piece truly one of a kind.',
  },
  {
    q: 'How do I care for my artwork?',
    a: 'Keep your painting away from direct sunlight and extreme temperatures. Dust gently with a soft, dry cloth. Acrylic paintings are durable, but avoid cleaning with water or chemicals. Resin pieces can be gently wiped with a damp cloth.',
  },
  {
    q: 'Do you ship internationally?',
    a: `Currently, we ship within ${siteConfig.shipping.countries} only. We plan to offer international shipping in the future. Stay tuned!`,
  },
  {
    q: 'How are payments handled?',
    a: siteConfig.paymentNote,
  },
  {
    q: 'Can I return an artwork?',
    a: 'Due to the unique nature of each artwork, we do not accept returns. However, if your artwork arrives damaged, please contact us within 48 hours with photos and we will resolve the issue promptly.',
  },
  {
    q: 'How long does shipping take?',
    a: `Artworks are carefully packaged and shipped within 3-5 business days of confirming your order. Delivery typically takes ${siteConfig.shipping.estimatedDays} depending on your location within India.`,
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-cream-300/60">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="font-serif text-base font-semibold text-charcoal pr-4">
          {q}
        </span>
        <ChevronDown
          size={18}
          className={`text-gold transition-transform duration-300 flex-shrink-0 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden"
      >
        <p className="text-gray-soft text-sm leading-relaxed pb-5">{a}</p>
      </motion.div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="pt-22 pb-section">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-cream-50">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Portrait */}
            <AnimatedSection direction="left">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-elevated bg-cream-200">
                <div className="absolute inset-0 bg-gradient-to-br from-cream-300 via-cream-400 to-gold/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Palette size={80} className="text-gold/30 mx-auto mb-4" />
                    <p className="text-gray-soft text-sm font-medium">
                      Artist Portrait
                    </p>
                    <p className="text-gray-muted text-xs mt-1">
                      Replace with actual photo
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Story */}
            <AnimatedSection direction="right">
              <p className="text-gold font-medium tracking-[0.15em] uppercase text-sm mb-4">
                About the Artist
              </p>
              <h1 className="font-serif text-3xl md:text-display font-bold text-charcoal mb-6">
                The Journey of
                <br />
                <span className="text-gradient-gold">Fluid Art</span>
              </h1>
              <div className="divider-gold mb-6 mx-0" />
              <div className="space-y-4 text-gray-soft leading-relaxed">
                <p>
                  My journey into fluid art began as an experiment — a curious
                  pour of acrylic paint that transformed into something
                  unexpectedly beautiful. That moment of watching colors flow,
                  merge, and create patterns beyond my control was magical.
                </p>
                <p>
                  Since then, every canvas has been an adventure. I combine
                  traditional acrylic pouring techniques with resin art to create
                  pieces that capture movement, energy, and emotion. Each artwork
                  is a unique collaboration between the artist and the medium —
                  guided by intuition but shaped by the unpredictable nature of
                  fluid dynamics.
                </p>
                <p>
                  Based in India, I create from my home studio where music,
                  morning light, and endless cups of chai fuel the creative
                  process. My work is inspired by nature — the ocean, sunsets,
                  galaxies, and the beautiful chaos of the natural world.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-section bg-charcoal relative overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-gold/5 blur-3xl"
        />
        <div className="container-wide relative z-10 text-center max-w-3xl mx-auto">
          <AnimatedSection>
            <Sparkles size={32} className="text-gold mx-auto mb-6" />
            <blockquote className="font-serif text-2xl md:text-3xl text-cream-100 leading-relaxed mb-6">
              &ldquo;Every pour is a leap of faith. You prepare, you plan, but
              ultimately you surrender to the flow — and that&apos;s where the
              magic happens.&rdquo;
            </blockquote>
            <div className="divider-gold" />
            <p className="text-cream-400 mt-4 text-sm">— Creative Philosophy</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Values / What Makes It Special */}
      <section className="py-section bg-cream-100">
        <div className="container-wide">
          <SectionHeading
            title="What Makes Each Piece Special"
            subtitle="Every artwork from this studio carries these promises."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart size={24} />,
                title: 'Handcrafted with Love',
                desc: 'Every single piece is created by hand — no prints, no reproductions. Each artwork is poured, tilted, and dried with careful attention and genuine passion.',
              },
              {
                icon: <Eye size={24} />,
                title: 'Truly One of a Kind',
                desc: 'Due to the nature of fluid art, no two pieces can ever be identical. When you own one of these artworks, you own something that exists nowhere else in the world.',
              },
              {
                icon: <Award size={24} />,
                title: 'Certificate of Authenticity',
                desc: 'Every original artwork comes with a signed Certificate of Authenticity, documenting the title, medium, date of creation, and unique details of your piece.',
              },
              {
                icon: <Palette size={24} />,
                title: 'Premium Materials',
                desc: 'Only high-quality artist-grade acrylics, professional canvases, and UV-resistant resins are used — ensuring your artwork looks stunning for decades.',
              },
              {
                icon: <Calendar size={24} />,
                title: 'Custom Commissions',
                desc: 'Can\'t find the perfect piece? Commission a custom artwork tailored to your space, color preferences, and vision. Every commission is a collaborative journey.',
              },
              {
                icon: <Sparkles size={24} />,
                title: 'Direct from the Studio',
                desc: 'Buy directly from the artist with no middlemen. This means fair pricing, personal connection, and the story behind every piece told firsthand.',
              },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-cream-50 rounded-2xl p-8 shadow-soft border border-cream-300/40 h-full hover:shadow-medium transition-shadow duration-300">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold mb-5">
                    {item.icon}
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-charcoal mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-soft text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-section bg-cream-50">
        <div className="container-wide max-w-3xl mx-auto">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about the artworks, shipping, and process."
          />

          <div className="bg-cream-100/50 rounded-2xl border border-cream-300/40 overflow-hidden">
            <div className="px-6 md:px-8">
              {faqs.map((faq, i) => (
                <FAQItem key={i} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-section bg-cream-200/50">
        <div className="container-wide text-center">
          <AnimatedSection>
            <h2 className="font-serif text-heading font-bold text-charcoal mb-4">
              Let&apos;s Create Something Beautiful
            </h2>
            <p className="text-gray-soft max-w-lg mx-auto mb-8">
              Whether you want to own a piece from the collection or commission
              something unique, I&apos;d love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/gallery" variant="primary" size="lg">
                Browse Gallery
              </Button>
              <Button href="/commission" variant="outline" size="lg">
                Commission Artwork
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
