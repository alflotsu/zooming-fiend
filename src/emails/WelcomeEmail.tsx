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

interface WelcomeEmailProps {
  userFirstName?: string;
  userEmail?: string;
  loginUrl?: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : '';

export const WelcomeEmail = ({
  userFirstName = 'Kwame',
  userEmail = 'kwame@example.com',
  loginUrl = 'https://velourcity.com/login',
}: WelcomeEmailProps) => (
  <Html>
    <Head />
    <Preview>
      Welcome to Velourcity - Ghana's Premier Delivery Service! 🚀
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
          <Heading style={h1}>Welcome to Velourcity!</Heading>
        </Section>

        <Section style={heroSection}>
          <Text style={heroText}>
            Hello {userFirstName}, welcome to Ghana's fastest growing delivery platform! 🇬🇭
          </Text>
          <Text style={paragraph}>
            Thank you for joining Velourcity. We're excited to help you send and receive 
            packages across Ghana with speed, reliability, and care.
          </Text>
        </Section>

        <Section style={featuresSection}>
          <Heading as="h2" style={h2}>
            What you can do with Velourcity:
          </Heading>
          <div style={featureList}>
            <div style={feature}>
              <Text style={featureIcon}>📦</Text>
              <Text style={featureText}>
                <strong>Same-Day Delivery:</strong> Send packages within Accra, Kumasi, and Tamale
              </Text>
            </div>
            <div style={feature}>
              <Text style={featureIcon}>🚚</Text>
              <Text style={featureText}>
                <strong>Real-Time Tracking:</strong> Track your deliveries every step of the way
              </Text>
            </div>
            <div style={feature}>
              <Text style={featureIcon}>💰</Text>
              <Text style={featureText}>
                <strong>Affordable Rates:</strong> Competitive pricing for all delivery sizes
              </Text>
            </div>
            <div style={feature}>
              <Text style={featureIcon}>🔒</Text>
              <Text style={featureText}>
                <strong>Secure & Insured:</strong> Your packages are safe with us
              </Text>
            </div>
          </div>
        </Section>

        <Section style={ctaSection}>
          <Button pX={20} pY={12} style={button} href={loginUrl}>
            Start Your First Delivery
          </Button>
          <Text style={paragraph}>
            Ready to get started? Log in to your account and schedule your first delivery.
          </Text>
        </Section>

        <Hr style={hr} />

        <Section style={supportSection}>
          <Heading as="h3" style={h3}>
            Need Help Getting Started?
          </Heading>
          <Text style={paragraph}>
            Our customer support team is here to help you 24/7:
          </Text>
          <Text style={contactInfo}>
            📞 Phone: +233 50 123 4567<br/>
            📧 Email: support@velourcity.com<br/>
            💬 WhatsApp: +233 50 123 4567
          </Text>
        </Section>

        <Hr style={hr} />

        <Section style={footerSection}>
          <Text style={footerText}>
            Follow us for updates and delivery tips:
          </Text>
          <div style={socialLinks}>
            <Link href="https://twitter.com/velourcity" style={socialLink}>Twitter</Link>
            <Link href="https://facebook.com/velourcity" style={socialLink}>Facebook</Link>
            <Link href="https://instagram.com/velourcity" style={socialLink}>Instagram</Link>
          </div>
          <Text style={footerText}>
            Velourcity Ghana Ltd. | Accra, Ghana<br/>
            You're receiving this email because you signed up for Velourcity with {userEmail}
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default WelcomeEmail;

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
  marginBottom: '32px',
};

const logo = {
  margin: '0 auto 16px',
};

const h1 = {
  color: '#1f2937',
  fontSize: '32px',
  fontWeight: 'bold',
  textAlign: 'center' as const,
  margin: '0',
};

const h2 = {
  color: '#1f2937',
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '32px 0 16px',
};

const h3 = {
  color: '#1f2937',
  fontSize: '20px',
  fontWeight: 'bold',
  margin: '24px 0 12px',
};

const heroSection = {
  backgroundColor: '#f3f4f6',
  padding: '24px',
  borderRadius: '8px',
  marginBottom: '32px',
  textAlign: 'center' as const,
};

const heroText = {
  color: '#1f2937',
  fontSize: '18px',
  fontWeight: '600',
  margin: '0 0 16px',
};

const paragraph = {
  color: '#6b7280',
  fontSize: '16px',
  lineHeight: '24px',
  margin: '0 0 16px',
};

const featuresSection = {
  marginBottom: '32px',
};

const featureList = {
  margin: '0',
};

const feature = {
  display: 'flex',
  alignItems: 'flex-start',
  marginBottom: '16px',
};

const featureIcon = {
  fontSize: '24px',
  marginRight: '12px',
  minWidth: '36px',
};

const featureText = {
  color: '#4b5563',
  fontSize: '16px',
  lineHeight: '24px',
  margin: '0',
};

const ctaSection = {
  textAlign: 'center' as const,
  marginBottom: '32px',
};

const button = {
  backgroundColor: '#dc2626',
  borderRadius: '8px',
  color: '#ffffff',
  fontSize: '16px',
  fontWeight: 'bold',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block',
  marginBottom: '16px',
};

const supportSection = {
  marginBottom: '32px',
};

const contactInfo = {
  color: '#4b5563',
  fontSize: '16px',
  lineHeight: '24px',
  margin: '16px 0',
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
};
