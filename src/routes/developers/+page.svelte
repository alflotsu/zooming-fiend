<script>
	import { Button } from '$lib/components/ui/button';
	import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import { Tabs, TabsContent, TabsList, TabsTrigger } from '$lib/components/ui/tabs';
	import { Code, Webhook, Smartphone, Zap, ArrowRight, CheckCircle } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Developers - Velourcity API Platform</title>
	<meta name="description" content="Integrate delivery features into your app with our REST API, deeplinks, and webhooks. Built for developers." />
</svelte:head>

<!-- Hero Section -->
<section class="container space-y-6 py-8 md:py-12 lg:py-24">
	<div class="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
		<Badge variant="outline" class="px-4 py-1 text-sm">
			Developer Platform
		</Badge>
		<h1 class="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
			Build with the <span class="text-primary">Velourcity API</span>
		</h1>
		<p class="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
			Integrate delivery capabilities into your application with our comprehensive REST API, mobile deeplinks, and real-time webhooks.
		</p>
		<div class="flex flex-col gap-4 sm:flex-row">
			<Button size="lg" href="/developers/signup" class="h-11 px-8">
				<Code class="mr-2 h-4 w-4" />
				Get API Access
			</Button>
			<Button variant="outline" size="lg" href="/docs" class="h-11 px-8">
				View Documentation
			</Button>
		</div>
	</div>
</section>

<!-- Integration Options -->
<section class="container py-8 md:py-12 lg:py-24">
	<div class="mx-auto max-w-[58rem] text-center space-y-4">
		<h2 class="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
			Choose your integration
		</h2>
		<p class="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 mx-auto">
			Multiple ways to integrate delivery features based on your needs and technical requirements.
		</p>
	</div>
	
	<div class="mx-auto mt-12 grid gap-6 md:grid-cols-3">
		<Card class="relative overflow-hidden">
			<CardHeader>
				<div class="flex items-center space-x-2">
					<Zap class="h-6 w-6" />
					<CardTitle>REST API</CardTitle>
				</div>
				<CardDescription>
					Full programmatic control over delivery operations
				</CardDescription>
			</CardHeader>
			<CardContent class="space-y-4">
				<ul class="space-y-2 text-sm">
					<li class="flex items-center space-x-2">
						<CheckCircle class="h-4 w-4 text-green-500" />
						<span>Create and manage delivery orders</span>
					</li>
					<li class="flex items-center space-x-2">
						<CheckCircle class="h-4 w-4 text-green-500" />
						<span>Real-time order tracking</span>
					</li>
					<li class="flex items-center space-x-2">
						<CheckCircle class="h-4 w-4 text-green-500" />
						<span>Payment processing</span>
					</li>
					<li class="flex items-center space-x-2">
						<CheckCircle class="h-4 w-4 text-green-500" />
						<span>Driver management</span>
					</li>
				</ul>
				<Button class="w-full" href="/docs/api">
					<Code class="mr-2 h-4 w-4" />
					API Documentation
				</Button>
			</CardContent>
		</Card>

		<Card class="relative overflow-hidden">
			<CardHeader>
				<div class="flex items-center space-x-2">
					<Smartphone class="h-6 w-6" />
					<CardTitle>Deeplinks</CardTitle>
				</div>
				<CardDescription>
					Redirect users to our mobile app for delivery
				</CardDescription>
			</CardHeader>
			<CardContent class="space-y-4">
				<ul class="space-y-2 text-sm">
					<li class="flex items-center space-x-2">
						<CheckCircle class="h-4 w-4 text-green-500" />
						<span>Pre-populated delivery details</span>
					</li>
					<li class="flex items-center space-x-2">
						<CheckCircle class="h-4 w-4 text-green-500" />
						<span>Seamless user experience</span>
					</li>
					<li class="flex items-center space-x-2">
						<CheckCircle class="h-4 w-4 text-green-500" />
						<span>No payment integration needed</span>
					</li>
					<li class="flex items-center space-x-2">
						<CheckCircle class="h-4 w-4 text-green-500" />
						<span>Quick setup</span>
					</li>
				</ul>
				<Button class="w-full" variant="outline" href="/docs/deeplinks">
					<Smartphone class="mr-2 h-4 w-4" />
					Deeplink Guide
				</Button>
			</CardContent>
		</Card>

		<Card class="relative overflow-hidden">
			<CardHeader>
				<div class="flex items-center space-x-2">
					<Webhook class="h-6 w-6" />
					<CardTitle>Webhooks</CardTitle>
				</div>
				<CardDescription>
					Real-time notifications for delivery updates
				</CardDescription>
			</CardHeader>
			<CardContent class="space-y-4">
				<ul class="space-y-2 text-sm">
					<li class="flex items-center space-x-2">
						<CheckCircle class="h-4 w-4 text-green-500" />
						<span>Order status changes</span>
					</li>
					<li class="flex items-center space-x-2">
						<CheckCircle class="h-4 w-4 text-green-500" />
						<span>Driver location updates</span>
					</li>
					<li class="flex items-center space-x-2">
						<CheckCircle class="h-4 w-4 text-green-500" />
						<span>Payment confirmations</span>
					</li>
					<li class="flex items-center space-x-2">
						<CheckCircle class="h-4 w-4 text-green-500" />
						<span>Delivery completions</span>
					</li>
				</ul>
				<Button class="w-full" variant="outline" href="/docs/webhooks">
					<Webhook class="mr-2 h-4 w-4" />
					Webhook Setup
				</Button>
			</CardContent>
		</Card>
	</div>
