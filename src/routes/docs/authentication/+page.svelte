<script>
	import { Button } from '$lib/components/ui/button';
	import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import { Tabs, TabsContent, TabsList, TabsTrigger } from '$lib/components/ui/tabs';
	import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '$lib/components/ui/breadcrumb';
	import { Shield, ArrowLeft, Key, Lock, AlertTriangle, CheckCircle } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Authentication Documentation - Velourcity API Platform</title>
	<meta name="description" content="Security and authentication guide for the Velourcity API platform." />
</svelte:head>

<!-- Full-page animated grid background -->
<div class="fixed inset-0 bg-background grid-background grid-background-animated -z-10"></div>

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
				<span class="font-medium">Authentication</span>
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
			<Shield class="h-8 w-8 text-violet-600" />
			<h1 class="font-heading text-3xl sm:text-4xl">Authentication & Security</h1>
		</div>
		<p class="text-muted-foreground text-lg max-w-3xl">
			Secure your API calls and protect your integrations with industry-standard authentication methods and best practices.
		</p>
		<Badge variant="outline">Secure • Industry Standard • Easy to Implement</Badge>
	</div>

	<!-- Overview -->
	<section class="mb-12">
		<Card>
			<CardHeader>
				<CardTitle class="text-xl">Authentication Methods</CardTitle>
				<CardDescription>
					Choose the right authentication method for your use case
				</CardDescription>
			</CardHeader>
			<CardContent>
				<Tabs defaultValue="api-keys" class="w-full">
					<TabsList class="grid w-full grid-cols-2">
						<TabsTrigger value="api-keys">API Keys</TabsTrigger>
						<TabsTrigger value="oauth">OAuth 2.0</TabsTrigger>
					</TabsList>

					<TabsContent value="api-keys" class="space-y-4">
						<div class="flex items-center space-x-2 mb-4">
							<Key class="h-6 w-6 text-purple-600" />
							<h3 class="text-lg font-semibold">API Key Authentication</h3>
							<Badge variant="secondary">Recommended</Badge>
						</div>
						<p class="text-sm text-muted-foreground mb-4">
							Simple and secure authentication using Bearer tokens. Perfect for server-to-server integrations.
						</p>
						<div class="bg-muted/50 p-4 rounded-lg">
							<h4 class="font-semibold mb-2">Basic Usage</h4>
							<pre class="bg-muted p-3 rounded text-sm"><code>Authorization: Bearer your_api_key_here</code></pre>
						</div>
						<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
							<div>
								<h4 class="font-semibold mb-2 text-green-600">✅ Pros</h4>
								<ul class="text-sm text-muted-foreground space-y-1">
									<li>• Simple to implement</li>
									<li>• No complex flows</li>
									<li>• Perfect for server apps</li>
									<li>• Long-lived tokens</li>
								</ul>
							</div>
							<div>
								<h4 class="font-semibold mb-2 text-orange-600">⚠️ Best For</h4>
								<ul class="text-sm text-muted-foreground space-y-1">
									<li>• Backend services</li>
									<li>• Scheduled jobs</li>
									<li>• Internal tools</li>
									<li>• Webhooks</li>
								</ul>
							</div>
						</div>
					</TabsContent>

					<TabsContent value="oauth" class="space-y-4">
						<div class="flex items-center space-x-2 mb-4">
							<Lock class="h-6 w-6 text-indigo-600" />
							<h3 class="text-lg font-semibold">OAuth 2.0 Authentication</h3>
							<Badge variant="outline">Coming Soon</Badge>
						</div>
						<p class="text-sm text-muted-foreground mb-4">
							Industry-standard OAuth 2.0 flow for user-facing applications with fine-grained permissions.
						</p>
						<div class="bg-muted/50 p-4 rounded-lg">
							<p class="text-sm text-muted-foreground italic">
								OAuth 2.0 support is coming soon. Contact us if you need this for your integration.
							</p>
						</div>
						<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
							<div>
								<h4 class="font-semibold mb-2 text-green-600">✅ Pros</h4>
								<ul class="text-sm text-muted-foreground space-y-1">
									<li>• User consent flows</li>
									<li>• Scoped permissions</li>
									<li>• Token refresh</li>
									<li>• Industry standard</li>
								</ul>
							</div>
							<div>
								<h4 class="font-semibold mb-2 text-orange-600">⚠️ Best For</h4>
								<ul class="text-sm text-muted-foreground space-y-1">
									<li>• User-facing apps</li>
									<li>• Third-party integrations</li>
									<li>• Mobile applications</li>
									<li>• Multi-tenant systems</li>
								</ul>
							</div>
						</div>
					</TabsContent>
				</Tabs>
			</CardContent>
		</Card>
	</section>

	<!-- API Key Management -->
	<section class="mb-12">
		<Card>
			<CardHeader>
				<CardTitle class="text-xl">API Key Management</CardTitle>
				<CardDescription>
					How to obtain, use, and manage your API keys securely
				</CardDescription>
			</CardHeader>
			<CardContent class="space-y-6">
				<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
					<div class="text-center p-4 border rounded-lg">
						<div class="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-3">
							<span class="text-purple-600 font-bold">1</span>
						</div>
						<h4 class="font-semibold mb-2">Sign Up</h4>
						<p class="text-sm text-muted-foreground">Create a developer account on our platform</p>
					</div>
					<div class="text-center p-4 border rounded-lg">
						<div class="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-3">
							<span class="text-indigo-600 font-bold">2</span>
						</div>
						<h4 class="font-semibold mb-2">Generate Keys</h4>
						<p class="text-sm text-muted-foreground">Create API keys in your dashboard</p>
					</div>
					<div class="text-center p-4 border rounded-lg">
						<div class="w-12 h-12 bg-violet-100 dark:bg-violet-900 rounded-full flex items-center justify-center mx-auto mb-3">
							<span class="text-violet-600 font-bold">3</span>
						</div>
						<h4 class="font-semibold mb-2">Start Building</h4>
						<p class="text-sm text-muted-foreground">Use keys to authenticate API calls</p>
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
					Code examples for implementing authentication in different languages
				</CardDescription>
			</CardHeader>
			<CardContent class="space-y-6">
				<div>
					<h4 class="font-semibold mb-2">JavaScript / Node.js</h4>
					<pre class="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
