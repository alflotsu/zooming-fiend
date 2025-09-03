<script>
	import { Button } from '$lib/components/ui/button';
	import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import { Smartphone, DollarSign, Clock, Shield, Star, Users, Truck, CheckCircle, ArrowRight, MapPin } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Drive with Velourcity - Earn More, Work Less</title>
	<meta name="description" content="Join thousands of drivers earning great money with flexible hours. Fast payouts, reliable rides, and trusted platform. Start driving with Velourcity today." />
	
	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://velourcity.com/drivers" />
	<meta property="og:title" content="Drive with Velourcity - Earn $25+/hour" />
	<meta property="og:description" content="Join thousands of drivers earning great money with flexible hours. Fast payouts, reliable rides, trusted platform. Apply in minutes and start earning today." />
	<meta property="og:image" content="https://velourcity.com/og-drivers.jpg" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:site_name" content="Velourcity" />
	
	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://velourcity.com/drivers" />
	<meta property="twitter:title" content="Drive with Velourcity - Earn $25+/hour" />
	<meta property="twitter:description" content="Join thousands of drivers earning great money with flexible hours. Fast payouts, reliable rides, trusted platform. Apply in minutes and start earning today." />
	<meta property="twitter:image" content="https://velourcity.com/og-drivers.jpg" />
	<meta property="twitter:site" content="@velourcity" />
	<meta property="twitter:creator" content="@velourcity" />
</svelte:head>

<!-- Hero Section -->
<section class="relative container space-y-6 py-8 md:py-12 lg:py-32 overflow-hidden">
	<div class="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
		<Badge variant="outline" class="px-4 py-1 text-sm">
			🚗 Drive & Earn with Velourcity
		</Badge>
		<h1 class="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
			Your car, your <span class="text-primary">freedom</span>
		</h1>
		<p class="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
			Make great money on your schedule. Fast payouts, reliable rides, and a platform that puts drivers first.
		</p>
		<div class="flex flex-col gap-4 sm:flex-row">
			<Button size="lg" href="#" class="h-11 px-8">
				<Smartphone class="mr-2 h-4 w-4" />
				Start Driving Today
			</Button>
			<Button variant="outline" size="lg" href="#earnings" class="h-11 px-8">
				See Earnings Potential
			</Button>
		</div>
		
		<!-- Quick Stats -->
		<div class="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
			<div class="text-center">
				<div class="text-3xl font-bold text-primary">$25+</div>
				<div class="text-sm text-muted-foreground">Per Hour Potential</div>
			</div>
			<div class="text-center">
				<div class="text-3xl font-bold text-primary">24/7</div>
				<div class="text-sm text-muted-foreground">Instant Payouts</div>
			</div>
			<div class="text-center">
				<div class="text-3xl font-bold text-primary">10K+</div>
				<div class="text-sm text-muted-foreground">Active Drivers</div>
			</div>
			<div class="text-center">
				<div class="text-3xl font-bold text-primary">4.9★</div>
				<div class="text-sm text-muted-foreground">Driver Rating</div>
			</div>
		</div>
	</div>
</section>

