<script lang="ts">
	import GitHubAvatar from '../components/GitHubAvatar.svelte';
	import { workIcons, interestIcons } from '$lib/data/icons';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	let visible = $state(false);

	onMount(() => {
		visible = true;
	});
</script>

{#if visible}
	<div class="space-y-10" in:fade={{ duration: 500 }}>
		<GitHubAvatar />

		<h1 class="text-center">
			Hello! I'm José Lemos/lemosjose, or @_voidjl on <a href="https://twitter.com/_voidjl">X</a>,
		</h1>

		<p>
			I'm a FullStack Developer with ~2 Years of experience/practicing with Typescript (using
			React/Vite and Fastify) and Python (using Django and FastAPI), i also study Functional
			Programming and DevOps for personal interest.
		</p>

		<p>
			You can contact me at <a class="bold underline" href="mailto:devlemosjose@gmail.com"
				>devlemosjose@gmail.com</a
			>. Check the pages in the Header for more about me, my projects and what i do daily, i am also
			friendly to DM's and Connection request (until now) on
			<a class="underline" href="https://linkedin.com/in/lemosjose">Linkedin</a>.
		</p>

		<div class="space-y-4">
			<h2>Interests:</h2>

			<p>
				I'm interested with tech in general (as my twitter' bio says: i like computers.) I have some
				"unique" interests outside of Work tech/stacks, so i'm keeping them separate here, with they
				respective icons. Check the Pages on the Header for more on what i do and enjoy!
			</p>
		</div>

		<div>
			<h2>Work Stack/Programming languages:</h2>
			<div class="my-4 flex flex-wrap justify-center gap-4">
				{#each workIcons as icon}
					<a href={icon.href} target="_blank" rel="noopener noreferrer">
						<img src={icon.src} alt={icon.alt} width="40" height="40" />
					</a>
				{/each}
			</div>
		</div>

		<div>
			<h2>Personal Interest Technologies:</h2>
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
