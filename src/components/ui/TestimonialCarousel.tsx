'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { testimonials, Testimonial } from '@/data/testimonials';

/**
 * Auto-advancing testimonial carousel with manual navigation and fade transitions.
 */
export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goNext = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const goPrev = useCallback(() => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  }, []);

  // Auto-advance every 5 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(goNext, 5000);
    return () => clearInterval(interval);
  }, [isPaused, goNext]);

  const testimonial = testimonials[current];

  return (
    <div
      className="relative max-w-3xl mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Quote Icon */}
      <div className="flex justify-center mb-6">
        <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
          <Quote size={20} className="text-gold" />
        </div>
      </div>

      {/* Testimonial Content */}
      <div className="min-h-[200px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-4">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className="text-gold fill-gold"
                />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="font-serif text-lg md:text-xl text-charcoal leading-relaxed mb-6 px-4">
              &ldquo;{testimonial.text}&rdquo;
            </blockquote>

            {/* Author */}
            <div>
              <p className="font-semibold text-charcoal">{testimonial.name}</p>
              <p className="text-sm text-gray-soft">{testimonial.location}</p>
              {testimonial.artwork && (
                <p className="text-xs text-gold mt-1">
                  Purchased: {testimonial.artwork}
                </p>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={goPrev}
          className="w-10 h-10 rounded-full border border-cream-400 hover:border-gold hover:text-gold flex items-center justify-center text-charcoal/60 transition-all"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={18} />
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current ? 'bg-gold w-6' : 'bg-cream-400 hover:bg-gold/50'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={goNext}
          className="w-10 h-10 rounded-full border border-cream-400 hover:border-gold hover:text-gold flex items-center justify-center text-charcoal/60 transition-all"
          aria-label="Next testimonial"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
