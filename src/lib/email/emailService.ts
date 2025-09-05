import { Resend } from 'resend';
import { render } from '@react-email/components';
import OrderConfirmationEmail from '../../emails/order-confirmation';
import DeliveryUpdateEmail from '../../emails/delivery-update';
import DriverWelcomeEmail from '../../emails/driver-welcome';
import { WelcomeEmail } from '../../emails/WelcomeEmail';
import { PasswordResetEmail } from '../../emails/PasswordResetEmail';
import { DeliveryRequestConfirmationEmail } from '../../emails/DeliveryRequestConfirmationEmail';
import { PromotionalEmail } from '../../emails/PromotionalEmail';

// Initialize Resend with API key
const RESEND_API_KEY = process.env.RESEND_API_KEY;

if (!RESEND_API_KEY) {
  console.warn('⚠️ RESEND_API_KEY environment variable is not set. Email functionality will be disabled.');
  console.warn('💡 Get your API key from: https://resend.com/api-keys');
  console.warn('📝 Add it to your .env file: RESEND_API_KEY=re_your_key_here');
}

const resend = RESEND_API_KEY ? new Resend(RESEND_API_KEY) : null;

const FROM_EMAIL = 'Velourcity <noreply@velourcity.com>';
const REPLY_TO_EMAIL = 'support@velourcity.com';

export interface OrderConfirmationData {
  customerName: string;
  customerEmail: string;
  orderNumber: string;
  pickupAddress: string;
  deliveryAddress: string;
  estimatedDelivery: string;
  totalAmount: string;
  trackingUrl: string;
}

export interface DeliveryUpdateData {
  customerName: string;
  customerEmail: string;
  orderNumber: string;
  status: 'accepted' | 'picked_up' | 'en_route' | 'delivered';
  driverName: string;
  driverPhone: string;
  vehicleInfo: string;
  estimatedDelivery?: string;
  trackingUrl: string;
  deliveryAddress: string;
}

export interface DriverWelcomeData {
  driverName: string;
  driverEmail: string;
  driverId: string;
  dashboardUrl: string;
  supportPhone: string;
  vehicleInfo: string;
}

export interface WelcomeEmailData {
  userFirstName: string;
  userEmail: string;
  loginUrl?: string;
}

export interface PasswordResetData {
  userFirstName: string;
  userEmail: string;
  resetUrl: string;
  requestTime?: string;
  userAgent?: string;
  ipAddress?: string;
}

export interface DeliveryRequestData {
  customerName: string;
  customerEmail: string;
  deliveryId: string;
  pickupAddress: string;
  deliveryAddress: string;
  packageType: string;
  scheduledTime: string;
  estimatedCost: string;
  trackingUrl?: string;
  supportPhone?: string;
}

export interface PromotionalEmailData {
  customerName: string;
  customerEmail: string;
  promotionTitle: string;
  promotionDescription: string;
  discountPercentage: string;
  promoCode: string;
  validUntil: string;
  ctaText?: string;
  ctaUrl?: string;
  features?: string[];
  testimonial?: {
    text: string;
    author: string;
    location: string;
  };
}

/**
 * Check if Resend is configured
 */
function checkResendConfig() {
  if (!resend) {
    throw new Error('Resend API key is not configured. Please set RESEND_API_KEY environment variable.');
  }
}

/**
 * Send order confirmation email to customer
 */
export async function sendOrderConfirmationEmail(data: OrderConfirmationData) {
  try {
    checkResendConfig();
    const emailHtml = render(OrderConfirmationEmail({
      customerName: data.customerName,
      orderNumber: data.orderNumber,
      pickupAddress: data.pickupAddress,
      deliveryAddress: data.deliveryAddress,
      estimatedDelivery: data.estimatedDelivery,
      totalAmount: data.totalAmount,
      trackingUrl: data.trackingUrl,
    }));

    const result = await resend.emails.send({
      from: FROM_EMAIL,
      to: data.customerEmail,
      replyTo: REPLY_TO_EMAIL,
      subject: `Order Confirmed #${data.orderNumber} - Track Your Delivery 🚀`,
      html: emailHtml,
      tags: [
        { name: 'category', value: 'order_confirmation' },
        { name: 'order_id', value: data.orderNumber }
      ],
    });

    console.log('Order confirmation email sent:', result);
    return { success: true, data: result };

  } catch (error) {
    console.error('Failed to send order confirmation email:', error);
    return { success: false, error: error.message };
  }
}

