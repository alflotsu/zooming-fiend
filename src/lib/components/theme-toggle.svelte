<script>
	import { Button } from '$lib/components/ui/button';
	import { themeStore } from '$lib/stores/ThemeStore';
	import { Sun, Moon } from 'lucide-svelte';

	function toggleTheme() {
		themeStore.update(current => current === 'dark' ? 'light' : 'dark');
	}
</script>

<Button
	variant="ghost"
	size="sm"
	onclick={toggleTheme}
	class="h-9 w-9 px-0"
	aria-label="Toggle theme"
>
	{#if $themeStore === 'dark'}
		<Sun class="h-4 w-4" />
	{:else}
		<Moon class="h-4 w-4" />
	{/if}
</Button>