<!-- Why Drive with Velourcity -->
<section id="benefits" class="container space-y-6 py-8 md:py-12 lg:py-24">
	<div class="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
		<h2 class="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
			Why drivers love Velourcity
		</h2>
		<p class="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
			We've built the best platform for drivers. Here's what makes us different.
		</p>
	</div>
	<div class="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
		<Card class="relative overflow-hidden">
			<CardHeader>
				<div class="flex items-center space-x-2">
					<DollarSign class="h-6 w-6 text-green-500" />
					<CardTitle>Fast Payouts</CardTitle>
				</div>
			</CardHeader>
			<CardContent>
				<CardDescription>
					Get paid instantly after every ride. No waiting for weekly payouts - cash out anytime, 24/7.
				</CardDescription>
			</CardContent>
		</Card>
		<Card class="relative overflow-hidden">
			<CardHeader>
				<div class="flex items-center space-x-2">
					<Clock class="h-6 w-6 text-blue-500" />
					<CardTitle>Flexible Hours</CardTitle>
				</div>
			</CardHeader>
			<CardContent>
				<CardDescription>
					Drive when you want, where you want. Complete control over your schedule - work full-time or part-time.
				</CardDescription>
			</CardContent>
		</Card>
		<Card class="relative overflow-hidden">
			<CardHeader>
				<div class="flex items-center space-x-2">
					<Shield class="h-6 w-6 text-purple-500" />
					<CardTitle>Trusted Platform</CardTitle>
				</div>
			</CardHeader>
			<CardContent>
				<CardDescription>
					Comprehensive insurance, 24/7 support, and background-checked customers. Your safety is our priority.
				</CardDescription>
			</CardContent>
		</Card>
		<Card class="relative overflow-hidden">
			<CardHeader>
				<div class="flex items-center space-x-2">
					<Truck class="h-6 w-6 text-orange-500" />
					<CardTitle>Reliable Rides</CardTitle>
				</div>
			</CardHeader>
			<CardContent>
				<CardDescription>
					Consistent demand means consistent income. Our algorithm ensures you get rides when and where you need them.
				</CardDescription>
			</CardContent>
		</Card>
		<Card class="relative overflow-hidden">
			<CardHeader>
				<div class="flex items-center space-x-2">
					<Star class="h-6 w-6 text-yellow-500" />
					<CardTitle>Top Ratings</CardTitle>
				</div>
			</CardHeader>
			<CardContent>
				<CardDescription>
					Rated #1 by drivers for pay, support, and overall experience. Join the platform drivers recommend.
				</CardDescription>
			</CardContent>
		</Card>
		<Card class="relative overflow-hidden">
			<CardHeader>
				<div class="flex items-center space-x-2">
					<Users class="h-6 w-6 text-indigo-500" />
					<CardTitle>Driver Community</CardTitle>
				</div>
			</CardHeader>
			<CardContent>
				<CardDescription>
					Connect with fellow drivers, share tips, and get support from our active driver community.
				</CardDescription>
			</CardContent>
		</Card>
	</div>
</section>

<!-- Earnings Section -->
<section id="earnings" class="container py-8 md:py-12 lg:py-24 bg-muted/30">
	<div class="mx-auto max-w-[58rem] text-center space-y-4 mb-12">
		<h2 class="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
			Your earning potential
		</h2>
		<p class="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 mx-auto">
			Real earnings from real drivers in your area.
		</p>
	</div>
	
	<div class="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
		<div class="text-center space-y-4">
			<div class="mx-auto w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
				<DollarSign class="h-8 w-8 text-white" />
			</div>
			<h3 class="text-2xl font-bold">$15-20/hour</h3>
			<p class="text-lg font-semibold">Part-time (10-20 hrs/week)</p>
			<p class="text-muted-foreground">
				Perfect for side income. Drive during peak hours for maximum earnings.
			</p>
		</div>
		<div class="text-center space-y-4">
			<div class="mx-auto w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
				<DollarSign class="h-8 w-8 text-white" />
			</div>
			<h3 class="text-2xl font-bold">$20-25/hour</h3>
			<p class="text-lg font-semibold">Regular (25-35 hrs/week)</p>
			<p class="text-muted-foreground">
				Consistent earnings with flexible scheduling. Great work-life balance.
			</p>
		</div>
		<div class="text-center space-y-4">
			<div class="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center">
				<DollarSign class="h-8 w-8 text-white" />
			</div>
			<h3 class="text-2xl font-bold">$25-35/hour</h3>
			<p class="text-lg font-semibold">Full-time (40+ hrs/week)</p>
			<p class="text-muted-foreground">
				Maximum earning potential with bonuses and incentives for dedicated drivers.
			</p>
		</div>
	</div>
	
	<div class="text-center mt-12">
		<p class="text-sm text-muted-foreground mb-4">
			* Earnings vary by location, time, and other factors. These are estimates based on active drivers in your area.
		</p>
		<Button size="lg" href="#" class="h-11 px-8">
			Calculate My Earnings
		</Button>
	</div>
</section>

