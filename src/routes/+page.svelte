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
	import * as m from "@sveltevietnam/i18n/generated/messages";
</script>

{#if visible}
	<div class="space-y-10" in:fade={{ duration: 500 }}>
		<GitHubAvatar />

		<h1 class="text-center">
			<T message={m['hello']}/>
		</h1>

		<p>
			<T message={m['description']} />
		</p>

		<p>
			<T message={m['contact']} />
		</p>

		<div class="space-y-4">
			<h2><T message={m['interest']} /></h2>

			<p>
				<T message={m['keenon']} />
			</p>
		</div>

		<div>
			<h2><T message={m['work']} /></h2>
			<div class="my-4 flex flex-wrap justify-center gap-4">
				{#each workIcons as icon}
					<a href={icon.href} target="_blank" rel="noopener noreferrer">
						<img src={icon.src} alt={icon.alt} width="40" height="40" />
					</a>
				{/each}
			</div>
		</div>

		<div>
			<h2><T message={m['personal']} /></h2>
			<div class="my-4 flex flex-wrap justify-center gap-4">
				{#each interestIcons as icon}
					<a href={icon.href} target="_blank" rel="noopener noreferrer">
						<img src={icon.src} alt={icon.alt} width="40" height="40" />
					</a>
				{/each}
			</div>
		</div>
	</div>
{/if}
