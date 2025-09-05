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

interface DeliveryRequestConfirmationEmailProps {
  customerName?: string;
  deliveryId?: string;
  pickupAddress?: string;
  deliveryAddress?: string;
  packageType?: string;
  scheduledTime?: string;
  estimatedCost?: string;
  trackingUrl?: string;
  supportPhone?: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : '';

export const DeliveryRequestConfirmationEmail = ({
  customerName = 'Akosua',
  deliveryId = 'VEL-2024-001234',
  pickupAddress = 'Osu, Accra - Ring Road East',
  deliveryAddress = 'East Legon, Accra - American House',
  packageType = 'Documents',
  scheduledTime = 'Today, 2:00 PM - 4:00 PM',
  estimatedCost = 'GHS 25.00',
  trackingUrl = 'https://velourcity.com/track/VEL-2024-001234',
  supportPhone = '+233 50 123 4567',
}: DeliveryRequestConfirmationEmailProps) => (
  <Html>
    <Head />
    <Preview>
      Delivery Request Confirmed - {deliveryId} | Velourcity Ghana
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
          <Heading style={h1}>Delivery Request Confirmed!</Heading>
        </Section>

        <Section style={heroSection}>
          <div style={successBadge}>
            <Text style={successIcon}>✅</Text>
            <Text style={successText}>
              Your delivery has been scheduled successfully
            </Text>
          </div>
          <Text style={heroText}>
            Hello {customerName}, we've received your delivery request and it's being processed!
          </Text>
        </Section>

        <Section style={detailsSection}>
          <Heading as="h2" style={h2}>
            Delivery Details
          </Heading>
          
          <div style={infoCard}>
            <div style={infoRow}>
              <Text style={infoLabel}>Delivery ID:</Text>
              <Text style={infoValue}>{deliveryId}</Text>
            </div>
            <div style={infoRow}>
              <Text style={infoLabel}>Package Type:</Text>
              <Text style={infoValue}>{packageType}</Text>
            </div>
            <div style={infoRow}>
              <Text style={infoLabel}>Scheduled Time:</Text>
              <Text style={infoValue}>{scheduledTime}</Text>
            </div>
            <div style={infoRow}>
              <Text style={infoLabel}>Estimated Cost:</Text>
              <Text style={infoValuePrice}>{estimatedCost}</Text>
            </div>
          </div>
        </Section>

        <Section style={addressSection}>
          <Heading as="h3" style={h3}>
            📍 Delivery Route
          </Heading>
          
          <div style={routeContainer}>
            <div style={addressCard}>
              <Text style={addressLabel}>🟢 PICKUP FROM</Text>
              <Text style={addressText}>{pickupAddress}</Text>
            </div>
            
            <div style={routeLine}></div>
            
            <div style={addressCard}>
              <Text style={addressLabel}>🔴 DELIVER TO</Text>
              <Text style={addressText}>{deliveryAddress}</Text>
            </div>
          </div>
        </Section>

        <Section style={ctaSection}>
          <Button pX={20} pY={12} style={button} href={trackingUrl}>
            Track Your Delivery
          </Button>
          <Text style={paragraph}>
            You'll receive updates via SMS and email as your delivery progresses.
          </Text>
        </Section>

        <Hr style={hr} />

        <Section style={nextStepsSection}>
          <Heading as="h3" style={h3}>
            What Happens Next? 🚀
          </Heading>
          
          <div style={stepsList}>
            <div style={step}>
              <Text style={stepNumber}>1</Text>
              <div style={stepContent}>
                <Text style={stepTitle}>Driver Assignment</Text>
                <Text style={stepText}>We're finding the best driver for your delivery (usually within 15 minutes)</Text>
              </div>
            </div>
            
            <div style={step}>
              <Text style={stepNumber}>2</Text>
              <div style={stepContent}>
                <Text style={stepTitle}>Driver Contacts You</Text>
                <Text style={stepText}>Your driver will call/text you before pickup</Text>
              </div>
            </div>
            
            <div style={step}>
              <Text style={stepNumber}>3</Text>
              <div style={stepContent}>
                <Text style={stepTitle}>Package Pickup</Text>
                <Text style={stepText}>Driver arrives at pickup location during scheduled time</Text>
              </div>
            </div>
            
            <div style={step}>
              <Text style={stepNumber}>4</Text>
              <div style={stepContent}>
                <Text style={stepTitle}>Safe Delivery</Text>
                <Text style={stepText}>Package delivered to recipient with confirmation</Text>
              </div>
            </div>
          </div>
        </Section>

        <Hr style={hr} />

        <Section style={supportSection}>
          <Heading as="h3" style={h3}>
            Need to Make Changes?
          </Heading>
          <Text style={paragraph}>
            Contact us immediately if you need to modify or cancel this delivery:
          </Text>
          <Text style={contactInfo}>
            📞 Call: {supportPhone}<br/>
            💬 WhatsApp: {supportPhone}<br/>
            📧 Email: support@velourcity.com
          </Text>
          <Text style={warningText}>
            ⚠️ Changes may not be possible once a driver is assigned
          </Text>
        </Section>

        <Hr style={hr} />

        <Section style={footerSection}>
          <Text style={footerText}>
            Thank you for choosing Velourcity - Ghana's trusted delivery service!
          </Text>
          <div style={socialLinks}>
            <Link href="https://twitter.com/velourcity" style={socialLink}>Twitter</Link>
            <Link href="https://facebook.com/velourcity" style={socialLink}>Facebook</Link>
            <Link href="https://instagram.com/velourcity" style={socialLink}>Instagram</Link>
          </div>
          <Text style={footerText}>
            Velourcity Ghana Ltd. | Accra, Ghana<br/>
            © 2024 All rights reserved.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default DeliveryRequestConfirmationEmail;

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
  textAlign: 'center' as const,
  marginBottom: '32px',
};

const successBadge = {
  backgroundColor: '#f0fdf4',
  border: '2px solid #22c55e',
  borderRadius: '12px',
  padding: '16px',
  margin: '0 0 24px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const successIcon = {
  fontSize: '24px',
  marginRight: '12px',
};

const successText = {
  color: '#15803d',
  fontSize: '16px',
  fontWeight: '600',
  margin: '0',
};

const heroText = {
  color: '#4b5563',
  fontSize: '18px',
  lineHeight: '26px',
  margin: '0',
};

const detailsSection = {
  marginBottom: '32px',
};

const infoCard = {
  backgroundColor: '#f9fafb',
  borderRadius: '8px',
  padding: '20px',
};

const infoRow = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '12px',
};

