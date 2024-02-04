<script>
	import '../styles/fonts.css';
	import '../app.pcss';
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
    import TreeIcon from '$lib/images/tree.svelte';
	import logo from "$lib/images/sonderly_logo.png";

</script>

<div>
	<Navbar let:NavContainer color="primary" class="bg-white">
        <NavContainer class="border px-5 py-2 rounded-lg bg-white dark:bg-gray-600">
          <NavBrand href="/">
			<img src="{logo}" alt="Sonderly mascot"  width="60" height="60">
            <span class="self-center whitespace-nowrap text-xl font-semibold">Sonderly</span>
          </NavBrand>
          <NavHamburger />
          <NavUl>
            <NavLi href="/">Home</NavLi>
            <NavLi href="/post">Posts</NavLi>
            <NavLi href="/write">Write</NavLi>
          </NavUl>
        </NavContainer>
      </Navbar>
	<slot />
</div>
