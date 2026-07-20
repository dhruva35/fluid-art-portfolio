import Link from 'next/link';
import { Instagram, Mail, Phone, MapPin, Heart } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-cream-200 mt-section">
      {/* Main Footer Content */}
      <div className="container-wide py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <h3 className="font-serif text-2xl font-bold text-cream-50 mb-4">
              {siteConfig.name}
            </h3>
            <p className="text-cream-400 text-sm leading-relaxed mb-6">
              {siteConfig.tagline}. Each artwork is a unique expression of color,
              movement, and emotion — handcrafted with passion.
            </p>
            <div className="flex gap-3">
              {siteConfig.social.instagram && (
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-cream-400/20 flex items-center justify-center text-cream-400 hover:bg-gold hover:text-charcoal hover:border-gold transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
              )}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="w-10 h-10 rounded-full border border-cream-400/20 flex items-center justify-center text-cream-400 hover:bg-gold hover:text-charcoal hover:border-gold transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="w-10 h-10 rounded-full border border-cream-400/20 flex items-center justify-center text-cream-400 hover:bg-gold hover:text-charcoal hover:border-gold transition-all duration-300"
                aria-label="Phone"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-cream-50 mb-5">
              Explore
            </h4>
            <ul className="space-y-3">
              {siteConfig.footerLinks.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream-400 text-sm hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-cream-50 mb-5">
              Information
            </h4>
            <ul className="space-y-3">
              {siteConfig.footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream-400 text-sm hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <span className="text-cream-400 text-sm flex items-center gap-2">
                  <MapPin size={14} />
                  {siteConfig.shipping.countries}
                </span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-cream-50 mb-5">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-sm text-cream-400">
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-gold" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-gold transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-gold" />
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="hover:text-gold transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-2 mt-4">
                <MapPin size={14} className="text-gold mt-0.5" />
                <span>{siteConfig.contact.address}</span>
              </li>
            </ul>
            <p className="text-xs text-cream-500 mt-6 leading-relaxed">
              {siteConfig.paymentNote}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cream-400/10">
        <div className="container-wide py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-cream-500">
          <p>
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Made with <Heart size={12} className="text-gold fill-gold" /> in India
          </p>
        </div>
      </div>
    </footer>
  );
}
