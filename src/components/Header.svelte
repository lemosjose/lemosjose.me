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

		<div class="headerActions">
			<button onclick={toggleLocale} class="localeButton">
				{lang.toUpperCase()}<span class="localeChevron">▾</span>
			</button>
			<Social />
		</div>
	</div>
</header>
