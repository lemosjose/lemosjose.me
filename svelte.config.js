import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	compilerOptions: { 
		//needed for the i18n from svelte.vietnam.dev
		experimental: { 
			async: true,
		},
	}, 
	kit: {
		adapter: adapter({
		})
	}
};

export default config;
