'use client';

import { motion } from 'framer-motion';
import { Palette, ArrowLeft, Home } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream-100 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="text-center max-w-md"
      >
        {/* Animated paint splatter icon */}
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="mb-8"
        >
          <div className="w-24 h-24 rounded-full bg-gold/10 flex items-center justify-center mx-auto">
            <Palette size={48} className="text-gold" />
          </div>
        </motion.div>

        <h1 className="font-serif text-6xl font-bold text-charcoal mb-4">404</h1>
        <h2 className="font-serif text-2xl font-semibold text-charcoal mb-4">
          This Canvas is Empty
        </h2>
        <p className="text-gray-soft mb-8 leading-relaxed">
          The page you&apos;re looking for seems to have flowed away. Perhaps it
          was part of an experimental pour that didn&apos;t quite work out.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button href="/" variant="primary" icon={<Home size={16} />}>
            Go Home
          </Button>
          <Button href="/gallery" variant="outline" icon={<ArrowLeft size={16} />}>
            View Gallery
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
