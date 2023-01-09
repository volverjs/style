---
title: Background Size
description: Utilities for controlling the background size of an element's background image.
---
<table-utility prefix="bg" property="background-size" class="mb-lg"></table-utility>
<card-example>
	<div class="absolute inset-0 bg-grid mix-blend-plus-lighter"></div>
	<div class="grid grid-cols-3 gap-sm">
		<div class="h-150 bg-auto relative" style="background-image: url('https://unsplash.it/100')">
			<span role="status" class="vv-badge absolute top-sm left-sm">bg-auto</span>
		</div>
		<div class="h-150 bg-cover relative" style="background-image: url('https://unsplash.it/100')">
			<span role="status" class="vv-badge absolute top-sm left-sm">bg-cover</span>
		</div>
		<div class="h-150 bg-contain relative" style="background-image: url('https://unsplash.it/100')">
			<span role="status" class="vv-badge absolute top-sm left-sm">bg-contain</span>
		</div>
	</div>
</card-example>