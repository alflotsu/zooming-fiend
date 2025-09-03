<script>
	import { Button } from '$lib/components/ui/button';
	import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import { Tabs, TabsContent, TabsList, TabsTrigger } from '$lib/components/ui/tabs';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Textarea } from '$lib/components/ui/textarea';
	import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '$lib/components/ui/select';
	import { Play, Code, Copy, Download, Settings, Zap, CheckCircle, AlertTriangle, Loader2 } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { initializeAnimations } from '$lib/utils/animations';

	onMount(() => {
		initializeAnimations();
	});

	// API Explorer state
	let selectedEndpoint = $state('orders');
	let selectedMethod = $state('POST');
	let apiKey = $state('');
	let requestBody = $state('');
	let response = $state(null);
	let isLoading = $state(false);
	let selectedLanguage = $state('javascript');

	// API endpoints configuration
	const endpoints = {
		orders: {
			POST: {
				path: '/v1/orders',
				name: 'Create Order',
				description: 'Create a new delivery order',
				sampleBody: {
					pickup_address: "123 Restaurant Street, New York, NY 10001",
					dropoff_address: "456 Customer Ave, New York, NY 10002", 
					items: [
						{
							name: "Margherita Pizza",
							quantity: 2,
							price: 18.99
						}
					],
					customer: {
						name: "John Doe",
						phone: "+1234567890"
					},
					delivery_instructions: "Leave at door"
				}
			},
			GET: {
				path: '/v1/orders/{order_id}',
				name: 'Get Order',
				description: 'Retrieve order details by ID',
				sampleBody: null
			}
		},
		tracking: {
			GET: {
				path: '/v1/orders/{order_id}/location',
				name: 'Get Live Location',
				description: 'Get real-time driver location for an order',
				sampleBody: null
			}
		},
		drivers: {
			GET: {
				path: '/v1/drivers/available',
				name: 'Available Drivers',
				description: 'Get list of available drivers in an area',
				sampleBody: null
			}
		}
	};

	// Sample responses
	const sampleResponses = {
		'POST:/v1/orders': {
			status: 201,
			data: {
				id: "order_abc123def456",
				status: "confirmed", 
				pickup_address: "123 Restaurant Street, New York, NY 10001",
				dropoff_address: "456 Customer Ave, New York, NY 10002",
				estimated_pickup_time: "2024-01-20T12:15:00Z",
				estimated_delivery_time: "2024-01-20T12:35:00Z",
				delivery_fee: 4.99,
				total_amount: 23.98
			}
		},
		'GET:/v1/orders/{order_id}': {
			status: 200,
			data: {
				id: "order_abc123def456",
				status: "delivered",
				driver: {
					name: "Sarah Johnson",
					phone: "+1234567890",
					vehicle: "Honda Civic - ABC 123"
				},
				delivered_at: "2024-01-20T12:32:00Z"
			}
		}
	};

	// Code generation for different languages
	const codeTemplates = {
		javascript: {
			name: 'JavaScript',
			template: (endpoint, method, body) => `// Velourcity API Request
const apiKey = 'your_api_key_here';

const response = await fetch('https://api.velourcity.com${endpoint}', {
  method: '${method}',
  headers: {
    'Authorization': \`Bearer \${apiKey}\`,
    'Content-Type': 'application/json'
  }${body ? `,\n  body: JSON.stringify(${JSON.stringify(body, null, 2)})` : ''}
});

const data = await response.json();
console.log(data);`
		},
		python: {
			name: 'Python',
			template: (endpoint, method, body) => `import requests

api_key = 'your_api_key_here'
url = 'https://api.velourcity.com${endpoint}'

headers = {
    'Authorization': f'Bearer {api_key}',
    'Content-Type': 'application/json'
}

${body ? `data = ${JSON.stringify(body, null, 2)}\n\nresponse = requests.${method.toLowerCase()}(url, headers=headers, json=data)` : `response = requests.${method.toLowerCase()}(url, headers=headers)`}

if response.status_code == 200:
    print(response.json())
else:
    print(f"Error: {response.status_code} - {response.text}")`
		},
		curl: {
			name: 'cURL',
			template: (endpoint, method, body) => `curl -X ${method} https://api.velourcity.com${endpoint} \\
  -H "Authorization: Bearer your_api_key_here" \\
  -H "Content-Type: application/json"${body ? ` \\\n  -d '${JSON.stringify(body)}'` : ''}`
		}
	};

	// Derived values using Svelte 5 runes
	const currentEndpoint = $derived(endpoints[selectedEndpoint]?.[selectedMethod]);
	const currentPath = $derived(currentEndpoint?.path || '');
	const sampleRequestBody = $derived(currentEndpoint?.sampleBody ? JSON.stringify(currentEndpoint.sampleBody, null, 2) : '');

	// Initialize request body when endpoint changes using effect
	$effect(() => {
		if (currentEndpoint?.sampleBody && requestBody === '') {
			requestBody = JSON.stringify(currentEndpoint.sampleBody, null, 2);
		}
	});

	function executeRequest() {
		isLoading = true;
		
		// Simulate API call
		setTimeout(() => {
			const key = `${selectedMethod}:${currentPath}`;
			response = sampleResponses[key] || {
				status: 200,
				data: { message: "Sample response for testing" }
			};
			isLoading = false;
		}, 1500);
	}

	function copyCode() {
		try {
			const body = requestBody ? JSON.parse(requestBody) : null;
			const code = codeTemplates[selectedLanguage].template(currentPath, selectedMethod, body);
			navigator.clipboard.writeText(code);
		} catch (error) {
			console.error('Error copying code:', error);
		}
	}

	function downloadCode() {
		try {
			const body = requestBody ? JSON.parse(requestBody) : null;
			const code = codeTemplates[selectedLanguage].template(currentPath, selectedMethod, body);
			const blob = new Blob([code], { type: 'text/plain' });
			const url = URL.createObjectURL(blob);
			const a = document.createElement('a');
			a.href = url;
			a.download = `velourcity-api-example.${selectedLanguage === 'javascript' ? 'js' : selectedLanguage}`;
			a.click();
			URL.revokeObjectURL(url);
		} catch (error) {
			console.error('Error downloading code:', error);
		}
	}
