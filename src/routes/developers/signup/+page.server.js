import { fail } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		
		const firstName = data.get('firstName');
		const lastName = data.get('lastName');
		const email = data.get('email');
		const company = data.get('company');
		const website = data.get('website');
		const integrationType = data.get('integrationType');
		const useCase = data.get('useCase');
		const expectedVolume = data.get('expectedVolume');

		// Basic validation
		const errors = {};
		
		if (!firstName || firstName.length < 1) {
			errors.firstName = 'First name is required';
		}
		
		if (!lastName || lastName.length < 1) {
			errors.lastName = 'Last name is required';
		}
		
		if (!email || !email.includes('@')) {
			errors.email = 'Valid email address is required';
		}
		
		if (!company || company.length < 1) {
			errors.company = 'Company/Organization is required';
		}
		
		if (!integrationType) {
			errors.integrationType = 'Please select an integration type';
		}
		
		if (!useCase || useCase.length < 10) {
			errors.useCase = 'Please provide a detailed use case description (min 10 characters)';
		}
		
		// If there are validation errors, return them
		if (Object.keys(errors).length > 0) {
			return fail(400, {
				firstName,
				lastName,
				email,
				company,
				website,
				integrationType,
				useCase,
				expectedVolume,
				errors
			});
		}
		
		// TODO: In a real application, you would:
		// 1. Save the application to a database
		// 2. Send a notification email to administrators
		// 3. Send a confirmation email to the applicant
		// 4. Integrate with your user management system
		
		console.log('Developer Application Received:', {
			firstName,
			lastName,
			email,
			company,
			website,
			integrationType,
			useCase,
			expectedVolume,
			submittedAt: new Date().toISOString()
		});
		
		// Return success response
		return {
			success: true
		};
	}
};