</section>

<!-- Code Example Section -->
<section class="container py-8 md:py-12 lg:py-24">
	<div class="mx-auto max-w-[58rem] text-center space-y-4">
		<h2 class="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
			Start in minutes
		</h2>
		<p class="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 mx-auto">
			Simple, developer-friendly API that gets you up and running quickly.
		</p>
	</div>
	
	<div class="mx-auto mt-12 max-w-4xl">
		<Tabs defaultValue="create" class="w-full">
			<TabsList class="grid w-full grid-cols-3">
				<TabsTrigger value="create">Create Order</TabsTrigger>
				<TabsTrigger value="track">Track Order</TabsTrigger>
				<TabsTrigger value="deeplink">Deeplink</TabsTrigger>
			</TabsList>
			<TabsContent value="create" class="space-y-4">
				<Card>
					<CardHeader>
						<CardTitle class="text-lg">Create a Delivery Order</CardTitle>
						<CardDescription>
							Create a new delivery order with pickup and dropoff locations.
						</CardDescription>
					</CardHeader>
					<CardContent>
						<pre class="bg-muted p-4 rounded-lg overflow-x-auto text-sm"><code>curl -X POST https://api.velourcity.com/v1/orders \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "pickup": {
      "address": "123 Restaurant St, City, State 12345",
      "lat": 40.7128,
      "lng": -74.0060
    },
    "dropoff": {
      "address": "456 Customer Ave, City, State 12345", 
      "lat": 40.7589,
      "lng": -73.9851
    },
    "items": [
      {
        "name": "Pizza Margherita",
        "quantity": 2,
        "price": 24.99
      }
    ],
    "customer": {
      "name": "John Doe",
      "phone": "+1234567890"
    }
  }'</code></pre>
					</CardContent>
				</Card>
			</TabsContent>
			<TabsContent value="track" class="space-y-4">
				<Card>
					<CardHeader>
						<CardTitle class="text-lg">Track Order Status</CardTitle>
						<CardDescription>
							Get real-time updates on your delivery order.
						</CardDescription>
					</CardHeader>
					<CardContent>
						<pre class="bg-muted p-4 rounded-lg overflow-x-auto text-sm"><code>curl -X GET https://api.velourcity.com/v1/orders/ord_123456789 \\
  -H "Authorization: Bearer YOUR_API_KEY"

# Response:
{
  "id": "ord_123456789",
  "status": "in_transit",
  "driver": {
    "name": "Jane Driver",
    "location": {
      "lat": 40.7505,
      "lng": -73.9934
    }
  },
  "eta": "2025-01-15T19:30:00Z",
  "tracking_url": "https://track.velourcity.com/ord_123456789"
}</code></pre>
					</CardContent>
				</Card>
			</TabsContent>
			<TabsContent value="deeplink" class="space-y-4">
				<Card>
					<CardHeader>
						<CardTitle class="text-lg">Generate Deeplink</CardTitle>
						<CardDescription>
							Create a deeplink to redirect users to the Velourcity app.
						</CardDescription>
					</CardHeader>
					<CardContent>
						<pre class="bg-muted p-4 rounded-lg overflow-x-auto text-sm"><code># URL format:
https://app.velourcity.com/delivery?
  pickup_address=123%20Restaurant%20St
  &dropoff_address=456%20Customer%20Ave
  &partner_id=YOUR_PARTNER_ID
  &callback_url=https://yourapp.com/delivery/complete

# JavaScript example:
const deeplink = `https://app.velourcity.com/delivery?` +
  `pickup_address=${encodeURIComponent(pickupAddress)}` +
  `&dropoff_address=${encodeURIComponent(dropoffAddress)}` +
  `&partner_id=${partnerId}` +
  `&callback_url=${encodeURIComponent(callbackUrl)}`;
  
window.location.href = deeplink;</code></pre>
					</CardContent>
				</Card>
			</TabsContent>
		</Tabs>
	</div>
</section>

<!-- CTA Section -->
<section class="container py-8 md:py-12 lg:py-24">
	<div class="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
		<h2 class="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
			Ready to integrate?
		</h2>
		<p class="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
			Get your API keys and start building delivery features into your application today.
		</p>
		<div class="flex flex-col gap-4 sm:flex-row">
			<Button size="lg" href="/developers/signup" class="h-11 px-8">
				Get API Access
				<ArrowRight class="ml-2 h-4 w-4" />
			</Button>
			<Button variant="outline" size="lg" href="/docs" class="h-11 px-8">
				View Documentation
			</Button>
		</div>
	</div>
</section>
