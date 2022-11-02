import vue from '@vitejs/plugin-vue'
import path from 'path'
import { defineConfig } from 'vite'
import cssExports from 'vite-plugin-css-export'
import eslint from 'vite-plugin-eslint'
import { plugin as md } from 'vite-plugin-markdown'
import stylelint from 'vite-plugin-stylelint'
import markdownItPrism from 'markdown-it-prism'
import markdownIt from 'markdown-it'

export default defineConfig({
	plugins: [
		vue(),
		eslint(),
		stylelint(),
		cssExports(),
		md({
			mode: ['html', 'vue'],
			markdownIt: markdownIt({ html: true }).use(markdownItPrism),
		}),
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
