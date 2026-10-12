// The sections of the menu, in order. A plain module, so that
// `scripts/generateLlms.js`, which runs outside Vite, lists the same pages.

// The sections of the component pages: a page names its section in the
// `section` attribute, and a page that names none belongs to Components
export const componentSections = ['Components', 'AI']

// The groups of the utility pages, each a folder of `docs/contents/utilities`
export const utilityGroups = [
	{ name: 'Layout', group: 'layout' },
	{ name: 'Flexbox & Grid', group: 'flex-grid' },
	{ name: 'Spacing', group: 'spacing' },
	{ name: 'Sizing', group: 'sizing' },
	{ name: 'Typography', group: 'typography' },
	{ name: 'Backgrounds', group: 'backgrounds' },
	{ name: 'Borders', group: 'borders' },
	{ name: 'Effects', group: 'effects' },
	{ name: 'Filters', group: 'filters' },
	{ name: 'Tables', group: 'tables' },
	{ name: 'Transitions & Animation', group: 'transitions' },
	{ name: 'Transforms', group: 'transforms' },
	{ name: 'Interactivity', group: 'interactivity' },
]
