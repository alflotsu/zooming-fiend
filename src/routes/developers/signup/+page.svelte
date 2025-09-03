<script>
	import { Button } from '$lib/components/ui/button';
	import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Textarea } from '$lib/components/ui/textarea';
	import { Checkbox } from '$lib/components/ui/checkbox';
	import { RadioGroup, RadioGroupItem } from '$lib/components/ui/radio-group';
	import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '$lib/components/ui/select';
	import { UserPlus, CheckCircle, ArrowRight, ArrowLeft, Mail, Key, Rocket, Code, Smartphone, Webhook, Copy } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { initializeAnimations } from '$lib/utils/animations';

	onMount(() => {
		initializeAnimations();
	});

	let currentStep = 1;
	const totalSteps = 4;

	// Form data
	let formData = {
		// Step 1: Basic Info
		firstName: '',
		lastName: '',
		email: '',
		company: '',
		
		// Step 2: Project Info
		projectName: '',
		projectDescription: '',
		useCase: '',
		integrationType: 'api',
		
		// Step 3: Technical Details
		programmingLanguage: '',
		expectedVolume: '',
		environment: 'development',
		webhookUrl: '',
		
		// Step 4: Agreements
		agreeTerms: false,
		agreePrivacy: false,
		subscribeUpdates: true
	};

	let isSubmitting = false;
	let isComplete = false;
	let generatedApiKey = '';

	const steps = [
		{
			title: "Basic Information", 
			description: "Tell us about yourself and your company"
		},
		{
			title: "Project Details",
			description: "Describe your integration project"
		},
		{
			title: "Technical Setup",
			description: "Configure your integration preferences" 
		},
		{
			title: "Review & Submit",
			description: "Review details and complete registration"
		}
	];

	function nextStep() {
		if (currentStep < totalSteps) {
			currentStep++;
		}
	}

	function prevStep() {
		if (currentStep > 1) {
			currentStep--;
		}
	}

	function validateStep(step) {
		switch(step) {
			case 1:
				return formData.firstName && formData.lastName && formData.email;
			case 2:
				return formData.projectName && formData.useCase && formData.integrationType;
			case 3:
				return formData.programmingLanguage && formData.expectedVolume;
			case 4:
				return formData.agreeTerms && formData.agreePrivacy;
			default:
				return false;
		}
	}

	async function submitForm() {
		isSubmitting = true;
		
		// Simulate API call
		setTimeout(() => {
			generatedApiKey = `vk_${formData.environment}_${Math.random().toString(36).substr(2, 24)}`;
			isComplete = true;
			isSubmitting = false;
		}, 2000);
	}

	function copyApiKey() {
		navigator.clipboard.writeText(generatedApiKey);
	}
</script>

<svelte:head>
	<title>Developer Signup - Velourcity</title>
	<meta name="description" content="Join the Velourcity developer platform and start building delivery integrations." />
</svelte:head>

<!-- Full-page animated grid background -->
<div class="fixed inset-0 bg-background grid-background grid-background-animated -z-10"></div>

