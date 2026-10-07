// Checks the color tokens that CSS relative color syntax computes at runtime:
// - the white or black text of --color-<name>-contrast and of the darker
//   shades, against a reference set of colors and the WCAG 2 contrast ratio,
//   and the text of the states of vv-button that follows them;
// - the neutrals written relative to --color-tint, against the literals they
//   replaced, for the default brand and for #140e33, in both themes;
// - the readable roles, which keep the reference set at 4.5:1 or more on
//   the neutral surfaces down to surface-2 of each theme, of any hue, leave a
//   color that already reads alone and keep its hue, put readable-strong a
//   step further, and keep every shade at 4.5:1 or more on the tinted
//   surface of any hue; the graphic roles, which keep 3:1 on the same
//   neutral surfaces and paint the bar of vv-progress;
// - the covers of vv-button, the split fill and text colors of the fields,
//   and the HSL channel branch, which emits no relative color syntax outside
//   @supports;
// - the cases that must not move: neutrals set explicitly, the compile time
//   branch without $use-color-mix, the color utilities;
// - that every color token the compiled library reads is declared;
// - in the build an application compiles, with layers and without custom
//   properties for the components, and in the outlined preset: that what
//   shows the focus is in the graphic role of a palette color, never in
//   `currentcolor` or a light gray, and that the tokens and the text
//   utilities it reads keep their names, their rules and their layers.
// No browser runs here. The relative expressions are resolved with the
// formulas of CSS Color 4, the ones the engines apply; what Chrome, Firefox
// and Safari 17 actually compute was measured when the tokens were written.
import process from 'node:process'
import { initCompiler } from 'sass-embedded'
import { pathToFileURL } from 'node:url'

const failures = []
const check = (ok, message) => {
	if (!ok) {
		failures.push(message)
	}
}

// #region color math (WCAG 2 and CSS Color 4)
const hexToRgb = (hex) =>
	[1, 3, 5].map(
		(index) => Number.parseInt(hex.slice(index, index + 2), 16) / 255,
	)
const toHex = (channels) =>
	`#${channels
		.map((value) =>
			Math.round(value * 255)
				.toString(16)
				.padStart(2, '0'),
		)
		.join('')}`
const toLinear = (value) =>
	value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4
const luminanceOf = (channels) => {
	const [r, g, b] = channels.map(toLinear)
	return 0.2126 * r + 0.7152 * g + 0.0722 * b
}
const luminance = (hex) => luminanceOf(hexToRgb(hex))
const ratio = (a, b) => (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05)
const hue = ([r, g, b]) => {
	const max = Math.max(r, g, b)
	const delta = max - Math.min(r, g, b)
	if (!delta) {
		return 0
	}
	let h = (r - g) / delta + 4
	if (max === r) {
		h = ((g - b) / delta) % 6
	} else if (max === g) {
		h = (b - r) / delta + 2
	}
	return (h * 60 + 360) % 360
}
const hsl = (h, s, l) => {
	const a = s * Math.min(l, 1 - l)
	const channel = (n) => {
		const k = (n + h / 30) % 12
		return l - a * Math.max(-1, Math.min(k - 3, 9 - k, 1))
	}
	return [channel(0), channel(8), channel(4)]
}
const toHsl = (channels) => {
	const max = Math.max(...channels)
	const min = Math.min(...channels)
	const l = (max + min) / 2
	const s = max === min ? 0 : (max - min) / (1 - Math.abs(2 * l - 1))
	return [hue(channels), s, l]
}
// a shade of the palette, hsl(from <color> h s calc(l * <multiplier>))
const shade = (hex, multiplier) => {
	const [h, s, l] = toHsl(hexToRgb(hex))
	return hsl(h, s, Math.min(1, l * multiplier))
}
// #endregion

// one compiler for every compilation: a fresh one per call exhausts the
// synchronous channel of sass-embedded after a dozen of them
const compiler = initCompiler()
const compile = (source) =>
	compiler.compileString(source, {
		loadPaths: ['.'],
		url: pathToFileURL('./check-colors.scss'),
		logger: {
			warn: (message) =>
				failures.push(`Sass warning: ${message.split('\n')[0]}`),
		},
	}).css

// custom properties declared in the first rule that sets them
const props = (css) => {
	const result = {}
	for (const [, name, value] of css.matchAll(
		/(--color-[a-z0-9-]+):\s*([^;}]+)/g,
	)) {
		result[name] ??= value.trim()
	}
	return result
}

