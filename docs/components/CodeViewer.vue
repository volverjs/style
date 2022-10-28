<script setup>
	import { computedAsync } from '@vueuse/core'
	import { highlight, languages } from 'prismjs/components/prism-core'
	import 'prismjs/components/prism-markup'
	import 'prismjs/themes/prism-tomorrow.css'
	import 'vue-live/lib/vue-live.esm.css'
	import { PrismEditor } from 'vue-prism-editor'
	import 'vue-prism-editor/dist/prismeditor.min.css'

	const props = defineProps({
		code: {
			type: String,
			default: undefined,
		},
		resourceType: {
			type: String,
			default: 'components',
		},
		resourceFolder: {
			type: String,
			default: undefined,
		},
		resourceName: {
			type: String,
			default: undefined,
		},
	})

	const currentCode = computedAsync(async () => {
		if (props.code) {
			return props.code
		}
		const { html } = await import(
			`../contents/${props.resourceType}/${props.resourceFolder}/${props.resourceName}.md`
		)
		return html
	})

	const highlighter = (code) => {
		return highlight(code, languages.html)
	}
</script>

<template>
	<div class="vv-card">
		<div class="vv-card__header bg-surface">Lorem</div>
		<div class="vv-card__content theme theme--dark">
			<PrismEditor
				:model-value="currentCode"
				:highlight="highlighter"
				class="font-mono" />
		</div>
	</div>
</template>
