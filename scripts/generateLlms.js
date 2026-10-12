import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import {
	componentSections,
	utilityGroups,
} from '../docs/settings/menuSections.js'

// `llms.txt` and `llms-full.txt` for the styleguide, in the format of
// https://llmstxt.org. The index links every page of the documentation and
// the agent skill of the repository. The full file is the skill alone: its
// references are written for a model and checked against the compiled CSS,
// while the pages of the styleguide are built from Vue components (live
// examples, tables filled at runtime) that read as noise once flattened.

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const contents = path.join(root, 'docs/contents')
const skill = path.join(root, 'skills/volverjs-style')
const references = [
	{
		file: 'utilities.md',
		label: 'Utilities',
		description:
			'every utility class, its values and its breakpoint prefixes',
	},
	{
		file: 'components.md',
		label: 'Components',
		description:
			'markup, elements, modifiers and states of every component',
	},
	{
		file: 'tokens.md',
		label: 'Tokens',
		description: 'custom properties, overrides written in CSS, dark theme',
	},
	{
		file: 'scss.md',
		label: 'SCSS',
		description:
			'import paths, configuration, extending a component map, mixins, layers',
	},
]

const frontMatter = /^---\n([\s\S]*?)\n---\n?/

// The front matter of a page: flat `key: value` lines, quotes stripped
function readAttributes(file) {
	const attributes = {}
	const [, block = ''] = frontMatter.exec(fs.readFileSync(file, 'utf8')) ?? []
	for (const line of block.split('\n')) {
		const [, key, value] = /^(\w+):\s*(.*)$/.exec(line) ?? []
		if (key) {
			attributes[key] = value
				.replace(/^'(.*)'$/, (_, text) => text.replaceAll("''", "'"))
				.replace(/^"(.*)"$/, '$1')
		}
	}
	return attributes
}

// The pages of a folder of `docs/contents`, drafts left out, by name and then
// by their `index`: `readdirSync` keeps the order of the file system, which
// is not alphabetical everywhere. A page is a markdown file, or a folder with
// an `index.md` for a component: the other folders hold the examples a page
// embeds.
function listPages(folder, label) {
	return fs
		.readdirSync(path.join(contents, folder), { withFileTypes: true })
		.sort((a, b) => a.name.localeCompare(b.name))
		.filter((entry) =>
			entry.isDirectory()
				? fs.existsSync(
						path.join(contents, folder, entry.name, 'index.md'),
					)
				: entry.name.endsWith('.md'),
		)
		.map((entry) => {
			const name = path.basename(entry.name, '.md')
			const attributes = readAttributes(
				entry.isDirectory()
					? path.join(contents, folder, name, 'index.md')
					: path.join(contents, folder, entry.name),
			)
			return {
				attributes,
				label: attributes[label],
				route: `${folder}/${name}`,
				description: attributes.description,
			}
		})
		.filter(({ attributes }) => attributes.isDraft !== 'true')
		.sort((a, b) => (a.attributes.index ?? 0) - (b.attributes.index ?? 0))
}

function link(hostname, { label, route, description }) {
	return `- [${label}](${hostname}/${route})${description ? `: ${description}` : ''}`
}

function linkSection(hostname, title, pages) {
	return ['', `## ${title}`, '', ...pages.map((page) => link(hostname, page))]
}

export function generateLlms({ hostname, outDir }) {
	const components = listPages('components', 'title')
	const section = (name) =>
		components.filter(
			({ attributes }) => (attributes.section ?? 'Components') === name,
		)

	const skillSource = fs
		.readFileSync(path.join(skill, 'SKILL.md'), 'utf8')
		.replace(frontMatter, '')
		.trim()
	const summary = skillSource
		.split('\n\n')
		.find((paragraph) => !paragraph.startsWith('#'))
		.replaceAll('\n', ' ')

	const index = [
		'# @volverjs/style',
		'',
		`> ${summary}`,
		'',
		'The vocabulary looks like Tailwind and differs from it in many places, and a class that does not exist fails silently. Read the reference before writing a class name: it is checked against the compiled CSS, while the pages of the styleguide are built around live examples.',
		...linkSection(hostname, 'Reference', [
			{
				label: 'Overview',
				route: 'skills/volverjs-style/SKILL.md',
				description:
					'workflow, where the vocabulary differs from Tailwind, layout recipes, the essentials of components and tokens',
			},
			...references.map(({ file, label, description }) => ({
				label,
				route: `skills/volverjs-style/references/${file}`,
				description,
			})),
		]),
		...linkSection(
			hostname,
			'Get started',
			listPages('get-started', 'label'),
		),
		...linkSection(hostname, 'Settings', listPages('settings', 'label')),
		...componentSections.flatMap((name) =>
			linkSection(hostname, name, section(name)),
		),
		...utilityGroups.flatMap(({ name, group }) =>
			linkSection(
				hostname,
				`Utilities: ${name}`,
				listPages(`utilities/${group}`, 'title'),
			),
		),
		...linkSection(hostname, 'Optional', [
			{
				label: 'Full reference',
				route: 'llms-full.txt',
				description: 'the overview and the four references in one file',
			},
		]),
	]

	const full = [
		skillSource,
		...references.map(({ file }) =>
			fs
				.readFileSync(path.join(skill, 'references', file), 'utf8')
				.trim(),
		),
	]

	// The skill is published next to the index, so the relative links between
	// its files keep working
	const skillOut = path.join(outDir, 'skills/volverjs-style')
	fs.mkdirSync(path.join(skillOut, 'references'), { recursive: true })
	fs.copyFileSync(
		path.join(skill, 'SKILL.md'),
		path.join(skillOut, 'SKILL.md'),
	)
	for (const { file } of references) {
		fs.copyFileSync(
			path.join(skill, 'references', file),
			path.join(skillOut, 'references', file),
		)
	}
	fs.writeFileSync(path.join(outDir, 'llms.txt'), `${index.join('\n')}\n`)
	fs.writeFileSync(
		path.join(outDir, 'llms-full.txt'),
		`${full.join('\n\n---\n\n')}\n`,
	)
}
