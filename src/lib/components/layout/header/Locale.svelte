<script lang="ts">
	import { m } from '$lib/paraglide/messages';
	import { getLocale, setLocale, type Locale } from '$lib/paraglide/runtime';

	const locale = $derived(getLocale());
</script>

<details class="dropdown dropdown-end">
	<summary class="btn btn-lg btn-ghost">
        {@render Flag(locale)}
	</summary>
	<ul class="dropdown-content menu menu-lg z-1 w-52 rounded-box bg-base-100 p-2 shadow-sm">
        {@render ListItem('pt')}
        {@render ListItem('en')}
	</ul>
</details>

{#snippet ListItem(locale: Locale)}
	<li>
		<button onclick={() => setLocale(locale)}>
            {@render Flag(locale, true)}
		</button>
	</li>
{/snippet}

{#snippet Flag(locale: string, detailed = false)}
	{#if locale === 'pt'}
		<iconify-icon icon="emojione-v1:flag-for-brazil"></iconify-icon>
	{:else}
		<iconify-icon icon="emojione-v1:flag-for-united-states"></iconify-icon>
	{/if}
    {#if detailed}
        {#if locale === 'pt'}
            <span>{m.portuguese()}</span>
        {:else}
            <span>{m.english()}</span>
        {/if}
    {:else}
        <span>{locale.toUpperCase()}</span>
    {/if}
{/snippet}
