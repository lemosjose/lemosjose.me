<!-- 
   svelte-fortawesome is not ready yet, consider that before you use it yourself  
-->
<script lang="ts">
	import Fa from 'svelte-fa';
	import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
	const socialLinks = [
		{ href: 'https://github.com/lemosjose', icon: faGithub, label: 'GitHub' },
		{ href: 'https://www.linkedin.com/in/lemosjose', icon: faLinkedin, label: 'LinkedIn' },
		{ href: 'https://twitter.com/_voidjl', icon: faTwitter, label: 'Twitter' }
	];
</script>

<address class="SocialLinks">
	{#each socialLinks as { href, icon, label }}
		<a {href} aria-label={label} target="_blank" rel="noopener noreferrer">
			<Fa {icon} />
		</a>
	{/each}
</address>

<style>
	a {
		color: inherit;
		font-weight: bold;
	}

	.SocialLinks {
		display: flex;
		gap: 1rem;
		flex-direction: row;
	}
</style>
