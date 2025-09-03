<script>
	import { Button } from '$lib/components/ui/button';
	import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import { Smartphone, Zap, Clock, MapPin, Star, Users, Package, ShieldCheck } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { initializeAnimations } from '$lib/utils/animations.js';
	
	onMount(() => {
		// Initialize all animations with accessibility support
		initializeAnimations();
	});
</script>

<svelte:head>
	<title>Velourcity - Fast & Reliable Delivery Service</title>
	<meta name="description" content="Lightning-fast delivery service for food, groceries, and packages. Download our app or integrate our API into your application. 15-minute average delivery time." />
	
	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://velourcity.com/" />
	<meta property="og:title" content="Velourcity - Fast & Reliable Delivery Service" />
	<meta property="og:description" content="Lightning-fast delivery service for food, groceries, and packages. Download our app or integrate our API into your application. 15-minute average delivery time." />
	<meta property="og:image" content="https://velourcity.com/og-image.jpg" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:site_name" content="Velourcity" />
	
	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://velourcity.com/" />
	<meta property="twitter:title" content="Velourcity - Fast & Reliable Delivery Service" />
	<meta property="twitter:description" content="Lightning-fast delivery service for food, groceries, and packages. Download our app or integrate our API into your application. 15-minute average delivery time." />
	<meta property="twitter:image" content="https://velourcity.com/og-image.jpg" />
	<meta property="twitter:site" content="@velourcity" />
	<meta property="twitter:creator" content="@velourcity" />
</svelte:head>

<!-- Full Page Grid Background -->
<div class="fixed inset-0 -z-50">
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
		<div class="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-blue-500/8"></div>
		<div class="absolute inset-0 bg-gradient-conic from-primary/3 via-transparent to-slate-500/3 animate-spin-slow"></div>
	</div>
	<div class="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
		<Badge variant="outline" class="hero-badge px-4 py-1 text-sm">
			🚀 Fast & Reliable Delivery
		</Badge>
		<h1 class="hero-title font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
			Your packages, <span class="text-primary">delivered</span>
		</h1>
		<p class="hero-description max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
			Fast, reliable delivery service at your fingertips. Get your food, groceries, packages, and more with just a few taps.
		</p>
		<div class="hero-buttons flex flex-col gap-4 sm:flex-row">
			<Button size="lg" href="https://apps.apple.com/app/velourcity" class="h-11 px-8">
				<Smartphone class="mr-2 h-4 w-4" />
				Download App
			</Button>
			<Button variant="outline" size="lg" href="#features" class="h-11 px-8">
				Learn More
			</Button>
		</div>
		
		<!-- App Store Badges in Hero -->
		<div class="hero-badges flex flex-col items-center justify-center gap-4 mt-8 sm:flex-row">
			<a href="https://apps.apple.com/app/velourcity" class="inline-block transition-transform hover:scale-105">
				<img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83" alt="Download on the App Store" class="h-14" />
			</a>
			<a href="https://play.google.com/store/apps/details?id=com.velourcity.app" class="inline-block transition-transform hover:scale-105">
				<img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Get it on Google Play" class="h-16" />
			</a>
		</div>
	</div>
</section>

<!-- Stats Section -->
<section class="stats-section container py-8 md:py-12">
	<div class="mx-auto max-w-[58rem] text-center">
		<div class="grid grid-cols-2 md:grid-cols-4 gap-8">
			<div>
				<div class="stat-number text-3xl font-bold text-primary">50K+</div>
				<div class="text-sm text-muted-foreground">Happy Customers</div>
			</div>
			<div>
				<div class="stat-number text-3xl font-bold text-primary">15min</div>
				<div class="text-sm text-muted-foreground">Average Delivery</div>
			</div>
			<div>
				<div class="stat-number text-3xl font-bold text-primary">500+</div>
				<div class="text-sm text-muted-foreground">Partner Restaurants</div>
			</div>
			<div>
				<div class="stat-number text-3xl font-bold text-primary">4.8★</div>
				<div class="text-sm text-muted-foreground">App Store Rating</div>
			</div>
		</div>
	</div>
</section>

