import { Metadata } from 'next';
import { siteConfig } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
};

export default function TermsPage() {
  return (
    <div className="pt-22 pb-section">
      <section className="py-16 bg-cream-50">
        <div className="container-wide max-w-3xl mx-auto">
          <h1 className="font-serif text-3xl md:text-display font-bold text-charcoal mb-4 text-center">
            Terms & Conditions
          </h1>
          <div className="divider-gold mb-4" />
          <p className="text-center text-gray-soft text-sm mb-12">
            Last updated: July 2024
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="font-serif text-xl font-semibold text-charcoal mb-3">
                1. General
              </h2>
              <p className="text-gray-soft text-sm leading-relaxed">
                By accessing and using this website, you agree to these terms and
                conditions. {siteConfig.name} reserves the right to modify these
                terms at any time without prior notice.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-semibold text-charcoal mb-3">
                2. Artwork Purchases
              </h2>
              <p className="text-gray-soft text-sm leading-relaxed mb-3">
                All artwork purchases are made through direct communication with
                the artist. Prices displayed on the website are indicative and may
                vary. The final price will be confirmed during your conversation
                with the artist.
              </p>
              <p className="text-gray-soft text-sm leading-relaxed">
                {siteConfig.paymentNote}
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-semibold text-charcoal mb-3">
                3. Shipping
              </h2>
              <p className="text-gray-soft text-sm leading-relaxed">
                {siteConfig.shipping.note} Shipping is available within{' '}
                {siteConfig.shipping.countries} only. Estimated delivery is{' '}
                {siteConfig.shipping.estimatedDays}. Shipping costs will be
                communicated before purchase confirmation.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-semibold text-charcoal mb-3">
                4. Returns & Refunds
              </h2>
              <p className="text-gray-soft text-sm leading-relaxed">
                Due to the unique, handmade nature of each artwork, we do not
                accept returns or offer refunds. However, if your artwork arrives
                damaged during shipping, please contact us within 48 hours with
                photographs, and we will work with you to resolve the issue.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-semibold text-charcoal mb-3">
                5. Commissions
              </h2>
              <p className="text-gray-soft text-sm leading-relaxed">
                Custom commission pricing, timeline, and specifications are agreed
                upon between the artist and the client before work begins. A
                non-refundable deposit may be required to start the commission.
                Specific terms will be communicated on a per-commission basis.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-semibold text-charcoal mb-3">
                6. Intellectual Property
              </h2>
              <p className="text-gray-soft text-sm leading-relaxed">
                All artwork images, designs, and content on this website are the
                intellectual property of {siteConfig.name}. Reproduction,
                distribution, or use of any content without written permission is
                prohibited.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-semibold text-charcoal mb-3">
                7. Certificate of Authenticity
              </h2>
              <p className="text-gray-soft text-sm leading-relaxed">
                {siteConfig.certificateNote} The certificate includes the artwork
                title, medium, dimensions, date of creation, and the artist&apos;s
                signature.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl font-semibold text-charcoal mb-3">
                8. Contact
              </h2>
              <p className="text-gray-soft text-sm leading-relaxed">
                For questions about these terms, please contact us at{' '}
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
