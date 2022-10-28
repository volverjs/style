<script setup>
	import { defineAsyncComponent, ref } from 'vue'
	import { useRoute, useRouter } from 'vue-router'
	import CodeEditor from '../components/CodeEditor.vue'
	// import CodeViewer from '../components/CodeViewer.vue'

	const route = useRoute()
	const router = useRouter()
	const metadata = ref({})
	const MainContent = defineAsyncComponent(() =>
		import(`../contents/components/${route.params.componentName}/index.md`)
			.then(({ attributes, VueComponentWith }) => {
				metadata.value = attributes
				return VueComponentWith({
					// CodeViewer,
					CodeEditor,
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
			<span class="vv-text vv-text--size-5 font-semibold text-brand">
				Components
			</span>
			<h1
				v-if="metadata.title"
				class="vv-text vv-text--size-1 font-bold mb-sm">
				{{ metadata.title }}
			</h1>
			<p
				v-if="metadata.description"
				class="vv-text text-word-2 max-w-prose">
				{{ metadata.description }}
			</p>
		</header>
		<MainContent />
	</div>
</template>
