---
title: Background Clip
description: Utilities for controlling the bounding box of an element's background.
---
<div>
	<table-utility prefix="bg-clip" property="background-clip" class="mb-lg"></table-utility>
    <card-example>
		<div class="relative container h-full rounded-md bg-surface-1 p-24">
			<div class="absolute inset-0 bg-grid mix-blend-plus-lighter"></div>
				<div class="relative">
					<div class="p-10 bg-clip-border text-white bg-info border-dashed border-accent border-4 mb-24">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Praesent congue blandit mi. Interdum et malesuada fames ac
						ante ipsum primis in faucibus.
					</div>
					<div class="p-10 bg-clip-padding text-white bg-info border-dashed border-accent border-4 mb-24">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Praesent congue blandit mi. Interdum et malesuada fames ac
						ante ipsum primis in faucibus.
					</div>
					<div class="p-10 bg-clip-content text-white bg-info border-dashed border-accent border-4 mb-24">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Praesent congue blandit mi. Interdum et malesuada fames ac
						ante ipsum primis in faucibus.
					</div>
					<div class="p-10 bg-clip-text bg-info border-dashed border-accent text-transparent border-4">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Praesent congue blandit mi. Interdum et malesuada fames ac
						ante ipsum primis in faucibus.
					</div>
				</div>
			</div>
	</card-example>
</div>