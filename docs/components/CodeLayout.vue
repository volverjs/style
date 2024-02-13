<script setup>
	const showSource = inject('showSource', false)
	const showPreview = inject('showPreview', false)
	const isPreviewInDarkMode = inject('isPreviewInDarkMode')
	const metadata = inject('metadata')
	const isThemeDark = inject('isThemeDark')

	const hasPreflight = computed(() => {
		return metadata.value.wrapperClass?.includes('preflight')
	})
</script>

<template>
	<div class="code-layout flex flex-1 flex-col z-1">
		<div
			v-if="showPreview"
			class="code-layout__preview flex-1 flex items-center justify-center p-24"
			:class="[
				{
					'theme theme--dark': isPreviewInDarkMode && !isThemeDark,
					'theme theme--light': !isPreviewInDarkMode && isThemeDark,
				},
			]">
			<div
				:class="[
					metadata.wrapperClass,
					{ 'preflight-revert': !hasPreflight },
				]">
				<slot name="preview"></slot>
			</div>
		</div>
		<div
			v-if="showSource"
			class="code-layout__source flex-1 bg-surface-1 p-24 font-mono text-xs"
			:class="{ 'border-t border-surface-4': showPreview }">
			<slot name="editor"></slot>
		</div>
	</div>
</template>
