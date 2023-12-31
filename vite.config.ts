import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	base: '/gradient_ui/',
	css: {
		modules: {
			generateScopedName: '[folder]_[local]__[hash:base64:5]',
		},
	},
});
