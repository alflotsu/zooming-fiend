<script>
	import { Button } from '$lib/components/ui/button';
	import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Textarea } from '$lib/components/ui/textarea';
	import { 
		HelpCircle, 
		MessageCircle, 
		Mail, 
		Phone, 
		Clock, 
		Search,
		ChevronDown,
		ChevronRight,
		User,
		Truck,
		Code,
		AlertCircle,
		CheckCircle,
		ExternalLink 
	} from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { initializeAnimations } from '$lib/utils/animations.js';
	
	onMount(() => {
		// Initialize all animations with accessibility support
		initializeAnimations();
	});
	
	// FAQ data
	const faqs = {
		customers: [
			{
				question: "How do I track my delivery?",
				answer: "Once your order is confirmed, you'll receive a tracking link via SMS and email. You can also track your delivery in real-time through the Velourcity app."
			},
			{
				question: "What are your delivery hours?",
				answer: "We operate 24/7 in most areas. Delivery hours may vary by location and restaurant/store hours. Check the app for availability in your area."
			},
			{
				question: "How do I cancel or modify my order?",
				answer: "You can cancel or modify your order within 2 minutes of placing it through the app. After preparation begins, cancellation may not be possible."
			},
			{
				question: "What payment methods do you accept?",
				answer: "We accept all major credit cards, debit cards, digital wallets (Apple Pay, Google Pay), and cash on delivery in select areas."
			},
			{
				question: "What if my order is damaged or incorrect?",
				answer: "Contact our support team immediately through the app or website. We'll provide a full refund or replacement for damaged or incorrect orders."
			}
		],
		drivers: [
			{
				question: "How do I get paid?",
				answer: "Drivers can cash out instantly after each delivery or receive weekly automatic deposits. There are no fees for weekly deposits, small fees for instant cashouts."
			},
			{
				question: "What are the vehicle requirements?",
				answer: "You need a 4-door vehicle (2010 or newer), valid registration, current insurance, and clean driving record. Some areas may require vehicle inspections."
			},
			{
				question: "How does the driver rating system work?",
				answer: "Customers rate you after each delivery. Maintain a 4.5+ star rating to stay active. We provide tips and support to help you improve your rating."
			},
			{
				question: "Can I drive in multiple cities?",
				answer: "Yes, you can drive in any city where Velourcity operates. Just update your location in the driver app and complete any local requirements."
			},
			{
				question: "What insurance coverage is provided?",
				answer: "We provide commercial auto insurance while you're actively delivering. This covers liability, collision, and comprehensive coverage during delivery periods."
			}
		],
		developers: [
			{
				question: "How do I get API access?",
				answer: "Sign up for a developer account at /developers/signup. After verification, you'll receive your API keys and access to our documentation."
			},
			{
				question: "What are the API rate limits?",
				answer: "Standard accounts have 1,000 requests per hour. Premium accounts get 10,000+ requests per hour. Enterprise customers get custom limits."
			},
			{
				question: "How do webhooks work?",
				answer: "Webhooks send real-time notifications about order status changes to your specified endpoint. See our webhook documentation for setup details."
			},
			{
				question: "Is there a test environment?",
				answer: "Yes, we provide a sandbox environment for testing. Use test API keys to simulate orders without real charges or deliveries."
			},
			{
				question: "What SDKs are available?",
				answer: "We're currently developing SDKs for popular languages. REST API is available now, with JavaScript, Python, and PHP SDKs coming soon."
			}
		]
	};
	
	let selectedFaqCategory = 'customers';
	let expandedFaq = null;
	
	function toggleFaq(index) {
		expandedFaq = expandedFaq === index ? null : index;
	}
</script>

<svelte:head>
	<title>Support - Velourcity Help Center</title>
	<meta name="description" content="Get help with Velourcity. Find answers to common questions, contact support, and access resources for customers, drivers, and developers." />
	
	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://velourcity.com/support" />
	<meta property="og:title" content="Velourcity Support - 24/7 Help Center" />
	<meta property="og:description" content="Get instant help with Velourcity. Live chat 24/7, comprehensive FAQs for customers, drivers, and developers. Find answers or contact our support team." />
	<meta property="og:image" content="https://velourcity.com/og-support.jpg" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:site_name" content="Velourcity" />
	
	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://velourcity.com/support" />
	<meta property="twitter:title" content="Velourcity Support - 24/7 Help Center" />
	<meta property="twitter:description" content="Get instant help with Velourcity. Live chat 24/7, comprehensive FAQs for customers, drivers, and developers. Find answers or contact our support team." />
	<meta property="twitter:image" content="https://velourcity.com/og-support.jpg" />
	<meta property="twitter:site" content="@velourcity" />
	<meta property="twitter:creator" content="@velourcity" />
</svelte:head>

