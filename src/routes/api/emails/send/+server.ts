import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import {
  sendOrderConfirmationEmail,
  sendDeliveryUpdateEmail,
  sendDriverWelcomeEmail,
  sendWelcomeEmail,
  sendPasswordResetEmail,
  sendDeliveryRequestConfirmationEmail,
  sendPromotionalEmail,
  sendTestEmail,
  type OrderConfirmationData,
  type DeliveryUpdateData,
  type DriverWelcomeData,
  type WelcomeEmailData,
  type PasswordResetData,
  type DeliveryRequestData,
  type PromotionalEmailData
} from '$lib/email/emailService';

export const POST: RequestHandler = async ({ request }) => {
  try {
    const { type, data } = await request.json();

    switch (type) {
      case 'order_confirmation': {
        const result = await sendOrderConfirmationEmail(data as OrderConfirmationData);
        return json(result);
      }

      case 'delivery_update': {
        const result = await sendDeliveryUpdateEmail(data as DeliveryUpdateData);
        return json(result);
      }

      case 'driver_welcome': {
        const result = await sendDriverWelcomeEmail(data as DriverWelcomeData);
        return json(result);
      }

      case 'welcome': {
        const result = await sendWelcomeEmail(data as WelcomeEmailData);
        return json(result);
      }

      case 'password_reset': {
        const result = await sendPasswordResetEmail(data as PasswordResetData);
        return json(result);
      }

      case 'delivery_request': {
        const result = await sendDeliveryRequestConfirmationEmail(data as DeliveryRequestData);
        return json(result);
      }

      case 'promotional': {
        const result = await sendPromotionalEmail(data as PromotionalEmailData);
        return json(result);
      }

      case 'test': {
        const { to, subject } = data;
        const result = await sendTestEmail(to, subject);
        return json(result);
      }

      default:
        return json(
          { success: false, error: 'Invalid email type. Supported types: order_confirmation, delivery_update, driver_welcome, welcome, password_reset, delivery_request, promotional, test' },
          { status: 400 }
        );
    }

  } catch (error) {
    console.error('Email API error:', error);
    return json(
      { success: false, error: 'Failed to process email request' },
      { status: 500 }
    );
  }
};

// GET endpoint for testing
export const GET: RequestHandler = async ({ url }) => {
  const testEmail = url.searchParams.get('email');
  
  if (!testEmail) {
    return json(
      { error: 'Please provide an email parameter: /api/emails/send?email=your@email.com' },
      { status: 400 }
    );
  }

  try {
    const result = await sendTestEmail(testEmail, 'Velourcity Email Test 🧪');
    return json(result);
  } catch (error) {
    return json(
      { success: false, error: 'Failed to send test email' },
      { status: 500 }
    );
  }
};
