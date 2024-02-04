import { mock_posts } from '$lib/data/mock';
import type { Post } from '$lib/types';
import { writable, type Writable } from 'svelte/store';

function createPosts() {
	const { subscribe, set, update }: Writable<Post[]> = writable([...mock_posts]);
	return {
		subscribe,
		add: (p: Post) => update((collection) => [...collection, p]),
		remove: (p: Post) => update((collection) => [...collection]), // currently no-op
		reset: () => set([])
	};
}

export const posts = createPosts();
