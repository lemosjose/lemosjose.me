<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	import Header from '../components/Header.svelte';
	import { Provider } from '@sveltevietnam/i18n';
	import type { Language } from '@sveltevietnam/i18n/generated';

	let { children } = $props();

	let lang = $state<Language>('pt');
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Provider {lang}>
	<div class="pageShell">
		<Header bind:lang />
		<main class="pageContent">
			{@render children()}
		</main>
	</div>
</Provider>
