<script>
	import { Button } from '$lib/components/ui/button';
	import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import { 
		Zap, 
		Target, 
		Users, 
		Code, 
		Smartphone, 
		Globe, 
		TrendingUp, 
		Heart,
		Lightbulb,
		Rocket,
		Shield,
		Clock,
		MapPin,
		Star
	} from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { initializeAnimations } from '$lib/utils/animations.js';
	
	onMount(() => {
		// Initialize all animations with accessibility support
		initializeAnimations();
	});
</script>

<svelte:head>
	<title>About Velourcity - Our Story & Mission</title>
	<meta name="description" content="Learn about Velourcity's mission to revolutionize delivery through innovation. Founded by developers, built for everyone. Discover our story, values, and vision." />
	
	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://velourcity.com/about" />
	<meta property="og:title" content="About Velourcity - Innovation-Driven Delivery Platform" />
	<meta property="og:description" content="Discover the story behind Velourcity. Founded by developers who believe technology can make delivery instant, reliable, and accessible to everyone." />
	<meta property="og:image" content="https://velourcity.com/og-about.jpg" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:site_name" content="Velourcity" />
	
	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://velourcity.com/about" />
	<meta property="twitter:title" content="About Velourcity - Innovation-Driven Delivery Platform" />
	<meta property="twitter:description" content="Discover the story behind Velourcity. Founded by developers who believe technology can make delivery instant, reliable, and accessible to everyone." />
	<meta property="twitter:image" content="https://velourcity.com/og-about.jpg" />
	<meta property="twitter:site" content="@velourcity" />
	<meta property="twitter:creator" content="@velourcity" />
</svelte:head>

<style>
	/* Animated triangles background with theme-specific SVGs */
	.triangle-stroke-animate {
		background-image: url('/grid_triangles_animated_light.svg?v=2');
		background-size: 512px 512px;
		opacity: 1;
		animation: triangle-fade-in 3s ease-out forwards;
	}
	
	@keyframes triangle-fade-in {
		0% {
			opacity: 0;
			background-size: 768px 768px;
		}
		100% {
			opacity: 1;
			background-size: 512px 512px;
		}
	}
	
	:global(.dark) .triangle-stroke-animate {
		/* Use blue SVG in dark mode */
		background-image: url('/grid_triangles_animated_dark.svg?v=2') !important;
		opacity: 1;
	}
	
	/* Pulse animation for additional effect */
	.triangle-pulse {
		animation: pulse-opacity 7s ease-in-out infinite;
	}
	
	@keyframes pulse-opacity {
		0%, 100% {
			opacity: 0.6;
		}
		50% {
			opacity: 1;
		}
	}
</style>

<!-- Full Page Triangle Background -->
<div class="fixed inset-0 -z-50">
	<!-- Background base -->
	<div class="absolute inset-0 bg-background"></div>
	<!-- Animated triangle strokes for both light and dark mode -->
	<div class="absolute inset-0 bg-repeat triangle-stroke-animate triangle-pulse"></div>
	<!-- Subtle gradient overlay -->
	<div class="absolute inset-0 bg-gradient-to-br from-background/88 via-background/55 to-background/88"></div>
</div>

<div class="min-h-screen">

<!-- Hero Section -->
<section class="relative container space-y-6 py-8 md:py-12 lg:py-32 overflow-hidden">
	<div class="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
		<Badge variant="outline" class="px-4 py-1 text-sm">
			🚀 Our Story
		</Badge>
		<h1 class="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
			Built by <span class="text-primary">developers</span>,<br/>for everyone
		</h1>
		<p class="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
			We're on a mission to revolutionize delivery through innovation, making on-demand delivery instant, reliable, and accessible to consumers, businesses and individuals everywhere.
		</p>
		
		<!-- Mission Stats -->
		<div class="stats-section grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 w-full max-w-4xl">
			<div class="text-center">
				<div class="stat-number text-3xl font-bold text-primary">2024</div>
				<div class="text-sm text-muted-foreground">Founded</div>
			</div>
			<div class="text-center">
				<div class="stat-number text-3xl font-bold text-primary">100k+</div>
				<div class="text-sm text-muted-foreground">Deliveries</div>
			</div>
			<div class="text-center">
				<div class="stat-number text-3xl font-bold text-primary">15min</div>
				<div class="text-sm text-muted-foreground">Average Time</div>
			</div>
			<div class="text-center">
				<div class="stat-number text-3xl font-bold text-primary">99.9%</div>
				<div class="text-sm text-muted-foreground">Uptime</div>
			</div>
		</div>
	</div>
