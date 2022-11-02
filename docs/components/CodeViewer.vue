<script setup>
	import { computedAsync, useClipboard } from '@vueuse/core'
	import { highlight, languages } from 'prismjs/components/prism-core'
	import 'prismjs/components/prism-bash'
	import 'prismjs/components/prism-css'
	import 'prismjs/components/prism-markup'
	import 'prismjs/components/prism-scss'
	import { PrismEditor } from 'vue-prism-editor'

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
		language: {
			type: String,
			default: 'html',
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
		return highlight(code, languages[props.language] ?? languages.text)
	}

	// actions
	const {
		copy: copyToClipboard,
		copied,
		isSupported: isCopyToClipboardSupported,
	} = useClipboard({ source: currentCode })
</script>

<template>
	<div class="vv-card">
		<div class="none">
			<slot />
		</div>
		<div class="vv-card__content theme theme--dark">
			<button
				v-if="isCopyToClipboardSupported"
				title="Copy to clipboard"
				:class="{ 'bg-success-lighten-5 text-black': copied }"
				class="vv-button vv-button--action-quiet absolute top-xs right-xs z-sticky"
				type="button"
				@click.stop="copyToClipboard()">
				<IconifyIcon icon="akar-icons:copy" />
				<template v-if="copied">Copied!</template>
			</button>
			<PrismEditor
				:model-value="currentCode"
				:highlight="highlighter"
				class="font-mono" />
		</div>
	</div>
</template>
