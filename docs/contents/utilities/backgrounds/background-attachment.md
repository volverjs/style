---
title: Background Attachment
description: Utilities for controlling how a background image behaves when scrolling.
---
<div>
	<table-utility prefix="bg" property="background-attachment" class="mb-lg"></table-utility>
    <card-example>
		<div class="relative container h-full rounded-md bg-surface-1 p-24">
			<div class="absolute inset-0 bg-grid mix-blend-plus-lighter"></div>
			<div class="relative">
				<div class="text-white bg-fixed bg-cover bg-no-repeat border-b border-alpha-1 mb-24 p-24" style="background-image: url('https://source.unsplash.com/random/100')">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent congue blandit mi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent vel pellentesque mauris. Morbi id convallis felis. Nulla facilisi.</div>
				<div class="text-white bg-local bg-cover bg-no-repeat border-b border-alpha-1 mb-24 p-24 h-100 overflow-auto" style="background-image: url('https://source.unsplash.com/random/100')">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent congue blandit mi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent vel pellentesque mauris. Morbi id convallis felis. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent congue blandit mi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent vel pellentesque mauris. Morbi id convallis felis. Nulla facilisi.</div>
				<div class="text-white bg-scroll bg-cover bg-no-repeat p-24 h-100 overflow-auto" style="background-image: url('https://source.unsplash.com/random/100')">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent congue blandit mi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent vel pellentesque mauris. Morbi id convallis felis. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent congue blandit mi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent vel pellentesque mauris. Morbi id convallis felis. Nulla facilisi.</div>
			</div>
		</div>
	</card-example>
</div>