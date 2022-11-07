<script setup>
	import CodeEditor from '../../components/CodeEditor.vue'

	const route = useRoute()
	const router = useRouter()
	const title = ref('')
	const description = ref('')
	const uiVue = ref(false)
	const MainContent = defineAsyncComponent(() =>
		import(`../../contents/components/${route.params.name}/index.md`)
			.then(({ attributes, VueComponentWith }) => {
				title.value = attributes.title
				description.value = attributes.description
				uiVue.value = attributes.uiVue
				return VueComponentWith({
					CodeEditor,
				})
			})
			.catch(() => {
				router.replace({ name: 'index' })
			}),
	)
	useHead({
		title,
		meta: [
			{
				name: 'description',
				content: description,
			},
		],
	})
</script>

<template>
	<div class="p-16">
		<header class="my-lg">
			<span class="vv-text vv-text--size-5 font-semibold text-brand">
				Components
			</span>
			<h1
				v-if="title"
				class="vv-text vv-text--size-1 font-bold mb-sm flex items-end">
				{{ title }}
				<span
					v-if="uiVue"
					class="vv-badge vv-badge--small vv-badge--success ml-16 mb-12"
					>ui-vue</span
				>
			</h1>
			<p v-if="description" class="vv-text text-word-2 max-w-prose">
				{{ description }}
			</p>
		</header>
		<MainContent />
	</div>
</template>

<route lang="yaml">
meta:
    layout: asideNavigation
</route>
