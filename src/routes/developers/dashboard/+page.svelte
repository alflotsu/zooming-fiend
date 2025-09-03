<script>
	import { Button } from '$lib/components/ui/button';
	import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import { Tabs, TabsContent, TabsList, TabsTrigger } from '$lib/components/ui/tabs';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Textarea } from '$lib/components/ui/textarea';
	import { Switch } from '$lib/components/ui/switch';
	import { Key, Activity, Webhook, TrendingUp, Copy, Eye, EyeOff, Plus, Trash2, Settings, BarChart3, Zap, Clock, CheckCircle, AlertTriangle } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { initializeAnimations } from '$lib/utils/animations';

	onMount(() => {
		initializeAnimations();
	});

	// Mock data for the dashboard
	let apiKeys = [
		{
			id: 'key_1',
			name: 'Production API Key',
			key: 'vk_live_abc123def456ghi789jklmnop',
			environment: 'production',
			created: '2024-01-15',
			lastUsed: '2024-01-20',
			status: 'active',
			visible: false
		},
		{
			id: 'key_2', 
			name: 'Development API Key',
			key: 'vk_test_xyz789abc123def456ghijkl',
			environment: 'development',
			created: '2024-01-10',
			lastUsed: '2024-01-19',
			status: 'active',
			visible: false
		}
	];

	let webhooks = [
		{
			id: 'wh_1',
			url: 'https://yourapp.com/webhooks/velourcity',
			events: ['order.created', 'order.delivered', 'payment.completed'],
			status: 'active',
			lastDelivery: '2024-01-20T14:30:00Z',
			successRate: 98.5
		},
		{
			id: 'wh_2',
			url: 'https://staging.yourapp.com/webhooks/velourcity', 
			events: ['order.created', 'order.cancelled'],
			status: 'active',
			lastDelivery: '2024-01-19T16:45:00Z',
			successRate: 100
		}
	];

	let usageStats = {
		thisMonth: {
			totalRequests: 15420,
			successfulOrders: 1283,
			totalRevenue: 6415.75,
			avgResponseTime: 245
		},
		lastMonth: {
			totalRequests: 12100,
			successfulOrders: 1050,
			totalRevenue: 5250.00,
			avgResponseTime: 267
		}
	};

	function toggleKeyVisibility(keyId) {
		apiKeys = apiKeys.map(key => 
			key.id === keyId ? { ...key, visible: !key.visible } : key
		);
	}

	function copyToClipboard(text) {
		navigator.clipboard.writeText(text);
		// TODO: Add toast notification
	}

	function deleteApiKey(keyId) {
		apiKeys = apiKeys.filter(key => key.id !== keyId);
		// TODO: Add confirmation dialog
	}
</script>

<svelte:head>
	<title>Developer Dashboard - Velourcity</title>
	<meta name="description" content="Manage your API keys, monitor usage, and configure integrations." />
</svelte:head>

<!-- Full-page animated grid background -->
<div class="fixed inset-0 bg-background grid-background grid-background-animated -z-10"></div>

