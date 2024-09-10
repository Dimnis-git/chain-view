<script lang="ts">
	import { onMount } from "svelte";

    import Icon from "../icon.svelte";

    let theme = $state<string | null>(null)

    onMount(() => {
        theme = localStorage.getItem('theme');

        if (theme == null)
            theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    });
</script>

<button 
    type="button" 
    class="btn btn-lg btn-primary mask mask-squircle fixed top-2 right-2 *:text-2xl" 
    data-toggle-theme="dark,light" 
    data-act-class="ACTIVECLASS"
>
    {#if theme === 'light'}
        <Icon icon="solar:sun-2-broken" />
    {:else}
        <Icon icon="solar:moon-broken" />
    {/if}
</button>