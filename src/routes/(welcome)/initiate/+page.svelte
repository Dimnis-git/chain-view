<script lang="ts">
	import { fade } from 'svelte/transition';
</script>

<div class="h-screen flex justify-center items-center" in:fade>
    <div class="rounded-2xl border border-gray-400 h-3/5 xl:w-1/5 w-2/5">
        <header class="h-10 p-4">
            <a href="/">
                <iconify-icon icon="pepicons-print:arrow-left" class="text-4xl rounded-full hover:bg-slate-400 hover:bg-opacity-30 "></iconify-icon>
            </a>
        </header>
    </div>
</div>
