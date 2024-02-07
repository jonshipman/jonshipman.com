const allowedHeaders = ['content-type', 'x-forwarded-for'];

export async function handle({ event, resolve }) {
	const response = await resolve(event, {
		filterSerializedResponseHeaders: (name) => allowedHeaders.includes(name)
	});

	return response;
}
