---
title: Align Items
description: Utilities for controlling how flex and grid items are positioned along a container's cross axis.
breakpoints: true
---
<div>
    <table-utility prefix="items" property="justify-align-items" custom-property="align-items" class="mb-lg"></table-utility>
	<details id="accordion-item-1" class="vv-accordion vv-accordion--bordered vv-accordion--marker-right bg-surface mb-lg">
		<summary class="vv-accordion__summary flex items-center" aria-controls="#accordion-item-1" aria-expanded="false">
			<iconify-icon icon="akar-icons:info" class="mr-sm"></iconify-icon>
			Accept breakpoint utilities
		</summary>
		<div aria-hidden="true" class="vv-accordion__content">
			<p class="font-light text-word-3">
				You can also use the breakpoint modifier to apply the class at only a specific screen size and above.<br />
				Example: md:items-{start|end|center|baseline|stretch}
			</p>
		</div>
	</details>
    <card-example>
		<div class="container columns-2 h-full rounded-md bg-surface-1 p-24">
			<div class="flex flex-col items-start border-b border-alpha-1 mb-24 pb-24">
				<div class="w-1/2 p-10 mb-8 bg-info text-center rounded-sm"><span class="text-xs text-white font-semibold">1</span></div>
				<div class="w-1/2 p-10 mb-8 bg-info text-center rounded-sm"><span class="text-xs text-white font-semibold">2</span></div>
				<div class="w-1/2 p-10 mb-8 bg-info text-center rounded-sm"><span class="text-xs text-white font-semibold">3</span></div>
			</div>
			<div class="flex flex-col items-end border-b border-alpha-1 mb-24 pb-24">
				<div class="w-1/2 p-10 mb-8 bg-info text-center rounded-sm"><span class="text-xs text-white font-semibold">1</span></div>
				<div class="w-1/2 p-10 mb-8 bg-info text-center rounded-sm"><span class="text-xs text-white font-semibold">2</span></div>
				<div class="w-1/2 p-10 mb-8 bg-info text-center rounded-sm"><span class="text-xs text-white font-semibold">3</span></div>
			</div>
			<div class="break-after-column flex flex-col items-center">
				<div class="w-1/2 p-10 mb-8 bg-info text-center rounded-sm"><span class="text-xs text-white font-semibold">1</span></div>
				<div class="w-1/2 p-10 mb-8 bg-info text-center rounded-sm"><span class="text-xs text-white font-semibold">2</span></div>
				<div class="w-1/2 p-10 bg-info text-center rounded-sm"><span class="text-xs text-white font-semibold">3</span></div>
			</div>
			<div class="flex flex-col items-baseline border-b border-alpha-1 mb-24 pb-24">
				<div class="w-1/2 p-10 mb-8 bg-info text-center rounded-sm"><span class="text-xs text-white font-semibold">1</span></div>
				<div class="w-1/2 p-10 mb-8 bg-info text-center rounded-sm"><span class="text-xs text-white font-semibold">2</span></div>
				<div class="w-1/2 p-10 mb-8 bg-info text-center rounded-sm"><span class="text-xs text-white font-semibold">3</span></div>
			</div>
			<div class="flex flex-col items-stretch border-b border-alpha-1 mb-24 pb-24">
				<div class="w-1/2 p-10 mb-8 bg-info text-center rounded-sm"><span class="text-xs text-white font-semibold">1</span></div>
				<div class="w-1/2 p-10 mb-8 bg-info text-center rounded-sm"><span class="text-xs text-white font-semibold">2</span></div>
				<div class="w-1/2 p-10 mb-8 bg-info text-center rounded-sm"><span class="text-xs text-white font-semibold">3</span></div>
			</div>
		</div>
    </card-example>
</div>