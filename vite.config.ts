import honoRouter from '@bracketed/hono-router';
import { cloudflare } from '@cloudflare/vite-plugin';
import url from 'node:url';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [honoRouter({ debug: true }), cloudflare()],
	build: {
		rollupOptions: { external: ['@routes/routes'], plugins: [] },
	},
	resolve: {
		alias: [
			{
				find: '@',
				replacement: url.fileURLToPath(new URL('.', import.meta.url)),
			},
			{
				find: '@routes',
				replacement: url.fileURLToPath(new URL('./routes', import.meta.url)),
			},
		],
	},
});