<!-- 						
						<code>// Using fetch
const apiKey = process.env.VELOURCITY_API_KEY;

const response = await fetch('https://api.velourcity.com/v1/orders', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${apiKey}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    pickup_address: '123 Restaurant St, New York, NY',
    dropoff_address: '456 Customer Ave, New York, NY'
  })
});

// Using axios
const axios = require('axios');

const client = axios.create({
  baseURL: 'https://api.velourcity.com/v1',
  headers: {
    'Authorization': `Bearer ${process.env.VELOURCITY_API_KEY}`
  }
});

const order = await client.post('/orders', {
  pickup_address: '123 Restaurant St, New York, NY',
  dropoff_address: '456 Customer Ave, New York, NY'
});</code> -->
</pre>
				</div>
				
				<div>
					<h4 class="font-semibold mb-2">Python</h4>
					<pre class="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
						
						<!-- <code>import requests
import os

# Using requests library
api_key = os.getenv('VELOURCITY_API_KEY')
headers = {
    'Authorization': f'Bearer {api_key}',
    'Content-Type': 'application/json'
}

data = {
    'pickup_address': '123 Restaurant St, New York, NY',
    'dropoff_address': '456 Customer Ave, New York, NY'
}

response = requests.post(
    'https://api.velourcity.com/v1/orders',
    headers=headers,
    json=data
)

if response.status_code == 201:
    order = response.json()
    print(f"Order created: {order['id']}")
else:
    print(f"Error: {response.status_code} - {response.text}")</code></pre>
				</div>
				
				<div>
					<h4 class="font-semibold mb-2">PHP</h4>
					<pre class="bg-muted p-4 rounded-lg overflow-x-auto text-sm"><code><?php

// Using cURL
$apiKey = getenv('VELOURCITY_API_KEY');
$url = 'https://api.velourcity.com/v1/orders';

$data = [
    'pickup_address' => '123 Restaurant St, New York, NY',
    'dropoff_address' => '456 Customer Ave, New York, NY'
];

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Authorization: Bearer ' . $apiKey,
    'Content-Type: application/json'
]);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($httpCode === 201) {
    $order = json_decode($response, true);
    echo "Order created: " . $order['id'];
} else {
    echo "Error: $httpCode - $response";
}

?></code> -->

