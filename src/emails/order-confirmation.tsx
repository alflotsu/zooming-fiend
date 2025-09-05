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

interface OrderConfirmationEmailProps {
  customerName?: string;
  orderNumber?: string;
  pickupAddress?: string;
  deliveryAddress?: string;
  estimatedDelivery?: string;
  totalAmount?: string;
  trackingUrl?: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : '';

export const OrderConfirmationEmail = ({
  customerName = 'Valued Customer',
  orderNumber = '12345',
  pickupAddress = 'Accra Mall, Tetteh Quarshie Roundabout, Accra',
  deliveryAddress = 'Kotoka International Airport, Airport City, Accra',
  estimatedDelivery = '25 minutes',
  totalAmount = 'GHS 15.00',
  trackingUrl = 'https://velourcity.com/track/12345',
}: OrderConfirmationEmailProps) => {
  const previewText = `Order #${orderNumber} confirmed - Track your delivery`;

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
                <Text style={headerSubtitle}>Fast • Reliable • Ghana</Text>
              </Column>
            </Row>
          </Section>

          {/* Main Content */}
          <Section style={content}>
            <Heading style={h1}>Order Confirmed! 🚀</Heading>
            
            <Text style={text}>
              Hi {customerName},
            </Text>
            
            <Text style={text}>
              Great news! Your delivery order has been confirmed and we're already finding the best driver for you.
            </Text>

            {/* Order Details */}
            <Section style={orderSection}>
              <Heading style={h2}>Order Details</Heading>
              <Hr style={hr} />
              
              <Row style={orderRow}>
                <Column style={orderLabelColumn}>
                  <Text style={orderLabel}>Order Number:</Text>
                </Column>
                <Column style={orderValueColumn}>
                  <Text style={orderValue}>#{orderNumber}</Text>
                </Column>
              </Row>

              <Row style={orderRow}>
                <Column style={orderLabelColumn}>
                  <Text style={orderLabel}>Pickup:</Text>
                </Column>
                <Column style={orderValueColumn}>
                  <Text style={orderValue}>{pickupAddress}</Text>
                </Column>
              </Row>

              <Row style={orderRow}>
                <Column style={orderLabelColumn}>
                  <Text style={orderLabel}>Delivery:</Text>
                </Column>
                <Column style={orderValueColumn}>
                  <Text style={orderValue}>{deliveryAddress}</Text>
                </Column>
              </Row>

              <Row style={orderRow}>
                <Column style={orderLabelColumn}>
                  <Text style={orderLabel}>Estimated Time:</Text>
                </Column>
                <Column style={orderValueColumn}>
                  <Text style={orderValue}>{estimatedDelivery}</Text>
                </Column>
              </Row>

              <Row style={orderRow}>
                <Column style={orderLabelColumn}>
                  <Text style={orderLabel}>Total Amount:</Text>
                </Column>
                <Column style={orderValueColumn}>
                  <Text style={orderValueTotal}>{totalAmount}</Text>
                </Column>
              </Row>
            </Section>

            {/* Track Button */}
            <Section style={buttonContainer}>
              <Button style={button} href={trackingUrl}>
                Track Your Delivery 📍
              </Button>
            </Section>

            <Text style={text}>
              You'll receive real-time updates as your driver picks up and delivers your package. 
              Click the button above anytime to see your delivery progress on our live map.
            </Text>

            <Text style={text}>
              Need help? Just reply to this email or call us at{' '}
              <Link href="tel:+233123456789" style={link}>
                +233 (0) 123 456 789
              </Link>
            </Text>

            <Hr style={hr} />

            <Text style={footerText}>
              Thank you for choosing Velourcity - Ghana's fastest delivery service! 🇬🇭
            </Text>
          </Section>

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerSmall}>
              Velourcity Ghana Ltd. • Accra, Ghana
            </Text>
            <Text style={footerSmall}>
              <Link href="#" style={footerLink}>Unsubscribe</Link> | 
              <Link href="#" style={footerLink}> Support</Link> | 
              <Link href="#" style={footerLink}> Privacy Policy</Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default OrderConfirmationEmail;

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

const content = {
  backgroundColor: '#ffffff',
  padding: '32px',
  borderRadius: '0 0 8px 8px',
};

const h1 = {
  color: '#111827',
  fontSize: '28px',
  fontWeight: 'bold',
  margin: '0 0 24px',
  textAlign: 'center' as const,
};

const h2 = {
  color: '#111827',
  fontSize: '20px',
  fontWeight: 'bold',
  margin: '0 0 16px',
};

const text = {
  color: '#374151',
  fontSize: '16px',
  lineHeight: '24px',
  margin: '0 0 16px',
};

const orderSection = {
  backgroundColor: '#f9fafb',
  border: '1px solid #e5e7eb',
  borderRadius: '8px',
  padding: '24px',
  margin: '24px 0',
};

const orderRow = {
  marginBottom: '12px',
};

const orderLabelColumn = {
  width: '140px',
  verticalAlign: 'top',
};

const orderValueColumn = {
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

const orderValueTotal = {
  color: '#059669',
  fontSize: '16px',
  fontWeight: 'bold',
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
  color: '#059669',
  fontSize: '16px',
  fontWeight: '500',
  textAlign: 'center' as const,
  margin: '0',
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