/**
 * Send delivery status update email to customer
 */
export async function sendDeliveryUpdateEmail(data: DeliveryUpdateData) {
  try {
    checkResendConfig();
    const statusMessages = {
      accepted: 'Driver Assigned',
      picked_up: 'Package Picked Up',
      en_route: 'Out for Delivery',
      delivered: 'Delivered Successfully'
    };

    const emailHtml = render(DeliveryUpdateEmail({
      customerName: data.customerName,
      orderNumber: data.orderNumber,
      status: data.status,
      driverName: data.driverName,
      driverPhone: data.driverPhone,
      vehicleInfo: data.vehicleInfo,
      estimatedDelivery: data.estimatedDelivery,
      trackingUrl: data.trackingUrl,
      deliveryAddress: data.deliveryAddress,
    }));

    const result = await resend.emails.send({
      from: FROM_EMAIL,
      to: data.customerEmail,
      replyTo: REPLY_TO_EMAIL,
      subject: `${statusMessages[data.status]} - Order #${data.orderNumber} 📦`,
      html: emailHtml,
      tags: [
        { name: 'category', value: 'delivery_update' },
        { name: 'order_id', value: data.orderNumber },
        { name: 'status', value: data.status }
      ],
    });

    console.log('Delivery update email sent:', result);
    return { success: true, data: result };

  } catch (error) {
    console.error('Failed to send delivery update email:', error);
    return { success: false, error: error.message };
  }
}

/**
 * Send welcome email to new driver
 */
export async function sendDriverWelcomeEmail(data: DriverWelcomeData) {
  try {
    checkResendConfig();
    const emailHtml = render(DriverWelcomeEmail({
      driverName: data.driverName,
      driverId: data.driverId,
      dashboardUrl: data.dashboardUrl,
      supportPhone: data.supportPhone,
      vehicleInfo: data.vehicleInfo,
    }));

    const result = await resend.emails.send({
      from: FROM_EMAIL,
      to: data.driverEmail,
      replyTo: 'drivers@velourcity.com',
      subject: `Welcome to Velourcity, ${data.driverName}! 🇬🇭`,
      html: emailHtml,
      tags: [
        { name: 'category', value: 'driver_welcome' },
        { name: 'driver_id', value: data.driverId }
      ],
    });

    console.log('Driver welcome email sent:', result);
    return { success: true, data: result };

  } catch (error) {
    console.error('Failed to send driver welcome email:', error);
    return { success: false, error: error.message };
  }
}

/**
 * Send bulk delivery update emails (useful for batch processing)
 */
