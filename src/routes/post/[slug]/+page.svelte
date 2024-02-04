<script lang="ts">
	import { Card, Heading } from 'flowbite-svelte';
	import { posts } from '../data';
	export let data;


	function getPost(id: string) {
		return posts.find((post) => post.id === id);
	}

</script>

<div class="page-container">
	<div class="post-container">
		<Heading tag="h3">{data.post.name}</Heading>
		<Heading tag="h6">by {data.post.author}</Heading>
		<div>{@html data.post.html}</div>
	</div>
	<div class="related-container">
		<Heading tag="h4">Related Posts</Heading>
		<div class="posts-flex">
			{#each data.post.connections as { id }}
			<Card href="/post/{id}" style="margin-top:1.2rem;">
				<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{getPost(id)?.name}</h5>
				<h6>{getPost(id)?.author}</h6>
				<p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">{getPost(id)?.description}</p>
			</Card>
		{/each}
		</div>
	</div>
</div>

<style>
	.page-container {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.post-container {
		width: 85%;
		display: flex;
		flex-direction: column;
		align-items: start;
		justify-content: center;
		margin-top: 2.4rem;
	}

	.related-container {
		margin: 6.4rem 0;
		width: 85%;
		display: flex;
		flex-direction: column;
		align-items: start;
	}

	.posts-flex {
		display: flex;
		flex-direction: row;
		gap: 2.4rem;
	}
</style>