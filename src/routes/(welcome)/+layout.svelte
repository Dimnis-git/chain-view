<script>
    import 'iconify-icon';
    import '../../app.css';
	import { onMount } from 'svelte';

    let theme = '';

    onMount(() => {
        let hasStorageTheme = 'theme' in localStorage;

        if (hasStorageTheme)
            theme = localStorage.theme;

        if (!hasStorageTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)
            theme = "dark";

        localStorage.theme = theme;
    })

    const handleTheme = () => {
        theme = theme === 'dark' ? '' : 'dark';
        localStorage.theme = theme;
    }
</script>

<nav class="fixed w-full">
    <button class="fixed top-4 right-4 btn btn-primary" on:click={handleTheme}>
        {#if theme === "dark"}
            <iconify-icon icon="line-md:moon-rising-alt-loop" class="text-3xl pt-2"></iconify-icon>
        {:else}
            <iconify-icon icon="line-md:sun-rising-loop" class="text-3xl pt-2"></iconify-icon>
        {/if}
    </button>
</nav>

<main class={theme}>
    <div class="h-screen dark:bg-black dark:text-white">
        <slot/>
    </div>
</main>
