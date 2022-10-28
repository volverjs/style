import { Icon as IconifyIcon } from '@iconify/vue'
import prismjs from 'prismjs'
import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import routes from './routes'

// fix prismjs error
window.Prism = prismjs

// create app
const app = createApp(App)

// add router
const router = createRouter({
	history: createWebHashHistory(),
	routes,
	linkActiveClass: 'selected',
	linkExactActiveClass: 'current',
})
app.use(router)

// enable devtools in development
app.config.devtools = import.meta.env.DEV

// add icons
app.component('IconifyIcon', IconifyIcon)

// mount app
app.mount('#app')
