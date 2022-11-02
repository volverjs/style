<script setup>
	import { defineAsyncComponent, ref } from 'vue'
	import { useRoute, useRouter } from 'vue-router'
	import CodeViewer from '../components/CodeViewer.vue'

	const route = useRoute()
	const router = useRouter()
	const metadata = ref({})
	const MainContent = defineAsyncComponent(() =>
		import(`../contents/getting-started/${route.params.name}.md`)
			.then(({ attributes, VueComponentWith }) => {
				metadata.value = attributes
				return VueComponentWith({
					CodeViewer,
				})
			})
			.catch(() => {
				router.replace({ name: 'home' })
			}),
	)
</script>

<template>
	<div class="p-16">
		<header class="my-lg">
			<span
				class="vv-text vv-text--size-5 font-semibold text-brand capitalize">
				{{ route.params.name }}
			</span>
			<h1
				v-if="metadata.title"
				class="vv-text vv-text--size-1 font-bold mb-sm">
				{{ metadata.title }}
			</h1>
			<h2
				v-if="metadata.description"
				class="vv-text vv-text--size-4 text-word-2 max-w-prose">
				{{ metadata.description }}
			</h2>
		</header>
		<MainContent />
	</div>
</template>
