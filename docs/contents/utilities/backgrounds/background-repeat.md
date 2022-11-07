---
title: Background Repeat
description: Utilities for controlling the repetition of an element's background image.
---
<div>
	<table-utility prefix="bg" property="background-repeat" class="mb-lg"></table-utility>
    <card-example>
		<div class="relative container h-full rounded-md bg-surface-1 p-24">
			<div class="absolute inset-0 bg-grid mix-blend-plus-lighter"></div>
			<div class="relative grid gap-10" style="grid-template-columns: repeat(3, minmax(0, 1fr));">
				<div class="w-150 h-150 bg-contain bg-repeat" style="background-image: url('https://source.unsplash.com/random/150')">
					<span role="status" class="vv-badge">Repeat</span>
				</div>
				<div class="w-150 h-150 bg-contain bg-no-repeat" style="background-image: url('https://source.unsplash.com/random/150')">
					<span role="status" class="vv-badge">No repeat</span>
				</div>
				<div class="w-150 h-150 bg-contain bg-repeat-x" style="background-image: url('https://source.unsplash.com/random/150')">
					<span role="status" class="vv-badge">Repeat-x</span>
				</div>
				<div class="w-150 h-150 bg-contain bg-repeat-y" style="background-image: url('https://source.unsplash.com/random/150')">
					<span role="status" class="vv-badge">Repeat-y</span>
				</div>
				<div class="w-150 h-150 bg-contain bg-repeat-round" style="background-image: url('https://source.unsplash.com/random/150')">
					<span role="status" class="vv-badge">Repeat around</span>
				</div>
				<div class="w-150 h-150 bg-contain bg-repeat-space" style="background-image: url('https://source.unsplash.com/random/150')">
					<span role="status" class="vv-badge">Repeat space</span>
				</div>
			</div>
		</div>
	</card-example>
</div>