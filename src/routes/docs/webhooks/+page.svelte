<script>
	import { Button } from '$lib/components/ui/button';
	import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '$lib/components/ui/breadcrumb';
	import { Webhook, ArrowLeft, AlertTriangle, CheckCircle, Clock } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Webhooks Documentation - Velourcity API Platform</title>
	<meta name="description" content="Real-time webhook integration guide for the Velourcity delivery platform." />
</svelte:head>

<!-- Full-page animated grid background -->
<div class="fixed inset-0 bg-background grid-background grid-background-animated -z-10"></div>

<div class="container max-w-4xl py-8">
	<!-- Breadcrumbs -->
	<Breadcrumb class="mb-6">
		<BreadcrumbList>
			<BreadcrumbItem>
				<BreadcrumbLink href="/">Home</BreadcrumbLink>
			</BreadcrumbItem>
			<BreadcrumbSeparator />
			<BreadcrumbItem>
				<BreadcrumbLink href="/docs">Documentation</BreadcrumbLink>
			</BreadcrumbItem>
			<BreadcrumbSeparator />
			<BreadcrumbItem>
				<span class="font-medium">Webhooks</span>
			</BreadcrumbItem>
		</BreadcrumbList>
	</Breadcrumb>

	<!-- Header -->
	<div class="flex items-center space-x-4 mb-8">
		<Button variant="ghost" size="sm" href="/docs">
			<ArrowLeft class="h-4 w-4 mr-2" />
			Back to Docs
		</Button>
	</div>

	<div class="space-y-6 mb-8">
		<div class="flex items-center space-x-2">
			<Webhook class="h-8 w-8 text-purple-600" />
			<h1 class="font-heading text-3xl sm:text-4xl">Webhooks Integration</h1>
		</div>
		<p class="text-muted-foreground text-lg max-w-3xl">
			Receive real-time notifications about delivery events in your application. Webhooks ensure your systems stay synchronized with delivery status changes.
		</p>
		<Badge variant="outline">Real-time • Secure • Reliable</Badge>
	</div>

	<!-- Overview -->
	<section class="mb-12">
		<Card>
			<CardHeader>
				<CardTitle class="text-xl">How Webhooks Work</CardTitle>
				<CardDescription>
					Understand the webhook flow and delivery mechanism
				</CardDescription>
			</CardHeader>
			<CardContent class="space-y-6">
				<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
					<div class="text-center p-4 border rounded-lg">
						<div class="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-3">
							<span class="text-purple-600 font-bold">1</span>
						</div>
						<h4 class="font-semibold mb-2">Event Occurs</h4>
						<p class="text-sm text-muted-foreground">Delivery status changes or order events happen</p>
					</div>
					<div class="text-center p-4 border rounded-lg">
						<div class="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-3">
							<span class="text-indigo-600 font-bold">2</span>
						</div>
						<h4 class="font-semibold mb-2">Webhook Sent</h4>
						<p class="text-sm text-muted-foreground">We send a POST request to your endpoint</p>
					</div>
					<div class="text-center p-4 border rounded-lg">
						<div class="w-12 h-12 bg-violet-100 dark:bg-violet-900 rounded-full flex items-center justify-center mx-auto mb-3">
							<span class="text-violet-600 font-bold">3</span>
						</div>
						<h4 class="font-semibold mb-2">Your App Updates</h4>
						<p class="text-sm text-muted-foreground">Process the event and update your systems</p>
					</div>
				</div>
			</CardContent>
		</Card>
	</section>

	<!-- Event Types -->
	<section class="mb-12">
		<Card>
			<CardHeader>
				<CardTitle class="text-xl">Event Types</CardTitle>
				<CardDescription>
					All available webhook events and their triggers
				</CardDescription>
			</CardHeader>
			<CardContent>
				<div class="space-y-4">
					<div class="border rounded-lg p-4">
						<div class="flex items-center space-x-2 mb-2">
							<CheckCircle class="h-5 w-5 text-green-600" />
							<code class="font-semibold">order.created</code>
						</div>
						<p class="text-sm text-muted-foreground mb-2">Sent when a new order is successfully created in the system.</p>
						<Badge variant="outline" class="text-xs">Order Events</Badge>
					</div>
					<div class="border rounded-lg p-4">
						<div class="flex items-center space-x-2 mb-2">
							<Clock class="h-5 w-5 text-blue-600" />
							<code class="font-semibold">order.driver_assigned</code>
						</div>
						<p class="text-sm text-muted-foreground mb-2">Triggered when a driver accepts the order and begins heading to pickup.</p>
						<Badge variant="outline" class="text-xs">Order Events</Badge>
					</div>
					<div class="border rounded-lg p-4">
						<div class="flex items-center space-x-2 mb-2">
							<CheckCircle class="h-5 w-5 text-orange-600" />
							<code class="font-semibold">order.picked_up</code>
						</div>
						<p class="text-sm text-muted-foreground mb-2">Sent when the driver successfully picks up the order from the restaurant.</p>
						<Badge variant="outline" class="text-xs">Delivery Events</Badge>
					</div>
					<div class="border rounded-lg p-4">
						<div class="flex items-center space-x-2 mb-2">
							<CheckCircle class="h-5 w-5 text-green-600" />
							<code class="font-semibold">order.delivered</code>
						</div>
						<p class="text-sm text-muted-foreground mb-2">Triggered when the order is successfully delivered to the customer.</p>
						<Badge variant="outline" class="text-xs">Delivery Events</Badge>
					</div>
					<div class="border rounded-lg p-4">
						<div class="flex items-center space-x-2 mb-2">
							<AlertTriangle class="h-5 w-5 text-red-600" />
							<code class="font-semibold">order.cancelled</code>
						</div>
						<p class="text-sm text-muted-foreground mb-2">Sent when an order is cancelled by the customer, restaurant, or system.</p>
						<Badge variant="outline" class="text-xs">Order Events</Badge>
					</div>
					<div class="border rounded-lg p-4">
						<div class="flex items-center space-x-2 mb-2">
							<CheckCircle class="h-5 w-5 text-green-600" />
							<code class="font-semibold">payment.completed</code>
						</div>
						<p class="text-sm text-muted-foreground mb-2">Triggered when payment processing is completed successfully.</p>
						<Badge variant="outline" class="text-xs">Payment Events</Badge>
					</div>
				</div>
			</CardContent>
		</Card>
	</section>

	<!-- Webhook Payload -->
	<section class="mb-12">
		<Card>
			<CardHeader>
				<CardTitle class="text-xl">Webhook Payload Structure</CardTitle>
				<CardDescription>
					Standard format for all webhook events
				</CardDescription>
			</CardHeader>
			<CardContent class="space-y-4">
				<div>
					<h4 class="font-semibold mb-2">Example: Order Created Event</h4>
					<pre class="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
						<!-- <code>{
  "event": "order.created",
  "timestamp": "2024-01-15T10:30:00Z",
  "id": "evt_abc123def456",
  "data": {
    "order": {
      "id": "order_xyz789",
      "status": "confirmed",
      "partner_id": "your_partner_id",
      "reference_id": "your_ref_123",
      "pickup_address": {
        "street": "123 Restaurant Street",
        "city": "New York",
        "state": "NY",
        "zip": "10001"
      },
      "dropoff_address": {
        "street": "456 Customer Ave",
        "city": "New York",
        "state": "NY",
        "zip": "10002"
      },
      "delivery_fee": 4.99,
      "estimated_pickup_time": "2024-01-15T11:00:00Z",
      "estimated_delivery_time": "2024-01-15T11:20:00Z"
    }
  }
}</code></pre> -->
				</div>
				<div>
					<h4 class="font-semibold mb-2">HTTP Headers</h4>
					<pre class="bg-muted p-4 rounded-lg overflow-x-auto text-sm"><code>POST /your-webhook-endpoint HTTP/1.1
