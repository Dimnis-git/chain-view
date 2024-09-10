<script lang="ts">
	import '../app.css';

	// svelte
	import { onMount } from 'svelte';

	// lib
	import { themeChange } from 'theme-change';

	// components
	import Theme from '$lib/components/action/theme.svelte';
	import Lang from '$lib/components/action/lang.svelte';
	import { loadTranslations } from '$lib/internationalization/i18n';

	onMount(async () => {
		themeChange(false);

		let lang = localStorage.getItem('lang');

		if (lang === null)
			lang = 'en'
			
		await loadTranslations(lang, '/'); // keep this just before the `return`
	});
</script>

<div class="fixed right-3 top-3 flex gap-2">
	<Lang />
	<Theme />
</div>

<slot></slot>