// #region 1. contrast threshold
const reference = [
	'#140e33',
	'#166abd',
	'#0a3d62',
	'#f5c400',
	'#86c8fb',
	'#9365ff',
	'#38ada9',
	'#e7b735',
	'#af2323',
	'#178230',
	'#31ccec',
	'#565676',
	'#ffffff',
	'#000000',
	'#9c27b0',
]
const probe = compile(`
@use 'src/tools/functions' as f;
.threshold { value: f.contrast-threshold(); }
${reference.map((hex, index) => `.c${index} { luminance: f.color-luminance(${hex}); pick: f.contrast-color(${hex}); }`).join('\n')}
`)
const threshold = Number(probe.match(/\.threshold \{\s*value: ([\d.]+)/)[1])
const cssThreshold = Math.round(threshold * 10000) / 10000
const emitted = props(compile(`@use 'src/context'; @use 'src/props';`))
check(
	emitted['--color-brand-contrast'] ===
		`color(from color(from var(--color-brand) xyz-d65 x y z / clamp(0, (${cssThreshold} - y) * 1000000, 1)) srgb alpha alpha alpha / 1)`,
	`--color-brand-contrast is ${emitted['--color-brand-contrast']}`,
)
check(
	emitted['--color-brand-darken-1-contrast'] ===
		`color(from color(from var(--color-brand-darken-1) xyz-d65 x y z / clamp(0, (${cssThreshold} - y) * 1000000, 1)) srgb alpha alpha alpha / 1)`,
	`--color-brand-darken-1-contrast is ${emitted['--color-brand-darken-1-contrast']}`,
)
check(
	Math.abs(threshold - (Math.sqrt(1.05 * 0.05) - 0.05)) < 1e-9,
	`threshold ${threshold}`,
)
// the text the CSS threshold puts on a luminance, and its ratio
const pickText = (y) => (y < cssThreshold ? 'white' : 'black')
const textRatio = (y) => ratio(y, pickText(y) === 'white' ? 1 : 0)

const table = reference.map((hex, index) => {
	const [, sassLuminance, pick] = probe.match(
		new RegExp(
			String.raw`\.c${index} \{\s*luminance: ([\d.e-]+);\s*pick: (#[0-9a-f]+|white|black)`,
		),
	)
	const y = luminance(hex)
	const onWhite = ratio(y, 1)
	const onBlack = ratio(y, 0)
	const best = onWhite >= onBlack ? 'white' : 'black'
	const css = y < cssThreshold ? 'white' : 'black'
	const sass = ['#fff', 'white'].includes(pick) ? 'white' : 'black'
	check(
		Math.abs(Number(sassLuminance) - y) < 1e-4,
		`${hex}: Sass luminance ${sassLuminance}, WCAG ${y}`,
	)
	check(
		sass === best,
		`${hex}: contrast-color() picks ${sass}, WCAG prefers ${best}`,
	)
	check(
		css === best,
		`${hex}: the CSS threshold picks ${css}, WCAG prefers ${best}`,
	)
	// every darker shade picks its own text, at 4.5:1 or more
	for (let step = 1; step <= 5; step++) {
		const y = luminanceOf(shade(hex, 1 - step / 10))
		const shadeBest = ratio(y, 1) >= ratio(y, 0) ? 'white' : 'black'
		check(
			pickText(y) === shadeBest && textRatio(y) >= 4.5,
			`${hex}: darken-${step} takes ${pickText(y)} at ${textRatio(y).toFixed(2)}, WCAG prefers ${shadeBest}`,
		)
	}
	// vv-button paints darken-1 on hover, darken-2 when active or pressed
	const state = (multiplier) => {
		const y = luminanceOf(shade(hex, multiplier))
		return `${pickText(y)} ${textRatio(y).toFixed(2)}`
	}
	return {
		color: hex,
		text: best,
		ratio: (best === 'white' ? onWhite : onBlack).toFixed(2),
		other: (best === 'white' ? onBlack : onWhite).toFixed(2),
		hover: state(0.9),
		active: state(0.8),
	}
})
// #endregion

// #region 2. neutrals relative to the tint
const neutrals = {
	'#166abd': {
		gray: '#6c8093',
		word: '#161a1d',
		surface: '#ffffff',
		shadow: '#19334d',
		backdrop: '#19334d33',
		'dark word': '#d3d9de',
		'dark surface': '#0b0d0e',
	},
	'#140e33': {
		gray: '#736c93',
		word: '#17161d',
		surface: '#ffffff',
		shadow: '#22194d',
		backdrop: '#22194d33',
		'dark word': '#d5d3de',
		'dark surface': '#0c0b0e',
	},
}
// [r, g, b, alpha] of the expression, or null when it is not relative to the tint
const resolveTinted = (value, tint) => {
	const match = value.match(
		/^hsl\(from var\(--color-tint\) h ([\d.]+)% ([\d.]+)%(?: \/ ([\d.]+)%)?\)$/,
	)
	if (!match) {
		return null
	}
	const [s, l, alpha] = [match[1], match[2], match[3] ?? 100].map(Number)
	return [...hsl(hue(hexToRgb(tint)), s / 100, l / 100), alpha / 100]
}
// Within half a step of the 8-bit value: shadow and backdrop land exactly on
// 25.5 in one channel, which Sass rounded down and a browser may round up.
const matches = (channels, hex) =>
	[1, 3, 5, 7].every((index) => {
		const expected =
			index < hex.length
				? Number.parseInt(hex.slice(index, index + 2), 16)
				: 255
		return (
			Math.abs(channels[(index - 1) / 2] * 255 - expected) <= 0.5 + 1e-9
		)
	})
for (const [brand, expected] of Object.entries(neutrals)) {
	const light = props(
		compile(
			`@use 'src/context' with ($color-brand: ${brand}); @use 'src/props';`,
		),
	)
	const dark = props(
		compile(
			`@use 'src/context' with ($color-brand: ${brand}); @use 'src/themes/dark/props';`,
		),
	)
	check(
		light['--color-tint'] === brand,
		`${brand}: --color-tint is ${light['--color-tint']}`,
	)
	check(
		!('--color-tint' in dark),
		`${brand}: the dark theme redeclares --color-tint`,
	)
	for (const [name, hex] of Object.entries(expected)) {
		const [theme, token] = name.startsWith('dark ')
			? [dark, name.slice(5)]
			: [light, name]
		const value = theme[`--color-${token}`]
		const resolved = resolveTinted(value, brand)
		check(
			resolved && matches(resolved, hex),
			`${brand}: ${name} is ${value}, resolves to ${resolved && toHex(resolved.slice(0, 3))}, expected ${hex}`,
		)
	}
}
// #endregion

// #region 3. readable roles
// linear sRGB to XYZ (D65) and back, the matrices of CSS Color 4
const toXyz = ([r, g, b]) => [
	0.41239079926595934 * r + 0.357584339383878 * g + 0.1804807884018343 * b,
	0.21263900587151027 * r + 0.715168678767756 * g + 0.07219231536073371 * b,
	0.01933081871559182 * r + 0.11919477979462598 * g + 0.9505321522496607 * b,
]
const fromXyz = ([x, y, z]) => [
	3.2409699419045226 * x - 1.537383177570094 * y - 0.4986107602930034 * z,
	-0.9692436362808796 * x + 1.8759675015077202 * y + 0.04155505740717559 * z,
	0.05563007969699366 * x - 0.20397695888897652 * y + 1.0569715142428786 * z,
]
const toGamma = (value) =>
	value <= 0.0031308 ? 12.92 * value : 1.055 * value ** (1 / 2.4) - 0.055
// xyz-d65 to [r, g, b], clipped to 1 in srgb like `min(r, alpha)`
const clipped = (xyz) => fromXyz(xyz).map((value) => Math.min(1, value))
const W = [0.9505, 1, 1.0891]
// the readable expression evaluated on [r, g, b]. Toward black, the channels
// scaled by bound / y. Toward white, scaled up by the same ratio, clipped to
// the gamut, and their distance from the white point moved by
// (1 - bound) / (1 - y) for what the clip took
const readableOf = (channels, bound, lighten) => {
	const [x, y, z] = toXyz(channels.map(toLinear))
	if (!lighten) {
		const g = Math.min(1, bound / Math.max(y, 0.0001))
		return fromXyz([x * g, Math.min(y, bound), z * g]).map((value) =>
			Math.min(1, Math.max(0, toGamma(value))),
		)
	}
	const s = Math.max(1, bound / Math.max(y, 0.0001))
	const [cx, cy, cz] = toXyz(clipped([x * s, y * s, z * s]))
	const g = Math.min(1, (1 - bound) / Math.max(1 - cy, 0.0001))
	return fromXyz([
		W[0] - (W[0] - cx) * g,
		Math.max(cy, bound),
		W[2] - (W[2] - cz) * g,
	]).map((value) => Math.min(1, Math.max(0, toGamma(value))))
}
// readable-strong evaluated on the readable role: its xyz scaled by factor,
// clipped to the gamut when the factor raises it
const strongOf = (channels, factor) => {
	const xyz = toXyz(channels.map(toLinear)).map((value) => value * factor)
	return (factor > 1 ? clipped(xyz) : fromXyz(xyz)).map((value) =>
		Math.min(1, Math.max(0, toGamma(value))),
	)
}
const readable = (hex, bound, lighten) =>
	toHex(readableOf(hexToRgb(hex), bound, lighten))
const clip = (color) =>
	`color(from ${color} srgb min(r, alpha) min(g, alpha) min(b, alpha))`
const formula = (origin, bound, lighten) => {
	if (!lighten) {
		return `color(from ${origin} xyz-d65 calc(x * min(1, ${bound} / max(y, 0.0001))) min(y, ${bound}) calc(z * min(1, ${bound} / max(y, 0.0001))))`
	}
	const up = `max(1, ${bound} / max(y, 0.0001))`
	const toWhite = `min(1, ${Math.round((1 - bound) * 1e4) / 1e4} / max(1 - y, 0.0001))`
	const lifted = clip(
		`color(from ${origin} xyz-d65 calc(x * ${up}) calc(y * ${up}) calc(z * ${up}))`,
	)
	return `color(from ${lifted} xyz-d65 calc(0.9505 - (0.9505 - x) * ${toWhite}) max(y, ${bound}) calc(1.0891 - (1.0891 - z) * ${toWhite}))`
}
const strongFormula = (name, factor) => {
	const value = `color(from var(--color-${name}-readable) xyz-d65 calc(x * ${factor}) calc(y * ${factor}) calc(z * ${factor}))`
	return factor > 1 ? clip(value) : value
}
// the luminance the y channel is clamped to, `) min(y, 0.1574)`, not the
// guard of the division, `/ max(y, 0.0001)`
const boundOf = (value) =>
	Number(value?.match(/\) (?:min|max)\(y, ([\d.]+)\)/)?.[1])
