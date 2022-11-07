---
title: Flex
description: Utilities for controlling how flex items both grow and shrink.
breakpoints: true
---
<div>
    <table-utility prefix="flex" property="flex" class="mb-lg"></table-utility>
	<details id="accordion-item-1" class="vv-accordion vv-accordion--bordered vv-accordion--marker-right bg-surface mb-lg">
		<summary class="vv-accordion__summary flex items-center" aria-controls="#accordion-item-1" aria-expanded="false">
			<iconify-icon icon="akar-icons:info" class="mr-sm"></iconify-icon>
			Accept breakpoint utilities
		</summary>
		<div aria-hidden="true" class="vv-accordion__content">
			<p class="font-light text-word-3">
				You can also use the breakpoint modifier to apply the class at only a specific screen size and above.<br />
				Example: md:flex-{1|auto|initial|none}
			</p>
		</div>
	</details>
    <card-example>
		<div class="container h-full rounded-md bg-surface-1 p-24">
			<div class="flex flex-row justify-between gap-md border-b border-alpha-1 mb-24 pb-24">
				<div class="w-100 flex-1 rounded-md py-10 bg-info text-center"><span class="text-xs text-white font-semibold">Flex-1</span></div>
				<div class="w-100 rounded-md py-10 bg-info text-center"></div>
				<div class="w-100 rounded-md py-10 bg-info text-center"></div>
			</div>
			<div class="flex flex-row justify-between gap-md border-b border-alpha-1 mb-24 pb-24">
				<div class="w-100 flex-auto rounded-md py-10 bg-info text-center"><span class="text-xs text-white font-semibold">Flex-auto</span></div>
				<div class="w-100 rounded-md py-10 bg-info text-center"></div>
				<div class="w-100 rounded-md py-10 bg-info text-center"></div>
			</div>
			<div class="flex flex-row justify-between gap-md border-b border-alpha-1 mb-24 pb-24">
				<div class="w-100 flex-initial rounded-md py-10 bg-info text-center"><span class="text-xs text-white font-semibold">Flex-initial</span></div>
				<div class="w-100 rounded-md py-10 bg-info text-center"></div>
				<div class="w-100 rounded-md py-10 bg-info text-center"></div>
			</div>
			<div class="flex flex-row justify-between gap-md">
				<div class="w-100 flex-none rounded-md py-10 bg-info text-center"><span class="text-xs text-white font-semibold">Flex none</span></div>
				<div class="w-100 rounded-md py-10 bg-info text-center"></div>
				<div class="w-100 rounded-md py-10 bg-info text-center"></div>
			</div>
		</div>
    </card-example>
</div>