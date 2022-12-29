<script setup>
	const props = defineProps({
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
			default: undefined,
		},
		prefix: {
			type: String,
			default: '',
		},
		attribute: {
			type: String,
			default: '',
		},
		labelClass: {
			type: String,
			default: 'Class',
		},
		labelValue: {
			type: String,
			default: 'Value',
		},
		labelCustomProperty: {
			type: String,
			default: 'CSS Custom Property',
		},
		hideValue: {
			type: Boolean,
			default: false,
		},
		hideClass: {
			type: Boolean,
			default: false,
		},
		exclude: {
			type: Array,
			default: () => [],
		},
	})

	const items = computed(() => {
		return icssExports[props.property] ?? []
	})

	const getClass = (key) => {
		return `.${
			props.prefix && props.prefix !== key
				? `${props.prefix}-${key}`
				: key
		}`
	}

	const getCustomProperty = (key) => {
		const prefix =
			props.customProperty !== key ? `${props.customProperty}-` : ''
		return `--${
			props.customProperty ? `${prefix}${key.replace('/', '-')}` : key
		}`
	}
</script>

<template>
	<div class="max-h-288 overflow-y-auto">
		<table
			v-if="Object.keys(items).length"
			class="vv-table vv-table--inline-spacing nx-md">
			<thead class="sticky z-sticky top-0 bg-surface-1">
				<tr>
					<th v-if="!hideClass">{{ labelClass }}</th>
					<th v-if="customProperty">{{ labelCustomProperty }}</th>
					<th v-if="!hideValue">{{ labelValue }}</th>
				</tr>
			</thead>
			<tbody class="align-baseline">
				<template v-for="(value, key) in items">
					<tr v-if="!exclude.includes(key)" :key="key">
						<td
							v-if="!hideClass"
							translate="no"
							class="font-mono text-accent whitespace-nowrap">
							<slot name="class" v-bind="{ value, key }">
								{{ getClass(key) }}
							</slot>
						</td>
						<td
							v-if="customProperty !== undefined"
							translate="no"
							class="font-mono text-brand whitespace-nowrap">
							<slot
								name="custom-property"
								v-bind="{ value, key }">
								{{ getCustomProperty(key) }}: {{ value }};
							</slot>
						</td>
						<td
							v-if="!hideValue"
							translate="no"
							class="font-mono text-info whitespace-nowrap">
							<slot name="value" v-bind="{ value, key }">
								{{
									`${attribute || property}: ${
										customProperty !== undefined
											? `var(${getCustomProperty(key)})`
											: value
									};`
								}}
							</slot>
						</td>
					</tr>
				</template>
			</tbody>
		</table>
	</div>
</template>