export async function sendBulkDeliveryUpdates(updates: DeliveryUpdateData[]) {
  const results = [];
  
  for (const update of updates) {
    const result = await sendDeliveryUpdateEmail(update);
    results.push(result);
    
    // Add small delay between emails to avoid rate limits
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  
  return results;
}

/**
 * Send test email (for development/testing)
 */
export async function sendTestEmail(to: string, subject: string = 'Test Email') {
  try {
    checkResendConfig();
    const result = await resend.emails.send({
      from: FROM_EMAIL,
      to: to,
      replyTo: REPLY_TO_EMAIL,
      subject: subject,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2 style="color: #6366f1;">🧪 Test Email from Velourcity</h2>
          <p>This is a test email to verify your email configuration is working correctly.</p>
          <p>If you received this email, your Resend integration is set up properly! 🎉</p>
          <hr style="margin: 20px 0;">
          <p style="color: #6b7280; font-size: 12px;">
            Sent from Velourcity Email Service<br>
            Ghana's fastest delivery platform
          </p>
        </div>
      `,
      tags: [{ name: 'category', value: 'test' }],
    });

    console.log('Test email sent:', result);
    return { success: true, data: result };

  } catch (error) {
    console.error('Failed to send test email:', error);
    return { success: false, error: error.message };
  }
}

/**
 * Send welcome email to new user
 */
export async function sendWelcomeEmail(data: WelcomeEmailData) {
  try {
    checkResendConfig();
    const emailHtml = render(WelcomeEmail({
      userFirstName: data.userFirstName,
      userEmail: data.userEmail,
      loginUrl: data.loginUrl,
    }));

    const result = await resend.emails.send({
      from: FROM_EMAIL,
      to: data.userEmail,
      replyTo: REPLY_TO_EMAIL,
      subject: `Welcome to Velourcity, ${data.userFirstName}! 🚀`,
      html: emailHtml,
      tags: [
        { name: 'category', value: 'user_welcome' },
        { name: 'user_email', value: data.userEmail }
      ],
    });

    console.log('Welcome email sent:', result);
    return { success: true, data: result };

  } catch (error) {
    console.error('Failed to send welcome email:', error);
    return { success: false, error: error.message };
  }
}

/**
 * Send password reset email to user
 */
export async function sendPasswordResetEmail(data: PasswordResetData) {
  try {
    checkResendConfig();
    const emailHtml = render(PasswordResetEmail({
      userFirstName: data.userFirstName,
      resetUrl: data.resetUrl,
      requestTime: data.requestTime,
      userAgent: data.userAgent,
      ipAddress: data.ipAddress,
    }));

    const result = await resend.emails.send({
      from: FROM_EMAIL,
      to: data.userEmail,
      replyTo: 'security@velourcity.com',
      subject: 'Reset Your Velourcity Password 🔐',
      html: emailHtml,
      tags: [
        { name: 'category', value: 'password_reset' },
        { name: 'user_email', value: data.userEmail }
      ],
    });

    console.log('Password reset email sent:', result);
    return { success: true, data: result };

  } catch (error) {
    console.error('Failed to send password reset email:', error);
    return { success: false, error: error.message };
  }
}

/**
 * Send delivery request confirmation email to customer
 */
export async function sendDeliveryRequestConfirmationEmail(data: DeliveryRequestData) {
  try {
    checkResendConfig();
    const emailHtml = render(DeliveryRequestConfirmationEmail({
      customerName: data.customerName,
      deliveryId: data.deliveryId,
      pickupAddress: data.pickupAddress,
      deliveryAddress: data.deliveryAddress,
      packageType: data.packageType,
      scheduledTime: data.scheduledTime,
      estimatedCost: data.estimatedCost,
      trackingUrl: data.trackingUrl,
      supportPhone: data.supportPhone,
    }));

    const result = await resend.emails.send({
      from: FROM_EMAIL,
      to: data.customerEmail,
      replyTo: REPLY_TO_EMAIL,
      subject: `Delivery Request Confirmed - ${data.deliveryId} ✅`,
      html: emailHtml,
      tags: [
        { name: 'category', value: 'delivery_request' },
        { name: 'delivery_id', value: data.deliveryId }
      ],
    });

    console.log('Delivery request confirmation email sent:', result);
    return { success: true, data: result };

  } catch (error) {
    console.error('Failed to send delivery request confirmation email:', error);
    return { success: false, error: error.message };
  }
}

/**
 * Send promotional email to customer
 */
export async function sendPromotionalEmail(data: PromotionalEmailData) {
  try {
    checkResendConfig();
    const emailHtml = render(PromotionalEmail({
      customerName: data.customerName,
      promotionTitle: data.promotionTitle,
      promotionDescription: data.promotionDescription,
      discountPercentage: data.discountPercentage,
      promoCode: data.promoCode,
      validUntil: data.validUntil,
      ctaText: data.ctaText,
      ctaUrl: data.ctaUrl,
      features: data.features,
      testimonial: data.testimonial,
    }));

    const result = await resend.emails.send({
      from: FROM_EMAIL,
      to: data.customerEmail,
      replyTo: REPLY_TO_EMAIL,
      subject: `${data.promotionTitle} 🎉`,
      html: emailHtml,
      tags: [
        { name: 'category', value: 'promotional' },
        { name: 'promo_code', value: data.promoCode }
      ],
    });

    console.log('Promotional email sent:', result);
    return { success: true, data: result };

  } catch (error) {
    console.error('Failed to send promotional email:', error);
    return { success: false, error: error.message };
  }
}

/**
 * Send bulk promotional emails (useful for marketing campaigns)
 */
export async function sendBulkPromotionalEmails(emails: PromotionalEmailData[]) {
  const results = [];
  
  for (const emailData of emails) {
    const result = await sendPromotionalEmail(emailData);
    results.push(result);
    
    // Add delay between emails to avoid rate limits
    await new Promise(resolve => setTimeout(resolve, 200));
  }
  
  return results;
}

/**
 * Get email sending statistics (if available from Resend)
 */
export async function getEmailStats() {
  try {
    // Note: This depends on Resend's API capabilities
    // You might need to implement this based on their actual API
    console.log('Email stats requested - implement based on Resend API');
    return { success: true, message: 'Stats feature coming soon' };
    
  } catch (error) {
    console.error('Failed to get email stats:', error);
    return { success: false, error: error.message };
  }
}
