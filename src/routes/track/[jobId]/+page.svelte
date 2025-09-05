<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { MapboxMap } from '$lib/components/maps';
	import RideProgress from '$lib/components/tracking/RideProgress.svelte';
	import DriverInfo from '$lib/components/tracking/DriverInfo.svelte';
	import DeliveryTimeline from '$lib/components/tracking/DeliveryTimeline.svelte';
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';

import { Phone, MessageCircle, RefreshCcw } from 'lucide-svelte';

	// State using Svelte 5 runes
	let jobId = $derived($page.params.jobId);
	let rideData = $state<any>(null);
	let driverLocation = $state<{ lat: number; lng: number } | null>(null);
	let isLoading = $state(true);
	let error = $state<string | null>(null);
	let lastUpdated = $state(new Date());
	let eventSource = $state<EventSource | null>(null);

	// Map configuration  
	const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_API_KEY || import.meta.env.VITE_MAPBOX_TOKEN || 'pk.demo';
	
	// Note: Apple Maps component commented out - requires Apple Developer account

	onMount(async () => {
		await fetchRideData();
		setupRealTimeConnection();

		// Cleanup function for Svelte 5
		return () => {
			if (eventSource) {
				eventSource.close();
				eventSource = null;
			}
		};
	});

	async function fetchRideData() {
		try {
			isLoading = true;
			error = null;

			// Replace with your actual API endpoint
			const response = await fetch(`/api/rides/${jobId}`);
			
			if (!response.ok) {
				throw new Error(`Job ${jobId} not found`);
			}

			rideData = await response.json();
			lastUpdated = new Date();
		} catch (err) {
			error = err instanceof Error ? err.message : 'Failed to load ride data';
		} finally {
			isLoading = false;
		}
	}

	function setupRealTimeConnection() {
		// Server-Sent Events for real-time updates
		eventSource = new EventSource(`/api/rides/${jobId}/stream`);

		eventSource.onmessage = (event) => {
			const update = JSON.parse(event.data);
			
			// Update driver location
			if (update.location) {
				driverLocation = update.location;
			}

			// Update ride status
			if (update.status) {
				rideData = { ...rideData, ...update };
			}

			lastUpdated = new Date();
		};

		eventSource.onerror = (error) => {
			console.error('SSE connection error:', error);
			// Attempt to reconnect after 5 seconds
			setTimeout(setupRealTimeConnection, 5000);
		};
	}

	// Derived values using Svelte 5 runes
	let mapMarkers = $derived((() => {
		const markers = [];

		// Pickup location
		if (rideData?.pickup) {
			markers.push({
				lng: rideData.pickup.lng,
				lat: rideData.pickup.lat,
				popup: `<div class="p-2">
					<h3 class="font-semibold text-green-600">Pickup Location</h3>
					<p class="text-sm">${rideData.pickup.address}</p>
				</div>`
			});
		}

		// Dropoff location  
		if (rideData?.dropoff) {
			markers.push({
				lng: rideData.dropoff.lng,
				lat: rideData.dropoff.lat,
				popup: `<div class="p-2">
					<h3 class="font-semibold text-blue-600">Delivery Location</h3>
					<p class="text-sm">${rideData.dropoff.address}</p>
				</div>`
			});
		}

		// Driver location (if available)
		if (driverLocation) {
			markers.push({
				lng: driverLocation.lng,
				lat: driverLocation.lat,
				popup: `<div class="p-2">
					<h3 class="font-semibold text-purple-600">Driver Location</h3>
					<p class="text-sm">Last updated: ${lastUpdated.toLocaleTimeString()}</p>
				</div>`
			});
		}

		return markers;
	})());

	let mapCenter = $derived((() => {
		if (driverLocation) {
			return [driverLocation.lng, driverLocation.lat] as [number, number];
		}
		if (rideData?.pickup) {
			return [rideData.pickup.lng, rideData.pickup.lat] as [number, number];
		}
		return [-0.1870, 5.6037] as [number, number]; // Default to Accra Mall, Ghana
	})());
</script>

<svelte:head>
	<title>Track Delivery - Job #{jobId}</title>
	<meta name="description" content="Track your delivery in real-time" />
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-4">
	<div class="max-w-7xl mx-auto">
		<!-- Header -->
		<div class="text-center mb-8">
			<h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-2">
				Track Your Delivery
			</h1>
			<p class="text-gray-600 dark:text-gray-300">
				Job ID: <span class="font-mono font-semibold text-primary">#{jobId}</span>
			</p>
			{#if lastUpdated}
				<p class="text-sm text-gray-500 dark:text-gray-400 mt-1">
					Last updated: {lastUpdated.toLocaleString()}
				</p>
			{/if}
		</div>

		{#if isLoading}
			<div class="flex justify-center items-center py-12">
				<div class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
				<span class="ml-3 text-lg">Loading delivery information...</span>
			</div>
		{:else if error}
			<Card class="max-w-md mx-auto">
				<CardContent class="text-center py-8">
					<h3 class="text-lg font-semibold text-red-600 mb-2">Delivery Not Found</h3>
					<p class="text-gray-600 dark:text-gray-300 mb-4">{error}</p>
					<Button on:click={fetchRideData}>
						<RefreshCcw class="w-4 h-4 mr-2" />
						Try Again
					</Button>
				</CardContent>
			</Card>
		{:else if rideData}
			<div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
				<!-- Map Column -->
				<div class="lg:col-span-2">
					<Card class="h-full">
						<CardHeader>
							<CardTitle class="flex items-center justify-between">
								<span>Live Tracking</span>
								<Badge variant="outline" class="bg-green-50 text-green-700 dark:bg-green-900 dark:text-green-300">
									Live
								</Badge>
							</CardTitle>
						</CardHeader>
						<CardContent>
							<div class="h-96">
								<MapboxMap 
									accessToken={MAPBOX_TOKEN}
									center={mapCenter}
									zoom={14}
									markers={mapMarkers}
									height="100%"
								/>
							</div>
						</CardContent>
					</Card>
				</div>

				<!-- Info Column -->
				<div class="space-y-6">
					<!-- Ride Progress -->
					<RideProgress {rideData} />

					<!-- Driver Info -->
					<DriverInfo driver={rideData.driver} />

					<!-- Delivery Timeline -->
					<DeliveryTimeline 
						status={rideData.status}
						timestamps={rideData.timestamps}
						estimatedDelivery={rideData.estimatedDelivery}
					/>

					<!-- Contact Actions -->
					<Card>
						<CardContent class="p-4">
							<h3 class="font-semibold mb-3">Need Help?</h3>
							<div class="space-y-2">
								<Button variant="outline" class="w-full justify-start">
									<Phone class="w-4 h-4 mr-2" />
									Call Driver
								</Button>
								<Button variant="outline" class="w-full justify-start">
									<MessageCircle class="w-4 h-4 mr-2" />
									Message Driver
								</Button>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		{/if}
	</div>
</div>
