import { extractICSS } from 'icss-utils'
import fs from 'fs'
import postcss from 'postcss'
import { compile } from 'sass'
import calc from 'reduce-css-calc'

const varRegex = /var\(([a-z-0-9,\s]+)\)/
const calcRegex = /calc\(([a-z-0-9+\-*/%.,\s]+)\)/

// design tokens
const designTokens = {
	volver: {},
	'volver-dark': {},
}
const icssExports = extractICSS(
	postcss.parse(compile('./src/export.scss').css),
).icssExports

/**
 * Split `s` on the last occurrence of `sep` and return both parts
 * as an array, [left,right]; or return ["",s] if no occurrence was found.
 */
const splitLast = (s, sep = ' ') => {
	let right = s.split(sep).pop()
	let left = s.substring(0, s.length - right.length - sep.length)
	return [left, right]
}

const exports = Object.keys(icssExports).reduce((accumulator, key) => {
	// dynamic maps are recognized by at least two '__' as the name of the key
	const isDynamicMap = key.match(/__/gi).length > 1
	if (isDynamicMap) {
		let keyToReturn = ''
		let [left, right] = splitLast(key, '__')
		let strLeft = left.replace('__', '-')
		keyToReturn = strLeft.concat('__', right)

		const splittedKey = keyToReturn.split('__')
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
	}

	const splittedKey = key.split('__')
	const value = icssExports[key].replace(/\s\s+/g, ' ')

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

// colors
designTokens.volver['colors'] = Object.keys(exports['colors']).reduce(
	(acc, key) => {
		let value = exports['colors'][key]
		let match
		while ((match = varRegex.exec(value)) !== null) {
			value = value.replace(
				match[0],
				exports['colors-values'][match[1].replace('--color-', '')],
			)
		}
		while ((match = calcRegex.exec(value)) !== null) {
			value = value.replace(match[0], calc(match[0]))
		}
		const group = key.split('-')[0]
		if (
			[
				'brand',
				'danger',
				'success',
				'info',
				'accent',
				'warning',
				'gray',
				'word',
				'alpha',
				'surface',
			].includes(group)
		) {
			acc[group] = acc[group] || {}
			acc[group][key] = { value, type: 'color' }
			return acc
		}
		acc[key] = {
			value,
			type: 'color',
		}
		return acc
	},
	{},
)

designTokens['volver-dark']['colors'] = Object.keys(
	exports['dark-colors'],
).reduce((acc, key) => {
	let value = exports['dark-colors'][key]
	let match
	while ((match = varRegex.exec(value)) !== null) {
		value = value.replace(
			match[0],
			exports['dark-colors-values']?.[match[1].replace('--color-', '')] ??
				exports['colors-values']?.[match[1].replace('--color-', '')],
		)
	}
	while ((match = calcRegex.exec(value)) !== null) {
		value = value.replace(match[0], calc(match[0]))
	}
	const group = key.split('-')[0]
	if (
		[
			'brand',
			'danger',
			'success',
			'info',
			'accent',
			'warning',
			'gray',
			'word',
			'alpha',
			'surface',
		].includes(group)
	) {
		acc[group] = acc[group] || {}
		acc[group][key] = { value, type: 'color' }
		return acc
	}
	acc[key] = {
		value,
		type: 'color',
	}
	return acc
}, {})

// spacing
designTokens.volver.spacing = Object.keys(exports.spacing).reduce(
	(acc, key) => {
		acc[key] = { value: exports.spacing[key], type: 'spacing' }
		return acc
	},
	{},
)

// sizing
designTokens.volver.sizing = Object.keys(exports.spacing).reduce((acc, key) => {
	acc[key] = { value: exports.spacing[key], type: 'sizing' }
	return acc
}, {})

// spacing-dynamic
const generateSpacingDynamic = (breakpoint) =>
	Object.keys(exports[`spacing-dynamic-${breakpoint}`]).reduce((acc, key) => {
		acc[key] = {
			value: exports[`spacing-dynamic-${breakpoint}`][key],
			type: 'spacing',
		}
		return acc
	}, {})

designTokens.volver['spacing-dynamic'] = {
	'breakpoint-xs': generateSpacingDynamic('xs'),
	'breakpoint-sm': generateSpacingDynamic('sm'),
	'breakpoint-md': generateSpacingDynamic('md'),
	'breakpoint-lg': generateSpacingDynamic('lg'),
	'breakpoint-xl': generateSpacingDynamic('xl'),
}

// border-radius
designTokens.volver['border-radius'] = Object.keys(
	exports['border-radius'],
).reduce((acc, key) => {
	acc[key] = {
		value: exports['border-radius'][key],
		type: 'borderRadius',
	}
	return acc
}, {})

// border-width
designTokens.volver['border-width'] = Object.keys(
	exports['border-width'],
).reduce((acc, key) => {
	acc[key] = {
		value: exports['border-width'][key],
		type: 'borderWidth',
	}
	return acc
}, {})

// opacity
designTokens.volver.opacity = Object.keys(exports.opacity).reduce(
	(acc, key) => {
		acc[key] = {
			value: exports.opacity[key],
			type: 'opacity',
		}
		return acc
	},
	{},
)

// font-weight
designTokens.volver['font-weight'] = Object.keys(exports['font-weight']).reduce(
	(acc, key) => {
		acc[key] = {
			value: exports['font-weight'][key],
			type: 'fontWeights',
		}
		return acc
	},
	{},
)

// font-size
designTokens.volver['font-size'] = Object.keys(exports['font-size']).reduce(
	(acc, key) => {
		acc[key] = {
			value: exports['font-size'][key],
			type: 'fontSizes',
		}
		return acc
	},
	{},
)

// font-size-dynamic
const generateFontSizeDynamic = (breakpoint) =>
	Object.keys(exports[`font-size-dynamic-${breakpoint}`]).reduce(
		(acc, key) => {
			acc[key] = {
				value: exports[`font-size-dynamic-${breakpoint}`][key],
				type: 'fontSizes',
			}
			return acc
		},
		{},
	)

designTokens.volver['font-size-dynamic'] = {
	'breakpoint-xs': generateFontSizeDynamic('xs'),
	'breakpoint-sm': generateFontSizeDynamic('sm'),
	'breakpoint-md': generateFontSizeDynamic('md'),
	'breakpoint-lg': generateFontSizeDynamic('lg'),
	'breakpoint-xl': generateFontSizeDynamic('xl'),
}

// text-transform
designTokens.volver['text-transform'] = Object.keys(
	exports['text-transform'],
).reduce((acc, key) => {
	acc[key] = {
		value: exports['text-transform'][key],
		type: 'textCase',
	}
	return acc
}, {})

// line-height
designTokens.volver['line-height'] = Object.keys(exports['line-height']).reduce(
	(acc, key) => {
		acc[key] = {
			value: parseFloat(exports['line-height'][key]) * 100 + '%',
			type: 'lineHeights',
		}
		return acc
	},
	{},
)

// breakpoints
designTokens.volver.breakpoints = Object.keys(exports.breakpoints).reduce(
	(acc, key) => {
		acc[key] = {
			value: exports.breakpoints[key],
			type: 'sizing',
		}
		return acc
	},
	{},
)

fs.writeFileSync('./design-tokens.json', JSON.stringify(designTokens, null, 2))
