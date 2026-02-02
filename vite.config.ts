import { cloudflare } from '@cloudflare/vite-plugin';
import react from '@vitejs/plugin-react-swc';
import honox from 'honox/vite';
import url from 'node:url';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [cloudflare(), honox(), react()],
	resolve: {
		alias: [
			{
				find: '@',
				replacement: url.fileURLToPath(new URL('.', import.meta.url)),
			},
		],
	},
});
