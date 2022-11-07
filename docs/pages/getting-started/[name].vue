<script setup>
	import CodeEditor from '../../components/CodeEditor.vue'
	const route = useRoute()
	const router = useRouter()
	const title = ref('')
	const description = ref('')
	const MainContent = defineAsyncComponent(() =>
		import(`../../contents/getting-started/${route.params.name}.md`)
			.then(({ attributes, VueComponentWith }) => {
				title.value = attributes.title
				description.value = attributes.description
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
			<span
				class="vv-text vv-text--size-5 font-semibold text-brand capitalize">
				{{ route.params.name }}
			</span>
			<h1 v-if="title" class="vv-text vv-text--size-1 font-bold mb-sm">
				{{ title }}
			</h1>
			<h2
				v-if="description"
				class="vv-text vv-text--size-4 text-word-2 max-w-prose">
				{{ description }}
			</h2>
		</header>
		<div class="preflight">
			<MainContent />
		</div>
	</div>
</template>

<route lang="yaml">
meta:
    layout: asideNavigation
</route>
