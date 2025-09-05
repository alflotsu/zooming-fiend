import type { RequestHandler } from './$types';

// Mock driver location updates for real-time streaming (Accra, Ghana)
const mockDriverLocations = {
	'12345': [
		{ lat: 5.6037, lng: -0.1870 }, // Accra Mall start
		{ lat: 5.6045, lng: -0.1860 }, // Moving towards airport
		{ lat: 5.6055, lng: -0.1850 },
		{ lat: 5.6070, lng: -0.1835 },
		{ lat: 5.6085, lng: -0.1820 },
		{ lat: 5.6100, lng: -0.1800 },
		{ lat: 5.6125, lng: -0.1780 },
		{ lat: 5.6150, lng: -0.1760 },
		{ lat: 5.6175, lng: -0.1735 },
		{ lat: 5.6190, lng: -0.1715 },
		{ lat: 5.6205, lng: -0.1695 } // Kotoka Airport arrival
	],
	'54321': [
		{ lat: 5.5560, lng: -0.2040 }, // University of Ghana, Legon
		{ lat: 5.5580, lng: -0.2020 }, // Moving towards Accra Mall
		{ lat: 5.5620, lng: -0.1990 },
		{ lat: 5.5680, lng: -0.1950 },
		{ lat: 5.5750, lng: -0.1920 },
		{ lat: 5.5850, lng: -0.1900 },
		{ lat: 5.5950, lng: -0.1880 },
		{ lat: 5.6037, lng: -0.1870 } // Accra Mall arrival
	]
};

export const GET: RequestHandler = async ({ params }) => {
	const { jobId } = params;

	// Create Server-Sent Events stream
	const stream = new ReadableStream({
		start(controller) {
			let locationIndex = 0;
			const locations = mockDriverLocations[jobId as keyof typeof mockDriverLocations] || [];
			
			if (locations.length === 0) {
				controller.close();
				return;
			}

			// Send initial location
			const initialData = {
				location: locations[0],
				timestamp: new Date().toISOString()
			};
			
			controller.enqueue(`data: ${JSON.stringify(initialData)}\n\n`);

			// Update location every 3 seconds
			const intervalId = setInterval(() => {
				locationIndex = (locationIndex + 1) % locations.length;
				
				const updateData = {
					location: locations[locationIndex],
					timestamp: new Date().toISOString(),
					// Occasionally send status updates too
					...(Math.random() < 0.1 && {
						statusUpdate: 'Driver is making good progress'
					})
				};

				try {
					controller.enqueue(`data: ${JSON.stringify(updateData)}\n\n`);
				} catch (error) {
					clearInterval(intervalId);
					controller.close();
				}
			}, 3000);

			// Simulate status changes every 30 seconds
			const statusInterval = setInterval(() => {
				const statusUpdates = [
					'Traffic is light - arriving ahead of schedule',
					'Navigating through busy area',
					'Almost at your location!',
					'Looking for parking spot'
				];
				
				const randomStatus = statusUpdates[Math.floor(Math.random() * statusUpdates.length)];
				
				const statusData = {
					statusUpdate: randomStatus,
					timestamp: new Date().toISOString()
				};

				try {
					controller.enqueue(`data: ${JSON.stringify(statusData)}\n\n`);
				} catch (error) {
					clearInterval(statusInterval);
					clearInterval(intervalId);
					controller.close();
				}
			}, 30000);

			// Clean up after 10 minutes
			setTimeout(() => {
				clearInterval(intervalId);
				clearInterval(statusInterval);
				controller.close();
			}, 600000);
		}
	});

	return new Response(stream, {
		headers: {
			'Content-Type': 'text/event-stream',
			'Cache-Control': 'no-cache',
			'Connection': 'keep-alive',
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Headers': 'Cache-Control'
		}
	});
};
