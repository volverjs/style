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
	//#region for dynamic maps
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
	//#endregion for dynamic maps

	//#region for general maps
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
	//#endregion for general maps
}, {})

//#region colors
// colors computed without css vars
designTokens.global['colors'] = Object.keys(exports['colors-computed']).reduce(
	(acc, key) => {
		acc[`color-${key}`] = {
			value: exports['colors-computed'][key],
			type: 'color',
		}
		return acc
	},
	{},
)

// dark colors computed without css vars
designTokens.dark['colors'] = Object.keys(
	exports['dark-colors-computed'],
).reduce((acc, key) => {
	acc[`color-${key}`] = {
		value: exports['dark-colors-computed'][key],
		type: 'color',
	}
	return acc
}, {})
//#endregion colors

//#region sizing
// width
designTokens.global.width = Object.keys(exports.width).reduce((acc, key) => {
	acc[`width-${key.replace('_', '/')}`] = {
		value: exports.width[key],
		type: 'sizing',
	}
	return acc
}, {})

// min-Width
designTokens.global['min-width'] = Object.keys(exports['min-width']).reduce(
	(acc, key) => {
		acc[`min-width-${key}`] = {
			value: exports['min-width'][key],
			type: 'sizing',
		}
		return acc
	},
	{},
)

// max-Width
designTokens.global['max-width'] = Object.keys(exports['max-width']).reduce(
	(acc, key) => {
		acc[`max-width-${key}`] = {
			value: exports['max-width'][key],
			type: 'sizing',
		}
		return acc
	},
	{},
)

// height
designTokens.global.height = Object.keys(exports.height).reduce((acc, key) => {
	acc[`height-${key.replace('_', '/')}`] = {
		value: exports.height[key],
		type: 'sizing',
	}
	return acc
}, {})

// min-Height
designTokens.global['min-height'] = Object.keys(exports['min-height']).reduce(
	(acc, key) => {
		acc[`min-height-${key}`] = {
			value: exports['min-height'][key],
			type: 'sizing',
		}
		return acc
	},
	{},
)

// max-Height
designTokens.global['max-height'] = Object.keys(exports['max-height']).reduce(
	(acc, key) => {
		acc[`max-height-${key}`] = {
			value: exports['max-height'][key],
			type: 'sizing',
		}
		return acc
	},
	{},
)
//#endregion sizing

//#region spacing
// spacing
designTokens.global.spacing = Object.keys(exports.spacing).reduce(
	(acc, key) => {
		acc[`spacing-${key}`] = { value: exports.spacing[key], type: 'spacing' }
		return acc
	},
	{},
)

// spacing-dynamic
const generateSpacingDynamic = (breakpoint) =>
	Object.keys(exports[`spacing-dynamic-${breakpoint}`]).reduce((acc, key) => {
		acc[`spacing-dynamic-${key}`] = {
			value: exports[`spacing-dynamic-${breakpoint}`][key],
			type: 'spacing',
		}
		return acc
	}, {})

designTokens.global['spacing-dynamic'] = {
	xs: generateSpacingDynamic('xs'),
	sm: generateSpacingDynamic('sm'),
	md: generateSpacingDynamic('md'),
	lg: generateSpacingDynamic('lg'),
	xl: generateSpacingDynamic('xl'),
}
//#endregion spacing

//#region border-radius
// border-radius
designTokens.global['border-radius'] = Object.keys(
	exports['border-radius'],
).reduce((acc, key) => {
	acc[`border-radius-${key}`] = {
		value: exports['border-radius'][key],
		type: 'borderRadius',
	}
	return acc
}, {})
//#endregion border-radius

//#region border-width
// border-width
designTokens.global['border-width'] = Object.keys(
	exports['border-width'],
).reduce((acc, key) => {
	acc[`border-width-${key}`] = {
		value: exports['border-width'][key],
		type: 'borderWidth',
	}
	return acc
}, {})
//#endregion border-width

//#region box-shadow
// box-shadow
designTokens.global['box-shadow'] = Object.keys(
	exports['box-shadow-no-vars'],
).reduce((acc, key) => {
	acc[`box-shadow-${key}`] = {
		value: exports['box-shadow-no-vars'][key],
		type: 'boxShadow',
	}
	return acc
}, {})
//#endregion box-shadow

//#region opacity
// opacity
designTokens.global.opacity = Object.keys(exports.opacity).reduce(
	(acc, key) => {
		acc[`opacity-${key}`] = {
			value: exports.opacity[key],
			type: 'opacity',
		}
		return acc
	},
	{},
)
//#endregion opacity

//#region font-family
// font-family
designTokens.global['font-family'] = Object.keys(exports['font-family']).reduce(
	(acc, key) => {
		acc[`font-family-${key}`] = {
			value: exports['font-family'][key],
			type: 'fontFamilies',
		}
		return acc
	},
	{},
)
//#endregion font-family

//#region font-weight
// font-weight
designTokens.global['font-weight'] = Object.keys(exports['font-weight']).reduce(
	(acc, key) => {
		acc[`font-weight-${key}`] = {
			value: exports['font-weight'][key],
			type: 'fontWeights',
		}
		return acc
	},
	{},
)
//#endregion font-weight

