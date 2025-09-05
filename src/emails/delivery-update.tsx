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

interface DeliveryUpdateEmailProps {
  customerName?: string;
  orderNumber?: string;
  status?: 'accepted' | 'picked_up' | 'en_route' | 'delivered';
  driverName?: string;
  driverPhone?: string;
  vehicleInfo?: string;
  estimatedDelivery?: string;
  trackingUrl?: string;
  deliveryAddress?: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : '';

const statusMessages = {
  accepted: {
    title: 'Driver Assigned! 🚗',
    message: 'Great news! A driver has been assigned to your delivery.',
    emoji: '👋',
    color: '#3b82f6',
  },
  picked_up: {
    title: 'Package Picked Up! 📦',
    message: 'Your package has been collected and is on its way.',
    emoji: '✅',
    color: '#f59e0b',
  },
  en_route: {
    title: 'Out for Delivery! 🚀',
    message: 'Your package is on its way to you right now.',
    emoji: '🛣️',
    color: '#8b5cf6',
  },
  delivered: {
    title: 'Delivered Successfully! 🎉',
    message: 'Your package has been delivered. Thank you for choosing Velourcity!',
    emoji: '✨',
    color: '#059669',
  },
};

export const DeliveryUpdateEmail = ({
  customerName = 'Valued Customer',
  orderNumber = '12345',
  status = 'accepted',
  driverName = 'Kwame Asante',
  driverPhone = '+233-24-567-8901',
  vehicleInfo = 'White Toyota Corolla (GR-2389-20)',
  estimatedDelivery = '15 minutes',
  trackingUrl = 'https://velourcity.com/track/12345',
  deliveryAddress = 'Kotoka International Airport, Airport City, Accra',
}: DeliveryUpdateEmailProps) => {
  const statusInfo = statusMessages[status];
  const previewText = `${statusInfo.title} - Order #${orderNumber}`;

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
                <Text style={headerSubtitle}>Delivery Update</Text>
              </Column>
            </Row>
          </Section>

          {/* Status Banner */}
          <Section style={{...statusBanner, backgroundColor: statusInfo.color}}>
            <Text style={statusText}>
              {statusInfo.emoji} {statusInfo.title}
            </Text>
          </Section>

          {/* Main Content */}
          <Section style={content}>
            <Text style={greeting}>Hi {customerName},</Text>
            
            <Text style={text}>
              {statusInfo.message}
            </Text>

            {/* Order Info */}
            <Section style={orderSection}>
              <Row style={orderRow}>
                <Column style={orderLabelColumn}>
                  <Text style={orderLabel}>Order #:</Text>
                </Column>
                <Column>
                  <Text style={orderValue}>{orderNumber}</Text>
                </Column>
              </Row>

              {status !== 'delivered' && (
                <>
                  <Row style={orderRow}>
                    <Column style={orderLabelColumn}>
                      <Text style={orderLabel}>Estimated Delivery:</Text>
                    </Column>
                    <Column>
                      <Text style={orderValueHighlight}>{estimatedDelivery}</Text>
                    </Column>
                  </Row>

                  <Row style={orderRow}>
                    <Column style={orderLabelColumn}>
                      <Text style={orderLabel}>Delivering to:</Text>
                    </Column>
                    <Column>
                      <Text style={orderValue}>{deliveryAddress}</Text>
                    </Column>
                  </Row>
                </>
              )}
            </Section>

            {/* Driver Info (for non-delivered status) */}
            {status !== 'delivered' && (
              <Section style={driverSection}>
                <Heading style={h3}>Your Driver</Heading>
                <Row>
                  <Column style={driverImageColumn}>
                    <div style={driverAvatar}>
                      <Text style={driverInitial}>
                        {driverName.charAt(0)}
                      </Text>
                    </div>
                  </Column>
                  <Column style={driverInfoColumn}>
                    <Text style={driverName}>{driverName}</Text>
                    <Text style={driverVehicle}>{vehicleInfo}</Text>
                    <Link href={`tel:${driverPhone}`} style={driverPhone}>
                      📞 {driverPhone}
                    </Link>
                  </Column>
                </Row>
              </Section>
            )}

            {/* Delivery Complete Message */}
            {status === 'delivered' && (
              <Section style={deliveredSection}>
                <Text style={deliveredText}>
                  🎯 Your package was delivered to: <strong>{deliveryAddress}</strong>
                </Text>
                <Text style={deliveredSubtext}>
                  We hope you're happy with our service! Please consider rating your driver.
                </Text>
              </Section>
            )}

            {/* Track Button */}
            <Section style={buttonContainer}>
              <Button style={button} href={trackingUrl}>
                {status === 'delivered' ? 'View Receipt 📋' : 'Track Live 📍'}
              </Button>
            </Section>

            {status !== 'delivered' && (
              <Text style={text}>
                You can watch your driver's live location and get real-time updates on our tracking page.
              </Text>
            )}

            <Hr style={hr} />

            <Text style={footerText}>
              Need help? Reply to this email or call us at{' '}
              <Link href="tel:+233123456789" style={link}>
                +233 (0) 123 456 789
              </Link>
            </Text>
          </Section>

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerSmall}>
              Velourcity Ghana Ltd. • Accra, Ghana
            </Text>
            <Text style={footerSmall}>
              <Link href="#" style={footerLink}>Unsubscribe</Link> | 
              <Link href="#" style={footerLink}> Support</Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default DeliveryUpdateEmail;

// Styles
const main = {
  backgroundColor: '#f8fafc',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  maxWidth: '580px',
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

const statusBanner = {
  padding: '16px',
  textAlign: 'center' as const,
};

const statusText = {
  color: '#ffffff',
  fontSize: '20px',
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
  fontSize: '18px',
  fontWeight: '600',
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
  fontSize: '18px',
  fontWeight: 'bold',
  margin: '0 0 16px',
};

const orderSection = {
  backgroundColor: '#f9fafb',
  border: '1px solid #e5e7eb',
  borderRadius: '8px',
  padding: '20px',
  margin: '24px 0',
};

const orderRow = {
  marginBottom: '8px',
};

const orderLabelColumn = {
  width: '140px',
  verticalAlign: 'top',
};

const orderLabel = {
  color: '#6b7280',
  fontSize: '14px',
  fontWeight: '500',
  margin: '0',
};

const orderValue = {
  color: '#111827',
  fontSize: '14px',
  margin: '0',
};

const orderValueHighlight = {
  color: '#059669',
  fontSize: '16px',
  fontWeight: 'bold',
  margin: '0',
};

const driverSection = {
  backgroundColor: '#f0f9ff',
  border: '2px solid #bfdbfe',
  borderRadius: '8px',
  padding: '20px',
  margin: '24px 0',
};

const driverImageColumn = {
  width: '60px',
  verticalAlign: 'top',
};

const driverInfoColumn = {
  paddingLeft: '16px',
  verticalAlign: 'top',
};

const driverAvatar = {
  width: '48px',
  height: '48px',
  borderRadius: '24px',
  backgroundColor: '#6366f1',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const driverInitial = {
  color: '#ffffff',
  fontSize: '18px',
  fontWeight: 'bold',
  margin: '0',
};

const driverName = {
  color: '#111827',
  fontSize: '16px',
  fontWeight: 'bold',
  margin: '0 0 4px',
};

const driverVehicle = {
  color: '#6b7280',
  fontSize: '14px',
  margin: '0 0 8px',
};

const driverPhone = {
  color: '#059669',
  fontSize: '14px',
  fontWeight: '500',
  textDecoration: 'none',
};

const deliveredSection = {
  backgroundColor: '#f0fdf4',
  border: '2px solid #bbf7d0',
  borderRadius: '8px',
  padding: '20px',
  margin: '24px 0',
  textAlign: 'center' as const,
};

const deliveredText = {
  color: '#059669',
  fontSize: '16px',
  fontWeight: '600',
  margin: '0 0 12px',
};

const deliveredSubtext = {
  color: '#16a34a',
  fontSize: '14px',
  margin: '0',
};

const buttonContainer = {
  textAlign: 'center' as const,
  margin: '32px 0',
};

const button = {
  backgroundColor: '#6366f1',
  borderRadius: '8px',
  color: '#ffffff',
  fontSize: '16px',
  fontWeight: 'bold',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'inline-block',
  padding: '14px 28px',
};

const link = {
  color: '#6366f1',
  textDecoration: 'underline',
};

const hr = {
  borderColor: '#e5e7eb',
  margin: '20px 0',
};

const footer = {
  textAlign: 'center' as const,
  padding: '24px 0 0',
};

const footerText = {
  color: '#374151',
  fontSize: '14px',
  margin: '0 0 16px',
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
