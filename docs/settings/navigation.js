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
		],
	},
]
