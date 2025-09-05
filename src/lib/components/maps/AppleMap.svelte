<!-- Apple Maps component - requires Apple Developer account
<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';

	export let jwt: string; // JWT token from Apple Developer account
	export let center: [number, number] = [40.7128, -74.006]; // NYC default (lat, lng for Apple)
	export let zoom: number = 12;
	export let height: string = '400px';
	export let markers: Array<{lat: number, lng: number, title?: string, subtitle?: string}> = [];

	let mapContainer: HTMLDivElement;
	let map: any; // MapKit.Map
	let mapKit: any;

	onMount(async () => {
		if (!browser) return;

		// Load MapKit JS dynamically
		if (!window.mapkit) {
			await loadMapKitJS();
		}

		mapKit = window.mapkit;

		if (!mapKit.isInitialized) {
			mapKit.init({
				authorizationCallback: (done: (jwt: string) => void) => {
					done(jwt);
				}
			});
		}

		// Create the map
		map = new mapKit.Map(mapContainer, {
			center: new mapKit.Coordinate(center[0], center[1]),
			span: new mapKit.CoordinateSpan(0.01, 0.01)
		});

		// Add markers
		if (markers.length > 0) {
			const annotations = markers.map(marker => {
				const annotation = new mapKit.MarkerAnnotation(
					new mapKit.Coordinate(marker.lat, marker.lng),
					{
						title: marker.title,
						subtitle: marker.subtitle
					}
				);
				return annotation;
			});
			
			map.showItems(annotations);
		}
	});

	async function loadMapKitJS(): Promise<void> {
		return new Promise((resolve, reject) => {
			if (window.mapkit) {
				resolve();
				return;
			}

			const script = document.createElement('script');
			script.src = 'https://cdn.apple-mapkit.com/mk/5.x.x/mapkit.js';
			script.async = true;
			script.onload = () => resolve();
			script.onerror = () => reject(new Error('Failed to load MapKit JS'));
			document.head.appendChild(script);
		});
	}

	onDestroy(() => {
		if (map) {
			map.destroy();
		}
	});
</script>

<div bind:this={mapContainer} class="apple-map w-full rounded-lg" style="height: {height};"></div>

<style>
	:global(.apple-map) {
		border-radius: 0.5rem;
		overflow: hidden;
	}
</style>

<svelte:window bind:mapkit />

<script context="module" lang="ts">
	declare global {
		interface Window {
			mapkit: any;
		}
	}
</script>
-->
