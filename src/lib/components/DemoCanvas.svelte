<script lang="ts">
	export let step: number;
</script>

<div class="canvas">
	<h1>Humpty Dumpty</h1>
	<h4>Children's Nursery Collection</h4>
	<div class="body-container">
		<div class="body-text">
			<p>
				<a href="/" class="{step == 1 ? "selected" : step == 2 ? "active" : ""}">Humpty Dumpty</a> sat on a wall,
			</p>
			<p>
				Humpty Dumpty had a great fall;
			</p>
			<p>
				All the <a href="/" class="{step == 2 ? "active" : ""}">king's horses</a> and all the <a href="/" class="{step == 2 ? "active" : ""}">king's men</a>
			</p>
			<p>
				Couldn't put Humpty together again.
			</p>
		</div>	
	</div>
</div>

<style>
	h1, h4, p {
		font-family: 'Open Sans';
	}

	h1 {
		font-size: 26px;
	}

	h4 {
		font-size: 22px;
		margin-bottom: 1.2rem;
	}

	.canvas {
		height: 100%;
		width: 80%;
		background: white;
		border-radius: 0.25rem;
		box-shadow: 3px 3px 10px rgba(0, 0, 0, .5);
		padding: 2.4rem 0;
	}

	.body-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 90%;
	}

	.body-text {
		display: flex;
		flex-direction: column;
		align-items: start;
		justify-content: center;
		text-align: left;
		width: 75%;
	}

	p {
		font-size: 20px;
		text-align: left;
		margin: .25rem;
	}

	.body-text a {
		/* color: blue; */
		color: inherit;
		transition: all 0.5s;
		pointer-events: none;
		text-decoration: solid underline transparent 3px;
	}

	.body-text a.selected {
		/* background-color:  #B4D5FF; */ /* source: https://stackoverflow.com/questions/16094837/what-is-the-browser-default-background-color-when-selecting-text */
		border: 3px solid green;
		border-radius: 0.5rem;
	}

	.body-text a.active {
		pointer-events: all;
		cursor: pointer;
		text-decoration-color: green;
	}
</style>