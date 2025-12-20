<script lang="ts">
	import { posts } from '$lib/data/posts';

	import { T } from '@sveltevietnam/i18n';
	import * as m from "@sveltevietnam/i18n/generated/messages";
</script>

<div class="container">
	<h1><T message={m.posts} /></h1>

	<div class="posts-grid">
		{#each posts as post}
			<a href={post.link} target="_blank" rel="noopener noreferrer" class="post-card">
				<div class="post-header">
					<span class="language-tag">{post.language}</span>
				</div>
				<h2>{post.title}</h2>
				<div class="tags">
					{#each post.tags as tag}
						<span class="tag">#{tag}</span>
					{/each}
				</div>
			</a>
		{/each}
	</div>
</div>

<style>
	.container {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem;
	}

	h1 {
		font-size: 2.5rem;
		margin-bottom: 2rem;
		color: #333;
	}

	.posts-grid {
		display: grid;
		gap: 1.5rem;
	}

	.post-card {
		display: block;
		padding: 1.5rem;
		border: 1px solid #eee;
		border-radius: 8px;
		text-decoration: none;
		color: inherit;
		transition:
			transform 0.2s,
			box-shadow 0.2s;
		background: white;
	}

	.post-card:hover {
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
	}

	.post-header {
		display: flex;
		justify-content: space-between;
		font-size: 0.875rem;
		color: #666;
		margin-bottom: 0.5rem;
	}

	.language-tag {
		text-transform: uppercase;
		font-weight: bold;
		font-size: 0.75rem;
		letter-spacing: 0.05em;
	}

	h2 {
		margin: 0 0 1rem 0;
		font-size: 1.25rem;
		line-height: 1.4;
		color: #222;
	}

	.tags {
		display: flex;
		gap: 0.5rem;
		flex-wrap: wrap;
	}

	.tag {
		background: #f5f5f5;
		padding: 0.25rem 0.5rem;
		border-radius: 4px;
		font-size: 0.75rem;
		color: #555;
	}
</style>
