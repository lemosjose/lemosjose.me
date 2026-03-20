<script lang="ts">
	import { posts } from '$lib/data/posts';

	import { T } from '@sveltevietnam/i18n';
	import * as m from '@sveltevietnam/i18n/generated/messages';
</script>

<div class="blogContainer">
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
