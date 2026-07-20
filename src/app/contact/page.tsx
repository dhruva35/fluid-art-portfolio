'use client';

import { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Send,
  CheckCircle,
  AlertCircle,
  Instagram,
  Clock,
} from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { siteConfig } from '@/data/siteConfig';
import { isValidEmail, isValidPhone, getWhatsAppUrl } from '@/lib/utils';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'success'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Required';
    if (!formData.email.trim()) newErrors.email = 'Required';
    else if (!isValidEmail(formData.email)) newErrors.email = 'Invalid email';
    if (!formData.message.trim()) newErrors.message = 'Required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const subject = formData.subject || `Contact Form - ${siteConfig.name}`;
    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      formData.phone ? `Phone: ${formData.phone}` : '',
      `\nMessage:\n${formData.message}`,
    ]
      .filter(Boolean)
      .join('\n');

    window.open(
      `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
      '_blank'
    );

    setStatus('success');
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setStatus('idle');
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const inputClass =
    'w-full px-4 py-3 rounded-xl border border-cream-400 bg-cream-50 text-charcoal text-sm focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all';

  return (
    <div className="pt-22 pb-section">
      {/* Header */}
      <section className="py-16 md:py-20 bg-cream-50">
        <div className="container-wide">
          <SectionHeading
            title="Get in Touch"
            subtitle="Have a question about an artwork, want to discuss a purchase, or just want to say hello? We'd love to hear from you."
          />
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-section bg-cream-100">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info — Left */}
            <div className="lg:col-span-2 space-y-8">
              <AnimatedSection direction="left">
                <h3 className="font-serif text-xl font-semibold text-charcoal mb-6">
                  Contact Information
                </h3>

                <div className="space-y-5">
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold flex-shrink-0 group-hover:bg-gold group-hover:text-charcoal transition-all">
                      <Mail size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-charcoal">Email</p>
                      <p className="text-sm text-gray-soft group-hover:text-gold transition-colors">
                        {siteConfig.contact.email}
                      </p>
                    </div>
                  </a>

                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold flex-shrink-0 group-hover:bg-gold group-hover:text-charcoal transition-all">
                      <Phone size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-charcoal">Phone</p>
                      <p className="text-sm text-gray-soft group-hover:text-gold transition-colors">
                        {siteConfig.contact.phone}
                      </p>
                    </div>
                  </a>

                  <a
                    href={getWhatsAppUrl(
                      siteConfig.contact.whatsapp,
                      `Hi! I'd like to know more about your artworks.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold flex-shrink-0 group-hover:bg-gold group-hover:text-charcoal transition-all">
                      <MessageCircle size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-charcoal">
                        WhatsApp
                      </p>
                      <p className="text-sm text-gray-soft group-hover:text-gold transition-colors">
                        Quick message on WhatsApp
                      </p>
                    </div>
                  </a>

                  {siteConfig.social.instagram && (
                    <a
                      href={siteConfig.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold flex-shrink-0 group-hover:bg-gold group-hover:text-charcoal transition-all">
                        <Instagram size={18} />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-charcoal">
                          Instagram
                        </p>
                        <p className="text-sm text-gray-soft group-hover:text-gold transition-colors">
                          {siteConfig.social.instagramHandle}
                        </p>
                      </div>
                    </a>
                  )}

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold flex-shrink-0">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-charcoal">
                        Location
                      </p>
                      <p className="text-sm text-gray-soft">
                        {siteConfig.contact.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold flex-shrink-0">
                      <Clock size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-charcoal">
                        Response Time
                      </p>
                      <p className="text-sm text-gray-soft">
                        We typically respond within 24 hours
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Contact Form — Right */}
            <div className="lg:col-span-3">
              <AnimatedSection direction="right">
                <div className="bg-cream-50 rounded-2xl border border-cream-300/40 p-6 md:p-8 shadow-soft">
                  <h3 className="font-serif text-xl font-semibold text-charcoal mb-6">
                    Send a Message
                  </h3>

                  {status === 'success' ? (
                    <div className="text-center py-12">
                      <CheckCircle
                        size={48}
                        className="text-available mx-auto mb-4"
                      />
                      <h4 className="font-serif text-xl font-semibold text-charcoal mb-2">
                        Message Ready!
                      </h4>
                      <p className="text-gray-soft text-sm">
                        Your email client should have opened. Please send the
                        email to complete your message.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-charcoal mb-1.5">
                            Name <span className="text-sold">*</span>
                          </label>
                          <input
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleChange}
                            className={inputClass}
                            placeholder="Your name"
                          />
                          {errors.name && (
                            <p className="mt-1 text-xs text-sold flex items-center gap-1">
                              <AlertCircle size={12} /> {errors.name}
                            </p>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-charcoal mb-1.5">
                            Email <span className="text-sold">*</span>
                          </label>
                          <input
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={inputClass}
                            placeholder="your@email.com"
                          />
                          {errors.email && (
                            <p className="mt-1 text-xs text-sold flex items-center gap-1">
                              <AlertCircle size={12} /> {errors.email}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-charcoal mb-1.5">
                            Phone (optional)
                          </label>
                          <input
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            className={inputClass}
                            placeholder="+91 98765 43210"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-charcoal mb-1.5">
                            Subject
                          </label>
                          <input
                            name="subject"
                            type="text"
                            value={formData.subject}
                            onChange={handleChange}
                            className={inputClass}
                            placeholder="What's this about?"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-1.5">
                          Message <span className="text-sold">*</span>
                        </label>
                        <textarea
                          name="message"
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          className={`${inputClass} resize-none`}
                          placeholder="Your message..."
                        />
                        {errors.message && (
                          <p className="mt-1 text-xs text-sold flex items-center gap-1">
                            <AlertCircle size={12} /> {errors.message}
                          </p>
                        )}
                      </div>

                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        className="w-full sm:w-auto"
                        icon={<Send size={16} />}
                      >
                        Send Message
                      </Button>
                    </form>
                  )}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
