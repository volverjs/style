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
	{
		routes,
		linkActiveClass: 'pressed',
		linkExactActiveClass: 'current',
		base: import.meta.env.BASE_URL,
	},
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
	const router = createRouter({
		routes,
		history: createMemoryHistory(),
		base: import.meta.env.BASE_URL,
	})
	const mainMenuRoutes = Object.values(mainMenu).flatMap((item) => {
		return item.children.map(({ to }) => router.resolve(to).path)
	})
	return routes.reduce((acc, route) => {
		if (!route.component) {
			route.children.forEach((child) => {
				acc.push(
					child.path ? `${route.path}/${child.path}` : route.path,
				)
			})
			acc.push(route.path)
		}
		return acc
	}, mainMenuRoutes)
}
