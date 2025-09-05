<script lang="ts">
	import '../app.css';
	import "iconify-icon";
	import favicon from '$lib/assets/favicon.svg';
	import Locale from '$lib/components/layout/header/Locale.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<header class="navbar">
	<div class="flex-1"></div>
	<div class="navbar-end">
		<Locale />
	</div>
</header>

{@render children?.()}