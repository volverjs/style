---
title: Background Repeat
description: Utilities for controlling the repetition of an element's background image.
---
<table-utility prefix="bg" property="background-repeat" class="mb-lg"></table-utility>
<card-example>
	<div class="absolute inset-0 bg-grid mix-blend-plus-lighter"></div>
	<div class="grid grid-cols-3 gap-md" style="grid-template-columns: repeat(3, minmax(0, 1fr));">
		<div class="relative h-150 bg-info bg-repeat" style="background-image: url('https://unsplash.it/80')">
			<span role="status" class="vv-badge absolute top-sm left-sm">bg-repeat</span>
		</div>
		<div class="relative h-150 bg-info bg-no-repeat" style="background-image: url('https://unsplash.it/80')">
			<span role="status" class="vv-badge absolute top-sm left-sm">bg-no-repeat</span>
		</div>
		<div class="relative h-150 bg-info bg-repeat-x" style="background-image: url('https://unsplash.it/80')">
			<span role="status" class="vv-badge absolute top-sm left-sm">bg-repeat-x</span>
		</div>
		<div class="relative h-150 bg-info bg-repeat-y" style="background-image: url('https://unsplash.it/80')">
			<span role="status" class="vv-badge absolute top-sm left-sm">bg-repeat-y</span>
		</div>
		<div class="relative h-150 bg-info bg-repeat-round" style="background-image: url('https://unsplash.it/80')">
			<span role="status" class="vv-badge absolute top-sm left-sm">bg-repeat-round</span>
		</div>
		<div class="relative h-150 bg-info bg-repeat-space" style="background-image: url('https://unsplash.it/80')">
			<span role="status" class="vv-badge absolute top-sm left-sm">bg-repeat-space</span>
		</div>
	</div>
</card-example>