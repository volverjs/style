<script setup>
	import { useDark } from '@vueuse/core'
	import { provide } from 'vue'

	const isThemeDark = useDark({
		attribute: 'class',
		valueDark: 'theme theme--dark',
		valueLight: 'theme theme--light',
	})
	provide('isThemeDark', isThemeDark)
</script>

<template>
	<router-view />
</template>

<style lang="scss">
	:root,
	:host,
	.theme {
		--font-sans: 'Open Sans', sans-serif;
	}

	html {
		height: 100%;
	}

	body,
	#app {
		height: 100%;
	}

	section {
		& > ::-webkit-scrollbar {
			width: 5px;
			height: 0px;
			border: 1px solid var(--color-surface-1);
		}

		& > ::-webkit-scrollbar-thumb {
			border-radius: 0.25rem;
			background-color: var(--color-surface-2);
		}

		& > ::-webkit-scrollbar-track {
			border-radius: 5px;
			background-color: var(--color-surface-1);
		}
	}
</style>
