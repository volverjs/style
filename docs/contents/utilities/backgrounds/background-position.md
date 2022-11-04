---
title: Background Position
description: Utilities for controlling the position of an element's background image.
---
<div>
	<table-utility prefix="bg" property="background-position" class="mb-lg"></table-utility>
    <card-example>
		<div class="relative container h-full rounded-md bg-surface-1 p-24">
			<div class="absolute inset-0 bg-grid mix-blend-plus-lighter"></div>
			<div class="relative grid gap-10" style="grid-template-columns: repeat(3, minmax(0, 1fr));">
				<div class="w-150 h-150 bg-auto bg-bottom" style="background-image: url('https://picsum.photos/200')">
					<span role="status" class="vv-badge">Bottom</span>
				</div>
				<div class="w-150 h-150 bg-auto bg-center" style="background-image: url('https://picsum.photos/200')">
					<span role="status" class="vv-badge">Center</span>
				</div>
				<div class="w-150 h-150 bg-auto bg-left" style="background-image: url('https://picsum.photos/200')">
					<span role="status" class="vv-badge">Left</span>
				</div>
				<div class="w-150 h-150 bg-auto bg-left-bottom" style="background-image: url('https://picsum.photos/200')">
					<span role="status" class="vv-badge">Left-bottom</span>
				</div>
				<div class="w-150 h-150 bg-auto bg-left-top" style="background-image: url('https://picsum.photos/200')">
					<span role="status" class="vv-badge">Left-top</span>
				</div>
				<div class="w-150 h-150 bg-auto bg-right" style="background-image: url('https://picsum.photos/200')">
					<span role="status" class="vv-badge">Right</span>
				</div>
				<div class="w-150 h-150 bg-auto bg-right-bottom" style="background-image: url('https://picsum.photos/200')">
					<span role="status" class="vv-badge">Right-bottom</span>
				</div>
				<div class="w-150 h-150 bg-auto bg-right-top" style="background-image: url('https://picsum.photos/200')">
					<span role="status" class="vv-badge">Right-top</span>
				</div>
				<div class="w-150 h-150 bg-auto bg-top" style="background-image: url('https://picsum.photos/200')">
					<span role="status" class="vv-badge">Top</span>
				</div>
			</div>
		</div>
	</card-example>
</div>