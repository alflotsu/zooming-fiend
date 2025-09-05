<script lang="ts">
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Check, Clock, Package, MapPin, Truck, CheckCircle } from 'lucide-svelte';

	export let status: string;
	export let timestamps: any = {};
	export let estimatedDelivery: string | null = null;

	// Timeline stages
	const timelineStages = [
		{
			key: 'pending',
			label: 'Order Placed',
			icon: Package,
			description: 'Your order has been confirmed'
		},
		{
			key: 'accepted',
			label: 'Driver Assigned',
			icon: Truck,
			description: 'Driver is on the way to pickup'
		},
		{
			key: 'en_route_pickup',
			label: 'Heading to Pickup',
			icon: MapPin,
			description: 'Driver is traveling to pickup location'
		},
		{
			key: 'at_pickup',
			label: 'At Pickup',
			icon: Clock,
			description: 'Driver has arrived at pickup location'
		},
		{
			key: 'picked_up',
			label: 'Package Collected',
			icon: Package,
			description: 'Your package has been picked up'
		},
		{
			key: 'en_route_delivery',
			label: 'Out for Delivery',
			icon: Truck,
			description: 'Package is on the way to you'
		},
		{
			key: 'delivered',
			label: 'Delivered',
			icon: CheckCircle,
			description: 'Package has been delivered successfully'
		}
	];

	function getStageStatus(stageKey: string, currentStatus: string): 'completed' | 'current' | 'pending' {
		const currentIndex = timelineStages.findIndex(stage => stage.key === currentStatus);
		const stageIndex = timelineStages.findIndex(stage => stage.key === stageKey);
		
		if (stageIndex < currentIndex) return 'completed';
		if (stageIndex === currentIndex) return 'current';
		return 'pending';
	}

	function formatTimestamp(timestamp: string | null): string {
		if (!timestamp) return '';
		const date = new Date(timestamp);
		return date.toLocaleTimeString([], { 
			hour: '2-digit', 
			minute: '2-digit',
			hour12: true 
		});
	}

	function formatEstimatedTime(estimatedDelivery: string | null): string {
		if (!estimatedDelivery) return 'Calculating...';
		
		const now = new Date();
		const estimated = new Date(estimatedDelivery);
		const diffMinutes = Math.max(0, Math.ceil((estimated.getTime() - now.getTime()) / (1000 * 60)));
		
		if (diffMinutes < 60) {
			return `${diffMinutes} min`;
		}
		
		const hours = Math.floor(diffMinutes / 60);
		const minutes = diffMinutes % 60;
		return `${hours}h ${minutes}m`;
	}
</script>

<Card>
	<CardHeader>
		<CardTitle class="flex items-center gap-2">
			<Clock class="w-5 h-5" />
			Delivery Timeline
		</CardTitle>
	</CardHeader>
	<CardContent>
		<div class="space-y-4">
			{#each timelineStages as stage, index}
				{@const stageStatus = getStageStatus(stage.key, status)}
				{@const timestamp = timestamps[stage.key]}
				{@const isLast = index === timelineStages.length - 1}
				
				<div class="flex items-start gap-4 relative">
					<!-- Timeline Line -->
					{#if !isLast}
						<div 
							class="absolute left-6 top-12 w-0.5 h-8 {stageStatus === 'completed' ? 'bg-green-500' : 'bg-gray-200 dark:bg-gray-700'}"
						></div>
					{/if}
					
					<!-- Stage Icon -->
					<div class="flex-shrink-0 relative z-10">
						{#if stageStatus === 'completed'}
							<div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
								<Check class="w-6 h-6 text-white" />
							</div>
						{:else if stageStatus === 'current'}
							<div class="w-12 h-12 bg-primary rounded-full flex items-center justify-center animate-pulse">
								<svelte:component this={stage.icon} class="w-6 h-6 text-white" />
							</div>
						{:else}
							<div class="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
								<svelte:component this={stage.icon} class="w-6 h-6 text-gray-400" />
							</div>
						{/if}
					</div>
					
					<!-- Stage Content -->
					<div class="flex-1 min-w-0 pb-8">
						<div class="flex items-center justify-between mb-1">
							<h4 class="font-semibold text-sm {
								stageStatus === 'completed' ? 'text-green-600 dark:text-green-400' :
								stageStatus === 'current' ? 'text-primary' :
								'text-gray-500 dark:text-gray-400'
							}">
								{stage.label}
							</h4>
							
							{#if timestamp}
								<span class="text-xs text-gray-500 dark:text-gray-400">
									{formatTimestamp(timestamp)}
								</span>
							{:else if stageStatus === 'current' && stage.key === 'delivered' && estimatedDelivery}
								<span class="text-xs text-primary font-medium">
									ETA: {formatEstimatedTime(estimatedDelivery)}
								</span>
							{/if}
						</div>
						
						<p class="text-sm text-gray-600 dark:text-gray-300">
							{stage.description}
						</p>
						
						<!-- Current stage additional info -->
						{#if stageStatus === 'current'}
							<div class="mt-2 text-xs text-primary bg-primary/10 px-2 py-1 rounded-lg inline-block">
								Current Status
							</div>
						{/if}
					</div>
				</div>
			{/each}
			
			<!-- Estimated Delivery Time (if not delivered) -->
			{#if status !== 'delivered' && status !== 'cancelled' && estimatedDelivery}
				<div class="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
					<div class="flex items-center gap-2 text-blue-700 dark:text-blue-300">
						<Clock class="w-4 h-4" />
						<span class="font-semibold text-sm">Estimated Delivery</span>
					</div>
					<div class="mt-1">
						<span class="text-lg font-bold text-blue-800 dark:text-blue-200">
							{formatEstimatedTime(estimatedDelivery)}
						</span>
						<span class="text-sm text-blue-600 dark:text-blue-400 ml-2">
							({new Date(estimatedDelivery).toLocaleTimeString([], { 
								hour: '2-digit', 
								minute: '2-digit',
								hour12: true 
							})})
						</span>
					</div>
				</div>
			{/if}
		</div>
	</CardContent>
</Card>
