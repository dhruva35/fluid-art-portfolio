'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Artwork } from '@/data/artworks';
import { siteConfig } from '@/data/siteConfig';
import { isValidEmail, isValidPhone } from '@/lib/utils';
import Button from './Button';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  artwork?: Artwork | null;
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

/**
 * Inquiry/booking modal for artworks. Pre-fills artwork info when opened from a specific artwork.
 * Submits via mailto link (no backend needed).
 */
export default function InquiryModal({
  isOpen,
  onClose,
  artwork,
}: InquiryModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!isValidEmail(formData.email)) newErrors.email = 'Invalid email';
    if (formData.phone && !isValidPhone(formData.phone))
      newErrors.phone = 'Invalid phone number';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');

    // Create mailto link with pre-filled info
    const subject = artwork
      ? `Inquiry about "${artwork.title}" - ${siteConfig.name}`
      : `General Inquiry - ${siteConfig.name}`;

    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      formData.phone ? `Phone: ${formData.phone}` : '',
      artwork ? `\nArtwork: ${artwork.title}` : '',
      artwork ? `Category: ${artwork.category}` : '',
      artwork ? `Price: ${artwork.price}` : '',
      `\nMessage:\n${formData.message}`,
    ]
      .filter(Boolean)
      .join('\n');

    // Open mailto
    const mailtoLink = `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, '_blank');

    setStatus('success');

    // Reset after delay
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', message: '' });
      setStatus('idle');
      onClose();
    }, 2500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-charcoal/50 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg bg-cream-50 rounded-2xl shadow-elevated overflow-hidden max-h-[90vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-cream-200 hover:bg-cream-300 flex items-center justify-center text-charcoal transition-colors z-10"
              aria-label="Close modal"
            >
              <X size={16} />
            </button>

            <div className="p-6 md:p-8">
              {/* Header */}
              <div className="mb-6">
                <h3 className="font-serif text-2xl font-bold text-charcoal">
                  {artwork ? 'Inquire About This Artwork' : 'Get in Touch'}
                </h3>
                <div className="divider-gold mt-3 mx-0" />
              </div>

              {/* Artwork Preview */}
              {artwork && (
                <div className="mb-6 p-4 bg-cream-200/50 rounded-xl flex gap-4 items-center">
                  <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-cream-300">
                    <img
                      src={artwork.images[0]}
                      alt={artwork.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-serif font-semibold text-charcoal">
                      {artwork.title}
                    </p>
                    <p className="text-sm text-gray-soft">{artwork.medium}</p>
                    <p className="text-sm font-semibold text-gold">
                      {artwork.price}
                    </p>
                  </div>
                </div>
              )}

              {/* Success State */}
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-8"
                >
                  <CheckCircle
                    size={48}
                    className="text-available mx-auto mb-4"
                  />
                  <h4 className="font-serif text-xl font-semibold text-charcoal mb-2">
                    Inquiry Sent!
                  </h4>
                  <p className="text-gray-soft text-sm">
                    Your email client should have opened. Please send the email to
                    complete your inquiry. We&apos;ll get back to you soon!
                  </p>
                </motion.div>
              ) : (
                /* Form */
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="inquiry-name"
                      className="block text-sm font-medium text-charcoal mb-1.5"
                    >
                      Name <span className="text-sold">*</span>
                    </label>
                    <input
                      id="inquiry-name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-cream-400 bg-cream-50 text-charcoal text-sm focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-sold flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="inquiry-email"
                      className="block text-sm font-medium text-charcoal mb-1.5"
                    >
                      Email <span className="text-sold">*</span>
                    </label>
                    <input
                      id="inquiry-email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-cream-400 bg-cream-50 text-charcoal text-sm focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-sold flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="inquiry-phone"
                      className="block text-sm font-medium text-charcoal mb-1.5"
                    >
                      Phone (optional)
                    </label>
                    <input
                      id="inquiry-phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-cream-400 bg-cream-50 text-charcoal text-sm focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
                      placeholder="+91 98765 43210"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-sold flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="inquiry-message"
                      className="block text-sm font-medium text-charcoal mb-1.5"
                    >
                      Message <span className="text-sold">*</span>
                    </label>
                    <textarea
                      id="inquiry-message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-cream-400 bg-cream-50 text-charcoal text-sm focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all resize-none"
                      placeholder={
                        artwork
                          ? `I'm interested in "${artwork.title}". I'd love to learn more about this piece...`
                          : 'Your message...'
                      }
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-sold flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit */}
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full mt-2"
                    disabled={status === 'submitting'}
                    icon={<Send size={16} />}
                  >
                    {status === 'submitting' ? 'Sending...' : 'Send Inquiry'}
                  </Button>

                  <p className="text-xs text-gray-muted text-center mt-3">
                    This will open your email client. All communications are
                    handled directly with the artist.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
