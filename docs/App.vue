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
	@import '@/style';
	@import 'vue-live/lib/vue-live.esm.css';
	@import '@docs/assets/scss/prism-themes/light';
	@import '@docs/assets/scss/prism-themes/dark';

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

	pre[class*='language-'] {
		@extend %vv-card;

		margin-bottom: var(--spacing-lg);
	}

	code[class*='language-'] {
		@extend %vv-card__content;

		font-family: var(--font-mono);
		font-size: var(--text-xs);
		direction: ltr;
		text-align: left;
		white-space: pre;
		word-spacing: normal;
		word-break: normal;
		tab-size: 4;
		hyphens: none;
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