<!-- Requirements Section -->
<section class="container py-8 md:py-12 lg:py-24">
	<div class="mx-auto max-w-[58rem] text-center space-y-4 mb-12">
		<h2 class="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
			Simple requirements
		</h2>
		<p class="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 mx-auto">
			Getting started is easy. Here's what you need.
		</p>
	</div>
	
	<div class="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
		<div class="space-y-4">
			<h3 class="text-xl font-semibold mb-4">Driver Requirements</h3>
			<div class="space-y-3">
				<div class="flex items-center space-x-3">
					<CheckCircle class="h-5 w-5 text-green-500 flex-shrink-0" />
					<span>21+ years old</span>
				</div>
				<div class="flex items-center space-x-3">
					<CheckCircle class="h-5 w-5 text-green-500 flex-shrink-0" />
					<span>Valid driver's license (3+ years)</span>
				</div>
				<div class="flex items-center space-x-3">
					<CheckCircle class="h-5 w-5 text-green-500 flex-shrink-0" />
					<span>Clean driving record</span>
				</div>
				<div class="flex items-center space-x-3">
					<CheckCircle class="h-5 w-5 text-green-500 flex-shrink-0" />
					<span>Pass background check</span>
				</div>
				<div class="flex items-center space-x-3">
					<CheckCircle class="h-5 w-5 text-green-500 flex-shrink-0" />
					<span>Smartphone with data plan</span>
				</div>
			</div>
		</div>
		<div class="space-y-4">
			<h3 class="text-xl font-semibold mb-4">Vehicle Requirements</h3>
			<div class="space-y-3">
				<div class="flex items-center space-x-3">
					<CheckCircle class="h-5 w-5 text-green-500 flex-shrink-0" />
					<span>4-door vehicle (2010 or newer)</span>
				</div>
				<div class="flex items-center space-x-3">
					<CheckCircle class="h-5 w-5 text-green-500 flex-shrink-0" />
					<span>Valid vehicle registration</span>
				</div>
				<div class="flex items-center space-x-3">
					<CheckCircle class="h-5 w-5 text-green-500 flex-shrink-0" />
					<span>Current auto insurance</span>
				</div>
				<div class="flex items-center space-x-3">
					<CheckCircle class="h-5 w-5 text-green-500 flex-shrink-0" />
					<span>Vehicle inspection (if required)</span>
				</div>
				<div class="flex items-center space-x-3">
					<CheckCircle class="h-5 w-5 text-green-500 flex-shrink-0" />
					<span>Clean, well-maintained interior</span>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Getting Started Process -->
<section class="container py-8 md:py-12 lg:py-24 bg-muted/30">
	<div class="mx-auto max-w-[58rem] text-center space-y-4 mb-12">
		<h2 class="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
			Start driving in 3 steps
		</h2>
		<p class="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 mx-auto">
			Get approved and start earning within 24-48 hours.
		</p>
	</div>
	
	<div class="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
		<div class="text-center space-y-4">
			<div class="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center">
				<span class="text-2xl font-bold text-primary-foreground">1</span>
			</div>
			<h3 class="text-xl font-semibold">Apply Online</h3>
			<p class="text-muted-foreground">
				Complete the simple application form. Upload your documents and get instant feedback.
			</p>
		</div>
		<div class="text-center space-y-4">
			<div class="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center">
				<span class="text-2xl font-bold text-primary-foreground">2</span>
			</div>
			<h3 class="text-xl font-semibold">Get Approved</h3>
			<p class="text-muted-foreground">
				We'll review your application and run background checks. Most approvals happen within 24 hours.
			</p>
		</div>
		<div class="text-center space-y-4">
			<div class="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center">
				<span class="text-2xl font-bold text-primary-foreground">3</span>
			</div>
			<h3 class="text-xl font-semibold">Start Earning</h3>
			<p class="text-muted-foreground">
				Download the driver app, complete orientation, and start accepting rides immediately.
			</p>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="container py-8 md:py-12 lg:py-24">
	<div class="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
		<h2 class="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
			Ready to start earning?
		</h2>
		<p class="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
			Join thousands of drivers who chose freedom and flexibility with Velourcity.
		</p>
		<div class="flex flex-col gap-4 sm:flex-row">
			<Button size="lg" href="#" class="h-11 px-8">
				<Smartphone class="mr-2 h-4 w-4" />
				Apply to Drive
			</Button>
			<Button variant="outline" size="lg" href="/support" class="h-11 px-8">
				Have Questions?
			</Button>
		</div>
		
		<!-- App Download -->
		<div class="flex flex-col items-center justify-center gap-4 mt-8 sm:flex-row">
			<p class="text-sm text-muted-foreground">Download the Driver App:</p>
			<div class="flex flex-col sm:flex-row gap-4">
				<a href="#" class="inline-block transition-transform hover:scale-105">
					<img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83" alt="Download on the App Store" class="h-12" />
				</a>
				<a href="#" class="inline-block transition-transform hover:scale-105">
					<img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Get it on Google Play" class="h-14" />
				</a>
			</div>
		</div>
	</div>
</section>
