---
title: Align Content
description: Utilities for controlling how rows are positioned in multi-row flex and grid containers.
breakpoints: true
---
<div>
    <table-utility prefix="content" property="justify-align-content" custom-property="align-content" class="mb-lg"></table-utility>
	<details id="accordion-item-1" class="vv-accordion vv-accordion--bordered vv-accordion--marker-right bg-surface mb-lg">
		<summary class="vv-accordion__summary flex items-center" aria-controls="#accordion-item-1" aria-expanded="false">
			<iconify-icon icon="akar-icons:info" class="mr-sm"></iconify-icon>
			Accept breakpoint utilities
		</summary>
		<div aria-hidden="true" class="vv-accordion__content">
			<p class="font-light text-word-3">
				You can also use the breakpoint modifier to apply the class at only a specific screen size and above.<br />
				Example: md:content-{start|end|center|between|around|evenly}
			</p>
		</div>
	</details>
    <card-example>
		<div class="container h-full rounded-md bg-surface-1 p-24">
			<div class="flex flex-wrap justify-around gap-4">
				<div class="w-1/4 h-240 flex flex-wrap justify-center content-start border-b border-alpha-1 mb-24 pb-24">
					<div class="w-100 p-10 mb-8 bg-info text-center rounded-sm"><span class="text-xs text-white font-semibold">1</span></div>
					<div class="w-100 p-10 mb-8 bg-info text-center rounded-sm"><span class="text-xs text-white font-semibold">2</span></div>
					<div class="w-100 p-10 mb-8 bg-info text-center rounded-sm"><span class="text-xs text-white font-semibold">3</span></div>
				</div>
				<div class="w-1/4 h-240 flex flex-wrap justify-center content-end border-b border-alpha-1 mb-24 pb-24">
					<div class="w-100 p-10 mb-8 bg-info text-center rounded-sm"><span class="text-xs text-white font-semibold">1</span></div>
					<div class="w-100 p-10 mb-8 bg-info text-center rounded-sm"><span class="text-xs text-white font-semibold">2</span></div>
					<div class="w-100 p-10 mb-8 bg-info text-center rounded-sm"><span class="text-xs text-white font-semibold">3</span></div>
				</div>
				<div class="w-1/4 h-240 flex flex-wrap justify-center content-center border-b border-alpha-1 mb-24 pb-24">
					<div class="w-100 p-10 mb-8 bg-info text-center rounded-sm"><span class="text-xs text-white font-semibold">1</span></div>
					<div class="w-100 p-10 mb-8 bg-info text-center rounded-sm"><span class="text-xs text-white font-semibold">2</span></div>
					<div class="w-100 p-10 mb-8 bg-info text-center rounded-sm"><span class="text-xs text-white font-semibold">3</span></div>
				</div>
				<div class="w-1/4 h-240 flex flex-wrap justify-center content-between">
					<div class="w-100 p-10 bg-info text-center rounded-sm"><span class="text-xs text-white font-semibold">1</span></div>
					<div class="w-100 p-10 bg-info text-center rounded-sm"><span class="text-xs text-white font-semibold">2</span></div>
					<div class="w-100 p-10 bg-info text-center rounded-sm"><span class="text-xs text-white font-semibold">3</span></div>
				</div>
				<div class="w-1/4 h-240 flex flex-wrap justify-center content-around">
					<div class="w-100 p-10 bg-info text-center rounded-sm"><span class="text-xs text-white font-semibold">1</span></div>
					<div class="w-100 p-10 bg-info text-center rounded-sm"><span class="text-xs text-white font-semibold">2</span></div>
					<div class="w-100 p-10 bg-info text-center rounded-sm"><span class="text-xs text-white font-semibold">3</span></div>
				</div>
			</div>
		</div>
    </card-example>
</div>