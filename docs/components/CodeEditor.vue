<script setup>
	import { computedAsync, useClipboard } from '@vueuse/core'
	import { inject, provide, ref, watch } from 'vue'
	import { VueLive } from 'vue-live'
	import 'vue-live/lib/vue-live.esm.css'
	import CodeLayoutVue from './CodeLayout.vue'

	// props
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

	// code
	const editedCode = ref('')
	const metadata = ref({})
	const currentCode = computedAsync(async () => {
		if (props.code) {
			return props.code
		}
		const { attributes, html } = await import(
			`../contents/${props.resourceType}/${props.resourceFolder}/${props.resourceName}.md`
		)
		metadata.value = attributes
		return html
	})
	watch(
		currentCode,
		() => {
			if (currentCode.value) {
				editedCode.value = currentCode.value
			}
		},
		{ immediate: true },
	)
	const onChange = (newCode) => {
		if (typeof newCode === 'string') {
			editedCode.value = newCode
		}
	}

	// actions
	const showSource = ref(false)
	const isThemeDark = inject('isThemeDark')
	const isPreviewInDarkMode = ref(isThemeDark.value)
	watch(isThemeDark, (value) => {
		isPreviewInDarkMode.value = value
	})
	provide('showSource', showSource)
	provide('isPreviewInDarkMode', isPreviewInDarkMode)
	provide('metadata', metadata)
	const toggleSource = () => {
		showSource.value = !showSource.value
	}
	const toggleDarkMode = () => {
		isPreviewInDarkMode.value = !isPreviewInDarkMode.value
	}
	const {
		copy: copyToClipboard,
		copied,
		isSupported: isCopyToClipboardSupported,
	} = useClipboard({ source: editedCode })
</script>

<template>
	<div class="vv-card">
		<div class="vv-card__header bg-surface flex items-center">
			<span v-if="metadata.title">{{ metadata.title }}</span>
			<div class="vv-button-group ml-auto">
				<button
					:title="showSource ? 'Hide source' : 'Show source'"
					:class="{ 'vv-button--active': showSource }"
					class="vv-button vv-button--action-quiet"
					type="button"
					@click.stop="toggleSource">
					<IconifyIcon icon="bi:code" />
				</button>
				<button
					:title="isPreviewInDarkMode ? 'Light mode' : 'Dark mode'"
					:class="{
						'vv-button--active':
							(isPreviewInDarkMode && !isThemeDark) ||
							(!isPreviewInDarkMode && isThemeDark),
					}"
					class="vv-button vv-button--action-quiet"
					type="button"
					@click.stop="toggleDarkMode">
					<IconifyIcon
						:icon="
							isThemeDark
								? 'akar-icons:sun'
								: 'akar-icons:moon-fill'
						" />
				</button>
				<button
					v-if="isCopyToClipboardSupported"
					title="Copy to clipboard"
					:class="{ 'bg-success-lighten-5': copied }"
					class="vv-button vv-button--action-quiet"
					type="button"
					@click.stop="copyToClipboard()">
					<IconifyIcon icon="akar-icons:copy" />
					<template v-if="copied">Copied!</template>
				</button>
			</div>
		</div>
		<VueLive
			v-if="editedCode"
			:code="editedCode"
			:layout="CodeLayoutVue"
			@change="onChange" />
	</div>
</template>
