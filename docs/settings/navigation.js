const getStarted = import.meta.glob('../contents/get-started/*.md', {
	eager: true,
	import: 'attributes',
})

const settings = import.meta.glob('../contents/settings/*.md', {
	eager: true,
	import: 'attributes',
})

const components = import.meta.glob('../contents/components/*/index.md', {
	eager: true,
	import: 'attributes',
})

const utilities = import.meta.glob('../contents/utilities/*/*.md', {
	eager: true,
	import: 'attributes',
})

function getUtilitiesGroup(group) {
	return Object.keys(utilities).reduce((acc, key) => {
		const folder = key.split('/').slice(-2, -1).pop()
		if (folder === group) {
			const name = key.split('/').pop().split('.').shift()
			acc.push({
				name: utilities[key].title,
				isNew: utilities[key].isNew ?? false,
				isDraft: utilities[key].isDraft ?? false,
				to: {
					name: 'utilities-group-name',
					params: { group, name },
				},
			})
		}
		return acc
	}, [])
}

export const mainMenu = [
	{
		name: 'Get Started',
		children: Object.keys(getStarted)
			.map((key) => {
				const name = key.split('/').pop().split('.').shift()
				return {
					index: getStarted[key].index,
					name: getStarted[key].label,
					isNew: getStarted[key].isNew,
					isDraft: getStarted[key].isDraft ?? false,
					to: {
						name: 'get-started-name',
						params: { name },
					},
				}
			})
			.sort((a, b) => a.index - b.index),
	},
	{
		name: 'Settings',
		children: Object.keys(settings)
			.map((key) => {
				const name = key.split('/').pop().split('.').shift()
				return {
					index: settings[key].index,
					name: settings[key].label,
					isNew: settings[key].isNew,
					isDraft: settings[key].isDraft ?? false,
					to: {
						name: 'settings-name',
						params: { name },
					},
				}
			})
			.sort((a, b) => a.index - b.index),
	},
	{
		name: 'Components',
		children: Object.keys(components).map((key) => {
			const name = key.split('/').slice(-2, -1).pop()
			return {
				name: components[key].title,
				isNew: components[key].isNew ?? false,
				isDraft: components[key].isDraft ?? false,
				to: {
					name: 'components-name',
					params: { name },
				},
			}
		}),
	},
	{
		name: 'Layout',
		children: getUtilitiesGroup('layout'),
	},
	{
		name: 'Flexbox & Grid',
		children: getUtilitiesGroup('flex-grid'),
	},
	{
		name: 'Spacing',
		children: getUtilitiesGroup('spacing'),
	},
	{
		name: 'Sizing',
		children: getUtilitiesGroup('sizing'),
	},
	{
		name: 'Typography',
		children: getUtilitiesGroup('typography'),
	},
	{
		name: 'Backgrounds',
		children: getUtilitiesGroup('backgrounds'),
	},
	{
		name: 'Gradients',
		children: getUtilitiesGroup('gradient'),
	},
	{
		name: 'Borders',
		children: getUtilitiesGroup('borders'),
	},
	{
		name: 'Effects',
		children: getUtilitiesGroup('effects'),
	},
	{
		name: 'Filters',
		children: getUtilitiesGroup('filters'),
	},
	{
		name: 'Tables',
		children: getUtilitiesGroup('tables'),
	},
	{
		name: 'Transitions & Animation',
		children: getUtilitiesGroup('transitions'),
	},
	{
		name: 'Transforms',
		children: getUtilitiesGroup('transforms'),
	},
]
