<script setup>
	import { computed } from 'vue'
	import icssExports from '../utils/icssExports'

	const props = defineProps({
		prefix: {
			type: String,
			required: true,
		},
		property: {
			type: String,
			required: true,
		},
	})

	const items = computed(() => {
		return icssExports[props.property] ?? []
	})
</script>

<template>
	<div class="max-h-288 overflow-y-auto">
		<table v-if="Object.keys(items).length" class="w-full text-xs">
			<thead class="sticky z-sticky top-0 bg-surface-1">
				<tr>
					<th>
						<div
							class="border-b border-surface-5 py-sm text-word-2 font-semibold">
							Class / Prop
						</div>
					</th>
					<th>
						<div
							class="border-b border-surface-5 py-sm text-word-2 font-semibold">
							Properties
						</div>
					</th>
				</tr>
			</thead>
			<tbody class="align-baseline">
				<tr v-for="(value, key) in items" :key="key">
					<td
						translate="no"
						class="font-mono text-accent whitespace-nowrap">
						<div class="border-b border-surface-3 py-sm">
							{{ prefix }}-{{ key }}
						</div>
					</td>
					<td
						translate="no"
						class="font-mono text-info whitespace-nowrap">
						<div class="border-b border-surface-3 py-sm">
							{{ property }}: {{ value }};
						</div>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
