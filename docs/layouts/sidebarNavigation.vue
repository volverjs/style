<script setup>
	const route = useRoute()
	const isThemeDark = inject('isThemeDark')
	const isAsideOpen = ref(false)
	const toggleDark = useToggle(isThemeDark)
	const toggleAside = useToggle(isAsideOpen)
	const mainEl = ref(null)
	watch(route, () => {
		isAsideOpen.value = false
		if (route.hash) {
			const el = document.querySelector(route.hash)
			if (el) {
				el.scrollIntoView({
					behavior: 'smooth',
					block: 'start',
				})
				return
			}
		}
		if (mainEl.value) {
			mainEl.value.scrollTop = 0
		}
	})
	const onResolve = () => {
		setTimeout(() => {
			if (route.hash) {
				const el = document.querySelector(route.hash)
				if (el) {
					el.scrollIntoView({
						behavior: 'smooth',
						block: 'start',
					})
				}
			}
		}, 500)
	}
	/* eslint-disable-next-line */
	const appVersion = __APP_VERSION__
</script>

<template>
	<div class="flex flex-col h-full relative">
		<nav
			class="flex border-b border-surface-3 p-16 items-center"
			aria-label="Top navigation">
			<button
				type="button"
				class="vv-button vv-button--action-quiet mr-sm md:none"
				title="Toggle menu"
				@click.stop="toggleAside()">
				<IconifyIcon icon="akar-icons:three-line-horizontal" />
			</button>
			<RouterLink
				:to="{ name: 'index' }"
				class="flex items-center"
				title="Go to home">
				<img
					src="/volverjs.svg"
					alt="Volver"
					width="26"
					height="26"
					class="w-26 block mr-10" />
				<span class="text-18 font-semibold">volverjs/style</span>
			</RouterLink>
			<span class="text-xs text-word-3 px-sm ml-auto">
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
					rel="noopener noreferrer"
					class="vv-button vv-button--action-quiet"
					title="GitHub">
					<IconifyIcon icon="akar-icons:github-fill" />
				</a>
			</div>
		</nav>
		<div class="flex flex-1 min-h-0">
			<div
				class="off-canvas min-h-0"
				:class="{ 'off-canvas--open': isAsideOpen }">
				<div
					class="off-canvas__overlay"
					@click.stop="toggleAside()"></div>
				<div
					class="w-288 h-full border-r border-surface-3 off-canvas__aside bg-surface h-full overflow-y-auto">
					<nav
						class="vv-nav vv-nav--sidebar p-lg"
						aria-label="Main menu">
						<ul class="vv-nav__menu">
							<template
								v-for="(section, sectionIndex) in mainMenu"
								:key="sectionIndex">
								<li class="vv-nav__item">
									<span
										:id="`section-${sectionIndex}`"
										class="vv-nav__heading-label">
										{{ section.name }}
									</span>
									<ul
										v-if="section.children"
										class="vv-nav__menu"
										role="menu"
										:aria-labelledby="`section-${sectionIndex}`">
										<li
											v-for="(
												child, childIndex
											) in section.children"
											:key="childIndex"
											role="presentation"
											class="vv-nav__item">
											<RouterLink
												class="vv-nav__item-label"
												:to="child.to"
												tabindex="0"
												role="menuitem">
												{{ child.name }}
												<div
													v-if="
														child.isNew ||
														child.isDraft
													"
													class="flex gap-8 ml-auto">
													<span
														v-if="child.isNew"
														class="vv-badge vv-badge--sm vv-badge--info"
														>new</span
													>
													<span
														v-if="child.isDraft"
														class="vv-badge vv-badge--sm vv-badge--gray"
														>draft</span
													>
												</div>
											</RouterLink>
										</li>
									</ul>
								</li>
								<li
									v-if="sectionIndex < mainMenu.length - 1"
									class="vv-nav__divider"
									aria-hidden="true"></li>
							</template>
						</ul>
					</nav>
				</div>
			</div>
			<main ref="mainEl" class="bg-surface-1 flex-1 overflow-y-auto">
				<RouterView v-slot="{ Component }" :key="route.path">
					<template v-if="Component">
						<Transition mode="out-in">
							<KeepAlive>
								<Suspense @resolve="onResolve">
									<!-- main content -->
									<component :is="Component"></component>
								</Suspense>
							</KeepAlive>
						</Transition>
					</template>
				</RouterView>
			</main>
		</div>
	</div>
</template>

<style lang="scss">
	@use '@/context' as *;

	.off-canvas {
		position: relative;
		z-index: var(--z-fixed);

		&__aside {
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			will-change: transform;
			transition: var(--transition-transform);
			translate: -100%;
			z-index: 1;
		}

		&__overlay {
			position: absolute;
			inset: 0;
			z-index: 1;
			will-change: opacity;
			transition: var(--transition-opacity);
			opacity: 0;
			background: rgb(0 0 0 / 10%);
		}

		&--open {
			position: fixed;
			inset: 0;

			.off-canvas__aside {
				translate: 0;
				box-shadow: var(--shadow-xl);
			}

			.off-canvas__overlay {
				opacity: 1;
			}
		}

		@include media-breakpoint-up('md', $breakpoints) {
			position: relative;

			.off-canvas__aside {
				position: relative;
				translate: 0;
			}
		}
	}
</style>
