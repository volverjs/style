<script setup>
	import CodeEditor from '../../components/CodeEditor.vue'
	import { permalinkToPath } from '@docs/utils/permalink'

	const route = useRoute()
	const router = useRouter()
	const title = ref('')
	const description = ref('')
	const uiVue = ref(false)
	const permalinks = ref([])
	const MainContent = defineAsyncComponent(() =>
		import(`../../contents/components/${route.params.name}/index.md`)
			.then(({ attributes, toc, VueComponentWith }) => {
				title.value = attributes.title
				description.value = attributes.description
				uiVue.value = attributes.uiVue
				permalinks.value = toc.map(({ content }) =>
					permalinkToPath(content),
				)
				return VueComponentWith({
					CodeEditor,
				})
			})
			.catch(() => {
				router.replace({ name: 'index' })
			}),
	)
	const scrollIntoView = (hash) => {
		const el = document.querySelector(hash)
		if (el) {
			el.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			})
			router.replace({ ...route, hash })
		}
	}
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
						class="vv-text vv-text--size-5 font-semibold text-brand">
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
					<p
						v-if="description"
						class="vv-text text-word-2 max-w-prose">
						{{ description }}
					</p>
				</header>
				<div class="preflight">
					<MainContent />
					<FooterNotes class="mt-xl" />
				</div>
			</div>
		</div>
		<div
			v-if="permalinks.length"
			class="none xl:block xl:w-2/12 py-16 px-24 right-0">
			<div class="my-lg fixed">
				<nav class="vv-nav vv-nav--border">
					<ul class="vv-nav__menu" role="menu">
						<li class="vv-nav__item" role="presentation">
							<span
								id="in-this-page-heading"
								class="vv-nav__heading-label"
								aria-hidden="true">
								On this page
							</span>
							<ul
								class="vv-nav__menu"
								role="menu"
								aria-labelledby="in-this-page-heading">
								<li
									v-for="(
										{ label, hash }, index
									) in permalinks"
									:key="index"
									class="vv-nav__item">
									<a
										class="vv-nav__item-label"
										tabindex="0"
										:href="hash"
										:class="{
											selected: route.hash === hash,
										}"
										@click.prevent="scrollIntoView(hash)">
										{{ label }}
									</a>
								</li>
							</ul>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</div>
</template>

<route lang="yaml">
meta:
    layout: asideNavigation
</route>
