<script lang="ts">
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import { Avatar, AvatarFallback, AvatarImage } from '$lib/components/ui/avatar';
	import { Star, Phone, MessageCircle, Car } from 'lucide-svelte';

	export let driver: any;

	function getDriverInitials(name: string): string {
		return name
			.split(' ')
			.map(word => word.charAt(0).toUpperCase())
			.slice(0, 2)
			.join('');
	}

	function formatRating(rating: number): string {
		return rating.toFixed(1);
	}
</script>

{#if driver}
	<Card>
		<CardHeader>
			<CardTitle class="flex items-center gap-2">
				<Car class="w-5 h-5" />
				Your Driver
			</CardTitle>
		</CardHeader>
		<CardContent class="space-y-4">
			<!-- Driver Info -->
			<div class="flex items-center gap-4">
				<Avatar class="w-12 h-12">
					<AvatarImage src={driver.avatar} alt={driver.name} />
					<AvatarFallback class="bg-primary text-primary-foreground">
						{getDriverInitials(driver.name)}
					</AvatarFallback>
				</Avatar>
				
				<div class="flex-1">
					<div class="font-semibold text-lg">{driver.name}</div>
					{#if driver.rating}
						<div class="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
							<Star class="w-4 h-4 fill-yellow-400 text-yellow-400" />
							<span class="font-medium">{formatRating(driver.rating)}</span>
							{#if driver.totalRides}
								<span>({driver.totalRides} rides)</span>
							{/if}
						</div>
					{/if}
				</div>
				
				{#if driver.isOnline}
					<Badge class="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
						Online
					</Badge>
				{/if}
			</div>

			<!-- Vehicle Info -->
			{#if driver.vehicle}
				<div class="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
					<div class="flex items-center justify-between">
						<div>
							<div class="font-medium text-sm">
								{driver.vehicle.make} {driver.vehicle.model}
							</div>
							<div class="text-sm text-gray-600 dark:text-gray-400">
								{driver.vehicle.year} • {driver.vehicle.color}
							</div>
						</div>
						<div class="text-right">
							<div class="font-mono text-lg font-semibold">
								{driver.vehicle.licensePlate}
							</div>
							{#if driver.vehicle.type}
								<Badge variant="outline" class="text-xs mt-1">
									{driver.vehicle.type}
								</Badge>
							{/if}
						</div>
					</div>
				</div>
			{/if}

			<!-- Driver Stats -->
			{#if driver.stats}
				<div class="grid grid-cols-3 gap-4 pt-2 border-t">
					<div class="text-center">
						<div class="text-lg font-semibold text-primary">
							{driver.stats.deliveries || 0}
						</div>
						<div class="text-xs text-gray-600 dark:text-gray-400">
							Deliveries
						</div>
					</div>
					
					<div class="text-center">
						<div class="text-lg font-semibold text-primary">
							{driver.stats.onTimeRate || 0}%
						</div>
						<div class="text-xs text-gray-600 dark:text-gray-400">
							On Time
						</div>
					</div>
					
					<div class="text-center">
						<div class="text-lg font-semibold text-primary">
							{driver.stats.yearsExperience || 0}y
						</div>
						<div class="text-xs text-gray-600 dark:text-gray-400">
							Experience
						</div>
					</div>
				</div>
			{/if}

			<!-- Contact Info -->
			{#if driver.contact}
				<div class="flex gap-2 pt-2 border-t">
					{#if driver.contact.phone}
						<a 
							href="tel:{driver.contact.phone}" 
							class="flex-1 flex items-center justify-center gap-2 p-2 text-sm bg-blue-50 hover:bg-blue-100 dark:bg-blue-900 dark:hover:bg-blue-800 text-blue-700 dark:text-blue-300 rounded-lg transition-colors"
						>
							<Phone class="w-4 h-4" />
							Call
						</a>
					{/if}
					
					{#if driver.contact.canMessage}
						<button 
							class="flex-1 flex items-center justify-center gap-2 p-2 text-sm bg-green-50 hover:bg-green-100 dark:bg-green-900 dark:hover:bg-green-800 text-green-700 dark:text-green-300 rounded-lg transition-colors"
						>
							<MessageCircle class="w-4 h-4" />
							Message
						</button>
					{/if}
				</div>
			{/if}

			<!-- Driver Notes/Status -->
			{#if driver.statusMessage}
				<div class="text-sm text-gray-600 dark:text-gray-400 italic border-l-2 border-primary pl-3">
					"{driver.statusMessage}"
				</div>
			{/if}
		</CardContent>
	</Card>
{:else}
	<Card>
		<CardContent class="text-center py-8">
			<Car class="w-12 h-12 mx-auto text-gray-400 mb-2" />
			<p class="text-gray-600 dark:text-gray-400">
				Waiting for driver assignment...
			</p>
		</CardContent>
	</Card>
{/if}