Host: yourapp.com
Content-Type: application/json
User-Agent: Velourcity-Webhooks/1.0
X-Velourcity-Signature: sha256=abc123...
X-Velourcity-Event: order.created
X-Velourcity-Delivery-Attempt: 1</code></pre>
				</div>
			</CardContent>
		</Card>
	</section>

	<!-- Implementation Examples -->
	<section class="mb-12">
		<Card>
			<CardHeader>
				<CardTitle class="text-xl">Implementation Examples</CardTitle>
				<CardDescription>
					Code examples for handling webhooks in different languages
				</CardDescription>
			</CardHeader>
			<CardContent class="space-y-6">
				<div>
					<h4 class="font-semibold mb-2">Node.js / Express</h4>
					<pre class="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
						<!-- <code>const express = require('express');
const crypto = require('crypto');

const app = express();
app.use(express.json());

// Webhook signature verification
const verifySignature = (payload, signature, secret) => {
  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(payload)
    .digest('hex');
  return `sha256=${expectedSignature}` === signature;
};

app.post('/webhooks/velourcity', (req, res) => {
  const signature = req.headers['x-velourcity-signature'];
  const event = req.headers['x-velourcity-event'];
  
  // Verify webhook signature
  if (!verifySignature(JSON.stringify(req.body), signature, process.env.WEBHOOK_SECRET)) {
    return res.status(401).send('Invalid signature');
  }
  
  // Handle different event types
  switch (event) {
    case 'order.created':
      console.log('New order created:', req.body.data.order.id);
      // Update your database, send notifications, etc.
      break;
      
    case 'order.delivered':
      console.log('Order delivered:', req.body.data.order.id);
      // Mark order as complete, trigger customer feedback, etc.
      break;
      
    default:
      console.log('Unknown event type:', event);
  }
  
  // Always return 200 for successful processing
  res.status(200).send('OK');
});</code></pre>
				</div>
				
				<div>
					<h4 class="font-semibold mb-2">Python / Django</h4>
					<pre class="bg-muted p-4 rounded-lg overflow-x-auto text-sm"><code>import json
