<script lang="ts">
	import Social from './social.svelte';
	import type { Language } from '@sveltevietnam/i18n/generated';

	let { lang = $bindable() } = $props<{ lang: Language }>();

	const routes = [
		{ path: '/', label: 'Home' },
		{ path: '/portfolio', label: 'Portfolio' },
		{ path: '/blog', label: 'Blog' }
	];

	function toggleLocale() { 
		lang = lang === 'pt' ? 'en' : 'pt';
	}
</script>

<header>
	<div class="headerItems">
		
		<nav class="headerNav">
			{#each routes as { path, label }}
				<a href={path}>{label}</a>
			{/each}
		</nav>

		<div class="flex items-center gap-4">
            <button 
				onclick={toggleLocale}
				class="uppercase font-bold text-sm px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
			>
				{lang}
			</button>
			<Social />
        </div>
		

	</div>
</header>

<style>
	header {
		border-bottom-style: solid;
		border-bottom-width: 1px;
		padding-bottom: 1rem;
	}

	.headerNav {
		display: flex;
		gap: 1rem;
		flex-direction: row;
	}

	.headerItems {
		display: flex;
		gap: 1rem;
		padding-top: 1rem;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
</style>