</pre>
				</div>
			</CardContent>
		</Card>
	</section>

	<!-- Security Best Practices -->
	<section class="mb-12">
		<Card>
			<CardHeader>
				<CardTitle class="text-xl">Security Best Practices</CardTitle>
				<CardDescription>
					Keep your integrations secure with these recommendations
				</CardDescription>
			</CardHeader>
			<CardContent>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div>
						<h4 class="font-semibold mb-3 flex items-center">
							<CheckCircle class="h-5 w-5 text-green-600 mr-2" />
							API Key Security
						</h4>
						<ul class="space-y-2 text-sm text-muted-foreground">
							<li>• <strong>Never commit keys to version control</strong> - Use environment variables</li>
							<li>• <strong>Use separate keys for each environment</strong> - Dev, staging, production</li>
							<li>• <strong>Rotate keys regularly</strong> - At least every 90 days</li>
							<li>• <strong>Implement key rotation</strong> - Gradual transition between keys</li>
							<li>• <strong>Monitor API usage</strong> - Watch for unusual patterns</li>
						</ul>
					</div>
					<div>
						<h4 class="font-semibold mb-3 flex items-center">
							<AlertTriangle class="h-5 w-5 text-orange-600 mr-2" />
							Request Security
						</h4>
						<ul class="space-y-2 text-sm text-muted-foreground">
							<li>• <strong>Always use HTTPS</strong> - Never send keys over HTTP</li>
							<li>• <strong>Validate SSL certificates</strong> - Don't skip certificate checks</li>
							<li>• <strong>Set request timeouts</strong> - Prevent hanging connections</li>
							<li>• <strong>Handle errors gracefully</strong> - Don't expose internal details</li>
							<li>• <strong>Log security events</strong> - Monitor authentication failures</li>
						</ul>
					</div>
				</div>
			</CardContent>
		</Card>
	</section>

	<!-- Rate Limiting -->
	<section class="mb-12">
		<Card>
			<CardHeader>
				<CardTitle class="text-xl">Rate Limiting & Quotas</CardTitle>
				<CardDescription>
					Understand API limits and how to handle them
				</CardDescription>
			</CardHeader>
			<CardContent class="space-y-4">
				<div class="bg-muted/50 p-4 rounded-lg">
					<h4 class="font-semibold mb-2">Default Limits</h4>
					<div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
						<div class="text-center p-3 bg-background rounded">
							<div class="font-bold text-lg text-purple-600">1000</div>
							<div class="text-muted-foreground">requests per hour</div>
						</div>
						<div class="text-center p-3 bg-background rounded">
							<div class="font-bold text-lg text-indigo-600">100</div>
							<div class="text-muted-foreground">requests per minute</div>
						</div>
						<div class="text-center p-3 bg-background rounded">
							<div class="font-bold text-lg text-violet-600">10</div>
							<div class="text-muted-foreground">concurrent requests</div>
						</div>
					</div>
				</div>
				<div>
					<h4 class="font-semibold mb-2">Rate Limit Headers</h4>
					<pre class="bg-muted p-3 rounded text-sm"><code>X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1642689600
Retry-After: 60</code></pre>
				</div>
				<div>
					<h4 class="font-semibold mb-2">Handling Rate Limits</h4>
					<pre class="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
						<!-- <code>// Example: Exponential backoff with jitter
const makeApiRequest = async (url, data, retries = 3) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    
    if (response.status === 429) {
      // Rate limited - check Retry-After header
      const retryAfter = response.headers.get('Retry-After');
      const delay = retryAfter ? parseInt(retryAfter) * 1000 : Math.pow(2, 4 - retries) * 1000;
      
      if (retries > 0) {
        console.log(`Rate limited. Retrying after ${delay}ms`);
        await new Promise(resolve => setTimeout(resolve, delay));
        return makeApiRequest(url, data, retries - 1);
      }
    }
    
    return response;
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
};</code></pre> -->
				</div>
			</CardContent>
		</Card>
	</section>

	<!-- Getting Started -->
	<section class="mb-12">
		<div class="bg-muted/50 rounded-lg p-6 md:p-8">
			<h2 class="text-2xl font-semibold mb-4">Ready to get started?</h2>
			<p class="text-muted-foreground mb-6">
				Sign up for a developer account and get your API keys to start building with Velourcity.
			</p>
			<Button href="/developers/signup" class="bg-purple-600 hover:bg-purple-700 text-white">
				Get API Keys
			</Button>
		</div>
	</section>
</div>
