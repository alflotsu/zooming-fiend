<script>
	import { Button } from '$lib/components/ui/button';
	import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '$lib/components/ui/breadcrumb';
	import { Smartphone, ArrowLeft, Copy } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Deeplinks Documentation - Velourcity API Platform</title>
	<meta name="description" content="Mobile deeplink integration guide for the Velourcity delivery platform." />
</svelte:head>

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
				<span class="font-medium">Deeplinks</span>
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
			<Smartphone class="h-8 w-8 text-green-600" />
			<h1 class="font-heading text-3xl sm:text-4xl">Deeplinks Integration</h1>
		</div>
		<p class="text-muted-foreground text-lg max-w-3xl">
			Integrate delivery features into your mobile or web application using deeplinks. Redirect users to the Velourcity app with pre-populated delivery information.
		</p>
		<Badge variant="outline">Simple • Fast Setup • No API Keys Required</Badge>
	</div>

	<!-- URL Format -->
	<section class="mb-12">
		<Card>
			<CardHeader>
				<CardTitle class="text-xl">URL Format</CardTitle>
				<CardDescription>
					Basic structure for Velourcity deeplinks
				</CardDescription>
			</CardHeader>
			<CardContent class="space-y-4">
				<div>
					<h4 class="font-semibold mb-2">Base URL</h4>
					<pre class="bg-muted p-4 rounded-lg overflow-x-auto text-sm"><code>https://app.velourcity.com/delivery</code></pre>
				</div>
				<div>
					<h4 class="font-semibold mb-2">Complete Example</h4>
					<pre class="bg-muted p-4 rounded-lg overflow-x-auto text-sm"><code>https://app.velourcity.com/delivery?pickup_address=123%20Restaurant%20St&dropoff_address=456%20Customer%20Ave&partner_id=your_partner_id&callback_url=https://yourapp.com/delivery/complete</code></pre>
				</div>
			</CardContent>
		</Card>
	</section>

	<!-- Parameters -->
	<section class="mb-12">
		<Card>
			<CardHeader>
				<CardTitle class="text-xl">URL Parameters</CardTitle>
				<CardDescription>
					Available parameters for customizing the delivery request
				</CardDescription>
			</CardHeader>
			<CardContent>
				<div class="space-y-4">
					<div class="border rounded-lg p-4">
						<div class="flex items-center justify-between mb-2">
							<code class="font-semibold">pickup_address</code>
							<Badge variant="secondary">Required</Badge>
						</div>
						<p class="text-sm text-muted-foreground">Full pickup address including street, city, and postal code.</p>
					</div>
					<div class="border rounded-lg p-4">
						<div class="flex items-center justify-between mb-2">
							<code class="font-semibold">dropoff_address</code>
							<Badge variant="secondary">Required</Badge>
						</div>
						<p class="text-sm text-muted-foreground">Full delivery address including street, city, and postal code.</p>
					</div>
					<div class="border rounded-lg p-4">
						<div class="flex items-center justify-between mb-2">
							<code class="font-semibold">partner_id</code>
							<Badge variant="secondary">Required</Badge>
						</div>
						<p class="text-sm text-muted-foreground">Your unique partner identifier for tracking and attribution.</p>
					</div>
					<div class="border rounded-lg p-4">
						<div class="flex items-center justify-between mb-2">
							<code class="font-semibold">callback_url</code>
							<Badge variant="outline">Optional</Badge>
						</div>
						<p class="text-sm text-muted-foreground">URL to redirect users back to your app after completing the delivery request.</p>
					</div>
					<div class="border rounded-lg p-4">
						<div class="flex items-center justify-between mb-2">
							<code class="font-semibold">delivery_instructions</code>
							<Badge variant="outline">Optional</Badge>
						</div>
						<p class="text-sm text-muted-foreground">Special instructions for the delivery driver.</p>
					</div>
					<div class="border rounded-lg p-4">
						<div class="flex items-center justify-between mb-2">
							<code class="font-semibold">reference_id</code>
							<Badge variant="outline">Optional</Badge>
						</div>
						<p class="text-sm text-muted-foreground">Your internal reference ID for this delivery request.</p>
					</div>
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
					Code examples for different platforms and languages
				</CardDescription>
			</CardHeader>
			<CardContent class="space-y-6">
				<div>
					<h4 class="font-semibold mb-2">JavaScript / React</h4>
				<div class="bg-muted p-4 rounded-lg">
					<p class="text-sm text-muted-foreground italic">TODO: Add JavaScript/React code example for creating delivery links</p>
				</div>
				</div>
				
				<div>
					<h4 class="font-semibold mb-2">iOS (Swift)</h4>
					<div class="bg-muted p-4 rounded-lg">
						<p class="text-sm text-muted-foreground italic">TODO: Add iOS Swift code example for opening delivery deeplinks</p>
					</div>
				</div>
				
				<div>
					<h4 class="font-semibold mb-2">Android (Java)</h4>
					<div class="bg-muted p-4 rounded-lg">
						<p class="text-sm text-muted-foreground italic">TODO: Add Android Java code example for opening delivery deeplinks</p>
					</div>
				</div>
			</CardContent>
		</Card>
	</section>

	<!-- Best Practices -->
	<section class="mb-12">
		<Card>
			<CardHeader>
				<CardTitle class="text-xl">Best Practices</CardTitle>
			</CardHeader>
			<CardContent class="space-y-4">
				<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div>
						<h4 class="font-semibold mb-2">✅ Do</h4>
						<ul class="space-y-1 text-sm text-muted-foreground">
							<li>• URL encode all parameter values</li>
							<li>• Validate addresses before creating links</li>
							<li>• Provide clear user feedback</li>
							<li>• Handle app not installed scenarios</li>
							<li>• Use HTTPS for callback URLs</li>
						</ul>
					</div>
					<div>
						<h4 class="font-semibold mb-2">❌ Don't</h4>
						<ul class="space-y-1 text-sm text-muted-foreground">
							<li>• Include sensitive information in URLs</li>
							<li>• Assume the app is always installed</li>
							<li>• Use invalid or placeholder addresses</li>
							<li>• Forget to handle callback responses</li>
							<li>• Hardcode partner IDs in client code</li>
						</ul>
					</div>
				</div>
			</CardContent>
		</Card>
	</section>

	<!-- Getting Started -->
	<section class="mb-12">
		<div class="bg-muted/50 rounded-lg p-6 md:p-8">
			<h2 class="text-2xl font-semibold mb-4">Ready to integrate deeplinks?</h2>
			<p class="text-muted-foreground mb-6">
				Get your partner ID and start redirecting users to Velourcity for seamless delivery experiences.
			</p>
			<Button href="/developers/signup">
				Get Partner ID
			</Button>
		</div>
	</section>
</div>
