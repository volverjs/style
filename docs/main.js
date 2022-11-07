import { ViteSSG } from 'vite-ssg'
import { setupLayouts } from 'virtual:generated-layouts'
import { Icon as IconifyIcon } from '@iconify/vue'
import prismjs from 'prismjs'
import App from '@docs/App.vue'
import generatedRoutes from '~pages'
import { mainMenu } from '@docs/settings/navigation'
import { createRouter, createMemoryHistory } from 'vue-router'

const routes = setupLayouts(generatedRoutes)

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
	// the root component
	App,
	// vue-router options
	{ routes, linkActiveClass: 'selected', linkExactActiveClass: 'current' },
	// function to have custom setups
	({ app, isClient }) => {
		if (isClient) {
			// fix prismjs error
			window.Prism = prismjs
		}

		// enable devtools in development
		app.config.devtools = import.meta.env.DEV

		// add icons
		app.component('IconifyIcon', IconifyIcon)
	},
)

export function includedRoutes(paths, routes) {
	const router = createRouter({ routes, history: createMemoryHistory() })
	const mainMenuRoutes = Object.values(mainMenu).flatMap((item) => {
		return item.children.map(({ to }) => router.resolve(to).path)
	})
	return routes.reduce((acc, route) => {
		if (!route.children) {
			acc.push(route.path)
		}
		return acc
	}, mainMenuRoutes)
}