</script>

<svelte:head>
	<title>API Explorer - Velourcity</title>
	<meta name="description" content="Interactive API explorer for testing Velourcity API endpoints." />
</svelte:head>

<!-- Full-page animated grid background -->
<div class="fixed inset-0 bg-background grid-background grid-background-animated -z-10"></div>

<div class="container max-w-7xl py-8">
	<!-- Header -->
	<div class="space-y-6 mb-8">
		<div class="hero-title">
			<h1 class="font-heading text-3xl sm:text-4xl">API Explorer</h1>
		</div>
		<p class="text-muted-foreground text-lg max-w-3xl hero-description">
			Test API endpoints, explore responses, and generate code examples for your applications. Perfect for prototyping and integration testing.
		</p>
		<Badge variant="outline" class="hero-badge">Interactive • Real-time • Code Generation</Badge>
	</div>

	<div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
		<!-- Request Panel -->
		<div class="space-y-6">
			<Card class="feature-card">
				<CardHeader>
					<CardTitle class="flex items-center space-x-2">
						<Settings class="h-5 w-5 text-purple-600" />
						<span>Configure Request</span>
					</CardTitle>
				</CardHeader>
				<CardContent class="space-y-4">
					<!-- API Key -->
					<div class="space-y-2">
						<Label for="api-key">API Key</Label>
						<Input 
							id="api-key"
							type="password" 
							placeholder="Enter your API key"
							bind:value={apiKey}
							class="font-mono text-sm"
						/>
						<p class="text-xs text-muted-foreground">
							Your API key is not stored and only used for testing. <a href="/docs/authentication" class="text-purple-600 hover:underline">Learn more</a>
						</p>
					</div>

					<!-- Endpoint Selection -->
					<div class="grid grid-cols-2 gap-4">
						<div class="space-y-2">
							<Label>Endpoint Category</Label>
							<Select bind:value={selectedEndpoint}>
								<SelectTrigger>
									{selectedEndpoint || 'Select endpoint'}
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="orders">Orders</SelectItem>
									<SelectItem value="tracking">Tracking</SelectItem>
									<SelectItem value="drivers">Drivers</SelectItem>
								</SelectContent>
							</Select>
						</div>
						<div class="space-y-2">
							<Label>HTTP Method</Label>
							<Select bind:value={selectedMethod}>
								<SelectTrigger>
									{selectedMethod || 'Method'}
								</SelectTrigger>
								<SelectContent>
									{#each Object.keys(endpoints[selectedEndpoint] || {}) as method}
										<SelectItem value={method}>{method}</SelectItem>
									{/each}
								</SelectContent>
							</Select>
						</div>
					</div>

					<!-- URL Preview -->
					<div class="space-y-2">
						<Label>Request URL</Label>
						<div class="flex items-center space-x-2">
							<Badge variant={selectedMethod === 'GET' ? 'outline' : selectedMethod === 'POST' ? 'secondary' : 'destructive'}>
								{selectedMethod}
							</Badge>
							<code class="bg-muted px-2 py-1 rounded text-sm flex-1">
								https://api.velourcity.com{currentPath}
							</code>
						</div>
					</div>

					<!-- Request Body (for POST/PUT) -->
					{#if currentEndpoint?.sampleBody}
						<div class="space-y-2">
							<div class="flex items-center justify-between">
								<Label for="request-body">Request Body</Label>
								<Button 
									variant="ghost" 
									size="sm" 
									onclick={() => requestBody = sampleRequestBody}
								>
									Reset to Sample
								</Button>
							</div>
							<Textarea 
								id="request-body"
								bind:value={requestBody}
								placeholder="Enter JSON request body"
								class="font-mono text-sm h-40"
							/>
						</div>
					{/if}

					<!-- Execute Button -->
					<Button 
						class="w-full bg-purple-600 hover:bg-purple-700 text-white"
						onclick={executeRequest}
						disabled={isLoading || !apiKey}
					>
						{#if isLoading}
							<Loader2 class="h-4 w-4 mr-2 animate-spin" />
							Executing...
						{:else}
							<Play class="h-4 w-4 mr-2" />
							Execute Request
						{/if}
					</Button>
				</CardContent>
			</Card>

			<!-- Code Generation -->
			<Card class="feature-card">
				<CardHeader>
					<CardTitle class="flex items-center space-x-2">
						<Code class="h-5 w-5 text-indigo-600" />
						<span>Generated Code</span>
					</CardTitle>
				</CardHeader>
				<CardContent class="space-y-4">
					<!-- Language Selection -->
					<div class="flex items-center justify-between">
						<Select bind:value={selectedLanguage}>
							<SelectTrigger class="w-40">
								{selectedLanguage || 'Language'}
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="javascript">JavaScript</SelectItem>
								<SelectItem value="python">Python</SelectItem>
								<SelectItem value="curl">cURL</SelectItem>
							</SelectContent>
						</Select>
						<div class="flex items-center space-x-2">
							<Button variant="ghost" size="sm" onclick={copyCode}>
								<Copy class="h-4 w-4" />
							</Button>
							<Button variant="ghost" size="sm" onclick={downloadCode}>
								<Download class="h-4 w-4" />
							</Button>
						</div>
					</div>

					<!-- Code Display -->
					<div class="relative">
						<pre class="bg-muted p-4 rounded-lg overflow-x-auto text-sm"><code>{(() => {
							try {
								const body = requestBody ? JSON.parse(requestBody) : null;
								return codeTemplates[selectedLanguage].template(currentPath, selectedMethod, body);
							} catch (error) {
								return '// Error parsing request body JSON. Please check your JSON syntax.';
							}
						})()}</code></pre>
					</div>
				</CardContent>
			</Card>
		</div>

		<!-- Response Panel -->
		<div class="space-y-6">
			<!-- Current Endpoint Info -->
			<Card class="feature-card">
				<CardHeader>
					<CardTitle class="flex items-center space-x-2">
						<Zap class="h-5 w-5 text-violet-600" />
						<span>{currentEndpoint?.name || 'Select an endpoint'}</span>
					</CardTitle>
					{#if currentEndpoint}
						<CardDescription>{currentEndpoint.description}</CardDescription>
					{/if}
				</CardHeader>
				{#if currentEndpoint}
					<CardContent>
						<div class="flex items-center space-x-2">
							<Badge variant={selectedMethod === 'GET' ? 'outline' : selectedMethod === 'POST' ? 'secondary' : 'destructive'}>
								{selectedMethod}
							</Badge>
							<code class="text-sm">{currentPath}</code>
						</div>
					</CardContent>
				{/if}
			</Card>

			<!-- Response Display -->
			<Card class="feature-card">
				<CardHeader>
					<CardTitle class="flex items-center space-x-2">
						{#if response}
							{#if response.status >= 200 && response.status < 300}
								<CheckCircle class="h-5 w-5 text-green-600" />
							{:else}
								<AlertTriangle class="h-5 w-5 text-red-600" />
							{/if}
						{:else}
							<Code class="h-5 w-5 text-muted-foreground" />
						{/if}
						<span>Response</span>
						{#if response}
							<Badge variant={response.status >= 200 && response.status < 300 ? 'secondary' : 'destructive'}>
								{response.status}
							</Badge>
						{/if}
					</CardTitle>
				</CardHeader>
				<CardContent>
					{#if isLoading}
						<div class="flex items-center justify-center h-40 text-muted-foreground">
							<Loader2 class="h-6 w-6 animate-spin mr-2" />
							Executing request...
						</div>
					{:else if response}
						<div class="space-y-4">
							<!-- Response Headers -->
							<div>
								<h4 class="font-semibold mb-2">Response Headers</h4>
								<div class="bg-muted p-3 rounded text-sm space-y-1">
									<div>Content-Type: application/json</div>
									<div>X-Request-ID: req_789xyz456abc</div>
									<div>X-RateLimit-Remaining: 95</div>
								</div>
							</div>

							<!-- Response Body -->
							<div>
								<h4 class="font-semibold mb-2">Response Body</h4>
								<pre class="bg-muted p-4 rounded-lg overflow-x-auto text-sm"><code>{JSON.stringify(response.data, null, 2)}</code></pre>
							</div>
						</div>
					{:else}
						<div class="flex items-center justify-center h-40 text-muted-foreground">
							<div class="text-center">
								<Play class="h-8 w-8 mx-auto mb-2 opacity-50" />
								<p>Execute a request to see the response</p>
							</div>
						</div>
					{/if}
				</CardContent>
			</Card>

			<!-- Sample Data Helper -->
			{#if currentEndpoint?.sampleBody}
				<Card class="feature-card">
					<CardHeader>
						<CardTitle class="text-lg">Sample Data</CardTitle>
						<CardDescription>Use this sample data to test the endpoint</CardDescription>
					</CardHeader>
					<CardContent>
						<Button 
							variant="outline" 
							class="w-full"
							onclick={() => requestBody = sampleRequestBody}
						>
							Load Sample Data
						</Button>
					</CardContent>
				</Card>
			{/if}
		</div>
	</div>

	<!-- Popular Endpoints Section -->
	<section class="mt-12">
		<h2 class="text-2xl font-semibold mb-6">Popular API Endpoints</h2>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-6 features-grid">
			<Card class="feature-card group cursor-pointer" onclick={() => { selectedEndpoint = 'orders'; selectedMethod = 'POST'; }}>
				<CardContent class="p-6">
					<div class="flex items-center space-x-2 mb-3">
						<Badge variant="secondary">POST</Badge>
						<h3 class="font-semibold">Create Order</h3>
					</div>
					<p class="text-sm text-muted-foreground mb-4">
						Create a new delivery order with pickup and dropoff details.
					</p>
					<code class="text-xs bg-muted px-2 py-1 rounded">/v1/orders</code>
				</CardContent>
			</Card>

			<Card class="feature-card group cursor-pointer" onclick={() => { selectedEndpoint = 'tracking'; selectedMethod = 'GET'; }}>
				<CardContent class="p-6">
					<div class="flex items-center space-x-2 mb-3">
						<Badge variant="outline">GET</Badge>
						<h3 class="font-semibold">Live Tracking</h3>
					</div>
					<p class="text-sm text-muted-foreground mb-4">
						Get real-time location updates for active deliveries.
					</p>
					<code class="text-xs bg-muted px-2 py-1 rounded">/v1/orders/{'{'}order_id{'}'}/location</code>
				</CardContent>
			</Card>

			<Card class="feature-card group cursor-pointer" onclick={() => { selectedEndpoint = 'drivers'; selectedMethod = 'GET'; }}>
				<CardContent class="p-6">
					<div class="flex items-center space-x-2 mb-3">
						<Badge variant="outline">GET</Badge>
						<h3 class="font-semibold">Available Drivers</h3>
					</div>
					<p class="text-sm text-muted-foreground mb-4">
						Find drivers available in a specific geographic area.
					</p>
					<code class="text-xs bg-muted px-2 py-1 rounded">/v1/drivers/available</code>
				</CardContent>
			</Card>
		</div>
	</section>
</div>
