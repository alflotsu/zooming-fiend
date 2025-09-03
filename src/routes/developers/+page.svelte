<script>
	import { Button } from '$lib/components/ui/button';
	import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import { Tabs, TabsContent, TabsList, TabsTrigger } from '$lib/components/ui/tabs';
	import { Code, Webhook, Smartphone, Zap, ArrowRight, CheckCircle } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { initializeAnimations } from '$lib/utils/animations.js';
	
	onMount(() => {
		// Initialize all animations with accessibility support
		initializeAnimations();
	});
</script>

<svelte:head>
	<title>Developers - Velourcity API Platform</title>
	<meta name="description" content="Integrate delivery features into your app with our REST API, deeplinks, and webhooks. Built for developers." />
</svelte:head>

<!-- Full Page Grid Background -->
<div class="fixed inset-0 -z-50">
	<!-- Background base -->
	<div class="absolute inset-0 bg-background"></div>
	<!-- Light mode grid (gray) with animation -->
	<div class="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-40 dark:hidden grid-animate"></div>
	<!-- Dark mode grid (blue) with animation -->
	<div class="absolute inset-0 bg-[url('/grid-dark.svg')] bg-repeat opacity-20 hidden dark:block grid-animate"></div>
	<div class="absolute inset-0 bg-gradient-to-br from-background/80 via-background/40 to-background/80"></div>
</div>

<!-- Hero Section -->
<section class="relative container space-y-6 py-8 md:py-12 lg:py-32 overflow-hidden">
	<!-- Hero Background Gradient -->
	<div class="hero-bg absolute inset-0 -z-10 opacity-20">
		<div class="absolute inset-0 bg-gradient-to-br from-purple-500/15 via-transparent to-indigo-500/8"></div>
		<div class="absolute inset-0 bg-gradient-conic from-purple-500/3 via-transparent to-violet-500/3 animate-spin-slow"></div>
	</div>
	<div class="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
		<Badge variant="outline" class="hero-badge px-4 py-1 text-sm">
			Developer Platform
		</Badge>
		<h1 class="hero-title font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
			Build with the <span class="text-purple-600 dark:text-purple-400">Velourcity API</span>
		</h1>
		<p class="hero-description max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
			Integrate delivery capabilities into your application with our comprehensive REST API, mobile deeplinks, and real-time webhooks.
		</p>
		<div class="hero-buttons flex flex-col gap-4 sm:flex-row">
			<Button size="lg" href="/developers/signup" class="h-11 px-8 bg-purple-600 hover:bg-purple-700 text-white">
				<Code class="mr-2 h-4 w-4" />
				Get API Access
			</Button>
			<Button variant="outline" size="lg" href="/docs" class="h-11 px-8 border-purple-600 text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-950">
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
	
	<div class="features-grid mx-auto mt-12 grid gap-6 md:grid-cols-3">
		<Card class="feature-card relative overflow-hidden">
			<CardHeader>
				<div class="flex items-center space-x-2">
					<Zap class="h-6 w-6 text-purple-600" />
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
				<Button class="w-full bg-purple-600 hover:bg-purple-700 text-white" href="/docs/api">
					<Code class="mr-2 h-4 w-4" />
					API Documentation
				</Button>
			</CardContent>
		</Card>

		<Card class="feature-card relative overflow-hidden">
			<CardHeader>
				<div class="flex items-center space-x-2">
					<Smartphone class="h-6 w-6 text-indigo-600" />
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
				<Button class="w-full border-indigo-600 text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-950" variant="outline" href="/docs/deeplinks">
					<Smartphone class="mr-2 h-4 w-4" />
					Deeplink Guide
				</Button>
			</CardContent>
		</Card>

		<Card class="feature-card relative overflow-hidden">
			<CardHeader>
				<div class="flex items-center space-x-2">
					<Webhook class="h-6 w-6 text-violet-600" />
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
				<Button class="w-full border-violet-600 text-violet-600 hover:bg-violet-50 dark:hover:bg-violet-950" variant="outline" href="/docs/webhooks">
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
		<Tabs  class="w-full">
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
					<div class="bg-muted p-4 rounded-lg">
						<p class="text-sm text-muted-foreground italic">TODO: Add curl command example for creating delivery orders</p>
					</div>
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
					<div class="bg-muted p-4 rounded-lg">
						<p class="text-sm text-muted-foreground italic">TODO: Add curl command example for tracking delivery orders</p>
					</div>
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
					<div class="bg-muted p-4 rounded-lg">
						<p class="text-sm text-muted-foreground italic">TODO: Add JavaScript example for generating deeplinks</p>
					</div>
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
			<Button size="lg" href="/developers/signup" class="h-11 px-8 bg-purple-600 hover:bg-purple-700 text-white">
				Get API Access
				<ArrowRight class="ml-2 h-4 w-4" />
			</Button>
			<Button variant="outline" size="lg" href="/docs" class="h-11 px-8 border-purple-600 text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-950">
				View Documentation
			</Button>
		</div>
	</div>
</section>