const factorOf = (value) => Number(value?.match(/calc\(x \* ([\d.]+)\)/)?.[1])
const darkProps = compile(`@use 'src/context'; @use 'src/themes/dark/props';`)
const darkEmitted = props(darkProps)
// the hardest surface of each theme, among every hue at a saturation and a
// lightness: the darkest of them when they are light, the lightest otherwise
const worstTint = (lightness, light, saturation = 1) => {
	let worst = null
	for (let h = 0; h < 360; h++) {
		const y = luminanceOf(hsl(h, saturation, lightness))
		if (worst === null || (light ? y < worst : y > worst)) {
			worst = y
		}
	}
	return worst
}
// the roles read on the neutral surfaces down to surface-2, 96% in the light
// theme and 15% in the dark one, of any hue --color-tint gives them
const themes = {
	light: {
		lighten: false,
		surface: worstTint(0.96, true, 0.1),
		tint: 0.9,
		bound: boundOf(emitted['--color-brand-readable']),
		surfaceBound: boundOf(emitted['--color-surface-brand-readable']),
		graphicBound: boundOf(emitted['--color-brand-graphic']),
		strong: factorOf(emitted['--color-brand-readable-strong']),
		emitted,
	},
	dark: {
		lighten: true,
		surface: worstTint(0.15, false, 0.1),
		tint: 0.1,
		bound: boundOf(darkEmitted['--color-brand-readable']),
		surfaceBound: boundOf(darkEmitted['--color-surface-brand-readable']),
		graphicBound: boundOf(darkEmitted['--color-brand-graphic']),
		strong: factorOf(darkEmitted['--color-brand-readable-strong']),
		emitted: darkEmitted,
	},
}
for (const [name, theme] of Object.entries(themes)) {
	check(
		theme.emitted['--color-brand-readable'] ===
			formula('var(--color-brand)', theme.bound, theme.lighten) &&
			theme.emitted['--color-brand-readable-strong'] ===
				strongFormula('brand', theme.strong) &&
			theme.emitted['--color-surface-brand-readable'] ===
				formula(
					'var(--color-brand)',
					theme.surfaceBound,
					theme.lighten,
				) &&
			theme.emitted['--color-brand-graphic'] ===
				formula(
					'var(--color-brand)',
					theme.graphicBound,
					theme.lighten,
				),
		`the ${name} readable roles of brand are ${theme.emitted['--color-brand-readable']}, ${theme.emitted['--color-brand-readable-strong']}, ${theme.emitted['--color-surface-brand-readable']}`,
	)
	check(
		theme.lighten ? theme.strong > 1 : theme.strong < 1,
		`the ${name} readable-strong factor ${theme.strong} does not move away from the surface`,
	)
	// the bounds of the text and of a graphic on the deepest neutral surface,
	// and the one of the text on the hardest tint of any hue, all of the
	// hardest hue
	const worst = worstTint(theme.tint, !theme.lighten)
	check(
		ratio(theme.bound, theme.surface) >= 4.59 &&
			ratio(theme.bound, theme.surface) < 4.61 &&
			ratio(theme.surfaceBound, worst) >= 4.59 &&
			ratio(theme.surfaceBound, worst) < 4.61 &&
			ratio(theme.graphicBound, theme.surface) >= 3.09 &&
			ratio(theme.graphicBound, theme.surface) < 3.11,
		`${name} readable bounds ${theme.bound}, ${theme.surfaceBound} and ${theme.graphicBound}, hardest surface ${theme.surface.toFixed(4)}, hardest tint ${worst.toFixed(4)}`,
	)
}
check(
	!('--color-readable-luminance' in emitted) &&
		!('--color-readable-target' in darkEmitted) &&
		!Object.keys(emitted).some((key) =>
			/-(lighten|darken)-\d-readable$/.test(key),
		),
	'a readable shade or a readable bound token is still emitted',
)
// on the deepest neutral surface, every reference color ends at 4.5:1 or
// more, one that already reads is left alone, and the dark theme keeps its
// hue; readable-strong reads at least as well and is a step away; the graphic
// role ends at 3:1 or more, and is left alone when it is already seen; on its
// own tinted surface, every shade of every reference color reads, and so does
// every hue at full saturation
const readableTable = reference.map((hex) => {
	const row = { color: hex }
	for (const [name, theme] of Object.entries(themes)) {
		const before = ratio(luminance(hex), theme.surface)
		const text = readable(hex, theme.bound, theme.lighten)
		const after = ratio(luminance(text), theme.surface)
		check(
			after >= 4.5,
			`${hex} in the ${name} theme reads at ${after.toFixed(2)}`,
		)
		check(
			before < 4.6 || text === hex,
			`${hex} in the ${name} theme already reads but moves to ${text}`,
		)
		const [h, s] = toHsl(hexToRgb(hex))
		const [textHue, textSaturation] = toHsl(hexToRgb(text))
		const drift = Math.abs(((textHue - h + 540) % 360) - 180)
		check(
			s < 0.2 || textSaturation < 0.05 || drift <= 6,
			`${hex} in the ${name} theme turns its hue by ${drift.toFixed(1)} degrees, to ${text}`,
		)
		const strong = strongOf(hexToRgb(text), theme.strong)
		const strongRatio = ratio(luminanceOf(strong), theme.surface)
		check(
			strongRatio >= after &&
				(theme.lighten ||
					luminanceOf(strong) <=
						luminance(text) * theme.strong + 1e-3),
			`readable-strong of ${hex} in the ${name} theme is ${toHex(strong)} at ${strongRatio.toFixed(2)}, readable ${after.toFixed(2)}`,
		)
		const graphic = readable(hex, theme.graphicBound, theme.lighten)
		const graphicRatio = ratio(luminance(graphic), theme.surface)
		check(
			graphicRatio >= 3 && (before < 3.1 || graphic === hex),
			`the graphic role of ${hex} in the ${name} theme is ${graphic} at ${graphicRatio.toFixed(2)}, the color at ${before.toFixed(2)}`,
		)
		const tint = luminanceOf(hsl(h, s, theme.tint))
		let lowest = Infinity
		for (const multiplier of [0.5, 0.7, 0.9, 1, 1.3, 1.5]) {
			const y = luminanceOf(
				readableOf(
					shade(hex, multiplier),
					theme.surfaceBound,
					theme.lighten,
				),
			)
			lowest = Math.min(lowest, ratio(y, tint))
		}
		check(
			lowest >= 4.5,
			`a shade of ${hex} reads at ${lowest.toFixed(2)} on its tinted surface in the ${name} theme`,
		)
		const was = text === hex ? '' : ` (was ${before.toFixed(2)})`
		row[name] = `${text} ${after.toFixed(2)}${was}`
		row[`${name} strong`] = `${toHex(strong)} ${strongRatio.toFixed(2)}`
		row[`${name} graphic`] = `${graphic} ${graphicRatio.toFixed(2)}`
		row[`${name} tint`] = lowest.toFixed(2)
	}
	return row
})
for (const [name, theme] of Object.entries(themes)) {
	for (let h = 0; h < 360; h += 5) {
		const tint = luminanceOf(hsl(h, 1, theme.tint))
		const y = luminanceOf(
			readableOf(hsl(h, 1, 0.5), theme.surfaceBound, theme.lighten),
		)
		check(
			ratio(y, tint) >= 4.5,
			`hue ${h} reads at ${ratio(y, tint).toFixed(2)} on its tinted surface in the ${name} theme`,
		)
	}
}

