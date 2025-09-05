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
  Row,
  Section,
  Text,
  Column,
} from '@react-email/components';
import * as React from 'react';

interface DriverWelcomeEmailProps {
  driverName?: string;
  driverId?: string;
  dashboardUrl?: string;
  supportPhone?: string;
  vehicleInfo?: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : '';

export const DriverWelcomeEmail = ({
  driverName = 'Kwame',
  driverId = 'VEL001',
  dashboardUrl = 'https://driver.velourcity.com',
  supportPhone = '+233 (0) 123 456 789',
  vehicleInfo = 'Toyota Corolla - GR-2389-20',
}: DriverWelcomeEmailProps) => {
  const previewText = `Welcome to Velourcity, ${driverName}! Start earning today 🇬🇭`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Row>
              <Column style={headerImageContainer}>
                <Img
                  src={`${baseUrl}/static/velourcity-logo.png`}
                  width="120"
                  height="40"
                  alt="Velourcity"
                  style={headerImage}
                />
              </Column>
              <Column style={headerContent}>
                <Text style={headerTitle}>Velourcity</Text>
                <Text style={headerSubtitle}>Driver Partner</Text>
              </Column>
            </Row>
          </Section>

          {/* Welcome Banner */}
          <Section style={welcomeBanner}>
            <Text style={welcomeText}>
              🚗 Welcome to the Velourcity Family! 🇬🇭
            </Text>
          </Section>

          {/* Main Content */}
          <Section style={content}>
            <Text style={greeting}>
              Akwaaba {driverName}!
            </Text>
            
            <Text style={text}>
              We're thrilled to have you join Ghana's fastest-growing delivery network. 
              You're now part of a community that's revolutionizing how goods move across Accra and beyond.
            </Text>

            {/* Driver Info */}
            <Section style={driverSection}>
              <Heading style={h3}>Your Driver Profile</Heading>
              <Row style={infoRow}>
                <Column style={labelColumn}>
                  <Text style={label}>Driver ID:</Text>
                </Column>
                <Column>
                  <Text style={value}>#{driverId}</Text>
                </Column>
              </Row>
              <Row style={infoRow}>
                <Column style={labelColumn}>
                  <Text style={label}>Vehicle:</Text>
                </Column>
                <Column>
                  <Text style={value}>{vehicleInfo}</Text>
                </Column>
              </Row>
              <Row style={infoRow}>
                <Column style={labelColumn}>
                  <Text style={label}>Status:</Text>
                </Column>
                <Column>
                  <Text style={statusActive}>✅ Active & Ready</Text>
                </Column>
              </Row>
            </Section>

            {/* Getting Started */}
            <Section style={guideSection}>
              <Heading style={h3}>🚀 Getting Started</Heading>
              
              <div style={stepContainer}>
                <Text style={stepNumber}>1</Text>
                <div style={stepContent}>
                  <Text style={stepTitle}>Download the Driver App</Text>
                  <Text style={stepText}>
                    Get the Velourcity Driver app from Google Play Store or App Store 
                    and log in with your credentials.
                  </Text>
                </div>
              </div>

              <div style={stepContainer}>
                <Text style={stepNumber}>2</Text>
                <div style={stepContent}>
                  <Text style={stepTitle}>Go Online</Text>
                  <Text style={stepText}>
                    Toggle your status to "Online" in the app to start receiving delivery requests.
                  </Text>
                </div>
              </div>

              <div style={stepContainer}>
                <Text style={stepNumber}>3</Text>
                <div style={stepContent}>
                  <Text style={stepTitle}>Start Earning</Text>
                  <Text style={stepText}>
                    Accept deliveries, pick up packages, and deliver to customers. 
                    Track your earnings in real-time.
                  </Text>
                </div>
              </div>
            </Section>

            {/* Earnings Info */}
            <Section style={earningsSection}>
              <Heading style={h3}>💰 Earning Potential</Heading>
              <Row>
                <Column style={earningColumn}>
                  <Text style={earningNumber}>GHS 800+</Text>
                  <Text style={earningLabel}>Per Week</Text>
                </Column>
                <Column style={earningColumn}>
                  <Text style={earningNumber}>GHS 25</Text>
                  <Text style={earningLabel}>Per Delivery</Text>
                </Column>
                <Column style={earningColumn}>
                  <Text style={earningNumber}>24/7</Text>
                  <Text style={earningLabel}>Flexibility</Text>
                </Column>
              </Row>
            </Section>

            {/* Action Buttons */}
            <Section style={buttonContainer}>
              <Button style={primaryButton} href={dashboardUrl}>
                Access Driver Dashboard 📱
              </Button>
            </Section>

            <Section style={buttonContainer}>
              <Row>
                <Column style={buttonColumn}>
                  <Button style={secondaryButton} href="#">
                    Download App 📱
                  </Button>
                </Column>
                <Column style={buttonColumn}>
                  <Button style={secondaryButton} href="#">
                    Training Videos 🎓
                  </Button>
                </Column>
              </Row>
            </Section>

            {/* Support Info */}
            <Section style={supportSection}>
              <Heading style={h3}>🤝 We're Here to Help</Heading>
              <Text style={text}>
                Our driver support team is available 24/7 to help you succeed:
              </Text>
              
              <div style={contactRow}>
                <Text style={contactItem}>
                  📞 <Link href={`tel:${supportPhone}`} style={contactLink}>
                    {supportPhone}
                  </Link>
                </Text>
              </div>
              
              <div style={contactRow}>
                <Text style={contactItem}>
                  💬 <Link href="#" style={contactLink}>
                    WhatsApp Support
                  </Link>
                </Text>
              </div>
              
              <div style={contactRow}>
                <Text style={contactItem}>
                  📧 <Link href="mailto:drivers@velourcity.com" style={contactLink}>
                    drivers@velourcity.com
                  </Link>
                </Text>
              </div>
            </Section>

            <Hr style={hr} />

            <Text style={footerMessage}>
              Welcome to the future of delivery in Ghana! Let's build something amazing together. 🚀
            </Text>
          </Section>

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerSmall}>
              Velourcity Ghana Ltd. • Accra, Ghana
            </Text>
            <Text style={footerSmall}>
              <Link href="#" style={footerLink}>Driver Support</Link> | 
              <Link href="#" style={footerLink}> Terms</Link> | 
              <Link href="#" style={footerLink}> Privacy</Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default DriverWelcomeEmail;

// Styles
const main = {
  backgroundColor: '#f8fafc',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  maxWidth: '600px',
};

const header = {
  backgroundColor: '#ffffff',
  borderRadius: '8px 8px 0 0',
  padding: '24px',
  borderBottom: '1px solid #e5e7eb',
};

const headerImageContainer = {
  width: '120px',
};

const headerImage = {
  borderRadius: '4px',
};

const headerContent = {
  paddingLeft: '16px',
  verticalAlign: 'middle',
};

const headerTitle = {
  fontSize: '24px',
  fontWeight: 'bold',
  color: '#6366f1',
  margin: '0',
  lineHeight: '1.2',
};

const headerSubtitle = {
  fontSize: '14px',
  color: '#6b7280',
  margin: '4px 0 0 0',
};

const welcomeBanner = {
  backgroundColor: '#059669',
  padding: '20px',
  textAlign: 'center' as const,
};

const welcomeText = {
  color: '#ffffff',
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '0',
};

const content = {
  backgroundColor: '#ffffff',
  padding: '32px',
  borderRadius: '0 0 8px 8px',
};

const greeting = {
  color: '#111827',
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '0 0 16px',
};

const text = {
  color: '#374151',
  fontSize: '16px',
  lineHeight: '24px',
  margin: '0 0 16px',
};

const h3 = {
  color: '#111827',
  fontSize: '20px',
  fontWeight: 'bold',
  margin: '0 0 16px',
};

const driverSection = {
  backgroundColor: '#f0f9ff',
  border: '2px solid #bfdbfe',
  borderRadius: '8px',
  padding: '24px',
  margin: '24px 0',
};

const infoRow = {
  marginBottom: '12px',
};

const labelColumn = {
  width: '120px',
  verticalAlign: 'top',
};

const label = {
  color: '#6b7280',
  fontSize: '14px',
  fontWeight: '500',
  margin: '0',
};

const value = {
  color: '#111827',
  fontSize: '14px',
  fontWeight: '600',
  margin: '0',
};

const statusActive = {
  color: '#059669',
  fontSize: '14px',
  fontWeight: 'bold',
  margin: '0',
};

const guideSection = {
  backgroundColor: '#f9fafb',
  border: '1px solid #e5e7eb',
  borderRadius: '8px',
  padding: '24px',
  margin: '24px 0',
};

const stepContainer = {
  display: 'flex',
  alignItems: 'flex-start',
  marginBottom: '20px',
};

const stepNumber = {
  backgroundColor: '#6366f1',
  color: '#ffffff',
  fontSize: '16px',
  fontWeight: 'bold',
  width: '32px',
  height: '32px',
  borderRadius: '16px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: '16px',
  flexShrink: 0,
};

const stepContent = {
  flex: 1,
};

const stepTitle = {
  color: '#111827',
  fontSize: '16px',
  fontWeight: 'bold',
  margin: '0 0 4px',
};

const stepText = {
  color: '#6b7280',
  fontSize: '14px',
  lineHeight: '20px',
  margin: '0',
};

const earningsSection = {
  backgroundColor: '#f0fdf4',
  border: '2px solid #bbf7d0',
  borderRadius: '8px',
  padding: '24px',
  margin: '24px 0',
  textAlign: 'center' as const,
};

const earningColumn = {
  textAlign: 'center' as const,
  padding: '0 16px',
};

const earningNumber = {
  color: '#059669',
  fontSize: '28px',
  fontWeight: 'bold',
  margin: '0 0 4px',
};

const earningLabel = {
  color: '#16a34a',
  fontSize: '14px',
  margin: '0',
};

const buttonContainer = {
  textAlign: 'center' as const,
  margin: '32px 0',
};

const buttonColumn = {
  textAlign: 'center' as const,
  padding: '0 8px',
};

const primaryButton = {
  backgroundColor: '#6366f1',
  borderRadius: '8px',
  color: '#ffffff',
  fontSize: '16px',
  fontWeight: 'bold',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'inline-block',
  padding: '16px 32px',
  marginBottom: '16px',
};

const secondaryButton = {
  backgroundColor: '#f9fafb',
  border: '2px solid #6366f1',
  borderRadius: '8px',
  color: '#6366f1',
  fontSize: '14px',
  fontWeight: '600',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'inline-block',
  padding: '12px 24px',
  width: '100%',
};

const supportSection = {
  backgroundColor: '#fef3c7',
  border: '2px solid #fbbf24',
  borderRadius: '8px',
  padding: '24px',
  margin: '24px 0',
};

const contactRow = {
  marginBottom: '12px',
};

const contactItem = {
  color: '#92400e',
  fontSize: '16px',
  margin: '0',
};

const contactLink = {
  color: '#d97706',
  fontWeight: '600',
  textDecoration: 'underline',
};

const hr = {
  borderColor: '#e5e7eb',
  margin: '32px 0',
};

const footerMessage = {
  color: '#059669',
  fontSize: '18px',
  fontWeight: '600',
  textAlign: 'center' as const,
  margin: '0',
};

const footer = {
  textAlign: 'center' as const,
  padding: '24px 0 0',
};

const footerSmall = {
  color: '#9ca3af',
  fontSize: '12px',
  textAlign: 'center' as const,
  margin: '8px 0 0',
};

const footerLink = {
  color: '#9ca3af',
  textDecoration: 'underline',
  marginLeft: '4px',
  marginRight: '4px',
};
