<script setup>
	import CardExample from '../../../components/CardExample.vue'
	import TableUtility from '../../../components/TableUtility.vue'
	import ColorHelper from '../../../components/ColorHelper.vue'

	const route = useRoute()
	const router = useRouter()
	const title = ref('')
	const description = ref('')
	const breakpoints = ref(false)
	const colors = ref(false)
	const customProperties = ref(false)
	const spacing = ref(false)
	const githubUrl = `https://github.com/volverjs/style/edit/develop/docs/contents/utilities/${route.params.group}/${route.params.name}.md`
	const MainContent = defineAsyncComponent(() =>
		import(
			`../../../contents/utilities/${route.params.group}/${route.params.name}.md`
		)
			.then(({ attributes, VueComponentWith }) => {
				title.value = attributes.title
				description.value = attributes.description
				breakpoints.value = attributes.breakpoints
				colors.value = attributes.colors
				customProperties.value = attributes.customProperties
				spacing.value = attributes.spacing
				return VueComponentWith({
					TableUtility,
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
						<div v-if="title" class="md:flex items-end mr-auto">
							<h1 class="vv-text vv-text--size-1 font-bold mr-16">
								{{ title }}
							</h1>
							<div class="flex gap-10 mb-12 mt-6">
								<span
									v-if="breakpoints"
									class="vv-badge vv-badge--sm">
									breakpoints
								</span>
								<span
									v-if="customProperties"
									class="vv-badge vv-badge--info vv-badge--sm">
									custom properties
								</span>
								<span
									v-if="colors"
									class="vv-badge vv-badge--accent vv-badge--sm">
									colors
								</span>
								<span
									v-if="spacing"
									class="vv-badge vv-badge--gray vv-badge--sm">
									spacing
								</span>
							</div>
						</div>
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
				<div
					v-if="breakpoints"
					class="vv-alert vv-alert--callout vv-alert--brand mb-lg"
					role="alert">
					<div class="vv-alert__header">
						<div class="vv-alert__title">Breakpoints</div>
					</div>
					<div class="vv-alert__content">
						<p class="mb-12">
							This set of utilities can be used with breakpoint
							prefix.
						</p>
						<code class="font-mono"> .{breakpoint}:{utility} </code>
						<div class="mt-sm">
							<RouterLink
								:to="{
									name: 'settings-name',
									params: {
										name: 'breakpoints',
									},
									hash: '#responsive-utilities',
								}"
								class="vv-button vv-button--action">
								<IconifyIcon icon="akar-icons:info" />
								Find out more
							</RouterLink>
						</div>
					</div>
				</div>
				<div
					v-if="colors"
					class="vv-alert vv-alert--callout vv-alert--accent mb-lg"
					role="alert">
					<div class="vv-alert__header">
						<div class="vv-alert__title">Colors</div>
					</div>
					<div class="vv-alert__content">
						<p class="mb-12">
							This set of utilities use the color palette.
						</p>
						<div class="mt-sm">
							<RouterLink
								:to="{
									name: 'settings-name',
									params: {
										name: 'colors',
									},
								}"
								class="vv-button vv-button--action">
								<IconifyIcon icon="akar-icons:info" />
								Find out more
							</RouterLink>
						</div>
					</div>
				</div>
				<div
					v-if="spacing"
					class="vv-alert vv-alert--callout vv-alert--gray mb-lg"
					role="alert">
					<div class="vv-alert__header">
						<div class="vv-alert__title">Spacing</div>
					</div>
					<div class="vv-alert__content">
						<p class="mb-12">
							This set of utilities use the static and dynamic
							spacing scale.
						</p>
						<div class="mt-sm">
							<RouterLink
								:to="{
									name: 'settings-name',
									params: {
										name: 'spacing',
									},
								}"
								class="vv-button vv-button--action">
								<IconifyIcon icon="akar-icons:info" />
								Find out more
							</RouterLink>
						</div>
					</div>
				</div>
				<div class="preflight">
					<MainContent />
				</div>
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
