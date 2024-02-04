<script lang="ts">
	import { mock_posts } from '$lib/data/mock';
	import { Access, Genre, type Post } from '$lib/types';
	import { posts } from '../../stores/posts';
	import { v4 as uuidv4 } from 'uuid';

	const example_post: Post = 	{
		id: uuidv4(), // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
		name: "The Rise and Fall of King Humpty",
		description: "It was all a dream: An alternative story of Humpty Dumpty",
		genre: [Genre.Children],
		connections: [ { id: mock_posts[0].id }],
		html: `<p>Once upon a time in the kingdom of Egglantia, there ruled a monarch whose name was known far and wide: King Humpty. He wasn't just any king; he was the epitome of regality, with a rotund figure and a heart as golden as his crown.</p>
		<p>King Humpty presided over his kingdom with wisdom and kindness. His subjects adored him, for he always had time to listen to their concerns and offer his sage advice. Under his reign, Egglantia flourished, and peace reigned supreme.</p>
		<p>However, there was one peculiar aspect of King Humpty's appearance that set him apart from other monarchs—he was, quite literally, an egg. His oval-shaped body and smooth shell made him an unusual sight, but his subjects never judged him for his unique form. To them, he was simply their beloved ruler.</p>
		<p>Yet, despite the admiration of his subjects and the prosperity of his kingdom, King Humpty harbored a secret fear—a fear of falling. For in Egglantia, there existed a tale as old as time itself, a cautionary nursery rhyme whispered by mothers to their children:</p>
		<p>"Humpty Dumpty sat on a wall,</p>
		<p>Humpty Dumpty had a great fall.</p>
		<p>All the king's horses and all the king's men</p>
		<p>Couldn't put Humpty together again."</p>
		<p>The rhyme haunted King Humpty's dreams, a reminder of his vulnerability and mortality. He feared that one day, he too would suffer a great fall, and no one would be able to mend him.</p>
		<p>As time passed, King Humpty's anxiety grew, casting a shadow over his once joyful reign. His advisors tried to reassure him, but the king's fears persisted, like a crack slowly spreading across his shell.</p>
		<p>Then, one fateful day, as the sun bathed Egglantia in its golden light, tragedy struck. King Humpty, in a moment of careless abandon, ventured too close to the edge of his castle's wall. With a resounding crack, he lost his footing and tumbled to the ground below.</p>
		<p>The kingdom stood still as news of the king's fall spread like wildfire. The people wept for their beloved monarch, fearing that the nursery rhyme had finally come to pass.</p>
		<p>But amidst the chaos and despair, something miraculous happened. The king's loyal subjects, united in their love for their ruler, rushed to his side. They gathered up the broken pieces of their fallen king, cradling him in their arms with tenderness and care.</p>
		<p>For days and nights, the people of Egglantia labored tirelessly, using all their skill and ingenuity to mend their shattered king. They worked together, each contributing a piece of their own, until at last, King Humpty stood whole once more.</p>
		<p>As he looked upon the faces of his devoted subjects, King Humpty felt a warmth fill his heart—a warmth born not of fear, but of love and gratitude. In that moment, he realized that it was not the fall that defined him, but the love and unity of his kingdom.</p>
		<p>From that day forth, King Humpty ruled Egglantia with even greater compassion and wisdom. The nursery rhyme still echoed in the hearts of his people, but it was no longer a tale of tragedy. Instead, it became a testament to the resilience of their beloved king and the enduring power of love to mend even the most broken of souls.</p>
		<p>And so, in the kingdom of Egglantia, the story of King Humpty lived on—a story of courage, redemption, and the triumph of the human spirit.</p>`,
		access: Access.public,
		published: true
	}
</script>

<div class="explore-carousel">
	<h3>Explore Posts</h3>
	<button on:click={() => posts.add(example_post)}>Add Post</button>
	{#each $posts as post, i}
		<br>------
		{@html post.html}
		------<br>
	{/each}
</div>

<style>
	button {
		border: 1px solid green;
		border-radius: 0.5rem;
		padding: 1rem;
		background-color: whitesmoke;
	}
</style>