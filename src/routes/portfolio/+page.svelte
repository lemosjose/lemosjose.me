<script lang="ts">
	import { projects } from '$lib/data/projects';

	import { T } from '@sveltevietnam/i18n';
	import * as m from "@sveltevietnam/i18n/generated/messages";

	let { lang } = $props<{ lang: 'pt' | 'en' }>();

	const projectList = $derived(projects(lang));
</script>

<div class="container">
	<h1><T message={m.portfolio} /></h1>

	<div class="projects-grid">
		{#each projectList as project}
			<div class="project-card">
				<div class="project-header">
					<span class="stack-tag">{project.stack}</span>
				</div>
				<h2>
					<a
						href={project.link}
						target="_blank"
						rel="noopener noreferrer"
						class="project-title-link"
					>
						{project.title}
					</a>
				</h2>
				<p class="description"><T message={m[project.description as keyof typeof m]} /></p>
				<div class="skills">
					{#each project.skills as skill}
						<span class="skill">#{skill}</span>
					{/each}
					<a href={project.source} target="_blank" rel="noopener noreferrer" class="source"
						><T message={m.source} /></a
					>
					<a href={project.link} target="_blank" rel="noopener noreferrer" class="source">Link</a>
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 2rem;
	}

	.projects-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 1.5rem;
	}

	.project-card {
		display: flex;
		flex-direction: column;
		padding: 1.5rem;
		border: 1px solid #e5e7eb;
		border-radius: 0.5rem;
		text-decoration: none;
		color: inherit;
		transition:
			transform 0.2s ease,
			box-shadow 0.2s ease;
	}

	.project-card:hover {
		transform: translateY(-2px);
		box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
	}

	.project-header {
		margin-bottom: 1rem;
	}

	.stack-tag {
		background-color: #f3f4f6;
		padding: 0.25rem 0.75rem;
		border-radius: 9999px;
		font-size: 0.875rem;
		font-weight: 500;
		color: #4b5563;
	}

	h2 {
		margin: 0 0 0.5rem 0;
		font-size: 1.25rem;
	}

	.description {
		margin: 0 0 1rem 0;
		color: #6b7280;
		line-height: 1.5;
		flex-grow: 1;
	}

	.skills {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-top: auto;
	}

	.skill {
		font-size: 0.875rem;
		color: #6366f1;
	}

	.project-title-link {
		text-decoration: none;
		color: inherit;
	}

	.project-title-link:hover {
		text-decoration: underline;
	}
</style>
