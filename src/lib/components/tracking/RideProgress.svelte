<script lang="ts">
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import { Progress } from '$lib/components/ui/progress';
	import { Clock, MapPin, Package, Truck } from 'lucide-svelte';

	 let rideData: any = $props();

	// Status mapping with colors and icons
	const statusConfig = {
		'pending': { 
			label: 'Order Placed', 
			color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
			icon: Package,
			progress: 10
		},
		'accepted': { 
			label: 'Driver Assigned', 
			color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
			icon: Truck,
			progress: 25
		},
		'en_route_pickup': { 
			label: 'Heading to Pickup', 
			color: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300',
			icon: MapPin,
			progress: 40
		},
		'at_pickup': { 
			label: 'At Pickup Location', 
			color: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
			icon: Package,
			progress: 60
		},
		'picked_up': { 
			label: 'Package Collected', 
			color: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300',
			icon: Truck,
			progress: 70
		},
		'en_route_delivery': { 
			label: 'Out for Delivery', 
			color: 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300',
			icon: Truck,
			progress: 85
		},
		'delivered': { 
			label: 'Delivered', 
			color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
			icon: Package,
			progress: 100
		},
		'cancelled': { 
			label: 'Cancelled', 
			color: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
			icon: Package,
			progress: 0
		}
	};

	let currentStatus = $derived(statusConfig[rideData?.status] || statusConfig['pending']);

let estimatedMinutes = $derived(
	rideData?.estimatedDelivery ? 
		Math.max(0, Math.ceil((new Date(rideData.estimatedDelivery).getTime() - new Date().getTime()) / (1000 * 60))) : 
		null
);

	function formatTime(minutes: number | null): string {
		if (!minutes) return 'Calculating...';
		if (minutes < 60) return `${minutes}m`;
		const hours = Math.floor(minutes / 60);
		const mins = minutes % 60;
		return `${hours}h ${mins}m`;
	}

	function formatDistance(meters: number | null): string {
		if (!meters) return 'Unknown';
		if (meters < 1000) return `${Math.round(meters)}m`;
		return `${(meters / 1000).toFixed(1)}km`;
	}
</script>

<Card>
	<CardHeader>
		<CardTitle class="flex items-center gap-2">
			<span class="w-5 h-5">{currentStatus.icon}</span>
			Delivery Status
		</CardTitle>
	</CardHeader>
	<CardContent class="space-y-4">
		<!-- Status Badge -->
		<div class="flex items-center justify-between">
			<Badge class={currentStatus.color}>
				{currentStatus.label}
			</Badge>
			{#if rideData?.status === 'en_route_delivery' || rideData?.status === 'en_route_pickup'}
				<div class="flex items-center text-sm text-gray-600 dark:text-gray-400">
					<div class="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
					Live
				</div>
			{/if}
		</div>

		<!-- Progress Bar -->
		<div class="space-y-2">
			<div class="flex justify-between text-sm text-gray-600 dark:text-gray-400">
				<span>Progress</span>
				<span>{currentStatus.progress}%</span>
			</div>
			<Progress value={currentStatus.progress} class="h-2" />
		</div>

		<!-- ETA and Distance -->
		<div class="grid grid-cols-2 gap-4">
			<div class="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
				<Clock class="w-5 h-5 mx-auto mb-1 text-primary" />
				<div class="text-lg font-semibold">
					{formatTime(estimatedMinutes)}
				</div>
				<div class="text-xs text-gray-600 dark:text-gray-400">
					Estimated Time
				</div>
			</div>
			
			<div class="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
				<MapPin class="w-5 h-5 mx-auto mb-1 text-primary" />
				<div class="text-lg font-semibold">
					{formatDistance(rideData?.distance)}
				</div>
				<div class="text-xs text-gray-600 dark:text-gray-400">
					Total Distance
				</div>
			</div>
		</div>

		<!-- Addresses -->
		{#if rideData?.pickup || rideData?.dropoff}
			<div class="space-y-3 pt-2 border-t">
				{#if rideData.pickup}
					<div class="flex items-start gap-3">
						<div class="w-3 h-3 bg-green-500 rounded-full mt-1"></div>
						<div>
							<div class="font-medium text-sm">Pickup</div>
							<div class="text-sm text-gray-600 dark:text-gray-400">
								{rideData.pickup.address}
							</div>
						</div>
					</div>
				{/if}
				
				{#if rideData.dropoff}
					<div class="flex items-start gap-3">
						<div class="w-3 h-3 bg-blue-500 rounded-full mt-1"></div>
						<div>
							<div class="font-medium text-sm">Delivery</div>
							<div class="text-sm text-gray-600 dark:text-gray-400">
								{rideData.dropoff.address}
							</div>
						</div>
					</div>
				{/if}
			</div>
		{/if}
	</CardContent>
</Card>