//#region font-size
// font-size
designTokens.global['font-size'] = Object.keys(exports['font-size']).reduce(
	(acc, key) => {
		acc[`font-size-${key}`] = {
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
			acc[`font-size-dynamic-${key}`] = {
				value: exports[`font-size-dynamic-${breakpoint}`][key],
				type: 'fontSizes',
			}
			return acc
		},
		{},
	)

designTokens.global['font-size-dynamic'] = {
	xs: generateFontSizeDynamic('xs'),
	sm: generateFontSizeDynamic('sm'),
	md: generateFontSizeDynamic('md'),
	lg: generateFontSizeDynamic('lg'),
	xl: generateFontSizeDynamic('xl'),
}
//#endregion font-size

//#region letter-spacing
// letter-spacing
designTokens.global['letter-spacing'] = Object.keys(
	exports['letter-spacing'],
).reduce((acc, key) => {
	acc[`letter-spacing-${key}`] = {
		value: exports['letter-spacing'][key],
		type: 'letterSpacing',
	}
	return acc
}, {})
//#endregion letter-spacing

//#region text-case
// text-transform
designTokens.global['text-transform'] = Object.keys(
	exports['text-transform'],
).reduce((acc, key) => {
	acc[`text-transform-${key}`] = {
		value: exports['text-transform'][key],
		type: 'textCase',
	}
	return acc
}, {})

// text-align
designTokens.global['text-align'] = Object.keys(exports['text-align']).reduce(
	(acc, key) => {
		acc[`text-align-${key}`] = {
			value: exports['text-align'][key],
			type: 'textCase',
		}
		return acc
	},
	{},
)
//#endregion text-case

//#region text-decoration
// text-decorator-line
designTokens.global['text-decorator-line'] = Object.keys(
	exports['text-decorator-line'],
).reduce((acc, key) => {
	acc[`text-decorator-line-${key}`] = {
		value: exports['text-decorator-line'][key],
		type: 'textDecoration',
	}
	return acc
}, {})

// text-decorator-style
designTokens.global['text-decorator-style'] = Object.keys(
	exports['text-decorator-style'],
).reduce((acc, key) => {
	acc[`text-decorator-style-${key}`] = {
		value: exports['text-decorator-style'][key],
		type: 'textDecoration',
	}
	return acc
}, {})

// text-decorator-thickness
designTokens.global['text-decorator-thickness'] = Object.keys(
	exports['text-decorator-thickness'],
).reduce((acc, key) => {
	acc[`text-decorator-thickness-${key}`] = {
		value: exports['text-decorator-thickness'][key],
		type: 'textDecoration',
	}
	return acc
}, {})

// text-underline-offset
designTokens.global['text-underline-offset'] = Object.keys(
	exports['text-underline-offset'],
).reduce((acc, key) => {
	acc[`text-underline-offset-${key}`] = {
		value: exports['text-underline-offset'][key],
		type: 'textDecoration',
	}
	return acc
}, {})
//#endregion text-decoration

//#region typography
// line-height
designTokens.global['line-height'] = Object.keys(exports['line-height']).reduce(
	(acc, key) => {
		acc[`line-height-${key}`] = {
			value: exports['line-height'][key],
			type: 'typography',
		}
		return acc
	},
	{},
)
//#endregion typography

//#region assets
// background-image
designTokens.global['background-image'] = Object.keys(
	exports['background-image'],
).reduce((acc, key) => {
	acc[`background-image-${key}`] = {
		value: exports['background-image'][key],
		type: 'assets',
	}
	return acc
}, {})
//#endregion assets

//#region dimension
// aspect-ratio
designTokens.global['aspect-ratio'] = Object.keys(
	exports['aspect-ratio'],
).reduce((acc, key) => {
	acc[`aspect-ratio-${key}`] = {
		value: exports['aspect-ratio'][key],
		type: 'dimension',
	}
	return acc
}, {})

// breakpoints
designTokens.global.breakpoints = Object.keys(exports.breakpoints).reduce(
	(acc, key) => {
		acc[`breakpoints-${key}`] = {
			value: exports.breakpoints[key],
			type: 'dimension',
		}
		return acc
	},
	{},
)

// columns
designTokens.global.columns = Object.keys(exports.columns).reduce(
	(acc, key) => {
		acc[`columns-${key}`] = {
			value: exports.columns[key],
			type: 'dimension',
		}
		return acc
	},
	{},
)
//#endregion dimension

//#region border
// border-style
designTokens.global['border-style'] = Object.keys(
	exports['border-style'],
).reduce((acc, key) => {
	acc[`border-style-${key}`] = {
		value: exports['border-style'][key],
		type: 'border',
	}
	return acc
}, {})
//#endregion border

//#region other
// blur
designTokens.global.blur = Object.keys(exports.blur).reduce((acc, key) => {
	acc[`blur-${key}`] = {
		value: exports.blur[key],
		type: 'other',
	}
	return acc
}, {})

// brightness
designTokens.global.brightness = Object.keys(exports.brightness).reduce(
	(acc, key) => {
		acc[`brightness-${key}`] = {
			value: exports.brightness[key],
			type: 'other',
		}
		return acc
	},
	{},
)

// saturation
designTokens.global.saturation = Object.keys(exports.saturation).reduce(
	(acc, key) => {
		acc[`saturation-${key}`] = {
			value: exports.saturation[key],
			type: 'other',
		}
		return acc
	},
	{},
)
//#endregion other

fs.writeFileSync('./design-tokens.json', JSON.stringify(designTokens, null, 2))
