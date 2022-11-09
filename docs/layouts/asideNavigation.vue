<script setup>
	const route = useRoute()
	const isThemeDark = inject('isThemeDark')
	const toggleDark = useToggle(isThemeDark)
	/* eslint-disable-next-line */
	const appVersion = __APP_VERSION__
</script>

<template>
	<div class="flex flex-col h-full relative">
		<nav class="flex border-b border-surface-3 p-16 items-center">
			<a
				:href="`#${route.path}#aside`"
				class="vv-button vv-button--action-quiet mr-sm md:none"
				title="Toggle menu">
				<IconifyIcon icon="akar-icons:three-line-horizontal" />
			</a>
			<RouterLink
				:to="{ name: 'index' }"
				class="flex items-center"
				title="Go to home">
				<img
					src="/volverjs.svg"
					alt="Volver"
					class="w-26 block mr-10" />
				<span class="text-18 font-semibold">volverjs/style</span>
			</RouterLink>
			<span class="text-xs text-word-4 px-sm ml-auto">
				v{{ appVersion }}
			</span>
			<div class="vv-button-group">
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
		<div class="flex flex-1 min-h-0">
			<aside :id="`${route.path}#aside`" class="off-canvas min-h-0">
				<a
					:href="`#${route.path}`"
					class="off-canvas-overlay"
					title="Close Menu"></a>
				<div
					class="w-288 h-full border-r border-surface-3 off-canvas-aside bg-surface h-full overflow-y-auto">
					<nav class="vv-nav vv-nav--menu p-lg">
						<ul class="vv-nav__menu" role="menu">
							<template
								v-for="(section, sectionIndex) in mainMenu"
								:key="sectionIndex">
								<li class="vv-nav__item" role="presentation">
									<span
										:id="`section-${sectionIndex}`"
										class="vv-nav__heading-label"
										aria-hidden="true">
										{{ section.name }}
									</span>
									<ul
										v-if="section.children"
										class="vv-nav__menu"
										role="group"
										:aria-labelledby="`section-${sectionIndex}`">
										<li
											v-for="(
												child, childIndex
											) in section.children"
											:key="childIndex"
											class="vv-nav__item">
											<RouterLink
												class="vv-nav__item-label"
												:to="child.to"
												tabindex="0">
												{{ child.name }}
												<span
													v-if="child.isNew"
													class="vv-badge vv-badge--small vv-badge--info ml-auto"
													>new</span
												>
											</RouterLink>
										</li>
									</ul>
								</li>
								<li
									v-if="sectionIndex < mainMenu.length - 1"
									class="vv-nav__divider"
									role="separator"></li>
							</template>
						</ul>
					</nav>
				</div>
			</aside>
			<main
				class="flex flex-1 bg-surface-1 min-h-0 overflow-y-auto justify-center">
				<RouterView :key="route.path" />
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