import hashlib
import hmac
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods

@csrf_exempt
@require_http_methods(["POST"])
def velourcity_webhook(request):
    # Get headers and payload
    signature = request.headers.get('X-Velourcity-Signature')
    event_type = request.headers.get('X-Velourcity-Event')
    payload = request.body
    
    # Verify webhook signature
    secret = settings.VELOURCITY_WEBHOOK_SECRET.encode('utf-8')
    expected_signature = hmac.new(
        secret, 
        payload, 
        hashlib.sha256
    ).hexdigest()
    
    if f'sha256={expected_signature}' != signature:
        return HttpResponse('Invalid signature', status=401)
    
    # Parse JSON payload
    try:
        data = json.loads(payload)
    except json.JSONDecodeError:
        return HttpResponse('Invalid JSON', status=400)
    
    # Handle different event types
    if event_type == 'order.created':
        order = data['data']['order']
        # Process new order
        print(f"New order: {order['id']}")
        
    elif event_type == 'order.delivered':
        order = data['data']['order']
        # Handle delivery completion
        print(f"Order delivered: {order['id']}")
    
    return HttpResponse('OK', status=200)</code>-->
	</pre> 
				</div>
			</CardContent>
		</Card>
	</section>

	<!-- Security & Best Practices -->
	<section class="mb-12">
		<Card>
			<CardHeader>
				<CardTitle class="text-xl">Security & Best Practices</CardTitle>
			</CardHeader>
			<CardContent class="space-y-4">
				<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div>
						<h4 class="font-semibold mb-2">✅ Security Best Practices</h4>
						<ul class="space-y-1 text-sm text-muted-foreground">
							<li>• Always verify webhook signatures</li>
							<li>• Use HTTPS endpoints only</li>
							<li>• Implement idempotency handling</li>
							<li>• Log all webhook events</li>
							<li>• Handle duplicate deliveries</li>
						</ul>
					</div>
					<div>
						<h4 class="font-semibold mb-2">📋 Implementation Tips</h4>
						<ul class="space-y-1 text-sm text-muted-foreground">
							<li>• Return 200 status for successful processing</li>
							<li>• Process webhooks asynchronously</li>
							<li>• Implement retry logic for failures</li>
							<li>• Set reasonable timeout values</li>
							<li>• Monitor webhook delivery rates</li>
						</ul>
					</div>
				</div>
			</CardContent>
		</Card>
	</section>

	<!-- Testing -->
	<section class="mb-12">
		<Card>
			<CardHeader>
				<CardTitle class="text-xl">Testing Webhooks</CardTitle>
				<CardDescription>
					Tools and methods for testing webhook integration
				</CardDescription>
			</CardHeader>
			<CardContent class="space-y-4">
				<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div>
						<h4 class="font-semibold mb-2">Local Development</h4>
						<p class="text-sm text-muted-foreground mb-3">Use ngrok to expose your local server:</p>
						<pre class="bg-muted p-3 rounded text-xs"><code># Install ngrok
npm install -g ngrok

# Expose local port
ngrok http 3000

# Use the https URL as your webhook endpoint
https://abc123.ngrok.io/webhooks</code></pre>
					</div>
					<div>
						<h4 class="font-semibold mb-2">Testing Tools</h4>
						<ul class="space-y-2 text-sm text-muted-foreground">
							<li>• <strong>Webhook.site</strong> - Online webhook testing</li>
							<li>• <strong>Postman</strong> - API testing and mocking</li>
							<li>• <strong>Developer Dashboard</strong> - Webhook logs and retry</li>
							<li>• <strong>Unit Tests</strong> - Automated webhook testing</li>
						</ul>
					</div>
				</div>
			</CardContent>
		</Card>
	</section>

	<!-- Getting Started -->
	<section class="mb-12">
		<div class="bg-muted/50 rounded-lg p-6 md:p-8">
			<h2 class="text-2xl font-semibold mb-4">Ready to set up webhooks?</h2>
			<p class="text-muted-foreground mb-6">
				Get your API credentials and configure webhook endpoints in your developer dashboard.
			</p>
			<Button href="/developers/signup" class="bg-purple-600 hover:bg-purple-700 text-white">
				Setup Webhooks
			</Button>
		</div>
	</section>
</div>
