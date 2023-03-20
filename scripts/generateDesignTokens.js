import { extractICSS } from 'icss-utils'
import fs from 'fs'
import postcss from 'postcss'
import sass from 'sass'

// design tokens
const designTokens = {
	global: {},
	dark: {},
}
const icssExports = extractICSS(
	postcss.parse(sass.compile('./src/export.scss').css),
).icssExports

const exports = Object.keys(icssExports).reduce((accumulator, key) => {
	const splittedKey = key.split('__')
	const value = icssExports[key]

	let current = accumulator
	splittedKey.forEach((subKey, index) => {
		if (index < splittedKey.length - 1) {
			accumulator[subKey] = accumulator[subKey] || {}
			current = accumulator[subKey]
		} else {
			current[subKey] = value
		}
	})

	return accumulator
}, {})

designTokens.global.spacing = Object.keys(exports.spacing).reduce(
	(acc, key) => {
		acc[`spacing-${key}`] = { value: exports.spacing[key], type: 'spacing' }
		return acc
	},
	{},
)

fs.writeFileSync('./design-tokens.json', JSON.stringify(designTokens, null, 2))
