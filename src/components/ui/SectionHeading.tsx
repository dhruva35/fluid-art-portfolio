'use client';

import AnimatedSection from '@/components/AnimatedSection';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

/**
 * Consistent section heading with gold divider accent and scroll animation.
 */
export default function SectionHeading({
  title,
  subtitle,
  align = 'center',
  className = '',
}: SectionHeadingProps) {
  return (
    <AnimatedSection
      className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center' : 'text-left'} ${className}`}
    >
      <h2 className="text-heading md:text-display font-serif font-bold text-charcoal mb-4">
        {title}
      </h2>
      <div
        className={`divider-gold mb-4 ${align === 'left' ? 'mx-0' : 'mx-auto'}`}
      />
      {subtitle && (
        <p className="text-gray-soft text-base md:text-lg max-w-2xl leading-relaxed ${align === 'center' ? 'mx-auto' : ''}">
          {subtitle}
        </p>
      )}
    </AnimatedSection>
  );
}
