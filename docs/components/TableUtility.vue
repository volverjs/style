<script setup>
	const props = defineProps({
		prefix: {
			type: String,
			default: '',
			required: false,
		},
		property: {
			type: String,
			required: true,
		},
		/**
		 * Sometimes css property doesn't match with the property used to generate css utilities.
		 * Use this prop to change the property name within the demonstration table.
		 */
		customProperty: {
			type: String,
			default: '',
			required: false,
		},
		/**
		 * Sometimes, especially in helper classes (e.g. spacing) we don’t need to specify the property because we only care about the value.
		 */
		hasProperty: {
			type: Boolean,
			default: true,
		},
		/**
		 * Used to customize the table columns.
		 */
		customColumns: {
			type: Object,
			default: () => {},
		},
		labelFirstCol: {
			type: String,
			default: 'Class / Prop',
			required: false,
		},
		labelSecondCol: {
			type: String,
			default: 'Properties',
			required: false,
		},
	})

	const items = computed(() => {
		return icssExports[props.property] ?? []
	})

	const columns = computed(() => {
		if (typeof props.customColumns == 'string') {
			return JSON.parse(props.customColumns)
		}
		return null
	})
</script>

<template>
	<div v-if="columns" class="max-h-288 overflow-y-auto mb-lg">
		<table class="w-full text-xs">
			<thead class="sticky z-sticky top-0 bg-surface-1">
				<tr>
					<template
						v-for="(column, index) in Object.values(columns)"
						:key="index">
						<th>
							<div
								class="border-b border-surface-5 py-sm text-word-2 font-semibold">
								{{ column }}
							</div>
						</th>
					</template>
				</tr>
			</thead>
			<tbody class="align-baseline">
				<tr v-for="(value, key, i) in items" :key="key">
					<td
						v-if="i == 0"
						:rowspan="Object.values(items).length"
						translate="no"
						class="font-mono text-accent">
						{{ prefix }}
					</td>
					<td
						translate="no"
						class="font-mono text-word-4 whitespace-nowrap">
						<div class="border-b border-surface-3 py-sm">
							{{ key }}
						</div>
					</td>
					<td
						translate="no"
						class="font-mono text-info whitespace-nowrap">
						<div
							v-if="hasProperty"
							class="border-b border-surface-3 py-sm">
							{{ customProperty || property }}: {{ value }};
						</div>
						<div v-else class="border-b border-surface-3 py-sm">
							{{ value }};
						</div>
					</td>
				</tr>
			</tbody>
		</table>
	</div>

	<div v-else class="max-h-288 overflow-y-auto">
		<table v-if="Object.keys(items).length" class="w-full text-xs">
			<thead class="sticky z-sticky top-0 bg-surface-1">
				<tr>
					<th>
						<div
							class="border-b border-surface-5 py-sm text-word-2 font-semibold">
							{{ labelFirstCol }}
						</div>
					</th>
					<th>
						<div
							class="border-b border-surface-5 py-sm text-word-2 font-semibold">
							{{ labelSecondCol }}
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
							{{ prefix ? `${prefix}-${key}` : key }}
						</div>
					</td>
					<td
						translate="no"
						class="font-mono text-info whitespace-nowrap">
						<div
							v-if="hasProperty"
							class="border-b border-surface-3 py-sm">
							{{ customProperty || property }}: {{ value }};
						</div>
						<div v-else class="border-b border-surface-3 py-sm">
							{{ value }};
						</div>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
