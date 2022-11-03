---
title: Object Fit
description: Utilities for controlling how a replaced element's content should be resized.
---
<div>
    <table-utility prefix="object" property="object-fit" class="mb-lg"></table-utility>
	<card-example>
		<div class="relative container h-full rounded-md bg-surface-1 p-24">
			<div class="absolute inset-0 bg-grid mix-blend-plus-lighter"></div>
			<div class="relative grid gap-10" style="grid-template-columns: repeat(3, minmax(0, 1fr));">
				<div class="relative w-100 h-150 bg-shadow">
					<img class="w-100 h-150 object-fill" src="https://picsum.photos/150">
					<span role="status" class="vv-badge absolute top-4 left-4">Fill</span>
				</div>
				<div class="relative w-100 h-150 bg-shadow">
					<img class="relative w-100 h-150 object-contain" src="https://picsum.photos/150">
					<span role="status" class="vv-badge absolute top-4 left-4">Contain</span>
				</div>
				<div class="relative w-100 h-150 bg-shadow">
					<img class="relative w-100 h-150 object-cover" src="https://picsum.photos/150">
					<span role="status" class="vv-badge absolute top-4 left-4">Cover</span>
				</div>
				<div class="relative w-100 h-150 bg-shadow">
					<img class="relative w-100 h-150 object-none" src="https://picsum.photos/150">
					<span role="status" class="vv-badge absolute top-4 left-4">None</span>
				</div>
				<div class="relative w-100 h-150 bg-shadow">
					<img class="relative w-100 h-150 object-scale-down" src="https://picsum.photos/150">
					<span role="status" class="vv-badge absolute top-4 left-4">Scale
						down</span>
				</div>
			</div>
		</div>
	</card-example>
</div>