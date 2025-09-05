<script lang="ts">
	import { onMount } from 'svelte';
	import mapboxgl from 'mapbox-gl';
	import 'mapbox-gl/dist/mapbox-gl.css';

	// Props using Svelte 5 syntax
	interface Props {
		accessToken: string;
		center?: [number, number];
		zoom?: number;
		style?: string;
		height?: string;
		markers?: Array<{lng: number, lat: number, popup?: string}>;
	}

	let {
		accessToken,
		center = [-74.006, 40.7128],
		zoom = 12,
		style = 'mapbox://styles/mapbox/streets-v12',
		height = '400px',
		markers = []
	}: Props = $props();

	// State using runes
	let mapContainer = $state<HTMLDivElement>();
	let map = $state<mapboxgl.Map>();
	let currentMarkers = $state<mapboxgl.Marker[]>([]);

	// Initialize map
	onMount(() => {
		console.log('MapboxMap onMount - accessToken:', accessToken ? 'Present' : 'Missing');
		console.log('MapboxMap onMount - mapContainer:', mapContainer ? 'Present' : 'Missing');
		console.log('MapboxMap onMount - center:', center);

		if (!mapContainer) {
			console.error('MapboxMap: No map container found');
			return;
		}

		if (!accessToken || accessToken === 'your_mapbox_token_here' || accessToken.includes('demo-token')) {
			console.error('MapboxMap: Invalid or missing access token:', accessToken);
			// Show mock location data instead of map
			mapContainer.innerHTML = `
				<div class="relative h-full bg-gradient-to-br from-blue-100 to-indigo-200 rounded-lg border-2 border-dashed border-gray-300 overflow-hidden">
					<!-- Mock NYC Map Background -->
					<div class="absolute inset-0 opacity-20">
						<svg viewBox="0 0 400 300" class="w-full h-full">
							<rect width="400" height="300" fill="#f0f9ff"/>
							<g stroke="#cbd5e1" stroke-width="1" fill="none">
								<path d="M50,50 L350,50 L350,100 L200,100 L200,150 L350,150 L350,250 L50,250 Z"/>
								<path d="M100,100 L150,100 L150,200 L100,200 Z"/>
								<path d="M200,50 L250,50 L250,100"/>
								<circle cx="300" cy="200" r="30" fill="#22d3ee" fill-opacity="0.3"/>
							</g>
						</svg>
					</div>
					
					<!-- Mock Markers -->
					${markers.map((marker, i) => {
						const colors = ['#10b981', '#3b82f6', '#8b5cf6']; // green, blue, purple
						const x = 100 + (i * 100);
						const y = 120 + (i * 20);
						return `
							<div class="absolute w-6 h-6 -translate-x-3 -translate-y-6" style="left: ${x}px; top: ${y}px;">
								<div class="w-full h-full rounded-full border-2 border-white shadow-lg animate-pulse" style="background-color: ${colors[i] || colors[0]};"></div>
							</div>
						`;
					}).join('')}
					
					<!-- Info Overlay -->
					<div class="absolute top-4 left-4 bg-white bg-opacity-90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
						<h3 class="font-semibold text-gray-700 mb-1">🗺️ Mock Map View</h3>
						<p class="text-xs text-gray-600 mb-2">Accra, Ghana (${center[1].toFixed(3)}, ${center[0].toFixed(3)})</p>
						<div class="text-xs text-gray-500">
							<p>🟢 Pickup Location</p>
							<p>🔵 Delivery Location</p>
							<p>🟣 Driver Location</p>
						</div>
						<p class="text-xs text-amber-600 mt-2 font-medium">⚠️ Set VITE_MAPBOX_API_KEY for real map</p>
					</div>
				</div>
			`;
			return;
		}

		try {
			mapboxgl.accessToken = accessToken;

			map = new mapboxgl.Map({
				container: mapContainer,
				style: style,
				center: center,
				zoom: zoom
			});

			console.log('MapboxMap: Map initialized successfully');

			// Add navigation controls
			map.addControl(new mapboxgl.NavigationControl());

			map.on('load', () => {
				console.log('MapboxMap: Map loaded successfully');
				// Update markers when map is ready
				updateMarkers();
			});

			map.on('error', (error) => {
				console.error('MapboxMap error:', error);
			});

		} catch (error) {
			console.error('MapboxMap: Failed to initialize map:', error);
			mapContainer.innerHTML = `
				<div class="flex items-center justify-center h-full bg-red-50 rounded-lg border-2 border-dashed border-red-300">
					<div class="text-center p-4">
						<h3 class="font-semibold text-red-700 mb-2">Map Error</h3>
						<p class="text-sm text-red-500">${error.message}</p>
					</div>
				</div>
			`;
		}

		// Cleanup on destroy
		return () => {
			if (map) {
				map.remove();
				map = undefined;
			}
		};
	});

	// Reactive effect for markers updates
	$effect(() => {
		if (map && map.loaded()) {
			updateMarkers();
		}
	});

	// Reactive effect for center updates
	$effect(() => {
		if (map && center) {
			map.setCenter(center);
		}
	});

	// Reactive effect for zoom updates
	$effect(() => {
			if (map && zoom) {
				map.setZoom(zoom);
			}
	});

	function updateMarkers() {
		if (!map) return;

		// Clear existing markers
		currentMarkers.forEach(marker => marker.remove());
		currentMarkers = [];

		// Add new markers
		markers.forEach(marker => {
			const mapboxMarker = new mapboxgl.Marker()
				.setLngLat([marker.lng, marker.lat])
				.addTo(map!);

			if (marker.popup) {
				const popup = new mapboxgl.Popup({ offset: 25 })
					.setHTML(marker.popup);
				mapboxMarker.setPopup(popup);
			}

			currentMarkers.push(mapboxMarker);
		});
	}
</script>

<div bind:this={mapContainer} class="mapbox-map w-full rounded-lg" style="height: {height};"></div>