</section>

<!-- Our Story -->
<section class="container py-8 md:py-12 lg:py-24">
	<div class="mx-auto max-w-[58rem] text-center space-y-4 mb-12">
		<h2 class="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
			The story behind Velourcity
		</h2>
		<p class="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 mx-auto">
			Every great platform starts with a problem that needs solving.
		</p>
	</div>
	
	<div class="grid gap-8 lg:grid-cols-2 items-center max-w-6xl mx-auto">
		<div class="space-y-6">
			<div class="space-y-4">
				<h3 class="text-2xl font-semibold">The Problem</h3>
				<p class="text-muted-foreground leading-relaxed">
					As developers and consumers, we were frustrated by the lack of reliable delivery options and APIs. Whether sending a package across town or building delivery into an app, existing platforms were slow, unreliable, and needlessly complex.
				</p>
			</div>
			
			<div class="space-y-4">
				<h3 class="text-2xl font-semibold">Our Solution</h3>
				<p class="text-muted-foreground leading-relaxed">
					We decided to build what we wished existed: a delivery platform engineered from the ground up with developers and end-users in mind. Fast delivery times, real-time tracking, comprehensive APIs, and an experience that just works.
				</p>
			</div>
			
			<div class="space-y-4">
				<h3 class="text-2xl font-semibold">Today</h3>
				<p class="text-muted-foreground leading-relaxed">
					Velourcity powers thousands of deliveries daily, provides jobs to drivers across multiple cities, and offers developers the tools they need to integrate delivery seamlessly into their applications.
				</p>
			</div>
		</div>
		
		<Card class="p-6">
			<div class="space-y-6">
				<div class="flex items-center space-x-4">
					<div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
						<Lightbulb class="h-6 w-6 text-primary" />
					</div>
					<div>
						<p class="font-semibold">Innovation First</p>
						<p class="text-sm text-muted-foreground">Technology drives everything we do</p>
					</div>
				</div>
				<div class="flex items-center space-x-4">
					<div class="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center">
						<Zap class="h-6 w-6 text-green-500" />
					</div>
					<div>
						<p class="font-semibold">Speed Matters</p>
						<p class="text-sm text-muted-foreground">15-minute average delivery time</p>
					</div>
				</div>
				<div class="flex items-center space-x-4">
					<div class="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center">
						<Code class="h-6 w-6 text-blue-500" />
					</div>
					<div>
						<p class="font-semibold">Developer Focused</p>
						<p class="text-sm text-muted-foreground">Built by developers, for developers</p>
					</div>
				</div>
			</div>
		</Card>
	</div>
</section>

<!-- Our Values -->
<section class="container py-8 md:py-12 lg:py-24 bg-muted/30">
	<div class="mx-auto max-w-[58rem] text-center space-y-4 mb-12">
		<h2 class="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
			What drives us
		</h2>
		<p class="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 mx-auto">
			Our core values shape every decision we make.
		</p>
	</div>
	
	<div class="features-grid grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
		<Card class="feature-card">
			<CardHeader>
				<div class="flex items-center space-x-2">
					<Rocket class="h-6 w-6 text-orange-500" />
					<CardTitle class="text-lg">Innovation</CardTitle>
				</div>
			</CardHeader>
			<CardContent>
				<CardDescription>
					We push the boundaries of what's possible in delivery technology, from AI-powered routing to real-time tracking.
				</CardDescription>
			</CardContent>
		</Card>
		
		<Card class="feature-card">
			<CardHeader>
				<div class="flex items-center space-x-2">
					<Shield class="h-6 w-6 text-green-500" />
					<CardTitle class="text-lg">Reliability</CardTitle>
				</div>
			</CardHeader>
			<CardContent>
				<CardDescription>
					99.9% uptime, consistent delivery times, and dependable service that businesses can count on.
				</CardDescription>
			</CardContent>
		</Card>
		
		<Card class="feature-card">
			<CardHeader>
				<div class="flex items-center space-x-2">
					<Heart class="h-6 w-6 text-red-500" />
					<CardTitle class="text-lg">Community</CardTitle>
				</div>
			</CardHeader>
			<CardContent>
				<CardDescription>
					Supporting drivers with fair pay and flexible work, while helping local businesses grow and thrive.
				</CardDescription>
			</CardContent>
		</Card>
		
		<Card class="feature-card">
			<CardHeader>
				<div class="flex items-center space-x-2">
					<Target class="h-6 w-6 text-blue-500" />
					<CardTitle class="text-lg">Excellence</CardTitle>
				</div>
			</CardHeader>
			<CardContent>
				<CardDescription>
					Every line of code, every delivery, every interaction is crafted with attention to detail and quality.
				</CardDescription>
			</CardContent>
		</Card>
	</div>