<div class="container max-w-7xl py-8">
	<!-- Header -->
	<div class="space-y-6 mb-8">
		<div class="hero-title">
			<h1 class="font-heading text-3xl sm:text-4xl">Developer Dashboard</h1>
		</div>
		<p class="text-muted-foreground text-lg max-w-3xl hero-description">
			Manage your API keys, monitor usage statistics, and configure webhook integrations for your Velourcity applications.
		</p>
	</div>

	<Tabs defaultValue="overview" class="w-full">
		<TabsList class="grid w-full grid-cols-4 hero-buttons">
			<TabsTrigger value="overview">Overview</TabsTrigger>
			<TabsTrigger value="api-keys">API Keys</TabsTrigger>
			<TabsTrigger value="webhooks">Webhooks</TabsTrigger>
			<TabsTrigger value="usage">Usage & Stats</TabsTrigger>
		</TabsList>

		<!-- Overview Tab -->
		<TabsContent value="overview" class="space-y-6">
			<!-- Stats Overview -->
			<div class="grid grid-cols-1 md:grid-cols-4 gap-6 stats-section">
				<Card class="feature-card">
					<CardContent class="p-6">
						<div class="flex items-center space-x-2">
							<Activity class="h-5 w-5 text-purple-600" />
							<div>
								<div class="stat-number text-2xl font-bold text-purple-600">
									{usageStats.thisMonth.totalRequests.toLocaleString()}
								</div>
								<p class="text-sm text-muted-foreground">API Requests</p>
							</div>
						</div>
					</CardContent>
				</Card>

				<Card class="feature-card">
					<CardContent class="p-6">
						<div class="flex items-center space-x-2">
							<CheckCircle class="h-5 w-5 text-green-600" />
							<div>
								<div class="stat-number text-2xl font-bold text-green-600">
									{usageStats.thisMonth.successfulOrders.toLocaleString()}
								</div>
								<p class="text-sm text-muted-foreground">Orders Created</p>
							</div>
						</div>
					</CardContent>
				</Card>

				<Card class="feature-card">
					<CardContent class="p-6">
						<div class="flex items-center space-x-2">
							<TrendingUp class="h-5 w-5 text-indigo-600" />
							<div>
								<div class="stat-number text-2xl font-bold text-indigo-600">
									${usageStats.thisMonth.totalRevenue.toLocaleString()}
								</div>
								<p class="text-sm text-muted-foreground">Revenue Generated</p>
							</div>
						</div>
					</CardContent>
				</Card>

				<Card class="feature-card">
					<CardContent class="p-6">
						<div class="flex items-center space-x-2">
							<Zap class="h-5 w-5 text-violet-600" />
							<div>
								<div class="stat-number text-2xl font-bold text-violet-600">
									{usageStats.thisMonth.avgResponseTime}ms
								</div>
								<p class="text-sm text-muted-foreground">Avg Response Time</p>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>

			<!-- Recent Activity -->
			<Card class="feature-card">
				<CardHeader>
					<CardTitle class="flex items-center space-x-2">
						<Clock class="h-5 w-5" />
						<span>Recent Activity</span>
					</CardTitle>
				</CardHeader>
				<CardContent>
					<div class="space-y-4">
						<div class="flex items-center space-x-4 p-3 bg-muted/50 rounded-lg">
							<CheckCircle class="h-5 w-5 text-green-600" />
							<div class="flex-1">
								<p class="font-medium">Order #12847 delivered successfully</p>
								<p class="text-sm text-muted-foreground">2 minutes ago</p>
							</div>
						</div>
						<div class="flex items-center space-x-4 p-3 bg-muted/50 rounded-lg">
							<Activity class="h-5 w-5 text-blue-600" />
							<div class="flex-1">
								<p class="font-medium">New API key created: Development API Key</p>
								<p class="text-sm text-muted-foreground">1 hour ago</p>
							</div>
						</div>
						<div class="flex items-center space-x-4 p-3 bg-muted/50 rounded-lg">
							<Webhook class="h-5 w-5 text-purple-600" />
							<div class="flex-1">
								<p class="font-medium">Webhook endpoint updated</p>
								<p class="text-sm text-muted-foreground">3 hours ago</p>
							</div>
						</div>
					</div>
				</CardContent>
			</Card>

			<!-- Quick Actions -->
			<Card class="feature-card">
				<CardHeader>
					<CardTitle>Quick Actions</CardTitle>
				</CardHeader>
				<CardContent>
					<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
						<Button variant="outline" class="h-20 flex-col space-y-2">
							<Key class="h-6 w-6" />
							<span>Create API Key</span>
						</Button>
						<Button variant="outline" class="h-20 flex-col space-y-2">
							<Webhook class="h-6 w-6" />
							<span>Setup Webhook</span>
						</Button>
						<Button variant="outline" class="h-20 flex-col space-y-2">
							<BarChart3 class="h-6 w-6" />
							<span>View Analytics</span>
						</Button>
					</div>
				</CardContent>
			</Card>
		</TabsContent>

		<!-- API Keys Tab -->
		<TabsContent value="api-keys" class="space-y-6">
			<div class="flex items-center justify-between">
				<div>
					<h2 class="text-2xl font-semibold">API Keys</h2>
					<p class="text-muted-foreground">Manage your API keys for different environments</p>
				</div>
				<Button class="bg-purple-600 hover:bg-purple-700 text-white">
					<Plus class="h-4 w-4 mr-2" />
					Create New Key
				</Button>
			</div>

			<div class="space-y-4 features-grid">
				{#each apiKeys as apiKey}
					<Card class="feature-card">
						<CardContent class="p-6">
							<div class="flex items-center justify-between">
								<div class="flex-1">
									<div class="flex items-center space-x-3 mb-2">
										<h3 class="font-semibold">{apiKey.name}</h3>
										<Badge variant={apiKey.environment === 'production' ? 'default' : 'secondary'}>
											{apiKey.environment}
										</Badge>
										<Badge variant={apiKey.status === 'active' ? 'secondary' : 'destructive'}>
											{apiKey.status}
										</Badge>
									</div>
									<div class="flex items-center space-x-2 mb-3">
										<code class="bg-muted px-2 py-1 rounded text-sm">
											{apiKey.visible ? apiKey.key : '•'.repeat(20) + apiKey.key.slice(-8)}
										</code>
										<Button 
											variant="ghost" 
											size="sm"
											on:click={() => toggleKeyVisibility(apiKey.id)}
										>
											{#if apiKey.visible}
												<EyeOff class="h-4 w-4" />
											{:else}
												<Eye class="h-4 w-4" />
											{/if}
										</Button>
										<Button 
											variant="ghost" 
											size="sm"
											on:click={() => copyToClipboard(apiKey.key)}
										>
											<Copy class="h-4 w-4" />
										</Button>
									</div>
									<div class="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
										<div>Created: {apiKey.created}</div>
										<div>Last used: {apiKey.lastUsed}</div>
									</div>
								</div>
								<div class="flex items-center space-x-2">
									<Button variant="ghost" size="sm">
										<Settings class="h-4 w-4" />
									</Button>
									<Button 
										variant="ghost" 
										size="sm" 
										class="text-destructive"
										on:click={() => deleteApiKey(apiKey.id)}
									>
										<Trash2 class="h-4 w-4" />
									</Button>
								</div>
							</div>
						</CardContent>
					</Card>
				{/each}
			</div>
		</TabsContent>

		<!-- Webhooks Tab -->
		<TabsContent value="webhooks" class="space-y-6">
			<div class="flex items-center justify-between">
				<div>
					<h2 class="text-2xl font-semibold">Webhook Endpoints</h2>
					<p class="text-muted-foreground">Configure and monitor your webhook endpoints</p>
				</div>
				<Button class="bg-purple-600 hover:bg-purple-700 text-white">
					<Plus class="h-4 w-4 mr-2" />
					Add Webhook
				</Button>
			</div>

			<div class="space-y-4 features-grid">
				{#each webhooks as webhook}
					<Card class="feature-card">
						<CardContent class="p-6">
							<div class="flex items-center justify-between mb-4">
								<div class="flex items-center space-x-2">
									<Webhook class="h-5 w-5 text-purple-600" />
									<code class="font-semibold">{webhook.url}</code>
									<Badge variant={webhook.status === 'active' ? 'secondary' : 'destructive'}>
										{webhook.status}
									</Badge>
								</div>
								<div class="flex items-center space-x-2">
									<Button variant="ghost" size="sm">
										<Settings class="h-4 w-4" />
									</Button>
									<Button variant="ghost" size="sm" class="text-destructive">
										<Trash2 class="h-4 w-4" />
									</Button>
								</div>
							</div>
							
							<div class="space-y-3">
								<div>
									<p class="font-medium mb-1">Subscribed Events:</p>
									<div class="flex flex-wrap gap-2">
										{#each webhook.events as event}
											<Badge variant="outline" class="text-xs">{event}</Badge>
										{/each}
									</div>
								</div>
								
								<div class="grid grid-cols-2 gap-4 text-sm">
									<div>
										<p class="text-muted-foreground">Success Rate</p>
										<p class="font-semibold text-green-600">{webhook.successRate}%</p>
									</div>
									<div>
										<p class="text-muted-foreground">Last Delivery</p>
										<p class="font-semibold">{new Date(webhook.lastDelivery).toLocaleString()}</p>
									</div>
								</div>
							</div>
						</CardContent>
					</Card>
				{/each}
			</div>
		</TabsContent>

		<!-- Usage & Stats Tab -->
		<TabsContent value="usage" class="space-y-6">
			<div class="flex items-center justify-between">
				<div>
					<h2 class="text-2xl font-semibold">Usage Statistics</h2>
					<p class="text-muted-foreground">Monitor your API usage and performance metrics</p>
				</div>
				<Button variant="outline">
					<BarChart3 class="h-4 w-4 mr-2" />
					Export Report
				</Button>
			</div>

			<!-- Monthly Comparison -->
			<Card class="feature-card">
				<CardHeader>
					<CardTitle>Monthly Usage Comparison</CardTitle>
					<CardDescription>This month vs. last month performance</CardDescription>
				</CardHeader>
				<CardContent>
					<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div>
							<h4 class="font-semibold mb-4 text-purple-600">This Month</h4>
							<div class="space-y-4">
								<div class="flex justify-between items-center p-3 bg-purple-50 dark:bg-purple-950 rounded">
									<span>Total Requests</span>
									<span class="font-bold text-purple-600">{usageStats.thisMonth.totalRequests.toLocaleString()}</span>
								</div>
								<div class="flex justify-between items-center p-3 bg-green-50 dark:bg-green-950 rounded">
									<span>Successful Orders</span>
									<span class="font-bold text-green-600">{usageStats.thisMonth.successfulOrders.toLocaleString()}</span>
								</div>
								<div class="flex justify-between items-center p-3 bg-indigo-50 dark:bg-indigo-950 rounded">
									<span>Revenue Generated</span>
									<span class="font-bold text-indigo-600">${usageStats.thisMonth.totalRevenue.toLocaleString()}</span>
								</div>
								<div class="flex justify-between items-center p-3 bg-violet-50 dark:bg-violet-950 rounded">
									<span>Avg Response Time</span>
									<span class="font-bold text-violet-600">{usageStats.thisMonth.avgResponseTime}ms</span>
								</div>
							</div>
						</div>

						<div>
							<h4 class="font-semibold mb-4 text-muted-foreground">Last Month</h4>
							<div class="space-y-4">
								<div class="flex justify-between items-center p-3 bg-muted rounded">
									<span>Total Requests</span>
									<span class="font-bold">{usageStats.lastMonth.totalRequests.toLocaleString()}</span>
								</div>
								<div class="flex justify-between items-center p-3 bg-muted rounded">
									<span>Successful Orders</span>
									<span class="font-bold">{usageStats.lastMonth.successfulOrders.toLocaleString()}</span>
								</div>
								<div class="flex justify-between items-center p-3 bg-muted rounded">
									<span>Revenue Generated</span>
									<span class="font-bold">${usageStats.lastMonth.totalRevenue.toLocaleString()}</span>
								</div>
								<div class="flex justify-between items-center p-3 bg-muted rounded">
									<span>Avg Response Time</span>
									<span class="font-bold">{usageStats.lastMonth.avgResponseTime}ms</span>
								</div>
							</div>
						</div>
					</div>
				</CardContent>
			</Card>

			<!-- Usage Chart Placeholder -->
			<Card class="feature-card">
				<CardHeader>
					<CardTitle>API Usage Over Time</CardTitle>
					<CardDescription>Request volume and success rates over the past 30 days</CardDescription>
				</CardHeader>
				<CardContent>
					<div class="h-64 bg-muted/30 rounded-lg flex items-center justify-center">
						<p class="text-muted-foreground">📊 Interactive chart coming soon</p>
					</div>
				</CardContent>
			</Card>
		</TabsContent>
	</Tabs>
</div>
