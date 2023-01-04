---
title: Object Position
description: Utilities for controlling how a replaced element's content should be positioned within its container.
---
<div>
    <table-utility prefix="object" property="object-position" class="mb-lg"></table-utility>
	<card-example>
		<div class="relative container h-full rounded-md bg-surface-1 p-24">
			<div class="absolute inset-0 bg-grid mix-blend-plus-lighter"></div>
			<div class="relative grid gap-10" style="grid-template-columns: repeat(3, minmax(0, 1fr));">
				<div class="relative w-100 h-150 bg-shadow">
					<img class="w-100 h-150 object-contain object-bottom" src="https://picsum.photos/150">
					<span role="status" class="vv-badge absolute top-4 left-4">Bottom</span>
				</div>
				<div class="relative w-100 h-150 bg-shadow">
					<img class="relative w-100 h-150 object-contain object-center" src="https://picsum.photos/150">
					<span role="status" class="vv-badge absolute top-4 left-4">Center</span>
				</div>
				<div class="relative w-100 h-150 bg-shadow">
					<img class="relative w-100 h-150 object-contain object-left" src="https://picsum.photos/150">
					<span role="status" class="vv-badge absolute top-4 left-4">Left</span>
				</div>
				<div class="relative w-100 h-150 bg-shadow">
					<img class="relative w-100 h-150 object-contain object-left-bottom" src="https://picsum.photos/150">
					<span role="status" class="vv-badge absolute top-4 left-4">Left
						bottom</span>
				</div>
				<div class="relative w-100 h-150 bg-shadow">
					<img class="relative w-100 h-150 object-contain object-left-top" src="https://picsum.photos/150">
					<span role="status" class="vv-badge absolute top-4 left-4">Left
						top</span>
				</div>
				<div class="relative w-100 h-150 bg-shadow">
					<img class="relative w-100 h-150 object-contain object-right" src="https://picsum.photos/150">
					<span role="status" class="vv-badge absolute top-4 left-4">Right</span>
				</div>
				<div class="relative w-100 h-150 bg-shadow">
					<img class="relative w-100 h-150 object-contain object-right-bottom" src="https://picsum.photos/150">
					<span role="status" class="vv-badge absolute top-4 left-4">Right
						bottom</span>
				</div>
				<div class="relative w-100 h-150 bg-shadow">
					<img class="relative w-100 h-150 object-contain object-right-top" src="https://picsum.photos/150">
					<span role="status" class="vv-badge absolute top-4 left-4">Right
						top</span>
				</div>
				<div class="relative w-100 h-150 bg-shadow">
					<img class="relative w-100 h-150 object-contain object-top" src="https://picsum.photos/150">
					<span role="status" class="vv-badge absolute top-4 left-4">Top</span>
				</div>
			</div>
		</div>
	</card-example>
</div>