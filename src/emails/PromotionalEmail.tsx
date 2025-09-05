import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

interface PromotionalEmailProps {
  customerName?: string;
  promotionTitle?: string;
  promotionDescription?: string;
  discountPercentage?: string;
  promoCode?: string;
  validUntil?: string;
  ctaText?: string;
  ctaUrl?: string;
  features?: string[];
  testimonial?: {
    text: string;
    author: string;
    location: string;
  };
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : '';

export const PromotionalEmail = ({
  customerName = 'Akosua',
  promotionTitle = 'Limited Time: 30% Off All Deliveries!',
  promotionDescription = 'Celebrate with us! Get massive savings on all your deliveries this week.',
  discountPercentage = '30%',
  promoCode = 'SAVE30GH',
  validUntil = 'December 31, 2024',
  ctaText = 'Book Delivery Now',
  ctaUrl = 'https://velourcity.com/book',
  features = [
    'Same-day delivery across Accra',
    'Real-time package tracking',
    'Secure & insured deliveries',
    '24/7 customer support'
  ],
  testimonial = {
    text: "Velourcity saved my business! Their reliable delivery service helps me get products to customers on time, every time.",
    author: "Kwame Asante",
    location: "Business Owner, Kumasi"
  },
}: PromotionalEmailProps) => (
  <Html>
    <Head />
    <Preview>
      🎉 {discountPercentage} OFF All Deliveries - Limited Time Offer!
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={header}>
          <Img
            src={`${baseUrl}/static/velourcity-logo.png`}
            width="40"
            height="37"
            alt="Velourcity"
            style={logo}
          />
        </Section>

        <Section style={heroSection}>
          <div style={discountBadge}>
            <Text style={discountText}>{discountPercentage} OFF</Text>
          </div>
          <Heading style={h1}>{promotionTitle}</Heading>
          <Text style={heroText}>
            Hello {customerName}! 🎉
          </Text>
          <Text style={heroDescription}>
            {promotionDescription}
          </Text>
        </Section>

        <Section style={promoCodeSection}>
          <Text style={promoLabel}>Your Exclusive Promo Code:</Text>
          <div style={promoCodeBox}>
            <Text style={promoCodeText}>{promoCode}</Text>
          </div>
          <Text style={validText}>
            Valid until {validUntil} • Use at checkout
          </Text>
        </Section>

        <Section style={ctaSection}>
          <Button pX={24} pY={16} style={button} href={ctaUrl}>
            {ctaText} - Save {discountPercentage}!
          </Button>
          <Text style={ctaSubtext}>
            Fast, reliable delivery across Ghana 🇬🇭
          </Text>
        </Section>

        <Hr style={hr} />

        <Section style={featuresSection}>
          <Heading as="h2" style={h2}>
            Why Choose Velourcity? 🚀
          </Heading>
          <div style={featureGrid}>
            {features.map((feature, index) => (
              <div key={index} style={featureItem}>
                <Text style={featureIcon}>✓</Text>
                <Text style={featureText}>{feature}</Text>
              </div>
            ))}
          </div>
        </Section>

        <Hr style={hr} />

        <Section style={testimonialSection}>
          <Heading as="h3" style={h3}>
            What Our Customers Say 💬
          </Heading>
          <div style={testimonialCard}>
            <Text style={testimonialQuote}>"{testimonial.text}"</Text>
            <div style={testimonialAuthor}>
              <Text style={authorName}>{testimonial.author}</Text>
              <Text style={authorLocation}>{testimonial.location}</Text>
            </div>
          </div>
        </Section>

        <Hr style={hr} />

        <Section style={urgencySection}>
          <div style={urgencyBox}>
            <Text style={urgencyIcon}>⏰</Text>
            <div style={urgencyContent}>
              <Text style={urgencyTitle}>Limited Time Offer!</Text>
              <Text style={urgencyText}>
                This {discountPercentage} discount expires on {validUntil}. Don't miss out!
              </Text>
            </div>
          </div>
        </Section>

        <Section style={finalCtaSection}>
          <Button pX={24} pY={16} style={finalButton} href={ctaUrl}>
            Claim Your {discountPercentage} Discount Now
          </Button>
        </Section>

        <Hr style={hr} />

        <Section style={serviceAreasSection}>
          <Heading as="h3" style={h3}>
            🌍 We Deliver Across Ghana
          </Heading>
          <div style={cityList}>
            <Text style={cityItem}>🏙️ Accra & Greater Accra</Text>
            <Text style={cityItem}>🌳 Kumasi & Ashanti Region</Text>
            <Text style={cityItem}>🏛️ Tamale & Northern Region</Text>
            <Text style={cityItem}>🏝️ Cape Coast & Central Region</Text>
          </div>
          <Text style={moreLocationsText}>
            ...and many more locations across Ghana!
          </Text>
        </Section>

        <Hr style={hr} />

        <Section style={footerSection}>
          <Text style={footerText}>
            Follow us for more deals and updates:
          </Text>
          <div style={socialLinks}>
            <Link href="https://twitter.com/velourcity" style={socialLink}>Twitter</Link>
            <Link href="https://facebook.com/velourcity" style={socialLink}>Facebook</Link>
            <Link href="https://instagram.com/velourcity" style={socialLink}>Instagram</Link>
            <Link href="https://linkedin.com/company/velourcity" style={socialLink}>LinkedIn</Link>
          </div>
          <Text style={footerText}>
            Questions? Reply to this email or call +233 50 123 4567
          </Text>
          <Text style={unsubscribeText}>
            <Link href="https://velourcity.com/unsubscribe" style={unsubscribeLink}>
              Unsubscribe from promotional emails
            </Link>
          </Text>
          <Text style={footerText}>
            Velourcity Ghana Ltd. | Accra, Ghana<br/>
            © 2024 All rights reserved.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default PromotionalEmail;

// Styles
const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  maxWidth: '600px',
};

const header = {
  textAlign: 'center' as const,
  marginBottom: '24px',
};

const logo = {
  margin: '0 auto',
};

const heroSection = {
  textAlign: 'center' as const,
  backgroundColor: '#fef2f2',
  borderRadius: '16px',
  padding: '32px 24px',
  marginBottom: '32px',
  position: 'relative' as const,
};

const discountBadge = {
  backgroundColor: '#dc2626',
  color: '#ffffff',
  borderRadius: '50px',
  padding: '8px 24px',
  display: 'inline-block',
  marginBottom: '16px',
};

const discountText = {
  fontSize: '18px',
  fontWeight: 'bold',
  margin: '0',
};

const h1 = {
  color: '#1f2937',
  fontSize: '32px',
  fontWeight: 'bold',
  textAlign: 'center' as const,
  margin: '0 0 16px',
  lineHeight: '36px',
};

const h2 = {
  color: '#1f2937',
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '0 0 20px',
  textAlign: 'center' as const,
};

const h3 = {
  color: '#1f2937',
  fontSize: '20px',
  fontWeight: 'bold',
  margin: '0 0 16px',
  textAlign: 'center' as const,
};

const heroText = {
  color: '#1f2937',
  fontSize: '20px',
  fontWeight: '600',
  margin: '0 0 12px',
};

const heroDescription = {
  color: '#4b5563',
  fontSize: '18px',
  lineHeight: '26px',
  margin: '0',
};

const promoCodeSection = {
  textAlign: 'center' as const,
  marginBottom: '32px',
};

const promoLabel = {
  color: '#6b7280',
  fontSize: '16px',
  margin: '0 0 12px',
};

const promoCodeBox = {
  backgroundColor: '#1f2937',
  border: '3px dashed #dc2626',
  borderRadius: '12px',
  padding: '16px',
  marginBottom: '12px',
};

const promoCodeText = {
  color: '#ffffff',
  fontSize: '24px',
  fontWeight: 'bold',
  letterSpacing: '2px',
  margin: '0',
};

const validText = {
  color: '#dc2626',
  fontSize: '14px',
  fontWeight: '600',
  margin: '0',
};

const ctaSection = {
  textAlign: 'center' as const,
  marginBottom: '32px',
};

const button = {
  backgroundColor: '#dc2626',
  borderRadius: '12px',
  color: '#ffffff',
  fontSize: '18px',
  fontWeight: 'bold',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block',
  marginBottom: '12px',
};

const ctaSubtext = {
  color: '#6b7280',
  fontSize: '16px',
  margin: '0',
};

const featuresSection = {
  marginBottom: '32px',
};

const featureGrid = {
  display: 'grid',
  gap: '12px',
};

const featureItem = {
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#f9fafb',
  padding: '12px 16px',
  borderRadius: '8px',
};

const featureIcon = {
  color: '#22c55e',
  fontSize: '18px',
  fontWeight: 'bold',
  marginRight: '12px',
  minWidth: '24px',
};

const featureText = {
  color: '#1f2937',
  fontSize: '16px',
  margin: '0',
};

const testimonialSection = {
  marginBottom: '32px',
};

const testimonialCard = {
  backgroundColor: '#f3f4f6',
  borderRadius: '12px',
  padding: '24px',
  textAlign: 'center' as const,
};

const testimonialQuote = {
  color: '#1f2937',
  fontSize: '18px',
  fontStyle: 'italic',
  lineHeight: '26px',
  margin: '0 0 16px',
};

const testimonialAuthor = {
  borderTop: '1px solid #e5e7eb',
  paddingTop: '16px',
};

const authorName = {
  color: '#1f2937',
  fontSize: '16px',
  fontWeight: '600',
  margin: '0 0 4px',
};

const authorLocation = {
  color: '#6b7280',
  fontSize: '14px',
  margin: '0',
};

const urgencySection = {
  marginBottom: '32px',
};

const urgencyBox = {
  backgroundColor: '#fef3c7',
  border: '2px solid #f59e0b',
  borderRadius: '12px',
  padding: '20px',
  display: 'flex',
  alignItems: 'center',
};

const urgencyIcon = {
  fontSize: '32px',
  marginRight: '16px',
  minWidth: '40px',
};

const urgencyContent = {
  flex: '1',
};

const urgencyTitle = {
  color: '#92400e',
  fontSize: '18px',
  fontWeight: 'bold',
  margin: '0 0 8px',
};

const urgencyText = {
  color: '#92400e',
  fontSize: '16px',
  margin: '0',
};

const finalCtaSection = {
  textAlign: 'center' as const,
  marginBottom: '32px',
};

const finalButton = {
  backgroundColor: '#dc2626',
  borderRadius: '12px',
  color: '#ffffff',
  fontSize: '18px',
  fontWeight: 'bold',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block',
  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
};

const serviceAreasSection = {
  marginBottom: '32px',
};

const cityList = {
  display: 'grid',
  gap: '8px',
  marginBottom: '16px',
};

const cityItem = {
  color: '#4b5563',
  fontSize: '16px',
  margin: '0',
  textAlign: 'center' as const,
};

const moreLocationsText = {
  color: '#6b7280',
  fontSize: '14px',
  fontStyle: 'italic',
  textAlign: 'center' as const,
  margin: '0',
};

const hr = {
  borderColor: '#e5e7eb',
  margin: '32px 0',
};

const footerSection = {
  textAlign: 'center' as const,
};

const footerText = {
  color: '#9ca3af',
  fontSize: '14px',
  lineHeight: '20px',
  margin: '0 0 16px',
};

const socialLinks = {
  marginBottom: '16px',
};

const socialLink = {
  color: '#dc2626',
  textDecoration: 'none',
  margin: '0 16px',
  fontSize: '14px',
  fontWeight: '500',
};

const unsubscribeText = {
  margin: '24px 0 16px',
};

const unsubscribeLink = {
  color: '#6b7280',
  fontSize: '12px',
  textDecoration: 'underline',
};
