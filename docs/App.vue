<script setup>
	import { useHead } from '@vueuse/head'

	const isThemeDark = useDark({
		attribute: 'class',
		valueDark: 'theme theme--dark',
		valueLight: 'theme theme--light',
	})
	provide('isThemeDark', isThemeDark)
	useHead({
		titleTemplate: (title) =>
			title ? `${title} | Volver.js` : 'Volver.js',
	})
</script>

<template>
	<RouterView />
</template>

<style lang="scss">
	@use '@/context' as * with (
		$font-family-sans: "'Open Sans', sans-serif"
	);
	@use '@/volver';
	@use '@/themes/dark/volver' as volverDark;

	// code highlighting
	@use 'vue-live/lib/vue-live.esm.css';
	@use '@docs/assets/scss/prism-themes/light';
	@use '@docs/assets/scss/prism-themes/dark';

	html,
	body,
	#app {
		height: 100%;
	}

	p > code {
		color: var(--color-accent);
	}

	pre[class*='language-'] {
		@extend %vv-card;

		margin-bottom: var(--spacing-lg);
	}

	code[class*='language-'] {
		@extend %vv-card__content;

		font-family: var(--font-mono);
		font-size: var(--text-14);
		direction: ltr;
		text-align: left;
		white-space: pre;
		word-spacing: normal;
		word-break: normal;
		tab-size: 4;
		hyphens: none;
	}

	.preflight {
		:where(h1, h2, h3, h4, h5, h6) {
			position: relative;
			scroll-margin-top: 3rem;

			.header-anchor {
				color: var(--color-brand);
				text-decoration: none;

				@include media-breakpoint-up('md', $breakpoints) {
					position: absolute;
					left: -1.5ch;
					opacity: 0;
					transition: opacity 0.3s ease-in-out;
				}
			}

			&:hover {
				.header-anchor {
					opacity: 1;
				}
			}
		}
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