// the fixed steps of word and surface, again in percent for Safari 17
const fallback = '@supports not (color: hsl(from red h s calc(l + 1)))'
check(
	compile(`@use 'src/context'; @use 'src/props';`)
		.split(fallback)[1]
		?.includes(
			'--color-word-1: hsl(from var(--color-word) h s calc(l + 12%))',
		),
	'the light fixed steps have no percent fallback',
)
check(
	darkProps
		.split(fallback)[1]
		?.includes(
			'--color-word-1: hsl(from var(--color-word) h s calc(l - 12%))',
		),
	'the dark fixed steps have no percent fallback',
)
// #endregion

// #region 4. what must not move
const explicit = props(
	compile(`@use 'src/context' with ($color-gray: #808080, $color-word: #111, $color-surface: #fafafa,
		$color-shadow: #222, $color-backdrop: rgb(0 0 0 / 30%)); @use 'src/props';`),
)
for (const [name, value] of Object.entries({
	gray: '#808080',
	word: '#111',
	surface: '#fafafa',
	shadow: '#222',
	backdrop: 'rgba(0, 0, 0, 0.3)',
})) {
	const emittedValue = explicit[`--color-${name}`]
	check(emittedValue === value, `explicit ${name} is ${emittedValue}`)
}

const legacyProps = compile(
	`@use 'src/context' with ($use-color-mix: false); @use 'src/props';`,
)
const legacy = props(legacyProps)
const legacyDarkProps = compile(
	`@use 'src/context' with ($use-color-mix: false); @use 'src/themes/dark/props';`,
)
const palette = {
	brand: '#166abd',
	accent: '#9c27b0',
	success: '#178230',
	danger: '#af2323',
	info: '#31ccec',
	warning: '#e7b735',
}
// the HSL channel branch serves browsers without relative color syntax: it
// emits none, and a readable role there is the first shade of the color that
// reads, away from the surface, chosen at compile time
check(
	![legacyProps, legacyDarkProps].some(
		(css) => css.includes('from var(') || css.includes('@supports (color:'),
	),
	'without $use-color-mix relative color syntax is emitted',
)
const legacyStep = (hex, bound, lighten, from = 0) => {
	for (let step = Math.min(from, 5); step <= 5; step++) {
		const y = luminanceOf(
			shade(hex, lighten ? 1 + step / 10 : 1 - step / 10),
		)
		if (lighten ? y >= bound : y <= bound) {
			return step
		}
	}
	return 5
}
const legacyVar = (name, step, lighten) => {
	const direction = lighten ? 'lighten' : 'darken'
	return step
		? `var(--color-${name}-${direction}-${step})`
		: `var(--color-${name})`
}
for (const [theme, emittedLegacy] of Object.entries({
	light: legacy,
	dark: props(legacyDarkProps),
})) {
	const { bound, surfaceBound, graphicBound, strong, lighten } = themes[theme]
	for (const [name, hex] of Object.entries(palette)) {
		const step = legacyStep(hex, bound, lighten)
		const target =
			luminanceOf(shade(hex, lighten ? 1 + step / 10 : 1 - step / 10)) *
			strong
		for (const [token, value] of Object.entries({
			[`--color-${name}-readable`]: legacyVar(name, step, lighten),
			[`--color-${name}-readable-strong`]: legacyVar(
				name,
				legacyStep(hex, target, lighten, step + 1),
				lighten,
			),
			[`--color-surface-${name}-readable`]: legacyVar(
				name,
				legacyStep(hex, surfaceBound, lighten),
				lighten,
			),
			[`--color-${name}-graphic`]: legacyVar(
				name,
				legacyStep(hex, graphicBound, lighten),
				lighten,
			),
		})) {
			check(
				emittedLegacy[token] === value,
				`without $use-color-mix ${theme} ${token} is ${emittedLegacy[token]}, expected ${value}`,
			)
		}
	}
}
check(
	!('--color-tint' in legacy),
	'without $use-color-mix --color-tint is emitted',
)
// without $use-color-mix the contrast text of each shade is chosen at compile
// time, and the cover agrees with it: the shade under dark text, transparent
// under white
for (const [name, hex] of Object.entries(palette)) {
	for (let step = 0; step <= 5; step++) {
		const key = step ? `${name}-darken-${step}` : name
		const white =
			pickText(luminanceOf(shade(hex, 1 - step / 10))) === 'white'
		const contrast = legacy[`--color-${key}-contrast`]
		const cover = legacy[`--color-${key}-cover`]
		check(
			contrast === (white ? '#fff' : '#000') &&
				cover === (white ? 'transparent' : `var(--color-${key})`),
			`legacy ${key} contrast is ${contrast}, cover ${cover}`,
		)
	}
}
check(!('--color-gray-contrast' in emitted), '--color-gray-contrast is emitted')

