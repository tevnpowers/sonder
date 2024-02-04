<script lang="ts">
	import TipTap from "$lib/components/Tipex.svelte";
	import { Input, Label, Helper, Button, Checkbox, A } from 'flowbite-svelte';
</script>

<div class="page-container">
	<div class="inner-container">
		<Label class="space-y-2">
			<span>Title</span>
			<Input type="email" placeholder="Humpty Dumpty...?" size="lg" />
		</Label>
		<Label class="space-y-2">
			<span>Description</span>
			<Input type="email" placeholder="The story of the ..." size="lg" />
		</Label>
		<TipTap/>
	</div>
	<Button color="blue" type="submit">Submit</Button>
</div>

<style>
    .page-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: 0px solid green;
    }

	.inner-container {
		width: 90%;
		display: flex;
		flex-direction: column;
		border: 0px solid orange;
		padding: 10px;
	}
</style>