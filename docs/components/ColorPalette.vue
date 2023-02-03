<script setup>
	const props = defineProps({
		name: {
			type: String,
			required: true,
		},
	})

	const selected = ref(props.name)
	const shades = computed(() =>
		Object.keys(icssExports['colors']).reduce((acc, key) => {
			if (typeof key === 'string' && key.startsWith(props.name)) {
				acc[key] = icssExports.colors[key]
			}
			return acc
		}, {}),
	)

	const shadesKeys = computed(() =>
		Object.keys(shades.value).sort((a, b) => {
			const aNumber = Number(a.split('-').pop())
			const bNumber = Number(b.split('-').pop())
			if (
				(!a.includes('lighten') &&
					!a.includes('darken') &&
					b.includes('darken')) ||
				(!b.includes('lighten') &&
					!b.includes('darken') &&
					a.includes('lighten'))
			) {
				return 1
			}
			if (
				(!a.includes('lighten') &&
					!a.includes('darken') &&
					b.includes('lighten')) ||
				(!b.includes('lighten') &&
					!b.includes('darken') &&
					a.includes('darken'))
			) {
				return -1
			}
			if (a.includes('lighten') && b.includes('darken')) {
				return 1
			}
			if (a.includes('darken') && b.includes('lighten')) {
				return -1
			}
			if (a.includes('lighten') && b.includes('lighten')) {
				return aNumber - bNumber
			}
			if (a.includes('darken') && b.includes('darken')) {
				return bNumber - aNumber
			}
		}),
	)

	const documentElement = ref('')
	const colorHue = useCssVar(`--color-${props.name}-hue`, documentElement)
	const colorSaturation = useCssVar(
		`--color-${props.name}-saturation`,
		documentElement,
	)
	const colorLightess = useCssVar(
		`--color-${props.name}-lightness`,
		documentElement,
	)

	onMounted(() => {
		documentElement.value = document.documentElement
		selectedHls.value = getHls(
			getComputedStyle(documentElement.value).getPropertyValue(
				`--color-${selected.value}`,
			),
		)
	})

	const colorHls = computed(() => {
		return {
			[`--color-${props.name}-hue`]: colorHue.value,
			[`--color-${props.name}-saturation`]: colorSaturation.value,
			[`--color-${props.name}-lightness`]: colorLightess.value,
		}
	})

	const getPropertyValue = (property) => {
		return colorHls.value[property]
	}

	const getHls = (color) => {
		const groups = color
			.replace(/var\((--color-([a-z-]+))\)/g, (match, p1) => {
				return getPropertyValue(p1)
			})
			.replace(
				/calc\(\s*(\d|.+)%\s*(?:\+|-)\s*(\d|.+)%\s*\*\s*(\d|.[^\s]+)\s*\)/g,
				(match, p1, p2, p3) => {
					return `${
						parseFloat(p1) + parseFloat(p2) * parseFloat(p3)
					}%`
				},
			)
			.matchAll(
				/hsla?\(\s*(\d|.+)deg,?\s*(\d|.+)%,?\s*(\d|.+)%(?:\/1)?\)/g,
			)
		for (const [element, h, s, l] of groups) {
			return { h: Math.ceil(h), s: Math.ceil(s), l: Math.ceil(l) }
		}
	}

	const selectedHls = ref('')
	watchThrottled(
		[selected, colorHue, colorSaturation, colorLightess],
		() => {
			if (documentElement.value) {
				selectedHls.value = getHls(
					getComputedStyle(documentElement.value).getPropertyValue(
						`--color-${selected.value}`,
					),
				)
			}
		},
		{ immediate: true, throttle: 500 },
	)

	const hslToHex = (h, s, l) => {
		l /= 100
		const a = (s * Math.min(l, 1 - l)) / 100
		const f = (n) => {
			const k = (n + h / 30) % 12
			const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1)
			return Math.round(255 * color)
				.toString(16)
				.padStart(2, '0') // convert to hexex and prefix "0" if needed
		}
		return `#${f(0)}${f(8)}${f(4)}`
	}

	const hexToHls = (hex) => {
		let r = 0,
			g = 0,
			b = 0
		if (hex.length === 4) {
			r = '0x' + hex[1] + hex[1]
			g = '0x' + hex[2] + hex[2]
			b = '0x' + hex[3] + hex[3]
		} else if (hex.length === 7) {
			r = '0x' + hex[1] + hex[2]
			g = '0x' + hex[3] + hex[4]
			b = '0x' + hex[5] + hex[6]
		}
		r /= 255
		g /= 255
		b /= 255
		let cmin = Math.min(r, g, b),
			cmax = Math.max(r, g, b),
			delta = cmax - cmin,
			h = 0,
			s = 0,
			l = 0

		if (delta === 0) h = 0
		else if (cmax === r) h = ((g - b) / delta) % 6
		else if (cmax === g) h = (b - r) / delta + 2
		else h = (r - g) / delta + 4

		h = Math.round(h * 60)

		if (h < 0) h += 360

		l = (cmax + cmin) / 2
		s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1))
		s = +(s * 100).toFixed(1)
		l = +(l * 100).toFixed(1)
		return { h, s, l }
	}

	const selectedHex = computed(() => {
		const { h, s, l } = selectedHls.value ?? {}
		return hslToHex(h, s, l)
	})

	const hslToRgb = (h, s, l) => {
		s /= 100
		l /= 100
		const k = (n) => (n + h / 30) % 12
		const a = s * Math.min(l, 1 - l)
		const f = (n) =>
			l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)))
		return {
			r: Math.ceil(255 * f(0)),
			g: Math.ceil(255 * f(8)),
			b: Math.ceil(255 * f(4)),
		}
	}

	const selectedRgb = computed(() => {
		const { h, s, l } = selectedHls.value ?? {}
		return hslToRgb(h, s, l)
	})

	const colorHex = computed({
		get() {
			if (
				!colorHue.value ||
				!colorSaturation.value ||
				!colorLightess.value
			) {
				return ''
			}
			return hslToHex(
				parseFloat(colorHue.value.replace('deg', '')),
				parseFloat(colorSaturation.value.replace('%', '')),
				parseFloat(colorLightess.value.replace('%', '')),
			)
		},
		set(newValue) {
			const { h, s, l } = hexToHls(newValue)
			colorHue.value = `${h}deg`
			colorSaturation.value = `${s}%`
			colorLightess.value = `${l}%`
		},
	})
