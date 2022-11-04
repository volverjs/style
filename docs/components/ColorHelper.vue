<script setup>
	import { computed } from 'vue'
	import icssExports from '../utils/icssExports'

	const colors = computed(() => {
		let exports = icssExports['colors'] ?? []
		return Object.keys(exports)
	})
</script>

<template>
	<div class="grid grid-cols-5" style="gap: 2em 1.5em">
		<template v-for="(color, index) in colors" :key="index">
			<div class="flex flex-col items-center">
				<div :class="`bg-${color}`" class="px-36 py-24 mb-6"></div>
				<span class="text-smaller font-white text-center">{{
					color
				}}</span>
			</div>
		</template>
	</div>
</template>
