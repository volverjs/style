<script setup>
	import { RouterLink } from 'vue-router'
	import CodeEditor from '../components/CodeEditor.vue'
	import FooterNotes from '../components/FooterNotes.vue'
	import CopyCode from '../components/CopyCode.vue'
	import Logo from '../components/Logo.vue'
	import { VueComponentWith } from '../contents/home/index.md'

	useHead({
		title: 'Volver CSS Library',
		meta: [
			{
				name: 'description',
				content:
					'@volverjs/style is a lightweight responsive CSS utility library to accompany @volverjs/ui-vue and static webpages as well.',
			},
		],
	})

	const MainContent = VueComponentWith({
		Logo,
		CodeEditor,
		FooterNotes,
		RouterLink,
		CopyCode,
	})
</script>

<template>
	<div>
		<MainContent />
		<FooterNotes class="text-center" />
	</div>
</template>

<route lang="yaml">
meta:
    layout: default
    hiddenSidebar: true
</route>
