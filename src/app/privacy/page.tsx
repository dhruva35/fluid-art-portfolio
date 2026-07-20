import { Metadata } from 'next';
import { siteConfig } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: 'Privacy Policy',
};

export default function PrivacyPage() {
  return (
    <div className="pt-22 pb-section">
      <section className="py-16 bg-cream-50">
        <div className="container-wide max-w-3xl mx-auto">
          <h1 className="font-serif text-3xl md:text-display font-bold text-charcoal mb-4 text-center">
            Privacy Policy
          </h1>
          <div className="divider-gold mb-4" />
          <p className="text-center text-gray-soft text-sm mb-12">
            Last updated: July 2024
          </p>

          <div className="prose-custom space-y-8">
            <section>
              <h2 className="font-serif text-xl font-semibold text-charcoal mb-3">
                1. Information We Collect
              </h2>
              <p className="text-gray-soft text-sm leading-relaxed">
                When you contact us through our website forms (inquiry, commission,
                or contact forms), we collect your name, email address, phone
                number (if provided), and the content of your message. We do not
                collect payment information through our website — all payments are
                handled directly between you and the artist.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-semibold text-charcoal mb-3">
                2. How We Use Your Information
              </h2>
              <p className="text-gray-soft text-sm leading-relaxed">
                We use your information solely to respond to your inquiries,
                process commission requests, and communicate about artwork
                purchases. We do not sell, rent, or share your personal
                information with third parties.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-semibold text-charcoal mb-3">
                3. Data Storage
              </h2>
              <p className="text-gray-soft text-sm leading-relaxed">
                Contact form submissions are sent directly to the artist&apos;s
                email. We do not store your personal data on our servers or in
                any database. Your information resides only in the email
                communications between you and the artist.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-semibold text-charcoal mb-3">
                4. Cookies
              </h2>
              <p className="text-gray-soft text-sm leading-relaxed">
                This website uses only essential cookies required for the website
                to function. We do not use tracking cookies, analytics cookies, or
                advertising cookies.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-semibold text-charcoal mb-3">
                5. Third-Party Services
              </h2>
              <p className="text-gray-soft text-sm leading-relaxed">
                Our website is hosted on Vercel. Images are served through
                Next.js Image optimization. Google Fonts are used for typography.
                These services may collect basic usage data as described in their
                respective privacy policies.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-semibold text-charcoal mb-3">
                6. Your Rights
              </h2>
              <p className="text-gray-soft text-sm leading-relaxed">
                You have the right to request access to, correction of, or
                deletion of any personal information we may have. To exercise
                these rights, please contact us at{' '}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-gold hover:underline"
                >
                  {siteConfig.contact.email}
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-semibold text-charcoal mb-3">
                7. Contact
              </h2>
              <p className="text-gray-soft text-sm leading-relaxed">
                If you have any questions about this privacy policy, please
                contact us at{' '}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-gold hover:underline"
                >
                  {siteConfig.contact.email}
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
