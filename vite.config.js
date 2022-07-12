import { resolve } from 'path'
import { defineConfig } from 'vite'
import eslint from 'vite-plugin-eslint'
import handlebars from 'vite-plugin-handlebars'
import stylelint from 'vite-plugin-stylelint'

export default defineConfig({
	plugins: [
		handlebars({
			partialDirectory: resolve(__dirname, 'partials'),
		}),
		eslint(),
		stylelint(),
	],
	build: {
		rollupOptions: {
			input: {
				styleguide: resolve(__dirname, 'index.html'),
				style: resolve(__dirname, 'src/style.scss'),
				'theme-dark': resolve(__dirname, 'src/themes/dark/style.scss'),
				reset: resolve(__dirname, 'src/reset.scss'),
				props: resolve(__dirname, 'src/props/index.scss'),
				utilities: resolve(__dirname, 'src/utilities/index.scss'),
			},
			output: {
				assetFileNames: '[name][extname]',
			},
		},
	},
})
