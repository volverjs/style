---
title: Order
description: Utilities for controlling the order of flex and grid items.
breakpoints: true
---
<div>
    <table-utility prefix="order" property="order" class="mb-lg"></table-utility>
	<details id="accordion-item-1" class="vv-accordion vv-accordion--bordered vv-accordion--marker-right bg-surface mb-lg">
		<summary class="vv-accordion__summary flex items-center" aria-controls="#accordion-item-1" aria-expanded="false">
			<iconify-icon icon="akar-icons:info" class="mr-sm"></iconify-icon>
			Accept breakpoint utilities
		</summary>
		<div aria-hidden="true" class="vv-accordion__content">
			<p class="font-light text-word-3">
				You can also use the breakpoint modifier to apply the class at only a specific screen size and above.<br />
				Example: md:order-{1|2|3|...|11|12|first|last|none}
			</p>
		</div>
	</details>
    <card-example>
		<div class="relative container h-full rounded-md bg-surface-1 p-24">
			<div class="absolute inset-0 bg-grid mix-blend-plus-lighter"></div>
			<div class="relative flex flex-row justify-between gap-md">
				<div class="w-150 order-last rounded-md py-10 bg-info text-center"><span class="text-xs text-white font-semibold">1</span></div>
				<div class="w-150 order-first rounded-md py-10 bg-info text-center"><span class="text-xs text-white font-semibold">2</span></div>
				<div class="w-150 order-2 rounded-md py-10 bg-info text-center"><span class="text-xs text-white font-semibold">3</span></div>
			</div>
		</div>
    </card-example>
</div>