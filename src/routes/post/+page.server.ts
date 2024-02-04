import { posts } from './data';

export function load() {
	return {
		summaries: posts.map((post) => ({
			slug: post.id,
			title: post.name,
			author: post.author,
			description: post.description
		}))
	};
}
