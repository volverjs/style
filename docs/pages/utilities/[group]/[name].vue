<script setup>
	import CardExample from '../../../components/CardExample.vue'
	import TableUtility from '../../../components/TableUtility.vue'
	import TableHelper from '../../../components/TableHelper.vue'
	import ColorHelper from '../../../components/ColorHelper.vue'

	const route = useRoute()
	const router = useRouter()
	const title = ref('')
	const description = ref('')
	const breakpoints = ref(false)
	const githubUrl = `https://github.com/volverjs/style/edit/develop/docs/contents/utilities/${route.params.group}/${route.params.name}.md`
	const MainContent = defineAsyncComponent(() =>
		import(
			`../../../contents/utilities/${route.params.group}/${route.params.name}.md`
		)
			.then(({ attributes, VueComponentWith }) => {
				title.value = attributes.title
				description.value = attributes.description
				breakpoints.value = attributes.breakpoints
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
	<div class="flex flex-1 justify-center">
		<div class="w-full lg:w-10/12 xl:w-9/12 xxl:w-7/12 pr-3/12">
			<div class="p-16">
				<header class="my-lg">
					<span
						class="vv-text vv-text--size-5 font-semibold text-brand capitalize">
						{{ route.params.group }}
					</span>
					<div class="flex items-center mb-sm">
						<h1
							v-if="title"
							class="vv-text vv-text--size-1 font-bold flex items-end mr-auto">
							{{ title }}
							<span
								v-if="breakpoints"
								class="vv-badge vv-badge--sm ml-16 mb-12"
								>breakpoints</span
							>
						</h1>
						<div class="vv-button-group vv-button-group--compact">
							<a
								class="vv-button vv-button--action-quiet"
								target="_blank"
								rel="noopener noreferrer"
								title="Edit this page on GitHub"
								:href="githubUrl">
								<IconifyIcon icon="akar-icons:octocat-fill" />
							</a>
						</div>
					</div>
					<h2
						v-if="description"
						class="vv-text vv-text--size-4 text-word-2 max-w-prose">
						{{ description }}
					</h2>
				</header>
				<MainContent />
				<div class="flex mt-lg">
					<a
						class="vv-button vv-button--action-quiet"
						target="_blank"
						rel="noopener noreferrer"
						:href="githubUrl">
						<IconifyIcon icon="akar-icons:edit" />
						Edit this page on GitHub
					</a>
				</div>
				<FooterNotes class="mt-lg" />
			</div>
		</div>
	</div>
</template>

<route lang="yaml">
meta:
    layout: sidebarNavigation
</route>
