<script setup>
	const props = defineProps({
		property: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
	})
</script>

<template>
	<details id="accordion-helper" class="font-light text-word-4 mb-lg">
		<summary
			aria-controls="#accordion-helper"
			class="flex items-center"
			aria-expanded="false">
			<iconify-icon icon="akar-icons:info" class="mr-sm"></iconify-icon>
			{{ title }}
		</summary>
		<table-utility
			v-bind="{
				property,
				'has-property': false,
				'label-first-col': 'Spacer size',
				'label-second-col': 'Spacer value',
			}"
			class="mb-lg"></table-utility>
	</details>
</template>
