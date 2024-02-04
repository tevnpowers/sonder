import { error } from '@sveltejs/kit';
import { posts } from '../data';

export function load({ params }) {
	const post = posts.find((post) => post.id === params.slug);

	if (!post) throw error(404);

	return {
		post
	};
}
