import { resolve } from 'path'
import { defineConfig } from 'vite'
import eslint from 'vite-plugin-eslint'
import handlebars from 'vite-plugin-handlebars'
import stylelint from 'vite-plugin-stylelint'
import context from './vite.config.context'

export default defineConfig({
	plugins: [
		handlebars({
			partialDirectory: resolve(__dirname, 'partials'),
			context,
		}),
		eslint(),
		stylelint(),
	],
	build: {
		outDir: 'styleguide',
	},
})
