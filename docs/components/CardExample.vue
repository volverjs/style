<script setup>
	defineProps({
		title: {
			type: String,
			default: 'Example',
		},
	})

	const isThemeDark = inject('isThemeDark')
	const isPreviewInDarkMode = ref(isThemeDark.value)
	watch(isThemeDark, (value) => {
		isPreviewInDarkMode.value = value
	})
	const toggleDarkMode = useToggle(isPreviewInDarkMode)
</script>

<template>
	<div class="vv-card">
		<div class="vv-card__header bg-surface flex">
			<span v-if="title">{{ title }}</span>
			<div class="vv-button-group ml-auto">
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
			</div>
		</div>
		<div
			class="vv-card__content relative"
			:class="[
				{
					'theme theme--dark': isPreviewInDarkMode && !isThemeDark,
					'theme theme--light': !isPreviewInDarkMode && isThemeDark,
				},
			]">
			<slot />
		</div>
	</div>
</template>
