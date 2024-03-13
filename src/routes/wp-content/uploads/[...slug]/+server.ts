import { WORDPRESS } from '$env/static/private';
import { error } from '@sveltejs/kit';

export async function GET({ params: { slug }, fetch }) {
	const wpUrl = new URL(WORDPRESS);
	const slugSource = wpUrl.origin + '/wp-content/uploads/' + slug;

	const response = await fetch(slugSource);
	if (response.ok) return new Response(response.body);

	error(404, 'Not found');
}
