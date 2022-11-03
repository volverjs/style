<script setup>
	import FooterNotes from '@docs/components/FooterNotes.vue'
</script>

<template>
	<header
		class="bg-surface-1 h-full"
		style="overflow-y: auto; overflow-x: hidden">
		<div class="container h-full flex flex-col px-16 mx-auto">
			<nav class="flex py-16">
				<a
					href="https://github.com/volverjs/style"
					target="_blank"
					class="ml-auto">
					<IconifyIcon class="text-32 p-4" icon="akar-icons:github" />
				</a>
			</nav>

			<div
				class="flex flex-col flex-1 justify-center items-center text-center">
				<img src="/volverjs.svg" alt="Volver" class="w-256 mb-24" />
				<h1 class="text-22 text-word font-semibold mb-16">
					@volverjs/style
				</h1>
				<h2 class="font-light leading-normal max-w-320 text-word-3">
					<a
						href="https://github.com/volverjs/style"
						class="font-normal"
						target="_blank"
						>@volverjs/style</a
					>
					is a lightweight responsive CSS utility library to accompany
					<a
						href="https://github.com/volverjs/ui-vue"
						class="font-normal"
						target="_blank"
						>@volverjs/ui-vue</a
					>
					and static webpages as well.
				</h2>
				<div class="vv-button-group mt-32">
					<router-link
						:to="{
							name: 'content',
							params: { name: 'installation' },
						}"
						class="vv-button vv-button--accent vv-button--full-bleed vv-button--rounded">
						Getting Started
					</router-link>
					<router-link
						:to="{ name: 'components' }"
						class="vv-button vv-button--secondary vv-button--full-bleed vv-button--rounded">
						Components
					</router-link>
				</div>
			</div>
			<FooterNotes class="text-center" />
		</div>
	</header>
</template>
