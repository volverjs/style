<script setup>
	const showSource = inject('showSource')
	const isPreviewInDarkMode = inject('isPreviewInDarkMode')
	const metadata = inject('metadata')
	const isThemeDark = inject('isThemeDark')
</script>

<template>
	<div class="code-layout flex flex-col">
		<div
			class="flex-1 flex items-center justify-center p-24"
			:class="[
				{
					'theme theme--dark': isPreviewInDarkMode && !isThemeDark,
					'theme theme--light': !isPreviewInDarkMode && isThemeDark,
				},
			]">
			<div :class="metadata.wrapperClass">
				<slot name="preview"></slot>
			</div>
		</div>
		<div
			v-if="showSource"
			class="flex-1 bg-surface-1 border-t border-surface-4 p-24 font-mono text-xs">
			<slot name="editor"></slot>
		</div>
	</div>
</template>
