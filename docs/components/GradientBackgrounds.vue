<script setup>
	import { onMounted } from 'vue'
	const gradients = Object.keys(icssExports['gradient']).reduce(
		(acc, key) => {
			acc.push({
				class: key,
				value: icssExports['gradient'][key],
			})
			return acc
		},
		[],
	)
</script>
<template>
	<div class="p-md">
		<div class="grid grid-cols-5 gap-md">
			<div
				v-for="gradient in gradients"
				:key="gradient.class"
				class="w-128 h-128 relative">
				<div
					class="absolute inset-0 m-auto"
					:class="`bg-gradient-${gradient.class}`"></div>
				<div
					class="bg-surface-2 absolute rounded-full h-24 px-sm text-center bottom-2 left-2">
					{{ gradient.class }}
				</div>
			</div>
		</div>
	</div>
</template>
