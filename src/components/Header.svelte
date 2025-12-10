<script lang="ts">
	import Social from './social.svelte';
	const routes = [
		{ path: '/', label: 'Home' },
		{ path: '/portfolio', label: 'Portfolio' },
		{ path: '/blog', label: 'Blog' }
	];
</script>

<header>
	<div class="headerItems">
		<nav class="headerNav">
			{#each routes as { path, label }}
				<a href={path}>{label}</a>
			{/each}
		</nav>
		<Social />
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
