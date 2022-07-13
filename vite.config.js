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
				// complete style
				style: resolve(__dirname, 'src/style.scss'),
				// reset
				reset: resolve(__dirname, 'src/reset.scss'),
				// props
				props: resolve(__dirname, 'src/props/index.scss'),
				'props/borders': resolve(__dirname, 'src/props/borders.scss'),
				'props/colors': resolve(__dirname, 'src/props/colors.scss'),
				'props/layout': resolve(__dirname, 'src/props/layout.scss'),
				'props/sizing': resolve(__dirname, 'src/props/sizing.scss'),
				'props/spacing': resolve(__dirname, 'src/props/spacing.scss'),
				'props/typography': resolve(
					__dirname,
					'src/props/typography.scss',
				),
				// utilities
				utilities: resolve(__dirname, 'src/utilities/index.scss'),
				'utilities/backgrounds': resolve(
					__dirname,
					'src/utilities/backgrounds.scss',
				),
				'utilities/borders': resolve(
					__dirname,
					'src/utilities/borders.scss',
				),
				'utilities/colors': resolve(
					__dirname,
					'src/utilities/colors.scss',
				),
				'utilities/flexbox': resolve(
					__dirname,
					'src/utilities/flexbox.scss',
				),
				'utilities/layout': resolve(
					__dirname,
					'src/utilities/layout.scss',
				),
				'utilities/sizing': resolve(
					__dirname,
					'src/utilities/sizing.scss',
				),
				'utilities/spacing': resolve(
					__dirname,
					'src/utilities/spacing.scss',
				),
				'utilities/typography': resolve(
					__dirname,
					'src/utilities/typography.scss',
				),
				// components
				components: resolve(__dirname, 'src/components/index.scss'),
				'components/vv-text': resolve(
					__dirname,
					'src/components/vv-text.scss',
				),
				'components/vv-button': resolve(
					__dirname,
					'src/components/vv-button.scss',
				),
				// themes
				'theme/dark': resolve(__dirname, 'src/themes/dark/style.scss'),
			},
			output: {
				assetFileNames: '[name][extname]',
			},
		},
	},
})
