<script>
	import { Button } from '$lib/components/ui/button';
	import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Tabs, TabsContent, TabsList, TabsTrigger } from '$lib/components/ui/tabs';
	import { Badge } from '$lib/components/ui/badge';
	import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '$lib/components/ui/breadcrumb';
	import { Code, ArrowLeft } from 'lucide-svelte';
</script>

<svelte:head>
	<title>API Documentation - Velourcity REST API</title>
	<meta name="description" content="Complete REST API reference for the Velourcity delivery platform." />
</svelte:head>

<div class="container max-w-5xl py-8">
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
				<span class="font-medium">API Reference</span>
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
			<Code class="h-8 w-8 text-purple-600" />
			<h1 class="font-heading text-3xl sm:text-4xl">REST API Reference</h1>
		</div>
		<p class="text-muted-foreground text-lg max-w-3xl">
			Complete reference for the Velourcity REST API. Create orders, track deliveries, manage payments, and more.
		</p>
		<div class="flex items-center space-x-4">
			<Badge variant="outline">Base URL: https://api.velourcity.com/v1</Badge>
			<Badge variant="outline">Version: 1.0</Badge>
		</div>
	</div>

	<!-- Authentication -->
	<section class="mb-12">
		<Card>
			<CardHeader>
				<CardTitle class="text-xl">Authentication</CardTitle>
				<CardDescription>
					All API requests require authentication using your API key.
				</CardDescription>
			</CardHeader>
			<CardContent class="space-y-4">
				<p class="text-sm text-muted-foreground">
					Include your API key in the Authorization header of all requests:
				</p>
				<pre class="bg-muted p-4 rounded-lg overflow-x-auto text-sm"><code>Authorization: Bearer YOUR_API_KEY</code></pre>
				<p class="text-sm text-muted-foreground">
					You can obtain your API key by <a href="/developers/signup" class="text-purple-600 hover:text-purple-700 hover:underline">signing up for developer access</a>.
				</p>
			</CardContent>
		</Card>
	</section>

	<!-- API Endpoints -->
	<section class="space-y-8">
		<h2 class="font-heading text-2xl">API Endpoints</h2>
		
		<Tabs defaultValue="orders" class="w-full">
			<TabsList class="grid w-full grid-cols-4">
				<TabsTrigger value="orders">Orders</TabsTrigger>
				<TabsTrigger value="tracking">Tracking</TabsTrigger>
				<TabsTrigger value="drivers">Drivers</TabsTrigger>
				<TabsTrigger value="payments">Payments</TabsTrigger>
			</TabsList>

			<!-- Orders Tab -->
			<TabsContent value="orders" class="space-y-6">
				<Card>
					<CardHeader>
						<div class="flex items-center justify-between w-full">
							<div>
								<CardTitle class="text-lg">Create Order</CardTitle>
								<CardDescription>Create a new delivery order</CardDescription>
							</div>
							<Badge variant="secondary" class="ml-auto">POST</Badge>
						</div>
					</CardHeader>
					<CardContent class="space-y-4">
						<div class="bg-muted p-3 rounded text-sm">
							<code>POST /orders</code>
						</div>
						<div>
							<h4 class="font-semibold mb-2">Request Body</h4>
							<div class="bg-muted p-4 rounded-lg">
								<p class="text-sm text-muted-foreground italic">TODO: Add JSON request body example for creating orders</p>
							</div>
						</div>
						<div>
							<h4 class="font-semibold mb-2">Response (201 Created)</h4>
							<div class="bg-muted p-4 rounded-lg">
								<p class="text-sm text-muted-foreground italic">TODO: Add JSON response example for creating orders</p>
							</div>
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<div class="flex items-center justify-between w-full">
							<div>
								<CardTitle class="text-lg">Get Order</CardTitle>
								<CardDescription>Retrieve order details</CardDescription>
							</div>
							<Badge variant="outline" class="ml-auto">GET</Badge>
						</div>
					</CardHeader>
					<CardContent class="space-y-4">
						<div class="bg-muted p-3 rounded text-sm">
							<code>GET /orders/order_id</code>
						</div>
						<div>
							<h4 class="font-semibold mb-2">Response (200 OK)</h4>
							<div class="bg-muted p-4 rounded-lg">
								<p class="text-sm text-muted-foreground italic">TODO: Add JSON response example for getting order details</p>
							</div>
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<div class="flex items-center justify-between w-full">
							<div>
								<CardTitle class="text-lg">Cancel Order</CardTitle>
								<CardDescription>Cancel an existing order</CardDescription>
							</div>
							<Badge variant="destructive" class="ml-auto">DELETE</Badge>
						</div>
					</CardHeader>
					<CardContent class="space-y-4">
						<div class="bg-muted p-3 rounded text-sm">
							<code>DELETE /orders/order_id</code>
						</div>
						<p class="text-sm text-muted-foreground">
							Orders can only be cancelled before driver pickup. Cancellation fees may apply.
						</p>
					</CardContent>
				</Card>
			</TabsContent>

			<!-- Tracking Tab -->
			<TabsContent value="tracking" class="space-y-6">
				<Card>
					<CardHeader>
						<div class="flex items-center justify-between w-full">
							<div>
								<CardTitle class="text-lg">Get Live Location</CardTitle>
								<CardDescription>Get real-time driver location</CardDescription>
							</div>
							<Badge variant="outline" class="ml-auto">GET</Badge>
						</div>
					</CardHeader>
					<CardContent class="space-y-4">
						<div class="bg-muted p-3 rounded text-sm">
							<code>GET /orders/order_id/location</code>
						</div>
						<div>
							<h4 class="font-semibold mb-2">Response (200 OK)</h4>
							<div class="bg-muted p-4 rounded-lg">
								<p class="text-sm text-muted-foreground italic">TODO: Add JSON response example for live location data</p>
							</div>
						</div>
					</CardContent>
				</Card>
			</TabsContent>

			<!-- Drivers Tab -->
			<TabsContent value="drivers" class="space-y-6">
				<Card>
					<CardHeader>
						<CardTitle class="text-lg">Available Drivers</CardTitle>
						<CardDescription>Get list of available drivers in an area</CardDescription>
					</CardHeader>
					<CardContent class="space-y-4">
						<div class="bg-muted p-3 rounded text-sm">
							<code>GET /drivers/available?lat=40.7128&lng=-74.0060&radius=5</code>
						</div>
						<div>
							<h4 class="font-semibold mb-2">Query Parameters</h4>
							<ul class="text-sm space-y-1 text-muted-foreground">
								<li><code>lat</code> - Latitude coordinate</li>
								<li><code>lng</code> - Longitude coordinate</li>
								<li><code>radius</code> - Search radius in kilometers (default: 5)</li>
							</ul>
						</div>
					</CardContent>
				</Card>
			</TabsContent>

			<!-- Payments Tab -->
			<TabsContent value="payments" class="space-y-6">
				<Card>
					<CardHeader>
						<div class="flex items-center justify-between w-full">
							<div>
								<CardTitle class="text-lg">Process Payment</CardTitle>
								<CardDescription>Process payment for an order</CardDescription>
							</div>
							<Badge variant="secondary" class="ml-auto">POST</Badge>
						</div>
					</CardHeader>
					<CardContent class="space-y-4">
						<div class="bg-muted p-3 rounded text-sm">
							<code>POST /orders/order_id/payment</code>
						</div>
						<div>
							<h4 class="font-semibold mb-2">Request Body</h4>
							<div class="bg-muted p-4 rounded-lg">
								<p class="text-sm text-muted-foreground italic">TODO: Add JSON request body example for payment processing</p>
							</div>
						</div>
					</CardContent>
				</Card>
			</TabsContent>
		</Tabs>
	</section>

	<!-- Status Codes -->
	<section class="mb-12">
		<Card>
			<CardHeader>
				<CardTitle class="text-xl">Order Status Codes</CardTitle>
				<CardDescription>
					Possible status values for delivery orders
				</CardDescription>
			</CardHeader>
			<CardContent>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
					<div class="space-y-2">
						<div class="flex items-center space-x-2">
							<Badge variant="secondary">confirmed</Badge>
							<span class="text-sm">Order confirmed, awaiting driver</span>
						</div>
						<div class="flex items-center space-x-2">
							<Badge variant="secondary">driver_assigned</Badge>
							<span class="text-sm">Driver assigned and en route to pickup</span>
						</div>
						<div class="flex items-center space-x-2">
							<Badge variant="secondary">picked_up</Badge>
							<span class="text-sm">Items picked up from restaurant</span>
						</div>
						<div class="flex items-center space-x-2">
							<Badge variant="secondary">in_transit</Badge>
							<span class="text-sm">On the way to delivery location</span>
						</div>
					</div>
					<div class="space-y-2">
						<div class="flex items-center space-x-2">
							<Badge variant="default">delivered</Badge>
							<span class="text-sm">Successfully delivered</span>
						</div>
						<div class="flex items-center space-x-2">
							<Badge variant="destructive">cancelled</Badge>
							<span class="text-sm">Order cancelled</span>
						</div>
						<div class="flex items-center space-x-2">
							<Badge variant="destructive">failed</Badge>
							<span class="text-sm">Delivery failed</span>
						</div>
						<div class="flex items-center space-x-2">
							<Badge variant="outline">refunded</Badge>
							<span class="text-sm">Payment refunded</span>
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	</section>

	<!-- Error Responses -->
	<section class="mb-12">
		<Card>
			<CardHeader>
				<CardTitle class="text-xl">Error Responses</CardTitle>
				<CardDescription>
					Standard error response format and common error codes
				</CardDescription>
			</CardHeader>
			<CardContent class="space-y-4">
				<div>
					<h4 class="font-semibold mb-2">Error Response Format</h4>
					<div class="bg-muted p-4 rounded-lg">
						<p class="text-sm text-muted-foreground italic">TODO: Add JSON error response example</p>
					</div>
				</div>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
					<div class="space-y-2">
						<h4 class="font-semibold">Common Error Codes</h4>
						<div class="space-y-1 text-sm">
							<div><code>invalid_request</code> - 400 Bad Request</div>
							<div><code>unauthorized</code> - 401 Unauthorized</div>
							<div><code>payment_required</code> - 402 Payment Required</div>
							<div><code>forbidden</code> - 403 Forbidden</div>
							<div><code>not_found</code> - 404 Not Found</div>
						</div>
					</div>
					<div class="space-y-2">
						<h4 class="font-semibold">Rate Limiting</h4>
						<div class="space-y-1 text-sm text-muted-foreground">
							<div>• 100 requests per minute per API key</div>
							<div>• Rate limit headers included in responses</div>
							<div>• Burst limits for special endpoints</div>
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	</section>
</div>
