<script>
	import '../app.pcss';
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
    import TreeIcon from '$lib/images/tree.svelte'
</script>

<div>
	<Navbar let:NavContainer color="primary">
        <NavContainer class="border px-5 py-2 rounded-lg bg-white dark:bg-gray-600">
          <NavBrand href="/">
            <TreeIcon width={40} height={40}/>
            <span class="self-center whitespace-nowrap text-xl font-semibold">Sonderly</span>
          </NavBrand>
          <NavHamburger />
          <NavUl>
            <NavLi href="/">Home</NavLi>
            <NavLi href="/about">About</NavLi>
            <NavLi href="/browse">Browse</NavLi>
            <NavLi href="/write">Write</NavLi>
          </NavUl>
        </NavContainer>
      </Navbar>
	<slot />
</div>
