<script setup>
	const props = defineProps({
		name: {
			type: String,
			required: true,
		},
	})

	const selected = ref()
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

			const aDarken = a.includes('darken')
			const bDarken = b.includes('darken')
			const aLighten = a.includes('lighten')
			const bLighten = b.includes('lighten')
			const aLightenOrDarken = aLighten || aDarken
			const bLightenOrDarken = bLighten || bDarken
			if (
				(!aLightenOrDarken && bDarken) ||
				(!bLightenOrDarken && aLighten)
			) {
				return 1
			}
			if (
				(!aLightenOrDarken && bLighten) ||
				(!bLightenOrDarken && aDarken)
			) {
				return -1
			}
			if (aLighten) {
				if (bDarken) {
					return 1
				}
				if (bLighten) {
					return aNumber - bNumber
				}
			}
			if (aDarken) {
				if (bLighten) {
					return -1
				}
				if (bDarken) {
					return bNumber - aNumber
				}
			}
		}),
	)
	const shadesValues = ref({})
	const shadesValuesInline = computed(() =>
		shadesKeys.value.reduce((acc, key) => {
			acc += `${key}: ${shadesValues.value[key]}\n`
			return acc
		}, ''),
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

	const isThemeDark = inject('isThemeDark')
	watch(isThemeDark, () => {
		nextTick(() => {
			if (documentElement.value) {
				documentElement.value.style = ''
				nextTick(() => {
					colorHue.value = getComputedStyle(
						documentElement.value,
					).getPropertyValue(`--color-${props.name}-hue`)
					colorSaturation.value = getComputedStyle(
						documentElement.value,
					).getPropertyValue(`--color-${props.name}-saturation`)
					colorLightess.value = getComputedStyle(
						documentElement.value,
					).getPropertyValue(`--color-${props.name}-lightness`)
				})
			}
		})
	})

	onMounted(() => {
		documentElement.value = document.documentElement
		selected.value = props.name
	})

	const selectedHls = ref(undefined)
	const selectedRgb = ref(undefined)
	const selectedHex = ref(undefined)
	const colorsEls = ref([])
	const getComputedStyleRgb = (name) => {
		const [r, g, b] = window
			.getComputedStyle(colorsEls.value[name], null)
			.getPropertyValue('background-color')
			.replace(/rgb\(|\)/g, '')
			.split(',')
			.map((item) => Number(item.trim()))
		return { r, g, b }
	}
	watchThrottled(
		[selected, colorHue, colorSaturation, colorLightess, isThemeDark],
		() => {
			if (documentElement.value) {
				if (colorsEls.value[selected.value]) {
					const { r, g, b } = getComputedStyleRgb(selected.value)
					const { h, s, l } = rgbToHsl(r, g, b)
					selectedRgb.value = { r, g, b }
					selectedHls.value = {
						h: Math.round(h),
						s: Math.round(s),
						l: Math.round(l),
					}
					selectedHex.value = hslToHex(h, s, l)
				}
				shadesKeys.value.forEach((key) => {
					const rgb = getComputedStyleRgb(key)
					shadesValues.value[key] = rgbToHex(rgb.r, rgb.g, rgb.b)
				})
			}
		},
		{ immediate: true, throttle: 500 },
	)

	const rgbToHex = (r, g, b) =>
		'#' +
		[r, g, b]
			.map((x) => {
				const hex = x.toString(16)
				return hex.length === 1 ? '0' + hex : hex
			})
			.join('')

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

	const hexToHsl = (hex) => {
		const rgb = hexToRgb(hex)
		if (!rgb) {
			return undefined
		}
		return rgbToHsl(rgb.r, rgb.g, rgb.b)
	}

	const hexToRgb = (hex) => {
		const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
		if (!result) {
			return undefined
		}
		return {
			r: parseInt(result[1], 16),
			g: parseInt(result[2], 16),
			b: parseInt(result[3], 16),
		}
	}

	const rgbToHsl = (r, g, b) => {
		// make r, g, and b fractions of 1
		r /= 255
		g /= 255
		b /= 255

		// find greatest and smallest channel values
		let cmin = Math.min(r, g, b),
			cmax = Math.max(r, g, b),
			delta = cmax - cmin,
			h = 0,
			s = 0,
			l = 0

		if (delta !== 0) {
			// red is max
			if (cmax === r) {
				h = ((g - b) / delta) % 6
			}
			// green is max
			else if (cmax === g) {
				h = (b - r) / delta + 2
			}
			// blue is max
			else {
				h = (r - g) / delta + 4
			}
		}

		h = Math.round(h * 60)

		// make negative hues positive behind 360°
		if (h < 0) h += 360

		// calculate lightness
		l = (cmax + cmin) / 2

		// calculate saturation
		s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1))

		// multiply l and s by 100
		s = +(s * 100).toFixed(1)
		l = +(l * 100).toFixed(1)

		return { h, s, l }
	}

	const colorHex = computed({
		get() {
			return selectedHex.value
		},
		set(newValue) {
			const hls = hexToHsl(newValue)
			if (!hls) {
				return
			}
			colorHue.value = `${hls.h}deg`
			colorSaturation.value = `${hls.s}%`
			colorLightess.value = `${hls.l}%`
		},
	})

	// copy to clipboard
	const {
		copy: copyToClipboard,
		copied,
		isSupported: isCopyToClipboardSupported,
	} = useClipboard({ source: selectedHex })
	const { copy: copyAllToClipboard, copied: copiedAll } = useClipboard({
		source: shadesValuesInline,
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
					:ref="
						(el) => {
							colorsEls[item] = el
						}
					"
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
					<div
						class="w-100 h-100 border border-surface-3 relative"
						:class="`bg-${selected}`">
						<button
							v-if="isCopyToClipboardSupported"
							title="Copy to clipboard"
							class="inset-0 cursor-pointer absolute flex items-center justify-center"
							@click.stop="copyToClipboard()">
							<Transition name="copy-scale">
								<div
									v-if="copied"
									class="w-28 h-28 bg-white text-black rounded-full flex items-center justify-center shadow-2xl">
									<IconifyIcon icon="akar-icons:copy" />
								</div>
							</Transition>
						</button>
					</div>
					<div>
						<code class="mb-6 block">--color-{{ selected }}</code>
						<div v-if="selectedHls">
							<strong class="font-bold">HSL</strong>: hsl({{
								selectedHls.h
							}}deg, {{ selectedHls.s }}%, {{ selectedHls.l }}%)
						</div>
						<div v-if="selectedHex">
							<strong class="font-bold">HEX</strong>:
							{{ selectedHex }}
						</div>
						<div v-if="selectedRgb">
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
			<button
				v-if="isCopyToClipboardSupported"
				type="button"
				class="vv-button vv-button--action-quiet"
				@click.stop="copyAllToClipboard()">
				<IconifyIcon icon="akar-icons:copy" /> Copy all shades
				<Transition name="copy-scale">
					<span
						v-if="copiedAll"
						role="status"
						class="vv-badge vv-badge--sm vv-badge--rounded vv-badge--success">
						Copied!
					</span>
				</Transition>
			</button>
		</div>
	</div>
</template>

<style lang="scss">
	@use '@/context' as *;

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
				translate: -50%;
				width: 0;
				height: 0;
				border-style: solid;
				border-width: var(--spacing-10) var(--spacing-10) 0;
				border-color: var(--bg) transparent transparent;
			}
		}
	}

	.copy-scale-enter-active,
	.copy-scale-leave-active {
		transition: var(--transition-all);
	}

	.copy-scale-enter-from,
	.copy-scale-leave-to {
		opacity: var(--opacity-0);
		scale: 0;
	}
</style>
