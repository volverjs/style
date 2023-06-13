<script setup>
	import CodeEditor from '../../components/CodeEditor.vue'
	import { permalinkToPath } from '@docs/utils/permalink'

	const route = useRoute()
	const router = useRouter()
	const title = ref('')
	const description = ref('')
	const uiVue = ref(false)
	const permalinks = ref([])
	const githubUrl = `https://github.com/volverjs/style/edit/develop/docs/contents/components/${route.params.name}/index.md`

	let MainContent
	try {
		const { attributes, toc, VueComponentWith } = await import(
			`../../contents/components/${route.params.name}/index.md`
		)
		title.value = attributes.title
		description.value = attributes.description
		uiVue.value = attributes.uiVue
		permalinks.value = toc.map(({ content }) => permalinkToPath(content))
		MainContent = VueComponentWith({
			CodeEditor,
		})
	} catch (error) {
		router.replace({ name: 'index' })
	}
	const scrollIntoView = (hash) => {
		router.replace({ ...route, hash })
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
					<div class="flex items-center mb-sm">
						<h1
							v-if="title"
							class="vv-text vv-text--size-1 font-bold flex items-end mr-auto">
							{{ title }}
							<span
								v-if="uiVue"
								class="vv-badge vv-badge--sm vv-badge--success ml-16 mb-12"
								>ui-vue</span
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
					<p
						v-if="description"
						class="vv-text text-word-2 max-w-prose">
						{{ description }}
					</p>
				</header>
				<div class="preflight">
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
		<aside
			v-if="permalinks.length"
			class="none xl:block xl:w-2/12 py-16 px-24 right-0">
			<div class="my-lg fixed">
				<nav class="vv-nav vv-nav--aside">
					<ul class="vv-nav__menu">
						<li class="vv-nav__item">
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
									role="presentation"
									class="vv-nav__item">
									<a
										class="vv-nav__item-label"
										role="menuitem"
										tabindex="0"
										:href="hash"
										:class="{
											current: route.hash === hash,
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
		</aside>
	</div>
</template>

<route lang="yaml">
meta:
    layout: sidebarNavigation
</route>
