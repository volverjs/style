import vue from '@vitejs/plugin-vue'
import path from 'path'
import { defineConfig } from 'vite'
import cssExports from 'vite-plugin-css-export'
import eslint from 'vite-plugin-eslint'
import { plugin as md } from 'vite-plugin-markdown'
import stylelint from 'vite-plugin-stylelint'

export default defineConfig({
	plugins: [
		vue(),
		eslint(),
		stylelint(),
		cssExports(),
		md({ mode: ['html', 'vue'] }),
	],
	build: {
		outDir: 'styleguide',
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@docs': path.resolve(__dirname, './docs'),
		},
	},
})