// the covers share the step of the contrast tokens on the same shade, and
// the button takes the text and lays the cover of the shade each state paints
const cover = (name) =>
	`color(from var(--color-${name}) xyz-d65 x y z / calc(1 - clamp(0, (${cssThreshold} - y) * 1000000, 1)))`
check(
	emitted['--color-brand-cover'] === cover('brand') &&
		emitted['--color-brand-darken-1-cover'] === cover('brand-darken-1'),
	`--color-brand-cover is ${emitted['--color-brand-cover']}, darken-1 ${emitted['--color-brand-darken-1-cover']}`,
)
const button = compile(
	`@use 'src/context' with ($use-custom-props-for-components: false); @use 'src/components/vv-button';`,
)
// the rules that paint a shade: each must also take its text and its cover
for (const shadeName of [
	'brand-darken-1',
	'brand-darken-2',
	'danger-darken-1',
	'danger-darken-2',
]) {
	const rules = button
		.split('}')
		.filter((rule) =>
			rule.includes(`background: var(--color-${shadeName})`),
		)
	check(
		rules.length > 0 &&
			rules.every(
				(rule) =>
					rule.includes(
						`color: var(--color-${shadeName}-contrast)`,
					) &&
					rule.includes(
						`text-shadow: 0 1px 0 var(--color-${shadeName}-cover)`,
					),
			),
		`vv-button paints ${shadeName} without its contrast text and its cover`,
	)
}
check(
	!button.includes(' - y)'),
	'vv-button computes a contrast or a cover itself',
)

