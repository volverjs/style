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
	watchThrottled(
		[selected, colorHue, colorSaturation, colorLightess, isThemeDark],
		() => {
			if (documentElement.value) {
				if (colorsEls.value[selected.value]) {
					const [r, g, b] = window
						.getComputedStyle(colorsEls.value[selected.value], null)
						.getPropertyValue('background-color')
						.replace(/rgb\(|\)/g, '')
						.split(',')
						.map((item) => Number(item.trim()))
					const [h, s, l] = rgbToHls(r, g, b)
					selectedRgb.value = { r, g, b }
					selectedHls.value = {
						h: Math.round(h),
						s: Math.round(s),
						l: Math.round(l),
					}
					selectedHex.value = hslToHex(h, s, l)
				}
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

	const rgbToHls = (r, g, b) => {
		r /= 255
		g /= 255
		b /= 255
		const l = Math.max(r, g, b)
		const s = l - Math.min(r, g, b)
		const h = s
			? l === r
				? (g - b) / s
				: l === g
				? 2 + (b - r) / s
				: 4 + (r - g) / s
			: 0
		return [
			60 * h < 0 ? 60 * h + 360 : 60 * h,
			100 *
				(s ? (l <= 0.5 ? s / (2 * l - s) : s / (2 - (2 * l - s))) : 0),
			(100 * (2 * l - s)) / 2,
		]
	}

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

	const {
		copy: copyToClipboard,
		copied,
		isSupported: isCopyToClipboardSupported,
	} = useClipboard({ source: selectedHex })
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
				transform: translateX(-50%);
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
		transform: scale(0);
	}
</style>
