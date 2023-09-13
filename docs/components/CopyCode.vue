<script setup>
	defineProps({
		title: {
			type: String,
			default: 'Copy Code',
		},
		code: {
			type: String,
			required: true,
		},
	})
	const { copy: copyToClipboard, isSupported: isCopySupported } =
		useClipboard()
</script>

<template>
	<div
		class="px-18 py-14 bg-surface-2 border-2 border-dashed border-surface-5 rounded-lg flex items-center gap-sm">
		<code class="font-mono">
			<pre>{{ code }}</pre>
		</code>
		<button
			v-if="isCopySupported"
			type="button"
			class="vv-button vv-button--action"
			:title="title"
			@click="copyToClipboard(code)">
			<IconifyIcon icon="akar-icons:copy" />
		</button>
	</div>
</template>
