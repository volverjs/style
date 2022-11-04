---
title: Background Size
description: Utilities for controlling the background size of an element's background image.
---
<div>
	<table-utility prefix="bg" property="background-size" class="mb-lg"></table-utility>
    <card-example>
		<div class="relative container h-full rounded-md bg-surface-1 p-24">
			<div class="absolute inset-0 bg-grid mix-blend-plus-lighter"></div>
			<div class="relative flex flex-nowrap gap-10">
				<div class="w-full h-150 bg-auto" style="background-image: url('https://picsum.photos/100')"></div>
				<div class="w-full h-150 bg-cover" style="background-image: url('https://picsum.photos/100')"></div>
				<div class="w-full h-150 bg-contain" style="background-image: url('https://picsum.photos/100')"></div>
			</div>
		</div>
	</card-example>
</div>