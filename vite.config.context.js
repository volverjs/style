import { extractICSS } from 'icss-utils'
import postcss from 'postcss'
import sass from 'sass'

const icssExports = extractICSS(
	postcss.parse(sass.compile('./src/export.scss').css),
).icssExports

export default Object.keys(icssExports).reduce((accumulator, key) => {
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
