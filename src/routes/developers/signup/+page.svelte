<script>
	import { enhance } from '$app/forms';
	import { Button } from '$lib/components/ui/button';
	import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Textarea } from '$lib/components/ui/textarea';
	import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '$lib/components/ui/select';
	import { Alert, AlertDescription } from '$lib/components/ui/alert';
	import { Badge } from '$lib/components/ui/badge';
	import { CheckCircle, AlertCircle } from 'lucide-svelte';
	
	let { data, form } = $props();
</script>

<svelte:head>
	<title>Developer Signup - Velourcity API Platform</title>
	<meta name="description" content="Sign up for API access to integrate delivery features into your application." />
</svelte:head>

<section class="container max-w-2xl py-8 md:py-12 lg:py-24">
	<div class="space-y-6">
		<!-- Header -->
		<div class="text-center space-y-4">
			<Badge variant="outline" class="px-4 py-1 text-sm">
				Developer API Access
			</Badge>
			<h1 class="font-heading text-3xl sm:text-4xl md:text-5xl">
				Get API Access
			</h1>
			<p class="text-muted-foreground text-lg">
				Join our developer platform and start integrating delivery features into your application.
			</p>
		</div>

		<!-- Success Message -->
		{#if form?.success}
			<Alert class="border-green-200 bg-green-50 text-green-800">
				<CheckCircle class="h-4 w-4" />
				<AlertDescription>
					Thank you for your interest! We've received your application and will review it within 2-3 business days. 
					You'll receive an email with your API credentials once approved.
				</AlertDescription>
			</Alert>
		{:else}
			<!-- Application Form -->
			<Card>
				<CardHeader>
					<CardTitle>Developer Application</CardTitle>
					<CardDescription>
						Tell us about your project and how you plan to use our delivery API.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form method="POST" use:enhance class="space-y-4">
						<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
							<div class="space-y-2">
								<Label for="firstName">First Name *</Label>
								<Input
									id="firstName"
									name="firstName"
									type="text"
									required
									value={form?.firstName ?? ''}
									class={form?.errors?.firstName ? 'border-red-500' : ''}
								/>
								{#if form?.errors?.firstName}
									<p class="text-sm text-red-500">{form.errors.firstName}</p>
								{/if}
							</div>
							
							<div class="space-y-2">
								<Label for="lastName">Last Name *</Label>
								<Input
									id="lastName"
									name="lastName"
									type="text"
									required
									value={form?.lastName ?? ''}
									class={form?.errors?.lastName ? 'border-red-500' : ''}
								/>
								{#if form?.errors?.lastName}
									<p class="text-sm text-red-500">{form.errors.lastName}</p>
								{/if}
							</div>
						</div>

						<div class="space-y-2">
							<Label for="email">Email Address *</Label>
							<Input
								id="email"
								name="email"
								type="email"
								required
								value={form?.email ?? ''}
								class={form?.errors?.email ? 'border-red-500' : ''}
							/>
							{#if form?.errors?.email}
								<p class="text-sm text-red-500">{form.errors.email}</p>
							{/if}
						</div>

						<div class="space-y-2">
							<Label for="company">Company/Organization *</Label>
							<Input
								id="company"
								name="company"
								type="text"
								required
								value={form?.company ?? ''}
								class={form?.errors?.company ? 'border-red-500' : ''}
							/>
							{#if form?.errors?.company}
								<p class="text-sm text-red-500">{form.errors.company}</p>
							{/if}
						</div>

						<div class="space-y-2">
							<Label for="website">Website/App URL</Label>
							<Input
								id="website"
								name="website"
								type="url"
								placeholder="https://yourapp.com"
								value={form?.website ?? ''}
							/>
						</div>

						<div class="space-y-2">
							<Label for="integrationType">Integration Type *</Label>
							<Select name="integrationType" required>
								<SelectTrigger class={form?.errors?.integrationType ? 'border-red-500' : ''}>
									<SelectValue placeholder="Select integration type" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="rest-api">REST API</SelectItem>
									<SelectItem value="deeplinks">Deeplinks Only</SelectItem>
									<SelectItem value="webhooks">Webhooks + API</SelectItem>
									<SelectItem value="full-integration">Full Integration (API + Deeplinks + Webhooks)</SelectItem>
								</SelectContent>
							</Select>
							{#if form?.errors?.integrationType}
								<p class="text-sm text-red-500">{form.errors.integrationType}</p>
							{/if}
						</div>

						<div class="space-y-2">
							<Label for="useCase">Use Case Description *</Label>
							<Textarea
								id="useCase"
								name="useCase"
								placeholder="Describe how you plan to use our delivery API in your application..."
								rows={4}
								required
								value={form?.useCase ?? ''}
								class={form?.errors?.useCase ? 'border-red-500' : ''}
							/>
							{#if form?.errors?.useCase}
								<p class="text-sm text-red-500">{form.errors.useCase}</p>
							{/if}
						</div>

						<div class="space-y-2">
							<Label for="expectedVolume">Expected Monthly Order Volume</Label>
							<Select name="expectedVolume">
								<SelectTrigger>
									<SelectValue placeholder="Select expected volume" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="1-100">1-100 orders/month</SelectItem>
									<SelectItem value="100-1000">100-1,000 orders/month</SelectItem>
									<SelectItem value="1000-10000">1,000-10,000 orders/month</SelectItem>
									<SelectItem value="10000+">10,000+ orders/month</SelectItem>
								</SelectContent>
							</Select>
						</div>

						<!-- General Error Message -->
						{#if form?.error}
							<Alert variant="destructive">
								<AlertCircle class="h-4 w-4" />
								<AlertDescription>
									{form.error}
								</AlertDescription>
							</Alert>
						{/if}

						<Button type="submit" class="w-full" size="lg">
							Submit Application
						</Button>
					</form>
				</CardContent>
			</Card>

			<!-- Additional Info -->
			<Card>
				<CardHeader>
					<CardTitle class="text-lg">What happens next?</CardTitle>
				</CardHeader>
				<CardContent class="space-y-3">
					<div class="flex items-start space-x-3">
						<div class="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-0.5">
							<span class="text-sm font-medium text-primary">1</span>
						</div>
						<div>
							<p class="font-medium">Application Review</p>
							<p class="text-sm text-muted-foreground">We'll review your application within 2-3 business days.</p>
						</div>
					</div>
					<div class="flex items-start space-x-3">
						<div class="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-0.5">
							<span class="text-sm font-medium text-primary">2</span>
						</div>
						<div>
							<p class="font-medium">API Credentials</p>
							<p class="text-sm text-muted-foreground">Once approved, you'll receive your API keys and access to our developer dashboard.</p>
						</div>
					</div>
					<div class="flex items-start space-x-3">
						<div class="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-0.5">
							<span class="text-sm font-medium text-primary">3</span>
						</div>
						<div>
							<p class="font-medium">Start Building</p>
							<p class="text-sm text-muted-foreground">Begin integrating delivery features with our comprehensive documentation and support.</p>
						</div>
					</div>
				</CardContent>
			</Card>
		{/if}
	</div>
</section>
