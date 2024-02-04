<script lang="ts">
	import { Button } from 'flowbite-svelte';
	import TipTap from "$lib/components/TipTap.svelte";
	import Scrolly from "$lib/components/Scrolly.svelte";
	import { demo_steps } from "$lib/text";
	import DemoCanvas from "$lib/components/DemoCanvas.svelte";
	import mascot from "$lib/images/sonderly_mascot.png";

	function scrollIntoView({ target }: any): void {
		const el = document.querySelector(target.getAttribute('href'));
		if (!el) return;

		el.scrollIntoView({
			behavior: 'smooth'
		});
	}

	let demo_step: number;
	const subtitle = "where reading is a neverending adventure";
</script>

<main>
	<div class="hero-container">
		<div class="title-container">
			<h1>Welcome to Sonderly</h1>
			<h2>{subtitle}</h2>
			<a href="#demo-container" class="scroll-text" on:click|preventDefault={scrollIntoView}>Scroll to learn more!</a>
		</div>
		<div class="hero-options">
			<img src="{mascot}" alt="Sonderly mascot">
			<Button color="blue" href="/post" size="lg" style="width:200px;">Browse Collections</Button>
			<Button color="blue" href="/write" size="lg" style="width:200px;">Write</Button>
		</div>
	</div>
	<div class="svg-wave svg-wave-bottom">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
			<path fill="#0099ff" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
		</svg>
	</div>
	<div class="demo-container" id="demo-container">
		<div class="steps-container">
			<Scrolly bind:value={demo_step}>
				{#each demo_steps as text, i}
					<div class="step" class:active={demo_step === i}>
						<div class="step-content">{@html text}</div>
					</div>
				{/each}
				<div class="spacer" />
			</Scrolly>
		</div>
		<div class="sticky">
			<div class="canvas">
				<DemoCanvas bind:step={demo_step}/>
			</div>
		</div>
	</div>
</main>

<style>
	.hero-container {
		width: 100vw;
		min-height: 50vh;
		display: flex;
		flex-direction: row;
	}

	.title-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin: 0 2.4rem;
		flex: 1;
	}

	.hero-options {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1.2rem;
	}

	.svg-wave {
		width: 100%;
		height: 20vh;
		margin: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.svg-wave svg {
		width: 100%;
		margin: 0;
	}

	.svg-wave-bottom {
		justify-content: start;
	}

	h1, h2, .scroll-text {
		font-family: 'Open Sans';
		margin: 0;
		color: #0099ff;
	}

	h1 {
		margin-top: auto;
		font-size: 72px;
		font-weight: 900;
		/* color: #3d2512; */
	}

	h2 {
		font-size: 36px;
		font-weight: normal;
		margin: -1.5rem 0;
	}

	.scroll-text {
		margin-top: auto;
		align-self: center;
	}

	.demo-container {
		margin-top: 0;
		text-align: center;
		transition: background 100ms;
		flex-direction: row;
		display: flex;
		background: #0099ff;
	}

	.steps-container, .sticky {
		height: 100%;
	}

	.steps-container {
		flex: 1 1 40%;
		z-index: 10;
	}

	.step {
		height: 80vh;
		display: flex;
		place-items: center;
		justify-content: center;
	}

	.step-content {
		font-size: 1rem;
		background: whitesmoke;
		color: #ccc;
		border-radius: 5px;
		padding: 1.5rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		transition: background 500ms ease;
		box-shadow: 1px 1px 10px rgba(0, 0, 0, .2);
		text-align: left;
		width: 90%;
		margin: auto;

		font-family: 'Open Sans';
		font-size: 22px;
	}

	:global(.definition-heading) {
		font-weight: bold;
		margin: 0;
		padding: 0;
		margin-top: 1rem;
	}

	:global(.definition-text) {
		font-size: 16px;
		margin-top: 1rem;
	}

	.step.active .step-content {
		background: white;
		color: black;
	}

	.spacer {
		height: 40vh;
	}

	.sticky {
		position: sticky;
		top: 10%;
		flex: 1 1 60%;
		width: 60%;
		min-height: 75vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.canvas {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100%;
		width: 100%;
	}
</style>
