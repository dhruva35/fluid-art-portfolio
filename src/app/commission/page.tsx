'use client';

import {
  MessageSquare,
  Palette,
  PenTool,
  Package,
  ArrowRight,
} from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import CommissionForm from '@/components/ui/CommissionForm';

const steps = [
  {
    icon: <MessageSquare size={24} />,
    title: 'Share Your Vision',
    desc: 'Fill out the commission form with your preferences — colors, size, style, and any inspiration you have in mind.',
  },
  {
    icon: <Palette size={24} />,
    title: 'Discuss & Plan',
    desc: "We'll connect to discuss your vision in detail, finalize the design direction, and agree on pricing and timeline.",
  },
  {
    icon: <PenTool size={24} />,
    title: 'Creation',
    desc: "The artist brings your vision to life. You'll receive progress updates along the way and can share feedback.",
  },
  {
    icon: <Package size={24} />,
    title: 'Delivery',
    desc: 'Your artwork is carefully packaged with a Certificate of Authenticity and shipped safely to your doorstep.',
  },
];

export default function CommissionPage() {
  return (
    <div className="pt-22 pb-section">
      {/* Header */}
      <section className="py-16 md:py-20 bg-cream-50">
        <div className="container-wide text-center max-w-3xl mx-auto">
          <AnimatedSection>
            <p className="text-gold font-medium tracking-[0.15em] uppercase text-sm mb-4">
              Custom Artwork
            </p>
            <h1 className="font-serif text-3xl md:text-display font-bold text-charcoal mb-6">
              Commission a Unique
              <br />
              <span className="text-gradient-gold">Piece of Art</span>
            </h1>
            <div className="divider-gold mb-6" />
            <p className="text-gray-soft text-base md:text-lg leading-relaxed">
              Have a specific vision? Want artwork that perfectly complements your
              space? Commission a custom fluid art painting tailored to your
              colors, size, and style preferences.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-section bg-cream-100">
        <div className="container-wide">
          <SectionHeading
            title="How It Works"
            subtitle="The commission process is simple, collaborative, and exciting."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="relative text-center">
                  {/* Step Number */}
                  <div className="relative mx-auto mb-5">
                    <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center text-gold mx-auto">
                      {step.icon}
                    </div>
                    <span className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-charcoal text-cream-50 text-xs font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-semibold text-charcoal mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-soft text-sm leading-relaxed">
                    {step.desc}
                  </p>

                  {/* Arrow between steps (desktop) */}
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 -right-4 text-cream-400">
                      <ArrowRight size={20} />
                    </div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Commission Form */}
      <section className="py-section bg-cream-50">
        <div className="container-wide max-w-3xl mx-auto">
          <SectionHeading
            title="Start Your Commission"
            subtitle="Tell us about your dream artwork. The more detail you share, the better we can bring your vision to life."
          />

          <CommissionForm />
        </div>
      </section>
    </div>
  );
}