<!-- Features Section -->
<section id="features" class="container space-y-6 py-8 md:py-12 lg:py-24 section-divider">
	<div class="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
		<h2 class="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
			Why choose Velourcity?
		</h2>
		<p class="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
			Experience the fastest, most reliable delivery service in your area.
		</p>
	</div>
	<div class="features-grid mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
		<Card class="feature-card relative overflow-hidden">
			<CardHeader>
				<div class="flex items-center space-x-2">
					<Zap class="h-6 w-6 text-yellow-500" />
					<CardTitle>Lightning Fast</CardTitle>
				</div>
			</CardHeader>
			<CardContent>
				<CardDescription>
					Average delivery time of just 15 minutes. Get your food, groceries, and packages delivered in record time.
				</CardDescription>
			</CardContent>
		</Card>
		<Card class="feature-card relative overflow-hidden">
			<CardHeader>
				<div class="flex items-center space-x-2">
					<Clock class="h-6 w-6 text-blue-500" />
					<CardTitle>Real-time Tracking</CardTitle>
				</div>
			</CardHeader>
			<CardContent>
				<CardDescription>
					Track your delivery in real-time. See exactly where your driver is and get accurate ETA updates.
				</CardDescription>
			</CardContent>
		</Card>
		<Card class="feature-card relative overflow-hidden">
			<CardHeader>
				<div class="flex items-center space-x-2">
					<ShieldCheck class="h-6 w-6 text-green-500" />
					<CardTitle>Safe & Secure</CardTitle>
				</div>
			</CardHeader>
			<CardContent>
				<CardDescription>
					All drivers are background-checked and insured. Your payments are secure with end-to-end encryption.
				</CardDescription>
			</CardContent>
		</Card>
		<Card class="feature-card relative overflow-hidden">
			<CardHeader>
				<div class="flex items-center space-x-2">
					<Star class="h-6 w-6 text-orange-500" />
					<CardTitle>Top Rated</CardTitle>
				</div>
			</CardHeader>
			<CardContent>
				<CardDescription>
					4.8-star rating from over 50,000 customers. Consistently rated as the best delivery service in the area.
				</CardDescription>
			</CardContent>
		</Card>
		<Card class="feature-card relative overflow-hidden">
			<CardHeader>
				<div class="flex items-center space-x-2">
					<Package class="h-6 w-6 text-purple-500" />
					<CardTitle>Anything Delivered</CardTitle>
				</div>
			</CardHeader>
			<CardContent>
				<CardDescription>
					Food, groceries, packages, documents - we deliver it all. From restaurants to retail stores and more.
				</CardDescription>
			</CardContent>
		</Card>
		<Card class="feature-card relative overflow-hidden">
			<CardHeader>
				<div class="flex items-center space-x-2">
					<Users class="h-6 w-6 text-indigo-500" />
					<CardTitle>24/7 Support</CardTitle>
				</div>
			</CardHeader>
			<CardContent>
				<CardDescription>
					Our customer support team is available around the clock to help with any issues or questions.
				</CardDescription>
			</CardContent>
		</Card>
	</div>
</section>

<!-- Consumer CTA Section -->
<section class="container py-8 md:py-12 lg:py-24">
	<div class="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
		<h2 class="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
			Start ordering today
		</h2>
		<p class="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
			Join thousands of satisfied customers enjoying fast, reliable delivery.
		</p>
		<div class="flex flex-col gap-4 sm:flex-row">
			<Button size="lg" href="https://apps.apple.com/app/velourcity" class="h-11 px-8">
				<Smartphone class="mr-2 h-4 w-4" />
				Download App
			</Button>
			<Button variant="outline" size="lg" href="#how-it-works" class="h-11 px-8">
				How It Works
			</Button>
		</div>
	</div>
</section>

<!-- How It Works Section -->
<section id="how-it-works" class="container py-8 md:py-12 lg:py-24 bg-muted/30">
	<div class="mx-auto max-w-[58rem] text-center space-y-4 mb-12">
		<h2 class="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
			How it works
		</h2>
		<p class="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 mx-auto">
			Getting your delivery is simple and fast.
		</p>
	</div>
	
	<div class="steps-grid mx-auto grid gap-8 md:grid-cols-3 max-w-4xl">
		<div class="step-item text-center space-y-4">
			<div class="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center">
				<span class="text-2xl font-bold text-primary-foreground">1</span>
			</div>
			<h3 class="text-xl font-semibold">Place Your Order</h3>
			<p class="text-muted-foreground">
				Browse restaurants and stores, select items, and checkout with secure payment.
			</p>
		</div>
		<div class="step-item text-center space-y-4">
			<div class="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center">
				<span class="text-2xl font-bold text-primary-foreground">2</span>
			</div>
			<h3 class="text-xl font-semibold">Track in Real-time</h3>
			<p class="text-muted-foreground">
				Watch your driver's location live on the map with accurate delivery time estimates.
			</p>
		</div>
		<div class="step-item text-center space-y-4">
			<div class="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center">
				<span class="text-2xl font-bold text-primary-foreground">3</span>
			</div>
			<h3 class="text-xl font-semibold">Enjoy Your Delivery</h3>
			<p class="text-muted-foreground">
				Receive your order at your doorstep, fresh and on time, every time.
			</p>
		</div>
	</div>
</section>

<!-- Developer Section -->
<section class="container py-8 md:py-12 lg:py-24">
	<div class="mx-auto max-w-[58rem] text-center space-y-4 mb-12">
		<Badge variant="outline" class="px-4 py-1 text-sm">
			For Developers
		</Badge>
		<h2 class="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
			Integrate delivery into your app
		</h2>
		<p class="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 mx-auto">
			Add delivery features to your application with our comprehensive, easy to use API.
		</p>
		<div class="flex flex-col gap-4 sm:flex-row justify-center">
			<Button size="lg" href="/developers" class="h-11 px-8">
				Explore Developer Platform
			</Button>
			<Button variant="outline" size="lg" href="/docs" class="h-11 px-8">
				View Documentation
			</Button>
		</div>
	</div>
</section>