<style>
	/* Animated hexagons background with theme-specific SVGs */
	.hexagon-stroke-animate {
		background-image: url('/grid_hexagons_animated_light.svg?v=2');
		background-size: 512px 512px;
		opacity: 1;
		animation: hexagon-fade-in 3s ease-out forwards;
	}
	
	@keyframes hexagon-fade-in {
		0% {
			opacity: 0;
			background-size: 768px 768px;
		}
		100% {
			opacity: 1;
			background-size: 512px 512px;
		}
	}
	
	:global(.dark) .hexagon-stroke-animate {
		/* Use blue SVG in dark mode */
		background-image: url('/grid_hexagons_animated_dark.svg?v=2') !important;
		opacity: 1;
	}
	
	/* Pulse animation for additional effect */
	.hexagon-pulse {
		animation: pulse-opacity 6s ease-in-out infinite;
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

<!-- Full Page Hexagon Background -->
<div class="fixed inset-0 -z-50">
	<!-- Background base -->
	<div class="absolute inset-0 bg-background"></div>
	<!-- Animated hexagon strokes for both light and dark mode -->
	<div class="absolute inset-0 bg-repeat hexagon-stroke-animate hexagon-pulse"></div>
	<!-- Subtle gradient overlay -->
	<div class="absolute inset-0 bg-gradient-to-br from-background/90 via-background/60 to-background/90"></div>
</div>

<div class="min-h-screen">

<!-- Hero Section -->
<section class="relative container space-y-6 py-8 md:py-12 lg:py-24 overflow-hidden">
	<div class="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
		<Badge variant="outline" class="px-4 py-1 text-sm">
			🛟 Velourcity Help Center
		</Badge>
		<h1 class="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
			How can we <span class="text-primary">help</span> you?
		</h1>
		<p class="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
			Find answers to common questions, get in touch with our support team, or browse our comprehensive help resources.
		</p>
		
		<!-- Search Bar -->
		<div class="relative w-full max-w-md">
			<Search class="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
			<Input 
				placeholder="Search for help..." 
				class="pl-10 h-12"
			/>
		</div>
		
		<!-- Support Stats -->
		<div class="stats-section grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 max-w-4xl mx-auto">
			<div class="text-center">
				<div class="stat-number text-3xl font-bold text-primary">24/7</div>
				<div class="text-sm text-muted-foreground">Support Available</div>
			</div>
			<div class="text-center">
				<div class="stat-number text-3xl font-bold text-primary">2min</div>
				<div class="text-sm text-muted-foreground">Avg Response</div>
			</div>
			<div class="text-center">
				<div class="stat-number text-3xl font-bold text-primary">99%</div>
				<div class="text-sm text-muted-foreground">Issue Resolution</div>
			</div>
			<div class="text-center">
				<div class="stat-number text-3xl font-bold text-primary">4.9★</div>
				<div class="text-sm text-muted-foreground">Support Rating</div>
			</div>
		</div>
	</div>
</section>

<!-- Quick Actions -->
<section class="container py-8 md:py-12">
	<div class="features-grid grid gap-4 md:grid-cols-3 max-w-4xl mx-auto">
		<Card class="feature-card group hover:shadow-lg transition-shadow cursor-pointer">
			<CardHeader>
				<div class="flex items-center space-x-2">
					<User class="h-6 w-6 text-blue-600" />
					<CardTitle>Customer Support</CardTitle>
				</div>
			</CardHeader>
			<CardContent>
				<CardDescription class="mb-4">
					Issues with orders, payments, or deliveries.
				</CardDescription>
				<Button variant="outline" class="w-full group-hover:bg-primary group-hover:text-primary-foreground">
					Get Customer Help
				</Button>
			</CardContent>
		</Card>
		
		<Card class="feature-card group hover:shadow-lg transition-shadow cursor-pointer">
			<CardHeader>
				<div class="flex items-center space-x-2">
					<Truck class="h-6 w-6 text-green-600" />
					<CardTitle>Driver Support</CardTitle>
				</div>
			</CardHeader>
			<CardContent>
				<CardDescription class="mb-4">
					Help with driving, payments, or account issues.
				</CardDescription>
				<Button variant="outline" class="w-full group-hover:bg-primary group-hover:text-primary-foreground">
					Get Driver Help
				</Button>
			</CardContent>
		</Card>
		
		<Card class="feature-card group hover:shadow-lg transition-shadow cursor-pointer">
			<CardHeader>
				<div class="flex items-center space-x-2">
					<Code class="h-6 w-6 text-purple-600" />
					<CardTitle>Developer Support</CardTitle>
				</div>
			</CardHeader>
			<CardContent>
				<CardDescription class="mb-4">
					API questions, integration help, and technical issues.
				</CardDescription>
				<Button variant="outline" class="w-full group-hover:bg-primary group-hover:text-primary-foreground">
					Get Developer Help
				</Button>
			</CardContent>
		</Card>
	</div>
</section>

<!-- Contact Options -->
<section class="container py-8 md:py-12 lg:py-24">
	<div class="mx-auto max-w-[58rem] text-center space-y-4 mb-12">
		<h2 class="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
			Get in touch
		</h2>
		<p class="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 mx-auto">
			Multiple ways to reach our support team.
		</p>
	</div>
	
	<div class="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
		<Card>
			<CardHeader>
				<div class="flex items-center space-x-2">
					<MessageCircle class="h-6 w-6 text-blue-500" />
					<CardTitle>Live Chat</CardTitle>
				</div>
			</CardHeader>
			<CardContent class="space-y-3">
				<CardDescription>
					Get instant help from our support team.
				</CardDescription>
				<div class="flex items-center space-x-2 text-sm text-muted-foreground">
					<Clock class="h-4 w-4" />
					<span>Available 24/7</span>
				</div>
				<Button size="sm" class="w-full">
					Start Chat
				</Button>
			</CardContent>
		</Card>
		
		<Card>
			<CardHeader>
				<div class="flex items-center space-x-2">
					<Mail class="h-6 w-6 text-green-500" />
					<CardTitle>Email Support</CardTitle>
				</div>
			</CardHeader>
			<CardContent class="space-y-3">
				<CardDescription>
					Send us a detailed message and we'll respond quickly.
				</CardDescription>
				<div class="flex items-center space-x-2 text-sm text-muted-foreground">
					<Clock class="h-4 w-4" />
					<span>Response within 2 hours</span>
				</div>
				<Button variant="outline" size="sm" class="w-full">
					Send Email
				</Button>
			</CardContent>
		</Card>
		
		<Card>
			<CardHeader>
				<div class="flex items-center space-x-2">
					<Phone class="h-6 w-6 text-orange-500" />
					<CardTitle>Phone Support</CardTitle>
				</div>
			</CardHeader>
			<CardContent class="space-y-3">
				<CardDescription>
					Speak directly with a support representative.
				</CardDescription>
				<div class="flex items-center space-x-2 text-sm text-muted-foreground">
					<Clock class="h-4 w-4" />
					<span>Mon-Fri 8AM-8PM EST</span>
				</div>
				<Button variant="outline" size="sm" class="w-full">
					Call Now
				</Button>
			</CardContent>
		</Card>
	</div>
</section>

<!-- FAQ Section -->
<section class="container py-8 md:py-12 lg:py-24 bg-muted/30">
	<div class="mx-auto max-w-[58rem] text-center space-y-4 mb-12">
		<h2 class="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
			Frequently asked questions
		</h2>
		<p class="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 mx-auto">
			Find quick answers to common questions.
		</p>
	</div>
	
	<!-- FAQ Category Tabs -->
	<div class="flex justify-center mb-8">
		<div class="inline-flex rounded-lg border bg-background p-1">
			<button 
				class="inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium transition-all {selectedFaqCategory === 'customers' ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'}"
				onclick={() => selectedFaqCategory = 'customers'}
			>
				<User class="mr-2 h-4 w-4" />
				Customers
			</button>
			<button 
				class="inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium transition-all {selectedFaqCategory === 'drivers' ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'}"
				onclick={() => selectedFaqCategory = 'drivers'}
			>
				<Truck class="mr-2 h-4 w-4" />
				Drivers
			</button>
			<button 
				class="inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium transition-all {selectedFaqCategory === 'developers' ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'}"
				onclick={() => selectedFaqCategory = 'developers'}
			>
				<Code class="mr-2 h-4 w-4" />
				Developers
			</button>
		</div>
	</div>
	
	<!-- FAQ List -->
	<div class="max-w-3xl mx-auto space-y-4">
		{#each faqs[selectedFaqCategory] as faq, index}
			<Card class="overflow-hidden">
				<button 
					class="w-full p-6 text-left hover:bg-muted/50 transition-colors"
					onclick={() => toggleFaq(index)}
				>
					<div class="flex items-center justify-between">
						<h3 class="font-semibold">{faq.question}</h3>
						{#if expandedFaq === index}
							<ChevronDown class="h-5 w-5 text-muted-foreground" />
						{:else}
							<ChevronRight class="h-5 w-5 text-muted-foreground" />
						{/if}
					</div>
				</button>
				{#if expandedFaq === index}
					<div class="px-6 pb-6">
						<p class="text-muted-foreground leading-relaxed">{faq.answer}</p>
					</div>
				{/if}
			</Card>
		{/each}
	</div>
</section>

<!-- Status & Resources -->
<section class="container py-8 md:py-12 lg:py-24">
	<div class="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
		<!-- System Status -->
		<Card>
			<CardHeader>
				<div class="flex items-center space-x-2">
					<CheckCircle class="h-6 w-6 text-green-500" />
					<CardTitle>System Status</CardTitle>
				</div>
			</CardHeader>
			<CardContent class="space-y-4">
				<div class="space-y-3">
					<div class="flex items-center justify-between">
						<span class="text-sm">Customer App</span>
						<div class="flex items-center space-x-2">
							<div class="w-2 h-2 bg-green-500 rounded-full"></div>
							<span class="text-sm text-green-600">Operational</span>
						</div>
					</div>
					<div class="flex items-center justify-between">
						<span class="text-sm">Driver App</span>
						<div class="flex items-center space-x-2">
							<div class="w-2 h-2 bg-green-500 rounded-full"></div>
							<span class="text-sm text-green-600">Operational</span>
						</div>
					</div>
					<div class="flex items-center justify-between">
						<span class="text-sm">API Services</span>
						<div class="flex items-center space-x-2">
							<div class="w-2 h-2 bg-green-500 rounded-full"></div>
							<span class="text-sm text-green-600">Operational</span>
						</div>
					</div>
					<div class="flex items-center justify-between">
						<span class="text-sm">Payment Processing</span>
						<div class="flex items-center space-x-2">
							<div class="w-2 h-2 bg-green-500 rounded-full"></div>
							<span class="text-sm text-green-600">Operational</span>
						</div>
					</div>
				</div>
				<Button variant="outline" size="sm" class="w-full">
					<ExternalLink class="mr-2 h-4 w-4" />
					View Status Page
				</Button>
			</CardContent>
		</Card>
		
		<!-- Resources -->
		<Card>
			<CardHeader>
				<div class="flex items-center space-x-2">
					<HelpCircle class="h-6 w-6 text-blue-500" />
					<CardTitle>Helpful Resources</CardTitle>
				</div>
			</CardHeader>
			<CardContent class="space-y-4">
				<div class="space-y-3">
					<a href="/docs" class="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors">
						<span class="text-sm">API Documentation</span>
						<ExternalLink class="h-4 w-4 text-muted-foreground" />
					</a>
					<a href="/developers" class="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors">
						<span class="text-sm">Developer Platform</span>
						<ExternalLink class="h-4 w-4 text-muted-foreground" />
					</a>
					<a href="/drivers" class="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors">
						<span class="text-sm">Driver Resources</span>
						<ExternalLink class="h-4 w-4 text-muted-foreground" />
					</a>
					<a href="#" class="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors">
						<span class="text-sm">Community Forum</span>
						<ExternalLink class="h-4 w-4 text-muted-foreground" />
					</a>
				</div>
			</CardContent>
		</Card>
	</div>
</section>

<!-- Contact Form -->
<section class="container py-8 md:py-12 lg:py-24 bg-muted/30">
	<div class="mx-auto max-w-[58rem] text-center space-y-4 mb-12">
		<h2 class="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
			Still need help?
		</h2>
		<p class="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 mx-auto">
			Send us a message and we'll get back to you as soon as possible.
		</p>
	</div>
	
	<Card class="max-w-2xl mx-auto">
		<CardHeader>
			<CardTitle>Contact Support</CardTitle>
			<CardDescription>
				Describe your issue and we'll help you resolve it quickly.
			</CardDescription>
		</CardHeader>
		<CardContent class="space-y-6">
			<div class="grid gap-4 md:grid-cols-2">
				<div class="space-y-2">
					<Label for="name">Name *</Label>
					<Input id="name" placeholder="Your full name" required />
				</div>
				<div class="space-y-2">
					<Label for="email">Email *</Label>
					<Input id="email" type="email" placeholder="your@email.com" required />
				</div>
			</div>
			
			<div class="space-y-2">
				<Label for="subject">Subject *</Label>
				<Input id="subject" placeholder="Brief description of your issue" required />
			</div>
			
			<div class="space-y-2">
				<Label for="category">Category</Label>
				<select class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
					<option value="">Select a category</option>
					<option value="customer">Customer Issue</option>
					<option value="driver">Driver Issue</option>
					<option value="developer">Developer/API Issue</option>
					<option value="business">Business Inquiry</option>
					<option value="other">Other</option>
				</select>
			</div>
			
			<div class="space-y-2">
				<Label for="message">Message *</Label>
				<Textarea 
					id="message" 
					placeholder="Please provide as much detail as possible about your issue..."
					class="min-h-[120px]"
					required 
				/>
			</div>
			
			<Button size="lg" class="w-full">
				Send Message
			</Button>
			
			<p class="text-sm text-muted-foreground text-center">
				We typically respond within 2 hours during business hours.
			</p>
		</CardContent>
	</Card>
</section>

</div>
