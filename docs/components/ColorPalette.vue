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

	const selectedHsl = computed(() => {
		const groups = shades.value[selected.value]
			.replace(/var\((--color-([a-z-]+))\)/g, (match, p1) => {
				return getComputedStyle(
					document.documentElement,
				).getPropertyValue(p1)
			})
			.matchAll(
				/hsla?\(\s*(\d|.+)deg,?\s*(\d|.+)%,?\s*(\d|.+)%(?:\/1)?\)/g,
			)
		for (const [element, h, s, l] of groups) {
			return { h: Math.ceil(h), s: Math.ceil(s), l: Math.ceil(l) }
		}
	})

	const selectedHex = computed(() => {
		let { h, s, l } = selectedHsl.value ?? {}
		l /= 100
		const a = (s * Math.min(l, 1 - l)) / 100
		const f = (n) => {
			const k = (n + h / 30) % 12
			const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1)
			return Math.round(255 * color)
				.toString(16)
				.padStart(2, '0') // convert to Hex and prefix "0" if needed
		}
		return `#${f(0)}${f(8)}${f(4)}`
	})

	const selectedRgb = computed(() => {
		let { h, s, l } = selectedHsl.value ?? {}
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
	})
</script>

<template>
	<div
		class="grid text-center font-mono whitespace-nowrap text-14 preflight-revert"
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
				<span class="vv-tooltip vv-tooltip--top" role="tooltip" inert>
					{{ item }}
				</span>
			</button>
		</div>
	</div>
	<div
		v-if="selected"
		class="bg-surface p-md flex gap-md mb-lg shadow-md rounded-lg">
		<div class="w-100 h-100" :class="`bg-${selected}`"></div>
		<div>
			<code class="mb-8 block">--color-{{ selected }}</code>
			<div>
				<strong class="font-bold">HSL</strong>: hsl({{
					selectedHsl.h
				}}deg, {{ selectedHsl.s }}%, {{ selectedHsl.l }}%)
			</div>
			<div><strong class="font-bold">HEX</strong>: {{ selectedHex }}</div>
			<div>
				<strong class="font-bold">RGB</strong>: rgb({{ selectedRgb.r }},
				{{ selectedRgb.g }}, {{ selectedRgb.b }})
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
