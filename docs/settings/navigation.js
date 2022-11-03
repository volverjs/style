export const mainMenu = [
	{
		name: 'Getting Started',
		children: [
			{
				name: 'Installation',
				to: {
					name: 'content',
					params: {
						name: 'installation',
					},
				},
			},
			{
				name: 'Customization',
				to: {
					name: 'content',
					params: {
						name: 'customization',
					},
				},
			},
			{
				name: 'Configuration',
				to: {
					name: 'content',
					params: {
						name: 'configuration',
					},
				},
			},
			{
				name: 'Theming',
				to: {
					name: 'content',
					params: {
						name: 'theming',
					},
				},
			},
			{
				name: 'Preflight',
				to: {
					name: 'content',
					params: {
						name: 'preflight',
					},
				},
			},
		],
	},
	{
		name: 'Components',
		children: [
			{
				name: 'Buttons',
				to: {
					name: 'component',
					params: {
						componentName: 'vv-button',
					},
				},
			},
		],
	},
	{
		name: 'Layout',
		children: [
			{
				name: 'Aspect Ratio',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'layout',
						utilityName: 'aspect-ratio',
					},
				},
			},
			{
				name: 'Columns',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'layout',
						utilityName: 'columns',
					},
				},
			},
			{
				name: 'Break After',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'layout',
						utilityName: 'break-after',
					},
				},
			},
			{
				name: 'Break Before',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'layout',
						utilityName: 'break-before',
					},
				},
			},
			{
				name: 'Break Inside',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'layout',
						utilityName: 'break-inside',
					},
				},
			},
			{
				name: 'Display',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'layout',
						utilityName: 'display',
					},
				},
			},
			{
				name: 'Overflow',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'layout',
						utilityName: 'overflow',
					},
				},
			},
			{
				name: 'Position',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'layout',
						utilityName: 'position',
					},
				},
			},
			{
				name: 'Visibility',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'layout',
						utilityName: 'visibility',
					},
				},
			},
			{
				name: 'Z-Index',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'layout',
						utilityName: 'z-index',
					},
				},
			},
		],
	},
	{
		name: 'Flexbox & Grid',
		children: [
			{
				name: 'Flex Direction',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'flexbox-grid',
						utilityName: 'flex-direction',
					},
				},
			},
			{
				name: 'Flex Wrap',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'flexbox-grid',
						utilityName: 'flex-wrap',
					},
				},
			},
			{
				name: 'Flex',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'flexbox-grid',
						utilityName: 'flex',
					},
				},
			},
			{
				name: 'Flex Grow',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'flexbox-grid',
						utilityName: 'flex-grow',
					},
				},
			},
			{
				name: 'Flex Shrink',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'flexbox-grid',
						utilityName: 'flex-shrink',
					},
				},
			},
			{
				name: 'Order',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'flexbox-grid',
						utilityName: 'order',
					},
				},
			},
			{
				name: 'Grid Template Columns',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'flexbox-grid',
						utilityName: 'grid-template-columns',
					},
				},
			},
			{
				name: 'Grid Template Rows',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'flexbox-grid',
						utilityName: 'grid-template-rows',
					},
				},
			},
			{
				name: 'Grid Auto Flow',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'flexbox-grid',
						utilityName: 'grid-auto-flow',
					},
				},
			},
			{
				name: 'Grid Auto Columns',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'flexbox-grid',
						utilityName: 'grid-auto-columns',
					},
				},
			},
			{
				name: 'Grid Auto Rows',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'flexbox-grid',
						utilityName: 'grid-auto-rows',
					},
				},
			},
			// {
			// 	name: 'Gap',
			// 	to: {
			// 		name: 'utility',
			// 		params: {
			// 			utilityGroup: 'flexbox-grid',
			// 			utilityName: 'gap',
			// 		},
			// 	},
			// },
			{
				name: 'Justify Content',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'flexbox-grid',
						utilityName: 'justify-content',
					},
				},
			},
			{
				name: 'Justify Items',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'flexbox-grid',
						utilityName: 'justify-items',
					},
				},
			},
			{
				name: 'Justify Self',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'flexbox-grid',
						utilityName: 'justify-self',
					},
				},
			},
			{
				name: 'Align Content',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'flexbox-grid',
						utilityName: 'align-content',
					},
				},
			},
			{
				name: 'Align Items',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'flexbox-grid',
						utilityName: 'align-items',
					},
				},
			},
			{
				name: 'Align Self',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'flexbox-grid',
						utilityName: 'align-self',
					},
				},
			},
		],
	},
]
