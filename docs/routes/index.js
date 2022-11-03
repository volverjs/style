export default [
	{
		name: 'home',
		path: '/',
		component: () => import('../pages/PageHome.vue'),
	},
	{
		name: 'getting-started',
		path: '/getting-started',
		component: () => import('../layouts/LayoutDefault.vue'),
		children: [
			{
				name: 'content',
				path: '/:name',
				component: () => import('../pages/PageGettingStarted.vue'),
			},
		],
	},
	{
		name: 'components',
		path: '/components',
		redirect: '/components/badges',
		component: () => import('../layouts/LayoutDefault.vue'),
		children: [
			{
				name: 'component',
				path: ':componentName',
				component: () => import('../pages/PageComponent.vue'),
			},
		],
	},
	{
		name: 'utilities',
		path: '/utilities',
		component: () => import('../layouts/LayoutDefault.vue'),
		children: [
			{
				name: 'utility',
				path: ':utilityGroup/:utilityName',
				component: () => import('../pages/PageUtility.vue'),
			},
		],
	},
	{
		name: '404',
		path: '/404',
		component: () => import('../pages/PageNotFound.vue'),
	},
]
