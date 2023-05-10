<script lang="ts">
    import NoticeCarousel from '$lib/components/NoticeCarousel.svelte';

	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>ChainView</title>
</svelte:head>

<main class="h-full">
	<!-- <NoticeCarousel articles={data.articles} /> -->

	<!-- {#each data.item.articles as article}
		{article.author}
	{/each} -->
</main>