<div class="container max-w-4xl py-8">
	{#if !isComplete}
		<!-- Header -->
		<div class="text-center space-y-4 mb-8">
			<Badge variant="outline" class="px-4 py-1 text-sm hero-badge">
				Developer Onboarding
			</Badge>
			<h1 class="font-heading text-3xl sm:text-4xl hero-title">
				Join the Velourcity Platform
			</h1>
			<p class="max-w-2xl mx-auto text-muted-foreground text-lg hero-description">
				Get started with our delivery API in minutes. Create powerful delivery experiences for your customers.
			</p>
		</div>

		<!-- Progress Indicator -->
		<div class="mb-8">
			<div class="flex items-center justify-between mb-4">
				{#each steps as step, index}
					<div class="flex items-center {index < steps.length - 1 ? 'flex-1' : ''}">
						<div class="flex items-center space-x-3">
							<div class="w-8 h-8 rounded-full flex items-center justify-center border-2 {
								index + 1 < currentStep ? 'bg-purple-600 border-purple-600 text-white' :
								index + 1 === currentStep ? 'border-purple-600 text-purple-600' :
								'border-muted text-muted-foreground'
							}">
								{#if index + 1 < currentStep}
									<CheckCircle class="h-4 w-4" />
								{:else}
									<span class="text-sm font-medium">{index + 1}</span>
								{/if}
							</div>
							<div class="text-sm">
								<div class="font-medium">{step.title}</div>
								<div class="text-muted-foreground hidden sm:block">{step.description}</div>
							</div>
						</div>
						{#if index < steps.length - 1}
							<div class="flex-1 h-px bg-border mx-4"></div>
						{/if}
					</div>
				{/each}
			</div>
		</div>

		<Card class="feature-card">
			<CardContent class="p-8">
				<!-- Step 1: Basic Information -->
				{#if currentStep === 1}
					<div class="space-y-6">
						<div>
							<h2 class="text-xl font-semibold mb-2">Basic Information</h2>
							<p class="text-muted-foreground">Let's start with some basic details about you and your organization.</p>
						</div>
						
						<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
							<div class="space-y-2">
								<Label for="firstName">First Name *</Label>
								<Input id="firstName" bind:value={formData.firstName} placeholder="John" />
							</div>
							<div class="space-y-2">
								<Label for="lastName">Last Name *</Label>
								<Input id="lastName" bind:value={formData.lastName} placeholder="Doe" />
							</div>
						</div>

						<div class="space-y-2">
							<Label for="email">Email Address *</Label>
							<Input id="email" type="email" bind:value={formData.email} placeholder="john@company.com" />
						</div>

						<div class="space-y-2">
							<Label for="company">Company Name</Label>
							<Input id="company" bind:value={formData.company} placeholder="Your Company Inc." />
						</div>
					</div>
				{/if}

				<!-- Step 2: Project Information -->
				{#if currentStep === 2}
					<div class="space-y-6">
						<div>
							<h2 class="text-xl font-semibold mb-2">Project Details</h2>
							<p class="text-muted-foreground">Tell us about your integration project and use case.</p>
						</div>

						<div class="space-y-2">
							<Label for="projectName">Project Name *</Label>
							<Input id="projectName" bind:value={formData.projectName} placeholder="My Delivery App" />
						</div>

						<div class="space-y-2">
							<Label for="projectDescription">Project Description</Label>
							<Textarea 
								id="projectDescription" 
								bind:value={formData.projectDescription} 
								placeholder="Brief description of your project and how you plan to use delivery services..."
								class="h-24"
							/>
						</div>

						<div class="space-y-2">
							<Label for="useCase">Primary Use Case *</Label>
							<Select bind:value={formData.useCase}>
								<SelectTrigger>
									<SelectValue placeholder="Select your use case" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="restaurant">Restaurant / Food Delivery</SelectItem>
									<SelectItem value="grocery">Grocery / Retail Delivery</SelectItem>
									<SelectItem value="pharmacy">Pharmacy / Healthcare</SelectItem>
									<SelectItem value="ecommerce">E-commerce / On-demand</SelectItem>
									<SelectItem value="marketplace">Marketplace Platform</SelectItem>
									<SelectItem value="other">Other</SelectItem>
								</SelectContent>
							</Select>
						</div>

						<div class="space-y-3">
							<Label>Integration Type *</Label>
							<RadioGroup bind:value={formData.integrationType} class="grid grid-cols-1 gap-4">
								<div class="flex items-center space-x-2 p-4 border rounded-lg">
									<RadioGroupItem value="api" id="api" />
									<div class="flex-1">
										<Label for="api" class="flex items-center space-x-2">
											<Code class="h-4 w-4 text-purple-600" />
											<span class="font-medium">REST API Integration</span>
										</Label>
										<p class="text-sm text-muted-foreground">Full API access for custom integrations</p>
									</div>
								</div>
								<div class="flex items-center space-x-2 p-4 border rounded-lg">
									<RadioGroupItem value="deeplinks" id="deeplinks" />
									<div class="flex-1">
										<Label for="deeplinks" class="flex items-center space-x-2">
											<Smartphone class="h-4 w-4 text-indigo-600" />
											<span class="font-medium">Deeplinks Only</span>
										</Label>
										<p class="text-sm text-muted-foreground">Simple deeplink integration, no API keys needed</p>
									</div>
								</div>
								<div class="flex items-center space-x-2 p-4 border rounded-lg">
									<RadioGroupItem value="webhooks" id="webhooks" />
									<div class="flex-1">
										<Label for="webhooks" class="flex items-center space-x-2">
											<Webhook class="h-4 w-4 text-violet-600" />
											<span class="font-medium">API + Webhooks</span>
										</Label>
										<p class="text-sm text-muted-foreground">Full API with real-time event notifications</p>
									</div>
								</div>
							</RadioGroup>
						</div>
					</div>
				{/if}

				<!-- Step 3: Technical Details -->
				{#if currentStep === 3}
					<div class="space-y-6">
						<div>
							<h2 class="text-xl font-semibold mb-2">Technical Configuration</h2>
							<p class="text-muted-foreground">Help us configure the best setup for your integration.</p>
						</div>

						<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
							<div class="space-y-2">
								<Label for="programmingLanguage">Primary Language *</Label>
								<Select bind:value={formData.programmingLanguage}>
									<SelectTrigger>
										<SelectValue placeholder="Select language" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="javascript">JavaScript / Node.js</SelectItem>
										<SelectItem value="python">Python</SelectItem>
										<SelectItem value="php">PHP</SelectItem>
										<SelectItem value="java">Java</SelectItem>
										<SelectItem value="csharp">C# / .NET</SelectItem>
										<SelectItem value="ruby">Ruby</SelectItem>
										<SelectItem value="go">Go</SelectItem>
										<SelectItem value="other">Other</SelectItem>
									</SelectContent>
								</Select>
							</div>

							<div class="space-y-2">
								<Label for="expectedVolume">Expected Monthly Volume *</Label>
								<Select bind:value={formData.expectedVolume}>
									<SelectTrigger>
										<SelectValue placeholder="Select volume" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="low"> 100 orders/month</SelectItem>
										<SelectItem value="medium">100-1,000 orders/month</SelectItem>
										<SelectItem value="high">1,000-10,000 orders/month</SelectItem>
										<SelectItem value="enterprise">10,000+ orders/month</SelectItem>
									</SelectContent>
								</Select>
							</div>
						</div>

						<div class="space-y-2">
							<Label>Environment</Label>
							<RadioGroup bind:value={formData.environment} class="flex space-x-6">
								<div class="flex items-center space-x-2">
									<RadioGroupItem value="development" id="development" />
									<Label for="development">Development / Testing</Label>
								</div>
								<div class="flex items-center space-x-2">
									<RadioGroupItem value="production" id="production" />
									<Label for="production">Production Ready</Label>
								</div>
							</RadioGroup>
						</div>

						{#if formData.integrationType === 'webhooks' || formData.integrationType === 'api'}
							<div class="space-y-2">
								<Label for="webhookUrl">Webhook Endpoint URL</Label>
								<Input 
									id="webhookUrl" 
									bind:value={formData.webhookUrl} 
									placeholder="https://yourapp.com/webhooks/velourcity"
									type="url"
								/>
								<p class="text-xs text-muted-foreground">
									Optional: We'll send delivery events to this endpoint
								</p>
							</div>
						{/if}
					</div>
				{/if}

				<!-- Step 4: Review & Submit -->
				{#if currentStep === 4}
					<div class="space-y-6">
						<div>
							<h2 class="text-xl font-semibold mb-2">Review & Submit</h2>
							<p class="text-muted-foreground">Review your information and complete your registration.</p>
						</div>

						<!-- Review Summary -->
						<div class="bg-muted/50 rounded-lg p-6 space-y-4">
							<div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
								<div>
									<strong>Name:</strong> {formData.firstName} {formData.lastName}
								</div>
								<div>
									<strong>Email:</strong> {formData.email}
								</div>
								<div>
									<strong>Company:</strong> {formData.company || 'Not specified'}
								</div>
								<div>
									<strong>Project:</strong> {formData.projectName}
								</div>
								<div>
									<strong>Use Case:</strong> {formData.useCase}
								</div>
								<div>
									<strong>Integration:</strong> {formData.integrationType}
								</div>
								<div>
									<strong>Language:</strong> {formData.programmingLanguage}
								</div>
								<div>
									<strong>Expected Volume:</strong> {formData.expectedVolume}
								</div>
							</div>
						</div>

						<!-- Terms and Agreements -->
						<div class="space-y-4">
							<div class="flex items-center space-x-2">
								<Checkbox id="terms" bind:checked={formData.agreeTerms} />
								<Label for="terms" class="text-sm">
									I agree to the <a href="/terms" class="text-purple-600 hover:underline">Terms of Service</a> *
								</Label>
							</div>
							
							<div class="flex items-center space-x-2">
								<Checkbox id="privacy" bind:checked={formData.agreePrivacy} />
								<Label for="privacy" class="text-sm">
									I agree to the <a href="/privacy" class="text-purple-600 hover:underline">Privacy Policy</a> *
								</Label>
							</div>

							<div class="flex items-center space-x-2">
								<Checkbox id="updates" bind:checked={formData.subscribeUpdates} />
								<Label for="updates" class="text-sm">
									Subscribe to developer updates and API announcements
								</Label>
							</div>
						</div>
					</div>
				{/if}

				<!-- Navigation Buttons -->
				<div class="flex items-center justify-between mt-8">
					<Button 
						variant="ghost" 
						on:click={prevStep}
						disabled={currentStep === 1}
					>
						<ArrowLeft class="h-4 w-4 mr-2" />
						Back
					</Button>
					
					<div class="text-sm text-muted-foreground">
						Step {currentStep} of {totalSteps}
					</div>

					{#if currentStep === totalSteps}
						<Button 
							class="bg-purple-600 hover:bg-purple-700 text-white"
							on:click={submitForm}
							disabled={!validateStep(currentStep) || isSubmitting}
						>
							{#if isSubmitting}
								<div class="flex items-center">
									<div class="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
									Creating Account...
								</div>
							{:else}
								<UserPlus class="h-4 w-4 mr-2" />
								Complete Registration
							{/if}
						</Button>
					{:else}
						<Button 
							class="bg-purple-600 hover:bg-purple-700 text-white"
							on:click={nextStep}
							disabled={!validateStep(currentStep)}
						>
							Continue
							<ArrowRight class="h-4 w-4 ml-2" />
						</Button>
					{/if}
				</div>
			</CardContent>
		</Card>
	{:else}
		<!-- Success State -->
		<div class="text-center space-y-8">
			<div class="space-y-4">
				<div class="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto">
					<CheckCircle class="h-10 w-10 text-green-600" />
				</div>
				<h1 class="font-heading text-3xl sm:text-4xl hero-title">
					Welcome to Velourcity! 🎉
				</h1>
				<p class="max-w-2xl mx-auto text-muted-foreground text-lg hero-description">
					Your developer account has been created successfully. Here's your API key and next steps to get started.
				</p>
			</div>

			<!-- API Key Display -->
			<Card class="feature-card max-w-2xl mx-auto">
				<CardHeader>
					<CardTitle class="flex items-center space-x-2">
						<Key class="h-5 w-5 text-purple-600" />
						<span>Your API Key</span>
					</CardTitle>
					<CardDescription>
						Keep this secure! You can always find it in your dashboard.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<div class="flex items-center space-x-2 p-3 bg-muted rounded-lg">
						<code class="flex-1 font-mono text-sm">{generatedApiKey}</code>
						<Button variant="ghost" size="sm" on:click={copyApiKey}>
							<Copy class="h-4 w-4" />
						</Button>
					</div>
				</CardContent>
			</Card>

			<!-- Next Steps -->
			<Card class="feature-card max-w-2xl mx-auto">
				<CardHeader>
					<CardTitle class="flex items-center space-x-2">
						<Rocket class="h-5 w-5 text-indigo-600" />
						<span>Next Steps</span>
					</CardTitle>
				</CardHeader>
				<CardContent>
					<div class="space-y-4">
						<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
							<Button variant="outline" href="/docs" class="h-20 flex-col space-y-2">
								<div class="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
									<span class="text-purple-600 font-bold text-sm">1</span>
								</div>
								<span class="text-sm">Read the Docs</span>
							</Button>
							
							<Button variant="outline" href="/developers/api-explorer" class="h-20 flex-col space-y-2">
								<div class="w-8 h-8 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center">
									<span class="text-indigo-600 font-bold text-sm">2</span>
								</div>
								<span class="text-sm">Try API Explorer</span>
							</Button>
							
							<Button variant="outline" href="/developers/dashboard" class="h-20 flex-col space-y-2">
								<div class="w-8 h-8 bg-violet-100 dark:bg-violet-900 rounded-full flex items-center justify-center">
									<span class="text-violet-600 font-bold text-sm">3</span>
								</div>
								<span class="text-sm">Visit Dashboard</span>
							</Button>
						</div>

						<div class="text-center">
							<Button href="/developers/dashboard" class="bg-purple-600 hover:bg-purple-700 text-white">
								Go to Dashboard
								<ArrowRight class="h-4 w-4 ml-2" />
							</Button>
						</div>
					</div>
				</CardContent>
			</Card>

			<!-- Welcome Email Notice -->
			<Card class="feature-card max-w-2xl mx-auto">
				<CardContent class="p-6 text-center">
					<Mail class="h-8 w-8 text-blue-600 mx-auto mb-3" />
					<h3 class="font-semibold mb-2">Check Your Email</h3>
					<p class="text-sm text-muted-foreground">
						We've sent a welcome email with additional resources and setup instructions to <strong>{formData.email}</strong>.
					</p>
				</CardContent>
			</Card>
		</div>
	{/if}
</div>
