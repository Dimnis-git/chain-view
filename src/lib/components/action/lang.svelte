<script lang="ts">
	import Icon from '../icon.svelte';

	import { loadTranslations } from '$lib/internationalization/i18n';
	import { onMount } from 'svelte';

	let currentLang = $state('en');

	onMount(() => {
		const localLang = localStorage.getItem('lang');

		if (localLang !== null) currentLang = localLang;
	});

	async function changeLang(lang: string) {
		currentLang = lang;
		await loadTranslations(lang, '/');
		localStorage.setItem('lang', lang);
	}
</script>

<details class="dropdown dropdown-end">
	<summary class="btn btn-outline btn-sm">
		{#if currentLang === 'pt'}
			<Icon icon="emojione-v1:flag-for-brazil" />
		{:else}
			<Icon icon="emojione-v1:flag-for-united-states" />
		{/if}
	</summary>
	<ul
		class="menu dropdown-content z-[1] w-32 rounded-box bg-base-200 p-2 shadow [&>li>button>*]:text-lg"
	>
		<li>
			<button type="button" onclick={() => changeLang('pt')}>
				<Icon icon="emojione-v1:flag-for-brazil" /> PT-BR
			</button>
		</li>
		<li>
			<button type="button" onclick={() => changeLang('en')}>
				<Icon icon="emojione-v1:flag-for-united-states" /> EN-US
			</button>
		</li>
	</ul>
</details>