// a field paints its bar in the graphic role of its color and writes its hint
// in the readable role
const input = compile(`@use 'src/context'; @use 'src/props';`)
check(
	input.includes('--input-valid-color: var(--color-success-graphic);') &&
		input.includes(
			'--input-valid-text-color: var(--color-success-readable);',
		),
	'the valid color of a field is not split into a fill and a text color',
)

const utilities = compile(`@use 'src/context'; @use 'src/utilities/colors';`)
check(
	!/\.(bg|text|border|decoration)-tint\b/.test(utilities),
	'--color-tint has utilities',
)
// the readable roles and the contrast texts are text utilities alone (that
// each one exists is checked in the consumer build), and a cover has none
check(
	!/\.(bg|border|decoration)-[a-z0-9-]*(readable|contrast)\b/.test(
		utilities,
	) && !/-cover\b/.test(utilities),
	'a readable role or a contrast text has a utility other than text-, or a cover has a utility',
)
// the graphic roles have every utility, reading the token without repeating
// its expression as a fallback
check(
	['bg', 'text', 'border', 'decoration'].every((prefix) =>
		new RegExp(
			String.raw`\.${prefix}-brand-graphic\)\s*\{\s*[a-z-]+: var\(--color-brand-graphic\);`,
		).test(utilities),
	),
	'a graphic role lacks a utility, or its utility repeats the expression',
)
// vv-progress paints its bar in the graphic role, which keeps 3:1 with the
// track, and never in the plain brand
const progress = compile(
	`@use 'src/context' with ($use-custom-props-for-components: false); @use 'src/components/vv-progress';`,
)
check(
	progress.includes('var(--color-brand-graphic)') &&
		!progress.includes('var(--color-brand)'),
	'vv-progress paints its bar in a color that is not its graphic role',
)
const preflight = compile(`@use 'src/context'; @use 'src/preflight';`)
check(
	/mark\)[^{]*\.text-warning-contrast\)\s*\{\s*color: var\(--color-warning-contrast/.test(
		preflight,
	),
	'mark in .preflight does not take --color-warning-contrast',
)
// #endregion

// #region 5. declared tokens
// every color token the library reads is declared, in the light props or in
// the dark theme: a component that names a shade or a role that no longer
// exists would otherwise fall back to the inherited color without a word
const bundle =
	compile(`@use 'src/volver';`) + compile(`@use 'src/themes/dark/volver';`)
const declared = new Set(
	[...bundle.matchAll(/(--color-[a-z0-9-]+)\s*:/g)].map(([, name]) => name),
)
const missing = [
	...new Set(
		[...bundle.matchAll(/var\((--color-[a-z0-9-]+)/g)].map(
			([, name]) => name,
		),
	),
].filter((name) => !declared.has(name))
check(!missing.length, `undeclared color tokens: ${missing.join(', ')}`)
// #endregion

// #region 6. the build a consumer compiles
// Layers on and no custom properties for the components, which is how an
// application that sets its brand at runtime compiles the library. It reads
// the names below from its own CSS and declares the order of the layers
// before any stylesheet, so a rename would break it with every check above
// still passing. That the dark theme does not redeclare --color-tint is
// checked with the neutrals.
const consumer = `@use 'src/context' with ($use-css-layers: true, $use-custom-props-for-components: false);`

// the stylesheet with its comments blanked out, strings left alone
const withoutComments = (css) => {
	const parts = []
	let start = 0
	for (let index = 0; index < css.length; index++) {
		const char = css[index]
		if (char === '"' || char === "'") {
			for (index++; css[index] !== char; index++) {
				if (css[index] === '\\') {
					index++
				}
			}
		} else if (char === '/' && css[index + 1] === '*') {
			parts.push(css.slice(start, index), ' ')
			index = css.indexOf('*/', index + 2) + 1
			start = index + 1
		}
	}
	return parts.join('') + css.slice(start)
}
// every rule with its selector, the at-rules and the selectors around it
// (context), the two joined by ' > ' (path), and its declarations; a brace or
// a semicolon inside a string or between parentheses, as in a data URI, does
// not end anything
const rulesOf = (source) => {
	const css = withoutComments(source)
	const rules = []
	const stack = []
	let start = 0
	let depth = 0
	const text = (end) => css.slice(start, end).trim().replaceAll(/\s+/g, ' ')
	for (let index = 0; index < css.length; index++) {
		const char = css[index]
		if (char === '"' || char === "'") {
			for (index++; css[index] !== char; index++) {
				if (css[index] === '\\') {
					index++
				}
			}
		} else if (char === '(') {
			depth++
		} else if (char === ')') {
			depth--
		} else if (char === '{') {
			stack.push({ prelude: text(index), body: [] })
			start = index + 1
		} else if ((char === ';' && !depth) || char === '}') {
			if (text(index) && stack.length) {
				stack.at(-1).body.push(text(index))
			}
			if (char === '}') {
				const rule = stack.pop()
				const context = stack.map(({ prelude }) => prelude)
				rules.push({
					path: [...context, rule.prelude].join(' > '),
					context,
					selector: rule.prelude,
					body: rule.body,
				})
			}
			start = index + 1
		}
	}
	return rules
}
const layeredCss = compile(`${consumer} @use 'src/volver';`)
const layered = rulesOf(layeredCss)
const layeredDark = rulesOf(
	compile(`${consumer} @use 'src/themes/dark/volver';`),
)
const outlinedFields = rulesOf(
	compile(
		`${consumer} @use 'src/presets/outlined-fields'; @use 'src/props'; ${['vv-input-text', 'vv-textarea', 'vv-select', 'vv-input-file', 'vv-field'].map((name) => `@use 'src/components/${name}';`).join(' ')}`,
	),
)

// What shows where the focus is, a ring, the caret, the bar under a field or
// a border that changes on focus, and the bar and the border of a valid or
// invalid field keep 3:1 with what they sit on only in the graphic role of a
// palette color. A ring in `currentcolor` takes the contrast text of a
// filled control, white on a white page, and a light gray one is not seen on
// the light surfaces, so neither is allowed outside the static button meant
// for dark media; a ring in `--color-gray` or darker, or in another neutral,
// does not follow the brand and is left to review. A declaration that reads
// another custom property is followed to the props, and in the dark theme to
// what it redeclares: the outlined fields reach the brand through
// --input-focus-color, and a field its state colors through
// --input-invalid-color.
const roleNames = Object.keys(palette)
const paletteVar = new RegExp(
	String.raw`var\((--color-(?:${[...roleNames, 'gray'].join('|')})[a-z0-9-]*)\s*[,)]`,
	'g',
)
const declarationOf = (text) => {
	const colon = text.indexOf(':')
	return [text.slice(0, colon).trim(), text.slice(colon + 1).trim()]
}
// the custom properties a rule declares, to follow a value that reads one:
// those of the props of a build, and in the dark theme those it redeclares
const tokensOf = (rules, path) =>
	new Map(
		rules
			.filter((rule) => rule.path === path)
			.flatMap(({ body }) => body.map(declarationOf)),
	)
const propsRoot = '@layer volver.props > :where(:host, :root, .theme)'
const darkTokens = tokensOf(
	layeredDark,
	'@layer volver.themes > :where(.theme.theme--dark)',
)
const follow = (value, tokens, depth = 0) =>
	value.replaceAll(/var\((--(?!color-)[a-z0-9-]+)\)/g, (match, name) =>
		tokens.has(name) && depth < 8
			? follow(tokens.get(name), tokens, depth + 1)
			: match,
	)
// each build with the tokens its rules are read with, in the light theme
// and in the dark one; the rules of the dark theme apply only in the latter
const themesOf = (tokens) => [
	['light', tokens],
	['dark', new Map([...tokens, ...darkTokens])],
]
const lightTokens = tokensOf(layered, propsRoot)
const builds = [
	[layered, themesOf(lightTokens)],
	[outlinedFields, themesOf(tokensOf(outlinedFields, propsRoot))],
	[layeredDark, themesOf(lightTokens).slice(1)],
]
const focusFaults = new Set()
function checkFocus(selector, body, theme, tokens) {
	const onFocus = /focus/.test(selector)
	const fieldBar = /__wrapper\)::after/.test(selector)
	for (const [property, value] of body.map(declarationOf)) {
		const ring = /^(?:outline|outline-color|caret-color)$/.test(property)
		if (!ring && !onFocus && !fieldBar) {
			continue
		}
		const resolved = follow(value, tokens)
		const fault = (reason) =>
			focusFaults.add(
				`${property}: ${value} (${reason}, ${theme} theme) in ${selector.slice(0, 90)}`,
			)
		if (property.startsWith('outline') && /currentcolor/i.test(resolved)) {
			fault('currentcolor')
		}
		for (const [, name] of resolved.matchAll(paletteVar)) {
			if (name.startsWith('--color-gray')) {
				if (
					ring &&
					name.includes('-lighten-') &&
					!selector.includes('static-light')
				) {
					fault('a light gray')
				}
			} else if (
				!(
					ring || fieldBar
						? /-graphic$/
						: /-(?:graphic|readable|readable-strong|contrast)$/
				).test(name)
			) {
				fault('not the graphic role')
			}
		}
	}
}
for (const [rules, themes] of builds) {
	for (const { selector, body } of rules) {
		for (const [theme, tokens] of themes) {
			checkFocus(selector, body, theme, tokens)
		}
	}
}
check(
	!focusFaults.size,
	`a focus indicator does not keep 3:1:\n  ${[...focusFaults].join('\n  ')}`,
)

const shadeNames = ['', ...[1, 2, 3, 4, 5].map((step) => `-darken-${step}`)]
const themedNames = roleNames.flatMap((name) => [
	`--color-${name}-readable`,
	`--color-${name}-readable-strong`,
	`--color-surface-${name}-readable`,
	`--color-${name}-graphic`,
])
const lightNames = [
	'--color-tint',
	...themedNames,
	...roleNames.flatMap((name) =>
		shadeNames.flatMap((shadeName) => [
			`--color-${name}${shadeName}-contrast`,
			`--color-${name}${shadeName}-cover`,
		]),
	),
]
// a token is declared in these rules, with these at-rules around them, and
// nowhere else
const misplaced = (rules, names, expected) =>
	names.filter((name) => {
		const places = new Set(
			rules
				.filter(({ body }) =>
					body.some((text) => text.startsWith(`${name}:`)),
				)
				.map(({ path }) => path),
		)
		return (
			places.size !== expected.length ||
			!expected.every((place) => places.has(place))
		)
	})
const lightMisplaced = misplaced(layered, lightNames, [
	'@layer volver.props > :where(:host, :root, .theme)',
])
check(
	!lightMisplaced.length,
	`not declared on :where(:host, :root, .theme) in @layer volver.props alone: ${lightMisplaced.join(', ')}`,
)
const darkMisplaced = misplaced(layeredDark, themedNames, [
	'@layer volver.themes > @media (prefers-color-scheme: dark) > :where(:host, :root, .theme):not(.theme--light)',
	'@layer volver.themes > :where(.theme.theme--dark)',
])
check(
	!darkMisplaced.length,
	`not redeclared by the dark theme in @layer volver.themes, under prefers-color-scheme and .theme--dark alone: ${darkMisplaced.join(', ')}`,
)
check(
	withoutComments(layeredCss)
		.trimStart()
		.startsWith(
			'@layer volver.reset, volver.preflight, volver.props, volver.components, volver.themes, volver.utilities;',
		),
	'the first statement is not the order of the six volver layers',
)
// each text utility sits in @layer volver.utilities and reads its own token;
// a utility that preflight extends shares its rule with the tags, so the
// selector is looked for in the list
const selectorsOf = (selector) => {
	const selectors = []
	let depth = 0
	let start = 0
	for (let index = 0; index < selector.length; index++) {
		if (selector[index] === '(') {
			depth++
		} else if (selector[index] === ')') {
			depth--
		} else if (selector[index] === ',' && !depth) {
			selectors.push(selector.slice(start, index).trim())
			start = index + 1
		}
	}
	return [...selectors, selector.slice(start).trim()]
}
const textUtilities = roleNames.flatMap((name) => [
	...shadeNames.map((shadeName) => `text-${name}${shadeName}-contrast`),
	`text-${name}-readable`,
	`text-${name}-readable-strong`,
	`text-surface-${name}-readable`,
	`text-${name}-graphic`,
])
const absentUtilities = textUtilities.filter(
	(name) =>
		!layered.some(
			({ context, selector, body }) =>
				context.join(' > ') === '@layer volver.utilities' &&
				selectorsOf(selector).includes(`:where(.${name})`) &&
				body.includes(
					`color: var(--color-${name.slice('text-'.length)})`,
				),
		),
)
check(
	!absentUtilities.length,
	`text utilities are gone, moved or read another token: ${absentUtilities.join(', ')}`,
)
// #endregion

compiler.dispose()

console.table(table)
console.table(readableTable)
if (failures.length) {
	console.error(
		`\n${failures.length} check(s) failed:\n- ${failures.join('\n- ')}`,
	)
	process.exit(1)
}
console.log(
	`Color checks passed: contrast threshold ${cssThreshold}, contrast of the shades and button states, neutrals, readable and graphic roles, Safari 17 steps, explicit values, legacy branch, utilities, declared tokens, focus indicators, consumer contract.`,
)