</script>

<template>
	<div class="preflight-revert">
		<div
			class="grid text-center font-mono whitespace-nowrap text-14"
			:class="`grid-cols-${shadesKeys.length}`">
			<div
				v-for="item in shadesKeys"
				:key="item"
				class="shade"
				:class="{ 'shade--selected': selected === item }"
				:style="{ '--bg': `var(--color-${item})` }">
				<button
					type="button"
					:class="`bg-${item}`"
					class="py-22 cursor-pointer w-full"
					@click="selected = item">
					<span
						class="vv-tooltip vv-tooltip--top"
						role="tooltip"
						inert>
						{{ item }}
					</span>
				</button>
			</div>
		</div>
		<div v-if="selected" class="bg-surface p-md mb-lg shadow-md rounded-lg">
			<div class="flex flex-col sm:flex-row gap-md flex-1">
				<div class="flex flex-1 gap-md">
					<div class="w-100 h-100" :class="`bg-${selected}`"></div>
					<div>
						<code class="mb-6 block">--color-{{ selected }}</code>
						<div>
							<strong class="font-bold">HSL</strong>: hsl({{
								selectedHls.h
							}}deg, {{ selectedHls.s }}%, {{ selectedHls.l }}%)
						</div>
						<div>
							<strong class="font-bold">HEX</strong>:
							{{ selectedHex }}
						</div>
						<div>
							<strong class="font-bold">RGB</strong>: rgb({{
								selectedRgb.r
							}}, {{ selectedRgb.g }}, {{ selectedRgb.b }})
						</div>
					</div>
				</div>
				<div>
					<div
						v-if="colorHex"
						class="vv-input-text vv-input-text--icon-after">
						<label for="textfield-color">Change Color</label>
						<div class="vv-input-text__wrapper">
							<input
								id="textfield-color"
								v-model="colorHex"
								type="color"
								name="textfield-color"
								aria-describedby="textfield-color-hint" />
							<IconifyIcon icon="akar-icons:water" />
						</div>
						<small
							id="textfield-color-hint"
							class="vv-input-text__hint">
							Change the color {{ name }} of this site.
						</small>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
	.shade {
		position: relative;
		padding-bottom: var(--spacing-10);
		margin-bottom: var(--spacing-4);

		&--selected {
			&::after {
				content: '';
				position: absolute;
				bottom: 0;
				left: 50%;
				transform: translateX(-50%);
				width: 0;
				height: 0;
				border-style: solid;
				border-width: var(--spacing-10) var(--spacing-10) 0;
				border-color: var(--bg) transparent transparent;
			}
		}
	}
</style>