</section>

<!-- Meet the Team -->
<section class="container py-8 md:py-12 lg:py-24">
	<div class="mx-auto max-w-[58rem] text-center space-y-4 mb-12">
		<h2 class="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
			Meet the founding team
		</h2>
		<p class="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 mx-auto">
			Two developers with a shared vision for better delivery.
		</p>
	</div>
	
	<div class="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
		<Card class="text-center">
			<CardHeader>
				<div class="mx-auto w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-4">
					<Users class="h-12 w-12 text-primary" />
				</div>
				<CardTitle class="text-xl">Co-Founder & CEO</CardTitle>
				<CardDescription class="text-base">Visionary Leader</CardDescription>
			</CardHeader>
			<CardContent class="space-y-4">
				<p class="text-muted-foreground">
					Passionate about solving real-world problems with technology. Leads product vision, business strategy, and ensuring we stay true to our mission of making delivery instant and accessible.
				</p>
				<div class="flex flex-wrap gap-2 justify-center">
					<Badge variant="secondary">Strategy</Badge>
					<Badge variant="secondary">Product</Badge>
					<Badge variant="secondary">Leadership</Badge>
				</div>
			</CardContent>
		</Card>
		
		<Card class="text-center">
			<CardHeader>
				<div class="mx-auto w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-4">
					<Code class="h-12 w-12 text-primary" />
				</div>
				<CardTitle class="text-xl">Co-Founder & CTO</CardTitle>
				<CardDescription class="text-base">Technical Architect</CardDescription>
			</CardHeader>
			<CardContent class="space-y-4">
				<p class="text-muted-foreground">
					Architect of Velourcity's technology stack. Responsible for platform reliability, API design, and the innovative features that make our 15-minute deliveries possible.
				</p>
				<div class="flex flex-wrap gap-2 justify-center">
					<Badge variant="secondary">Engineering</Badge>
					<Badge variant="secondary">APIs</Badge>
					<Badge variant="secondary">Innovation</Badge>
				</div>
			</CardContent>
		</Card>
	</div>
</section>

<!-- Technology & Innovation -->
<section class="container py-8 md:py-12 lg:py-24 bg-muted/30">
	<div class="mx-auto max-w-[58rem] text-center space-y-4 mb-12">
		<h2 class="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
			Innovation at our core
		</h2>
		<p class="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 mx-auto">
			Technology isn't just what we use—it's who we are.
		</p>
	</div>
	
	<div class="grid gap-8 lg:grid-cols-3 max-w-6xl mx-auto">
		<div class="space-y-6">
			<div class="space-y-4">
				<div class="flex items-center space-x-3">
					<div class="w-10 h-10 bg-blue-500/10 rounded-full flex items-center justify-center">
						<Smartphone class="h-5 w-5 text-blue-500" />
					</div>
					<h3 class="text-xl font-semibold">Real-time Everything</h3>
				</div>
				<p class="text-muted-foreground">
					Live tracking, instant notifications, and real-time updates keep everyone connected throughout the delivery process.
				</p>
			</div>
			
			<div class="space-y-4">
				<div class="flex items-center space-x-3">
					<div class="w-10 h-10 bg-green-500/10 rounded-full flex items-center justify-center">
						<MapPin class="h-5 w-5 text-green-500" />
					</div>
					<h3 class="text-xl font-semibold">Smart Routing</h3>
				</div>
				<p class="text-muted-foreground">
					AI-powered algorithms optimize delivery routes in real-time, reducing delivery times and improving efficiency.
				</p>
			</div>
		</div>
		
		<div class="space-y-6">
			<div class="space-y-4">
				<div class="flex items-center space-x-3">
					<div class="w-10 h-10 bg-purple-500/10 rounded-full flex items-center justify-center">
						<Code class="h-5 w-5 text-purple-500" />
					</div>
					<h3 class="text-xl font-semibold">Developer-First APIs</h3>
				</div>
				<p class="text-muted-foreground">
					Comprehensive, well-documented APIs that make integration simple and powerful for developers.
				</p>
			</div>
			
			<div class="space-y-4">
				<div class="flex items-center space-x-3">
					<div class="w-10 h-10 bg-orange-500/10 rounded-full flex items-center justify-center">
						<Shield class="h-5 w-5 text-orange-500" />
					</div>
					<h3 class="text-xl font-semibold">Enterprise Security</h3>
				</div>
				<p class="text-muted-foreground">
					Bank-level security, data encryption, and privacy protection built into every aspect of our platform.
				</p>
			</div>
		</div>
		
		<div class="space-y-6">
			<div class="space-y-4">
				<div class="flex items-center space-x-3">
					<div class="w-10 h-10 bg-red-500/10 rounded-full flex items-center justify-center">
						<TrendingUp class="h-5 w-5 text-red-500" />
					</div>
					<h3 class="text-xl font-semibold">Scalable Architecture</h3>
				</div>
				<p class="text-muted-foreground">
					Built to handle millions of deliveries with 99.9% uptime and lightning-fast response times.
				</p>
			</div>
			
			<div class="space-y-4">
				<div class="flex items-center space-x-3">
					<div class="w-10 h-10 bg-yellow-500/10 rounded-full flex items-center justify-center">
						<Clock class="h-5 w-5 text-yellow-500" />
					</div>
					<h3 class="text-xl font-semibold">Predictive Analytics</h3>
				</div>
				<p class="text-muted-foreground">
					Machine learning models predict demand, optimize driver allocation, and improve delivery accuracy.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Our Impact -->
