import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

// Mock data for testing - replace with real database queries
const mockRides = {
	'12345': {
		id: '12345',
		status: 'en_route_delivery',
		pickup: {
			lat: 5.6037,
			lng: -0.1870,
			address: 'Accra Mall, Tetteh Quarshie Roundabout, Accra, Ghana'
		},
		dropoff: {
			lat: 5.6205,
			lng: -0.1695,
			address: 'Kotoka International Airport, Airport City, Accra, Ghana'
		},
		distance: 2400, // meters
		estimatedDelivery: new Date(Date.now() + 15 * 60 * 1000).toISOString(), // 15 minutes from now
		driver: {
			name: 'Kwame Asante',
			rating: 4.8,
			totalRides: 1247,
			isOnline: true,
			avatar: null,
			vehicle: {
				make: 'Toyota',
				model: 'Corolla',
				year: 2020,
				color: 'White',
				licensePlate: 'GR-2389-20',
				type: 'Sedan'
			},
			contact: {
				phone: '+233-24-567-8901',
				canMessage: true
			},
			stats: {
				deliveries: 1247,
				onTimeRate: 96,
				yearsExperience: 3
			},
			statusMessage: 'On my way to the airport! Traffic is light.'
		},
		timestamps: {
			pending: new Date(Date.now() - 45 * 60 * 1000).toISOString(), // 45 mins ago
			accepted: new Date(Date.now() - 40 * 60 * 1000).toISOString(), // 40 mins ago
			en_route_pickup: new Date(Date.now() - 35 * 60 * 1000).toISOString(), // 35 mins ago
			at_pickup: new Date(Date.now() - 20 * 60 * 1000).toISOString(), // 20 mins ago
			picked_up: new Date(Date.now() - 15 * 60 * 1000).toISOString(), // 15 mins ago
			en_route_delivery: new Date(Date.now() - 10 * 60 * 1000).toISOString() // 10 mins ago
		}
	},
	'54321': {
		id: '54321',
		status: 'accepted',
		pickup: {
			lat: 5.5560,
			lng: -0.2040,
			address: 'University of Ghana, Legon, Accra, Ghana'
		},
		dropoff: {
			lat: 5.6037,
			lng: -0.1870,
			address: 'Accra Mall, Tetteh Quarshie Roundabout, Accra, Ghana'
		},
		distance: 8500, // meters
		estimatedDelivery: new Date(Date.now() + 25 * 60 * 1000).toISOString(), // 25 minutes from now
		driver: {
			name: 'Ama Osei',
			rating: 4.9,
			totalRides: 892,
			isOnline: true,
			avatar: null,
			vehicle: {
				make: 'Hyundai',
				model: 'Elantra',
				year: 2019,
				color: 'Silver',
				licensePlate: 'GR-1547-19',
				type: 'Sedan'
			},
			contact: {
				phone: '+233-20-234-5678',
				canMessage: true
			},
			stats: {
				deliveries: 892,
				onTimeRate: 98,
				yearsExperience: 2
			},
			statusMessage: 'Just accepted your delivery - heading to Legon now!'
		},
		timestamps: {
			pending: new Date(Date.now() - 5 * 60 * 1000).toISOString(), // 5 mins ago
			accepted: new Date(Date.now() - 2 * 60 * 1000).toISOString() // 2 mins ago
		}
	}
};

export const GET: RequestHandler = async ({ params }) => {
	const { jobId } = params;

	// Simulate API delay
	await new Promise(resolve => setTimeout(resolve, 500));

	const ride = mockRides[jobId as keyof typeof mockRides];

	if (!ride) {
		return new Response('Ride not found', { status: 404 });
	}

	return json(ride);
};
