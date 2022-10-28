export default [
	{
		name: 'home',
		path: '/',
		component: () => import('../pages/PageHome.vue'),
	},
	{
		name: 'contents',
		path: '/getting-started',
		component: () => import('../layouts/LayoutDefault.vue'),
		children: [
			{
				name: 'content',
				path: '/:name',
				component: () => import('../pages/PageContent.vue'),
			},
		],
	},
	{
		name: 'components',
		path: '/components',
		redirect: '/components/vv-button',
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
