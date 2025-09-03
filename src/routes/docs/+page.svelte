<script>
	import { Button } from '$lib/components/ui/button';
	import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '$lib/components/ui/breadcrumb';
	import { Code, Smartphone, Webhook, Shield, BookOpen, ArrowRight } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Documentation - Velourcity API Platform</title>
	<meta name="description" content="Complete documentation for the Velourcity API, deeplinks, webhooks, and authentication." />
</svelte:head>

<div class="container max-w-6xl py-8 md:py-12">
	<!-- Breadcrumbs -->
	<Breadcrumb class="mb-6">
		<BreadcrumbList>
			<BreadcrumbItem>
				<BreadcrumbLink href="/">Home</BreadcrumbLink>
			</BreadcrumbItem>
			<BreadcrumbSeparator />
			<BreadcrumbItem>
				<span class="font-medium">Documentation</span>
			</BreadcrumbItem>
		</BreadcrumbList>
	</Breadcrumb>

	<!-- Header -->
	<div class="text-center space-y-4 mb-12">
		<Badge variant="outline" class="px-4 py-1 text-sm">
			Developer Documentation
		</Badge>
		<h1 class="font-heading text-3xl sm:text-4xl md:text-5xl">
			Velourcity API Documentation
		</h1>
		<p class="max-w-3xl mx-auto text-muted-foreground text-lg">
			Everything you need to integrate delivery features into your application. From REST APIs to mobile deeplinks and real-time webhooks.
		</p>
	</div>

	<!-- Quick Start -->
	<section class="mb-12">
		<div class="bg-muted/50 rounded-lg p-6 md:p-8">
			<div class="flex items-center space-x-2 mb-4">
				<BookOpen class="h-6 w-6" />
				<h2 class="text-2xl font-semibold">Quick Start</h2>
			</div>
			<p class="text-muted-foreground mb-6">
				Get started with the Velourcity API in just a few steps.
			</p>
			<div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
				<div class="flex items-center space-x-3">
					<div class="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
						<span class="text-sm font-medium text-primary-foreground">1</span>
					</div>
					<div>
						<p class="font-medium">Sign up for API access</p>
						<p class="text-sm text-muted-foreground">Get your API credentials</p>
					</div>
				</div>
				<div class="flex items-center space-x-3">
					<div class="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
						<span class="text-sm font-medium text-primary-foreground">2</span>
					</div>
					<div>
						<p class="font-medium">Choose integration type</p>
						<p class="text-sm text-muted-foreground">API, deeplinks, or webhooks</p>
					</div>
				</div>
				<div class="flex items-center space-x-3">
					<div class="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
						<span class="text-sm font-medium text-primary-foreground">3</span>
					</div>
					<div>
						<p class="font-medium">Start building</p>
						<p class="text-sm text-muted-foreground">Use our comprehensive docs</p>
					</div>
				</div>
			</div>
			<Button href="/developers/signup">
				Get Started
				<ArrowRight class="ml-2 h-4 w-4" />
			</Button>
		</div>
	</section>

	<!-- Documentation Sections -->
	<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
		<Card class="group hover:shadow-lg transition-shadow">
			<CardHeader>
				<div class="flex items-center space-x-2">
					<Code class="h-6 w-6 text-blue-600" />
					<CardTitle>REST API</CardTitle>
				</div>
				<CardDescription>
					Complete REST API reference with endpoints for orders, tracking, payments, and more.
				</CardDescription>
			</CardHeader>
			<CardContent class="space-y-4">
				<ul class="space-y-2 text-sm text-muted-foreground">
					<li>• Order management and lifecycle</li>
					<li>• Real-time tracking and updates</li>
					<li>• Payment processing</li>
					<li>• Driver assignment and management</li>
					<li>• Comprehensive error handling</li>
				</ul>
				<Button href="/docs/api" variant="outline" class="w-full group-hover:bg-primary group-hover:text-primary-foreground">
					View API Documentation
					<ArrowRight class="ml-2 h-4 w-4" />
				</Button>
			</CardContent>
		</Card>

		<Card class="group hover:shadow-lg transition-shadow">
			<CardHeader>
				<div class="flex items-center space-x-2">
					<Smartphone class="h-6 w-6 text-green-600" />
					<CardTitle>Deeplinks</CardTitle>
				</div>
				<CardDescription>
					Mobile deeplink integration for seamless user experience and quick setup.
				</CardDescription>
			</CardHeader>
			<CardContent class="space-y-4">
				<ul class="space-y-2 text-sm text-muted-foreground">
					<li>• URL format and parameters</li>
					<li>• Pre-populated delivery forms</li>
					<li>• Callback URL handling</li>
					<li>• Mobile app fallbacks</li>
					<li>• Integration examples</li>
				</ul>
				<Button href="/docs/deeplinks" variant="outline" class="w-full group-hover:bg-primary group-hover:text-primary-foreground">
					View Deeplink Guide
					<ArrowRight class="ml-2 h-4 w-4" />
				</Button>
			</CardContent>
		</Card>

		<Card class="group hover:shadow-lg transition-shadow">
			<CardHeader>
				<div class="flex items-center space-x-2">
					<Webhook class="h-6 w-6 text-purple-600" />
					<CardTitle>Webhooks</CardTitle>
				</div>
				<CardDescription>
					Real-time event notifications to keep your application synchronized.
				</CardDescription>
			</CardHeader>
			<CardContent class="space-y-4">
				<ul class="space-y-2 text-sm text-muted-foreground">
					<li>• Event types and payloads</li>
					<li>• Webhook endpoint setup</li>
					<li>• Security and verification</li>
					<li>• Retry logic and handling</li>
					<li>• Testing webhooks locally</li>
				</ul>
				<Button href="/docs/webhooks" variant="outline" class="w-full group-hover:bg-primary group-hover:text-primary-foreground">
					Setup Webhooks
					<ArrowRight class="ml-2 h-4 w-4" />
				</Button>
			</CardContent>
		</Card>

		<Card class="group hover:shadow-lg transition-shadow">
			<CardHeader>
				<div class="flex items-center space-x-2">
					<Shield class="h-6 w-6 text-red-600" />
					<CardTitle>Authentication</CardTitle>
				</div>
				<CardDescription>
					Secure your API calls with proper authentication and authorization.
				</CardDescription>
			</CardHeader>
			<CardContent class="space-y-4">
				<ul class="space-y-2 text-sm text-muted-foreground">
					<li>• API key management</li>
					<li>• Request signing and headers</li>
					<li>• Rate limiting and quotas</li>
					<li>• Environment best practices</li>
					<li>• Security considerations</li>
				</ul>
				<Button href="/docs/authentication" variant="outline" class="w-full group-hover:bg-primary group-hover:text-primary-foreground">
					Authentication Guide
					<ArrowRight class="ml-2 h-4 w-4" />
				</Button>
			</CardContent>
		</Card>
	</div>

	<!-- Additional Resources -->
	<section class="bg-muted/30 rounded-lg p-6 md:p-8">
		<h2 class="text-2xl font-semibold mb-4">Additional Resources</h2>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
			<div>
				<h3 class="font-semibold mb-2">SDKs & Libraries</h3>
				<p class="text-sm text-muted-foreground mb-3">
					Official SDKs for popular programming languages and frameworks.
				</p>
				<Button variant="link" class="p-0 h-auto">
					Coming Soon
				</Button>
			</div>
			<div>
				<h3 class="font-semibold mb-2">Code Examples</h3>
				<p class="text-sm text-muted-foreground mb-3">
					Sample implementations and integration patterns.
				</p>
				<Button variant="link" class="p-0 h-auto" href="#examples">
					View Examples
				</Button>
			</div>
			<div>
				<h3 class="font-semibold mb-2">Support</h3>
				<p class="text-sm text-muted-foreground mb-3">
					Get help from our developer community and support team.
				</p>
				<Button variant="link" class="p-0 h-auto" href="#support">
					Get Help
				</Button>
			</div>
		</div>
	</section>
</div>
