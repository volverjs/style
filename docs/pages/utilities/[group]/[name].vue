<script setup>
	import CardExample from '../../../components/CardExample.vue'
	import TableUtility from '../../../components/TableUtility.vue'
	import TableHelper from '../../../components/TableHelper.vue'
	import ColorHelper from '../../../components/ColorHelper.vue'

	const route = useRoute()
	const router = useRouter()
	const metadata = ref({})
	const MainContent = defineAsyncComponent(() =>
		import(
			`../../../contents/utilities/${route.params.group}/${route.params.name}.md`
		)
			.then(({ attributes, VueComponentWith }) => {
				metadata.value = attributes
				return VueComponentWith({
					TableUtility,
					TableHelper,
					ColorHelper,
					CardExample,
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
			<span
				class="vv-text vv-text--size-5 font-semibold text-brand capitalize">
				{{ route.params.group }}
			</span>
			<h1
				v-if="metadata.title"
				class="vv-text vv-text--size-1 font-bold mb-sm flex items-end">
				{{ metadata.title }}
				<span
					v-if="metadata.breakpoints"
					class="vv-badge vv-badge--small ml-16 mb-12"
					>breakpoints</span
				>
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

<route lang="yaml">
meta:
    layout: asideNavigation
</route>
