import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import CSSExports from 'vite-plugin-css-export'
import ESLint from '@nabla/vite-plugin-eslint'
import { plugin as Markdown, Mode } from 'vite-plugin-markdown'
import Stylelint from 'vite-plugin-stylelint'
import MarkdownIt from 'markdown-it'
import MarkdownItPrism from 'markdown-it-prism'
import MarkdownItAnchor from 'markdown-it-anchor'
import AutoImport from 'unplugin-auto-import/vite'
import Layouts from 'vite-plugin-vue-layouts'
import Pages from 'vite-plugin-pages'
import Components from 'unplugin-vue-components/vite'
import generateSitemap from 'vite-ssg-sitemap'
import packageJson from './package.json' with { type: 'json' }

const __dirname = path.dirname(new URL(import.meta.url).pathname)

export default defineConfig(({ mode }) => ({
		plugins: [
			Vue(),
			// https://github.com/nabla/vite-plugin-eslint
			ESLint(),
			// https://github.com/ModyQyW/vite-plugin-stylelint
			Stylelint(),
			// https://github.com/shixuanhong/vite-plugin-css-export/
			CSSExports(),
			// https://github.com/hmsk/vite-plugin-markdown
			Markdown({
				mode: [Mode.HTML, Mode.VUE, Mode.TOC],
				markdownIt: MarkdownIt({ html: true, linkify: true })
					.use(MarkdownItPrism)
					.use(MarkdownItAnchor, {
						permalink: MarkdownItAnchor.permalink.ariaHidden({
							placement: 'before',
							renderAttrs: () => ({ tabindex: -1 }),
						}),
					}),
			}),
			// https://github.com/antfu/unplugin-auto-import
			AutoImport({
				imports: ['vue', 'vue-router', '@vueuse/head', '@vueuse/core'],
				dirs: ['docs/settings', 'docs/utils'],
				vueTemplate: true,
				eslintrc: {
					enabled: true,
				},
			}),
			// https://github.com/JohnCampionJr/vite-plugin-vue-layouts
			Layouts({ layoutsDirs: ['docs/layouts'] }),
			// https://github.com/hannoeru/vite-plugin-pages
			Pages({
				dirs: ['docs/pages'],
				routeBlockLang: 'yaml',
			}),
			// https://github.com/antfu/unplugin-vue-components
			Components({
				dirs: ['docs/components'],
			}),
		],
		base: mode === 'development' ? './' : '/style/',
		build: {
			outDir: 'styleguide',
		},
		resolve: {
			alias: {
				'@': path.resolve(__dirname, './src'),
				'@docs': path.resolve(__dirname, './docs'),
			},
		},
		// https://github.com/antfu/vite-ssg
		ssgOptions: {
			script: 'async',
			formatting: 'minify',
			onFinished() {
				generateSitemap({
					hostname: 'https://volverjs.github.io/style',
					outDir: 'styleguide',
				})
			},
		},
		define: {
			__APP_VERSION__: JSON.stringify(packageJson.version),
		},
		optimizeDeps: {
			include: ['vue', 'vue-router', '@vueuse/core', '@vueuse/head'],
		},
	}))
