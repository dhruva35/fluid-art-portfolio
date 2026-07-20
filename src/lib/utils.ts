/**
 * Utility Functions
 * =================
 * Shared helpers used across the project.
 */

/**
 * Merges class names conditionally (similar to clsx/cn).
 * Filters out falsy values and joins with spaces.
 */
export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Format a price string for display.
 * If price is already formatted (contains ₹), return as-is.
 * Otherwise, format as Indian Rupee.
 */
export function formatPrice(price: string | number): string {
  if (typeof price === 'string') return price;
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(price);
}

/**
 * Generate a WhatsApp share URL with pre-filled message.
 */
export function getWhatsAppUrl(phone: string, message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${phone.replace(/[^0-9]/g, '')}?text=${encoded}`;
}

/**
 * Generate share URLs for different platforms.
 */
export function getShareUrls(url: string, title: string) {
  const encoded = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  return {
    whatsapp: `https://wa.me/?text=${encodedTitle}%20${encoded}`,
    twitter: `https://twitter.com/intent/tweet?url=${encoded}&text=${encodedTitle}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encoded}`,
    pinterest: `https://pinterest.com/pin/create/button/?url=${encoded}&description=${encodedTitle}`,
    copyLink: url,
  };
}

/**
 * Truncate text to a specified length with ellipsis.
 */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '…';
}

/**
 * Simple email validation.
 */
export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
 * Simple phone validation (Indian format).
 */
export function isValidPhone(phone: string): boolean {
  return /^[+]?[0-9]{10,13}$/.test(phone.replace(/[\s-]/g, ''));
}
