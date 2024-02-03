<script lang="ts">
	// TODO: Add to layout
	import '../styles/fonts.css';
	import TipTap from "$lib/components/TipTap.svelte";
	import Scrolly from "$lib/components/Scrolly.svelte";
	import { demo_steps } from "$lib/text";
	import DemoCanvas from "$lib/components/DemoCanvas.svelte";

	let demo_step: number;
	const subtitle = "where reading is a neverending adventure";
</script>

<main>
	<div class="title-container">
		<h1>Welcome to <span class="white">Sonderly</span></h1>
		<h2>{subtitle}</h2>
	</div>
	<div class="svg-wave svg-wave-bottom">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
			<path fill="#0099ff" fill-opacity="1" d="M0,128L48,138.7C96,149,192,171,288,160C384,149,480,107,576,106.7C672,107,768,149,864,170.7C960,192,1056,192,1152,165.3C1248,139,1344,85,1392,58.7L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
		</svg>
	</div>
	<div class="demo-container">
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
	.title-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100vw;
		min-height: 50vh;
		background-color: #0099ff;
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

	h1, h2 {
		font-family: 'Open Sans';
		margin: 0;
	}

	h1 {
		font-size: 72px;
		font-weight: 900;
		color: #3d2512;
	}

	h2 {
		font-size: 36px;
		font-weight: normal;
		color: white;
	}

	.white {
		color: white;
	}

	.demo-container {
		margin-top: 1em;
		text-align: center;
		transition: background 100ms;
		flex-direction: row;
		display: flex;
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
		padding: .5rem 1rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		transition: background 500ms ease;
		box-shadow: 1px 1px 10px rgba(0, 0, 0, .2);
		text-align: left;
		width: 75%;
		margin: auto;
		max-width: 500px;

		font-family: 'Open Sans';
		font-size: 18px;
	}

	:global(.definition-heading) {
		font-weight: bold;
		margin: 0;
		padding: 0;
	}

	:global(.definition-text) {
		font-size: 14px;
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

	.demo-steps {

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
