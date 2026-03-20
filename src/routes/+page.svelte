<script lang="ts">
	import GitHubAvatar from '../components/GitHubAvatar.svelte';
	import { workIcons, interestIcons } from '$lib/data/icons';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	let visible = $state(false);

	onMount(() => {
		visible = true;
	});

	import { T } from '@sveltevietnam/i18n';
	import * as m from '@sveltevietnam/i18n/generated/messages';
</script>

{#if visible}
	<div class="homePage" in:fade={{ duration: 500 }}>
		<GitHubAvatar />

		<h1 class="introTitle">
			<T message={m['hello']} />
		</h1>

		<p class="bodyText">
			<T message={m['description']} />
		</p>

		<p class="bodyText">
			<T message={m['contact']} />
		</p>

		<div class="sectionBlock">
			<h2 class="sectionTitle"><T message={m['interest']} /></h2>

			<p class="bodyText">
				<T message={m['keenon']} />
			</p>
		</div>

		<div class="sectionBlock">
			<h2 class="sectionTitle"><T message={m['work']} /></h2>
			<div class="iconsGrid">
				{#each workIcons as icon}
					<a href={icon.href} target="_blank" rel="noopener noreferrer" class="iconAnchor">
						<img src={icon.src} alt={icon.alt} loading="lazy" />
					</a>
				{/each}
			</div>
		</div>

		<div class="sectionBlock">
			<h2 class="sectionTitle"><T message={m['personal']} /></h2>
			<div class="iconsGrid">
				{#each interestIcons as icon}
					<a href={icon.href} target="_blank" rel="noopener noreferrer" class="iconAnchor">
						<img src={icon.src} alt={icon.alt} loading="lazy" />
					</a>
				{/each}
			</div>
		</div>
	</div>
{/if}
