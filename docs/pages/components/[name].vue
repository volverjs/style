<script setup>
	import CodeEditor from '../../components/CodeEditor.vue'

	const route = useRoute()
	const router = useRouter()
	const metadata = ref({})
	const MainContent = defineAsyncComponent(() =>
		import(`../../contents/components/${route.params.name}/index.md`)
			.then(({ attributes, VueComponentWith }) => {
				metadata.value = attributes
				return VueComponentWith({
					CodeEditor,
				})
			})
			.catch(() => {
				router.replace({ name: 'index' })
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
				class="vv-text vv-text--size-1 font-bold mb-sm flex items-end">
				{{ metadata.title }}
				<span
					v-if="metadata.uiVue"
					class="vv-badge vv-badge--small vv-badge--success ml-16 mb-12"
					>ui-vue</span
				>
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

<route lang="yaml">
meta:
    layout: asideNavigation
</route>
