<script setup>
	useHead({
		title: 'Volver CSS Library',
		meta: [
			{
				name: 'description',
				content:
					'@volverjs/style is a lightweight responsive CSS utility library to accompany @volverjs/ui-vue and static webpages as well.',
			},
		],
	})
</script>

<template>
	<header class="bg-surface-1">
		<div class="container h-screen flex flex-col px-16 mx-auto relative">
			<nav class="flex py-16 absolute inset-x-0">
				<a
					href="https://github.com/volverjs/style"
					target="_blank"
					rel="noopener noreferrer"
					class="ml-auto">
					<IconifyIcon
						class="text-32 p-4"
						icon="akar-icons:github-fill" />
				</a>
			</nav>
			<div
				class="flex flex-col flex-1 justify-center items-center text-center h-screen">
				<img
					src="/volverjs.svg"
					alt="Volver"
					class="w-208 md:w-256 mb-24"
					width="256"
					height="256" />
				<h1 class="vv-text vv-text--headline vv-text--size-2 mb-16">
					@volverjs/style
				</h1>
				<p class="font-light leading-relaxed max-w-384 text-word-3">
					<a
						href="https://github.com/volverjs/style"
						class="font-normal"
						rel="noopener noreferrer"
						target="_blank"
						>@volverjs/style</a
					>
					is a lightweight responsive CSS utility library to accompany
					<a
						href="https://github.com/volverjs/ui-vue"
						class="font-normal"
						rel="noopener noreferrer"
						target="_blank"
						>@volverjs/ui-vue</a
					>
					and static webpages as well.
				</p>
				<div class="vv-button-group mt-32">
					<RouterLink
						:to="{
							name: 'getting-started-name',
							params: { name: 'installation' },
						}"
						class="vv-button vv-button--primary vv-button--full-bleed vv-button--rounded">
						Getting Started
					</RouterLink>
					<RouterLink
						:to="{
							name: 'components-name',
							params: { name: 'button' },
						}"
						class="vv-button vv-button--secondary vv-button--full-bleed vv-button--rounded">
						Components
					</RouterLink>
				</div>
			</div>
		</div>
	</header>
	<main>
		<section class="py-lg">
			<h1 class="vv-text vv-text--headline vv-text--size-1 text-center">
				Come back to basics.
			</h1>
			<h2
				class="vv-text vv-text--copy vv-text--size-3 text-word-3 text-center mb-xl">
				CSS custom property based utility library.
			</h2>
			<div class="grid grid-cols-3 gap-sm w-8/12 mx-auto">
				<div class="h-320 col-span-2 bg-gradient-30 rounded-xxl"></div>
				<div class="h-320 flex flex-col gap-sm">
					<div class="flex-1 bg-surface-2 rounded-xxl"></div>
					<div class="flex-1 bg-surface-2 rounded-xxl"></div>
				</div>
				<div class="h-320 bg-surface-2 rounded-xxl"></div>
				<div class="h-320 col-span-2 bg-gradient-30 rounded-xxl"></div>
			</div>
		</section>
	</main>
	<FooterNotes class="text-center mt-32" />
</template>
