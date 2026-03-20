<script lang="ts">
	import { projects } from '$lib/data/projects';

	import { T } from '@sveltevietnam/i18n';
	import * as m from '@sveltevietnam/i18n/generated/messages';

	let { lang } = $props<{ lang: 'pt' | 'en' }>();
</script>

<div class="portfolioContainer">
	<h1><T message={m.portfolio} /></h1>

	<div class="projects-grid">
		{#each projects as project}
			<div class="project-card">
				<div class="project-header">
					<span class="stack-tag">{project.stack}</span>
				</div>
				<h2>
					<a
						href={project.link ?? project.source}
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
					{#if project.source}
						<a href={project.source} target="_blank" rel="noopener noreferrer" class="source">
							<T message={m.source} />
						</a>
					{/if}
					{#if project.link}
						<a href={project.link} target="_blank" rel="noopener noreferrer" class="source">
							Link
						</a>
					{/if}
				</div>
			</div>
		{/each}
	</div>
</div>
