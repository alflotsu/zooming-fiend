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

interface PasswordResetEmailProps {
  userFirstName?: string;
  resetUrl?: string;
  requestTime?: string;
  userAgent?: string;
  ipAddress?: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : '';

export const PasswordResetEmail = ({
  userFirstName = 'Kwame',
  resetUrl = 'https://velourcity.com/reset-password?token=abc123',
  requestTime = new Date().toLocaleString('en-GB', { 
    timeZone: 'Africa/Accra',
    dateStyle: 'full',
    timeStyle: 'short'
  }),
  userAgent = 'Chrome on Windows',
  ipAddress = '192.168.1.1',
}: PasswordResetEmailProps) => (
  <Html>
    <Head />
    <Preview>
      Reset your Velourcity password - Action required
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
          <Heading style={h1}>Password Reset Request</Heading>
        </Section>

        <Section style={alertSection}>
          <div style={alertBox}>
            <Text style={alertIcon}>🔐</Text>
            <Text style={alertText}>
              <strong>Security Alert:</strong> Someone requested a password reset for your account.
            </Text>
          </div>
        </Section>

        <Section style={contentSection}>
          <Text style={greeting}>
            Hello {userFirstName},
          </Text>
          <Text style={paragraph}>
            We received a request to reset the password for your Velourcity account. 
            If you made this request, click the button below to create a new password.
          </Text>

          <Section style={ctaSection}>
            <Button pX={20} pY={12} style={button} href={resetUrl}>
              Reset Your Password
            </Button>
          </Section>

          <Text style={paragraph}>
            Or copy and paste this link into your browser:
          </Text>
          <Text style={linkText}>
            <Link href={resetUrl} style={resetLink}>
              {resetUrl}
            </Link>
          </Text>

          <Section style={warningSection}>
            <Text style={warningTitle}>⚠️ Important Security Information</Text>
            <Text style={paragraph}>
              • This link will expire in <strong>1 hour</strong> for your security
            </Text>
            <Text style={paragraph}>
              • You can only use this link once
            </Text>
            <Text style={paragraph}>
              • If you didn't request this reset, please ignore this email
            </Text>
          </Section>
        </Section>

        <Hr style={hr} />

        <Section style={detailsSection}>
          <Heading as="h3" style={h3}>
            Request Details
          </Heading>
          <Text style={detailItem}>
            <strong>Time:</strong> {requestTime}
          </Text>
          <Text style={detailItem}>
            <strong>Device:</strong> {userAgent}
          </Text>
          <Text style={detailItem}>
            <strong>Location:</strong> {ipAddress}
          </Text>
        </Section>

        <Hr style={hr} />

        <Section style={helpSection}>
          <Heading as="h3" style={h3}>
            Need Help?
          </Heading>
          <Text style={paragraph}>
            If you didn't request this password reset or have concerns about your account security:
          </Text>
          <Text style={contactInfo}>
            📞 Call us: +233 50 123 4567<br/>
            📧 Email us: security@velourcity.com<br/>
            💬 WhatsApp: +233 50 123 4567
          </Text>
          <Text style={paragraph}>
            Our security team is available 24/7 to assist you.
          </Text>
        </Section>

        <Hr style={hr} />

        <Section style={footerSection}>
          <Text style={footerText}>
            This email was sent to you because someone requested a password reset for your Velourcity account.
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

export default PasswordResetEmail;

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
  fontSize: '28px',
  fontWeight: 'bold',
  textAlign: 'center' as const,
  margin: '0',
};

const h3 = {
  color: '#1f2937',
  fontSize: '20px',
  fontWeight: 'bold',
  margin: '24px 0 12px',
};

const alertSection = {
  marginBottom: '32px',
};

const alertBox = {
  backgroundColor: '#fef3c7',
  border: '2px solid #f59e0b',
  borderRadius: '8px',
  padding: '16px',
  display: 'flex',
  alignItems: 'center',
  textAlign: 'left' as const,
};

const alertIcon = {
  fontSize: '24px',
  marginRight: '12px',
  minWidth: '32px',
};

const alertText = {
  color: '#92400e',
  fontSize: '16px',
  fontWeight: '600',
  margin: '0',
};

const contentSection = {
  marginBottom: '32px',
};

const greeting = {
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

const ctaSection = {
  textAlign: 'center' as const,
  margin: '32px 0',
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
};

const linkText = {
  margin: '16px 0 32px',
  textAlign: 'center' as const,
};

const resetLink = {
  color: '#dc2626',
  textDecoration: 'underline',
  fontSize: '14px',
  wordBreak: 'break-all' as const,
};

const warningSection = {
  backgroundColor: '#fef2f2',
  border: '1px solid #fecaca',
  borderRadius: '8px',
  padding: '20px',
  margin: '24px 0',
};

const warningTitle = {
  color: '#dc2626',
  fontSize: '16px',
  fontWeight: 'bold',
  margin: '0 0 12px',
};

const detailsSection = {
  backgroundColor: '#f9fafb',
  borderRadius: '8px',
  padding: '20px',
  marginBottom: '32px',
};

const detailItem = {
  color: '#4b5563',
  fontSize: '14px',
  margin: '8px 0',
};

const helpSection = {
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
