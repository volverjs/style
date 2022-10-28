<script setup>
	import { useToggle } from '@vueuse/core'
	import { inject } from 'vue'
	import { useRoute } from 'vue-router'

	const route = useRoute()
	const isThemeDark = inject('isThemeDark')
	const toggleDark = useToggle(isThemeDark)
</script>

<template>
	<div class="flex flex-col min-h-full relative">
		<nav class="flex border-b border-surface-3 p-16 items-center">
			<a
				:href="`#${route.path}#aside`"
				class="vv-button vv-button--action-quiet mr-sm md:none"
				title="Toggle menu">
				<IconifyIcon icon="akar-icons:three-line-horizontal" />
			</a>
			<router-link
				:to="{ name: 'home' }"
				class="flex items-start"
				title="Go to home">
				<img
					src="/volverjs.svg"
					alt="Volver"
					class="w-26 block mr-10" />
				<span class="text-18 font-semibold">volverjs/style</span>
			</router-link>
			<div class="vv-button-group ml-auto">
				<button
					type="button"
					class="vv-button vv-button--action-quiet"
					:title="isThemeDark ? 'Light mode' : 'Dark mode'"
					@click.stop="toggleDark()">
					<IconifyIcon
						:icon="
							isThemeDark
								? 'akar-icons:sun'
								: 'akar-icons:moon-fill'
						" />
				</button>
				<a
					href="https://github.com/volverjs/style"
					target="_blank"
					class="vv-button vv-button--action-quiet"
					title="GitHub">
					<IconifyIcon icon="akar-icons:github" />
				</a>
			</div>
		</nav>
		<div class="flex flex-1">
			<div :id="`${route.path}#aside`" class="off-canvas">
				<a
					:href="`#${route.path}`"
					class="off-canvas-overlay"
					title="Close Menu"></a>
				<aside
					class="w-288 h-full border-r border-surface-3 off-canvas-aside bg-surface overflow-y-auto">
					<nav class="vv-nav vv-nav--menu p-lg">
						<ul class="vv-nav__menu" role="menu">
							<li class="vv-nav__item" role="presentation">
								<span
									id="menu-section-contents"
									class="vv-nav__heading-label"
									aria-hidden="true">
									Getting Started
								</span>
								<ul
									class="vv-nav__menu"
									role="group"
									aria-labelledby="menu-section-contents">
									<li class="vv-nav__item">
										<router-link
											class="vv-nav__item-label"
											:to="{
												name: 'content',
												params: {
													name: 'installation',
												},
											}"
											tabindex="0">
											Installation
										</router-link>
									</li>
								</ul>
							</li>
							<li class="vv-nav__divider" role="separator"></li>
							<li class="vv-nav__item" role="presentation">
								<span
									id="menu-section-components"
									class="vv-nav__heading-label"
									aria-hidden="true">
									Components
								</span>
								<ul
									class="vv-nav__menu"
									role="group"
									aria-labelledby="menu-section-components">
									<li class="vv-nav__item">
										<router-link
											class="vv-nav__item-label"
											:to="{
												name: 'component',
												params: {
													componentName: 'vv-button',
												},
											}"
											tabindex="0">
											Buttons
										</router-link>
									</li>
								</ul>
							</li>
							<li class="vv-nav__divider" role="separator"></li>
							<li class="vv-nav__item" role="presentation">
								<span
									id="menu-section-utilities"
									class="vv-nav__heading-label"
									aria-hidden="true">
									Layout
								</span>
								<ul
									class="vv-nav__menu"
									role="group"
									aria-labelledby="menu-section-utilities">
									<li class="vv-nav__item">
										<router-link
											class="vv-nav__item-label"
											:to="{
												name: 'utility',
												params: {
													utilityGroup: 'layout',
													utilityName: 'aspect-ratio',
												},
											}"
											tabindex="0">
											Aspect Ratio
										</router-link>
									</li>
								</ul>
							</li>
						</ul>
					</nav>
				</aside>
			</div>
			<main class="flex-1 bg-surface-1">
				<div class="xl:w-8/12 mx-auto">
					<router-view />
				</div>
			</main>
		</div>
	</div>
</template>

<style lang="scss">
	@import '@/context';

	.off-canvas {
		position: relative;
		z-index: var(--z-fixed);

		.off-canvas-aside {
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			will-change: transform;
			transition: transform 0.3s ease-in-out;
			transform: translateX(-100%);
			z-index: 1;
		}

		.off-canvas-overlay {
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			z-index: 1;
			will-change: opacity;
			transition: opacity 0.3s ease-in-out;
			opacity: 0;
			background: rgb(0 0 0 / 10%);
		}

		&:target {
			position: fixed;
			inset: 0;

			.off-canvas-aside {
				transform: translateX(0);
				box-shadow: var(--shadow-xl);
			}

			.off-canvas-overlay {
				opacity: 1;
			}
		}

		@include media-breakpoint-up('md') {
			position: relative;

			.off-canvas-aside {
				position: relative;
				transform: none;
			}
		}
	}
</style>