const infoLabel = {
  color: '#6b7280',
  fontSize: '14px',
  fontWeight: '500',
  margin: '0',
};

const infoValue = {
  color: '#1f2937',
  fontSize: '14px',
  fontWeight: '600',
  margin: '0',
};

const infoValuePrice = {
  color: '#dc2626',
  fontSize: '16px',
  fontWeight: 'bold',
  margin: '0',
};

const addressSection = {
  marginBottom: '32px',
};

const routeContainer = {
  marginTop: '16px',
};

const addressCard = {
  backgroundColor: '#f3f4f6',
  borderRadius: '8px',
  padding: '16px',
  marginBottom: '8px',
};

const addressLabel = {
  color: '#6b7280',
  fontSize: '12px',
  fontWeight: 'bold',
  textTransform: 'uppercase' as const,
  margin: '0 0 8px',
};

const addressText = {
  color: '#1f2937',
  fontSize: '16px',
  fontWeight: '600',
  margin: '0',
};

const routeLine = {
  width: '2px',
  height: '20px',
  backgroundColor: '#d1d5db',
  margin: '0 auto',
};

const paragraph = {
  color: '#6b7280',
  fontSize: '16px',
  lineHeight: '24px',
  margin: '0 0 16px',
  textAlign: 'center' as const,
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

const nextStepsSection = {
  marginBottom: '32px',
};

const stepsList = {
  marginTop: '16px',
};

const step = {
  display: 'flex',
  alignItems: 'flex-start',
  marginBottom: '20px',
};

const stepNumber = {
  backgroundColor: '#dc2626',
  color: '#ffffff',
  fontSize: '14px',
  fontWeight: 'bold',
  borderRadius: '50%',
  width: '28px',
  height: '28px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: '16px',
  minWidth: '28px',
};

const stepContent = {
  flex: '1',
};

const stepTitle = {
  color: '#1f2937',
  fontSize: '16px',
  fontWeight: '600',
  margin: '0 0 4px',
};

const stepText = {
  color: '#6b7280',
  fontSize: '14px',
  lineHeight: '20px',
  margin: '0',
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

const warningText = {
  color: '#dc2626',
  fontSize: '14px',
  fontWeight: '600',
  margin: '16px 0 0',
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
