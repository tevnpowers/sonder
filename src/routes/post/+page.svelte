<script>
	import { Card } from 'flowbite-svelte';
	export let data;
</script>

<div class="page-container">
	<div class="content-container">
		<h1>Browse Sonderly collections</h1>
		<ul>
			{#each data.summaries as { slug, title, author, description }}
				<Card href="/post/{slug}" style="margin-top:1.2rem;">
					<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
					<h6>{author}</h6>
					<p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">{description}</p>
				</Card>
			{/each}
		</ul>
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

	.content-container {
		width: 85%;
		display: flex;
		flex-direction: column;
		align-items: start;
	}

	.content-container h1, .content-container ul {
		font-family: 'Open Sans';
	}

	h1 {
		font-size: 48px;
	}

	.summary-tile {
		border: 1px solid red;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>