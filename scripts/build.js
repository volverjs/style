import fs from 'fs'
import { glob } from 'glob'
import { build } from 'vite'
import stylelint from 'vite-plugin-stylelint'

// load package.json and reset exports
const packageJson = JSON.parse(fs.readFileSync('./package.json'))

// scss context (variables, mixins, etc.)
packageJson.exports = {
	'./scss/context': './src/_context.scss',
	'./scss/tools': './src/tools/_index.scss',
	'./scss/functions': './src/tools/_functions.scss',
	'./scss/mixins': './src/tools/_mixins.scss',
	'./scss/settings': './src/settings/_index.scss',
	'./scss/preflight': './src/_preflight.scss',
}

// get scss files
const files = await glob('./src/**/!(_*).scss')
const sources = files.map((input) => {
	const isIndex = input.includes('index.scss')
	const exportName = input.replace(/.\/src\/|.scss|\/index/gm, '')
	const splittedExportName = exportName.split('/')
	const name = splittedExportName.pop()
	const dir = splittedExportName.join('/')
	return {
		exportName,
		name,
		dir,
		input,
		isIndex,
	}
})

// build
await Promise.all(
	sources.map(({ exportName, name, input, dir, isIndex }) => {
		exportName = exportName
			.replace(/\/volver|volver/gm, '')
			.replace(/src|src\//gm, '')
		const distDir = dir.replace('src', 'dist')
		packageJson.exports[`.${exportName ? exportName : ''}`] = `./${
			distDir ? distDir + '/' : ''
		}${name}.css`
		packageJson.exports[`./scss${exportName ? exportName : ''}`] =
			`./${dir}/${name}` + (isIndex ? '/index.scss' : '.scss')

		return build({
			plugins: [stylelint()],
			configFile: false,
			publicDir: false,
			build: {
				emptyOutDir: false,
				rollupOptions: {
					input,
					output: {
						dir: distDir,
						assetFileNames: `${name}[extname]`,
					},
				},
			},
		})
	}),
)

// sort exports
packageJson.exports = Object.keys(packageJson.exports)
	.sort((a, b) => {
		if (a === '.') {
			return -1
		}
		if (b === '.') {
			return 1
		}
		return a > b
	})
	.reduce((exports, key) => {
		exports[key] = packageJson.exports[key]
		return exports
	}, {})

fs.writeFileSync('./package.json', JSON.stringify(packageJson, null, 2))
