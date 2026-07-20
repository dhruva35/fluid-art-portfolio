'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Upload } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { isValidEmail, isValidPhone } from '@/lib/utils';
import Button from './Button';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

interface CommissionFormData {
  name: string;
  email: string;
  phone: string;
  canvasSize: string;
  preferredColors: string;
  styleReference: string;
  budget: string;
  timeline: string;
  description: string;
  additionalNotes: string;
}

const canvasSizeOptions = [
  'Small (up to 12" × 12")',
  'Medium (12" × 16" to 18" × 24")',
  'Large (24" × 30" to 30" × 40")',
  'Extra Large (36" × 48" or larger)',
  'Custom Size (specify in notes)',
];

const budgetOptions = [
  '₹5,000 – ₹10,000',
  '₹10,000 – ₹20,000',
  '₹20,000 – ₹35,000',
  '₹35,000+',
  'Flexible / Discuss',
];

/**
 * Commission request form with validation and mailto submission.
 */
export default function CommissionForm() {
  const [formData, setFormData] = useState<CommissionFormData>({
    name: '',
    email: '',
    phone: '',
    canvasSize: '',
    preferredColors: '',
    styleReference: '',
    budget: '',
    timeline: '',
    description: '',
    additionalNotes: '',
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
    if (!formData.description.trim())
      newErrors.description = 'Please describe what you envision';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');

    const subject = `Commission Request - ${siteConfig.name}`;
    const body = [
      `=== COMMISSION REQUEST ===\n`,
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      formData.phone ? `Phone: ${formData.phone}` : '',
      `\n--- Artwork Details ---`,
      formData.canvasSize ? `Canvas Size: ${formData.canvasSize}` : '',
      formData.preferredColors
        ? `Preferred Colors: ${formData.preferredColors}`
        : '',
      formData.styleReference
        ? `Style Reference: ${formData.styleReference}`
        : '',
      formData.budget ? `Budget: ${formData.budget}` : '',
      formData.timeline ? `Timeline: ${formData.timeline}` : '',
      `\nDescription:\n${formData.description}`,
      formData.additionalNotes
        ? `\nAdditional Notes:\n${formData.additionalNotes}`
        : '',
    ]
      .filter(Boolean)
      .join('\n');

    const mailtoLink = `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, '_blank');

    setStatus('success');

    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        canvasSize: '',
        preferredColors: '',
        styleReference: '',
        budget: '',
        timeline: '',
        description: '',
        additionalNotes: '',
      });
      setStatus('idle');
    }, 4000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const inputClass =
    'w-full px-4 py-3 rounded-xl border border-cream-400 bg-cream-50 text-charcoal text-sm focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all';
  const labelClass = 'block text-sm font-medium text-charcoal mb-1.5';

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-16 px-8 bg-cream-50 rounded-2xl border border-cream-300/40"
      >
        <CheckCircle size={56} className="text-available mx-auto mb-6" />
        <h3 className="font-serif text-2xl font-bold text-charcoal mb-3">
          Request Submitted!
        </h3>
        <p className="text-gray-soft max-w-md mx-auto">
          Your email client should have opened with the commission details.
          Please send the email, and the artist will review your request and get
          back to you within 2-3 business days.
        </p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-cream-50 rounded-2xl border border-cream-300/40 p-6 md:p-8 shadow-soft"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Name */}
        <div>
          <label htmlFor="commission-name" className={labelClass}>
            Name <span className="text-sold">*</span>
          </label>
          <input
            id="commission-name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className={inputClass}
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
          <label htmlFor="commission-email" className={labelClass}>
            Email <span className="text-sold">*</span>
          </label>
          <input
            id="commission-email"
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

        {/* Phone */}
        <div>
          <label htmlFor="commission-phone" className={labelClass}>
            Phone (optional)
          </label>
          <input
            id="commission-phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            className={inputClass}
            placeholder="+91 98765 43210"
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-sold flex items-center gap-1">
              <AlertCircle size={12} /> {errors.phone}
            </p>
          )}
        </div>

        {/* Canvas Size */}
        <div>
          <label htmlFor="commission-canvasSize" className={labelClass}>
            Preferred Canvas Size
          </label>
          <select
            id="commission-canvasSize"
            name="canvasSize"
            value={formData.canvasSize}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="">Select a size...</option>
            {canvasSizeOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        {/* Preferred Colors */}
        <div>
          <label htmlFor="commission-colors" className={labelClass}>
            Preferred Colors / Palette
          </label>
          <input
            id="commission-colors"
            name="preferredColors"
            type="text"
            value={formData.preferredColors}
            onChange={handleChange}
            className={inputClass}
            placeholder="e.g., Ocean blues, warm earth tones"
          />
        </div>

        {/* Style Reference */}
        <div>
          <label htmlFor="commission-style" className={labelClass}>
            Style Reference
          </label>
          <input
            id="commission-style"
            name="styleReference"
            type="text"
            value={formData.styleReference}
            onChange={handleChange}
            className={inputClass}
            placeholder="e.g., Fluid pour, resin, abstract"
          />
        </div>

        {/* Budget */}
        <div>
          <label htmlFor="commission-budget" className={labelClass}>
            Budget Range
          </label>
          <select
            id="commission-budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="">Select budget...</option>
            {budgetOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        {/* Timeline */}
        <div>
          <label htmlFor="commission-timeline" className={labelClass}>
            Preferred Timeline
          </label>
          <input
            id="commission-timeline"
            name="timeline"
            type="text"
            value={formData.timeline}
            onChange={handleChange}
            className={inputClass}
            placeholder="e.g., Within 2 weeks, No rush"
          />
        </div>

        {/* Description — Full Width */}
        <div className="md:col-span-2">
          <label htmlFor="commission-description" className={labelClass}>
            Artwork Description <span className="text-sold">*</span>
          </label>
          <textarea
            id="commission-description"
            name="description"
            rows={5}
            value={formData.description}
            onChange={handleChange}
            className={`${inputClass} resize-none`}
            placeholder="Describe what you envision — the mood, where it will hang, any specific imagery, or simply let us know your ideas..."
          />
          {errors.description && (
            <p className="mt-1 text-xs text-sold flex items-center gap-1">
              <AlertCircle size={12} /> {errors.description}
            </p>
          )}
        </div>

        {/* Additional Notes — Full Width */}
        <div className="md:col-span-2">
          <label htmlFor="commission-notes" className={labelClass}>
            Additional Notes (optional)
          </label>
          <textarea
            id="commission-notes"
            name="additionalNotes"
            rows={3}
            value={formData.additionalNotes}
            onChange={handleChange}
            className={`${inputClass} resize-none`}
            placeholder="Any other details you'd like to share..."
          />
        </div>
      </div>

      {/* Submit */}
      <div className="mt-6">
        <Button
          type="submit"
          variant="secondary"
          size="lg"
          className="w-full md:w-auto"
          disabled={status === 'submitting'}
          icon={<Send size={16} />}
        >
          {status === 'submitting' ? 'Submitting...' : 'Submit Commission Request'}
        </Button>
        <p className="text-xs text-gray-muted mt-3">
          This will open your email client with the details pre-filled. The
          artist will review and respond within 2-3 business days.
        </p>
      </div>
    </form>
  );
}