<section class="container py-8 md:py-12 lg:py-24">
	<div class="mx-auto max-w-[58rem] text-center space-y-4 mb-12">
		<h2 class="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
			Making an impact
		</h2>
		<p class="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 mx-auto">
			Numbers tell the story of our growing impact.
		</p>
	</div>
	
	<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
		<div class="text-center space-y-2">
			<div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
				<Users class="h-8 w-8 text-primary" />
			</div>
			<div class="text-3xl font-bold text-primary">10,000+</div>
			<p class="text-sm text-muted-foreground">Active Drivers</p>
			<p class="text-xs text-muted-foreground">Jobs created with flexible work</p>
		</div>
		
		<div class="text-center space-y-2">
			<div class="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto">
				<Globe class="h-8 w-8 text-green-500" />
			</div>
			<div class="text-3xl font-bold text-green-500">50+</div>
			<p class="text-sm text-muted-foreground">Cities Served</p>
			<p class="text-xs text-muted-foreground">Expanding to new markets monthly</p>
		</div>
		
		<div class="text-center space-y-2">
			<div class="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto">
				<Code class="h-8 w-8 text-blue-500" />
			</div>
			<div class="text-3xl font-bold text-blue-500">1M+</div>
			<p class="text-sm text-muted-foreground">API Calls</p>
			<p class="text-xs text-muted-foreground">Developers building with our platform</p>
		</div>
		
		<div class="text-center space-y-2">
			<div class="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto">
				<Star class="h-8 w-8 text-orange-500" />
			</div>
			<div class="text-3xl font-bold text-orange-500">4.9</div>
			<p class="text-sm text-muted-foreground">Average Rating</p>
			<p class="text-xs text-muted-foreground">From customers and drivers</p>
		</div>
	</div>
</section>

<!-- Join Our Mission -->
<section class="container py-8 md:py-12 lg:py-24 bg-muted/30">
	<div class="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
		<h2 class="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
			Join our mission
		</h2>
		<p class="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
			Whether you're a customer, driver, or developer—be part of the delivery revolution.
		</p>
		<div class="flex flex-col gap-4 sm:flex-row">
			<Button size="lg" href="/drivers" class="h-11 px-8">
				Drive with Us
			</Button>
			<Button variant="outline" size="lg" href="/developers" class="h-11 px-8">
				Build with Our API
			</Button>
		</div>
		
		<div class="mt-8 pt-8 border-t border-border/50">
			<p class="text-sm text-muted-foreground mb-4">
				Questions about our story or want to get in touch?
			</p>
			<Button variant="link" href="/support">
				Contact Us
			</Button>
		</div>
	</div>
</section>

</div>
