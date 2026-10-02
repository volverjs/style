<script setup>
	// Sets a palette color at runtime on a light and a dark region, as a
	// tenant brand would be, and measures in this browser the contrast of
	// every text and graphic the library derives from it, on the backgrounds
	// it is meant for. WCAG 2 asks for 4.5:1 to text and 3:1 to graphics.
	const names = ['brand', 'accent', 'success', 'danger', 'info', 'warning']
	const presets = [
		'#166abd',
		'#9365ff',
		'#f5c400',
		'#45cb85',
		'#1a0d66',
		'#ff4081',
	]
	const themes = ['light', 'dark']
	const name = ref('brand')
	const value = ref('#9365ff')

	const pairs = computed(() => [
		{ text: `${name.value}-readable`, background: 'surface' },
		{ text: `${name.value}-readable`, background: 'surface-1' },
		{ text: `${name.value}-readable`, background: 'surface-2' },
		{ text: `${name.value}-readable-strong`, background: 'surface-2' },
		{ text: `${name.value}-graphic`, background: 'surface-2', min: 3 },
		{
			text: `surface-${name.value}-readable`,
			background: `surface-${name.value}`,
		},
		{ text: `${name.value}-contrast`, background: name.value },
		{
			text: `${name.value}-darken-1-contrast`,
			background: `${name.value}-darken-1`,
		},
		{
			text: `${name.value}-darken-2-contrast`,
			background: `${name.value}-darken-2`,
		},
	])

	// the brand also gives its hue to the neutrals, through --color-tint
	const override = computed(() => ({
		[`--color-${name.value}`]: value.value,
		...(name.value === 'brand' ? { '--color-tint': value.value } : {}),
	}))

	const root = ref()
	const results = ref({})
	let context
	const channels = (color) => {
		context ??= document
			.createElement('canvas')
			.getContext('2d', { willReadFrequently: true })
		context.clearRect(0, 0, 1, 1)
		context.fillStyle = '#000'
		context.fillStyle = color
		context.fillRect(0, 0, 1, 1)
		return [...context.getImageData(0, 0, 1, 1).data].slice(0, 3)
	}
	const luminance = (color) => {
		const [r, g, b] = channels(color).map((value) => {
			const c = value / 255
			return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4
		})
		return 0.2126 * r + 0.7152 * g + 0.0722 * b
	}
	const measure = () => {
		if (!root.value) {
			return
		}
		const next = {}
		for (const el of root.value.querySelectorAll('[data-pair]')) {
			const style = getComputedStyle(el)
			const text = luminance(style.color)
			const background = luminance(style.backgroundColor)
			next[el.dataset.pair] = {
				ratio:
					(Math.max(text, background) + 0.05) /
					(Math.min(text, background) + 0.05),
				min: Number(el.dataset.min),
			}
		}
		results.value = next
	}
	watch([name, value], () => nextTick(() => requestAnimationFrame(measure)))
	onMounted(() => requestAnimationFrame(measure))

	const measured = computed(() => Object.keys(results.value).length)
	const below = computed(
		() =>
			Object.values(results.value).filter(({ ratio, min }) => ratio < min)
				.length,
	)
	const summary = computed(() => {
		if (!measured.value) {
			return 'Measuring…'
		}
		return below.value
			? `${below.value} of ${measured.value} colors fall below their ratio in this browser.`
			: `All ${measured.value} colors keep their ratio in this browser, 4.5:1 for text and 3:1 for the graphic.`
	})
</script>

<template>
	<div ref="root" class="vv-card preflight-revert">
		<div class="vv-card__header bg-surface">Readable Check</div>
		<div class="vv-card__content flex flex-col gap-md">
			<div class="flex flex-wrap items-center gap-sm">
				<div class="vv-select">
					<label for="readable-check-name">Color</label>
					<div class="vv-select__wrapper">
						<select id="readable-check-name" v-model="name">
							<option
								v-for="item in names"
								:key="item"
								:value="item">
								{{ item }}
							</option>
						</select>
					</div>
				</div>
				<div class="vv-input-text">
					<label for="readable-check-value">Value</label>
					<div class="vv-input-text__wrapper">
						<input
							id="readable-check-value"
							v-model.lazy="value"
							type="text"
							spellcheck="false"
							class="font-mono" />
					</div>
				</div>
				<input
					v-model="value"
					type="color"
					aria-label="Pick a color"
					class="self-end w-44 h-44 p-0 border-0 rounded cursor-pointer" />
			</div>
			<div class="flex flex-wrap gap-xs">
				<button
					v-for="preset in presets"
					:key="preset"
					type="button"
					class="vv-button vv-button--secondary font-mono text-12"
					@click="value = preset">
					{{ preset }}
				</button>
			</div>
			<div class="grid md:grid-cols-2 gap-md">
				<div
					v-for="theme in themes"
					:key="theme"
					:class="`theme theme--${theme}`"
					:style="override"
					class="flex flex-col gap-xs p-sm rounded bg-surface text-word">
					<span class="font-semibold text-14">{{ theme }}</span>
					<div
						v-for="(pair, index) in pairs"
						:key="`${pair.text} ${pair.background}`"
						:data-pair="`${theme} ${index}`"
						:data-min="pair.min ?? 4.5"
						:style="{
							color: `var(--color-${pair.text})`,
							backgroundColor: `var(--color-${pair.background})`,
						}"
						class="flex items-center justify-between gap-sm px-sm py-xs rounded font-mono text-12">
						<span>{{ pair.text }} on {{ pair.background }}</span>
						<span
							v-if="results[`${theme} ${index}`]"
							class="whitespace-nowrap">
							{{
								results[`${theme} ${index}`].ratio.toFixed(2)
							}}:1
							{{
								results[`${theme} ${index}`].ratio >=
								(pair.min ?? 4.5)
									? '✓'
									: '✗'
							}}
						</span>
					</div>
				</div>
			</div>
			<p
				class="text-14"
				:class="{
					'text-danger-readable': below,
					'text-success-readable': measured && !below,
				}">
				{{ summary }}
			</p>
		</div>
	</div>
</template>
