---
title: Grid Column Start / End
description: Utilities for controlling how elements are sized and placed across grid columns.
breakpoints: true
---
<div>
	<p class="vv-text text-word-2 max-w-prose">Grid column with start and end utilities</p>
    <table-utility prefix="col" property="grid-column" class="mb-lg"></table-utility>
	<p class="vv-text text-word-2 max-w-prose">Grid column with start or end utilities</p>
	<table-utility prefix="col-{start|end}" property="grid-column-start-end" custom-property="grid-column-{start|end}" class="mb-lg"></table-utility>
	<details id="accordion-item-1" class="vv-accordion vv-accordion--bordered vv-accordion--marker-right bg-surface mb-lg">
		<summary class="vv-accordion__summary flex items-center" aria-controls="#accordion-item-1" aria-expanded="false">
			<iconify-icon icon="akar-icons:info" class="mr-sm"></iconify-icon>
			Accept breakpoint utilities
		</summary>
		<div aria-hidden="true" class="vv-accordion__content">
			<p class="font-light text-word-3">
				You can also use the breakpoint modifier to apply the class at only a specific screen size and above.<br />
				Example: md:col-{auto|span-1|span-2|span-3|...|span-10|span-11|span-12|span-full} or md:row-{start|end}-{1|2|3|...|11|12|13|auto}
			</p>
		</div>
	</details>
    <card-example>
		<div class="container h-full rounded-md bg-surface-1 p-24">
			<div class="grid grid-cols-6 gap-10 border-b border-alpha-1 mb-24 pb-24">
				<div class="rounded-md p-10 bg-info text-center"><span class="text-xs text-white font-semibold">1</span></div>
				<div class="col-span-4 rounded-md p-10 bg-info text-center"><span class="text-xs text-white font-semibold">2</span></div>
				<div class="rounded-md p-10 bg-info text-center"><span class="text-xs text-white font-semibold">3</span></div>
				<div class="col-span-3 rounded-md p-10 bg-info text-center"><span class="text-xs text-white font-semibold">4</span></div>
				<div class="rounded-md p-10 bg-info text-center"><span class="text-xs text-white font-semibold">5</span></div>
				<div class="col-span-full rounded-md p-10 bg-info text-center"><span class="text-xs text-white font-semibold">6</span></div>
			</div>
			<div class="grid grid-cols-6 gap-10 border-b border-alpha-1 mb-24 pb-24">
				<div class="rounded-md p-10 bg-info text-center"><span class="text-xs text-white font-semibold">1</span></div>
				<div class="col-start-3 rounded-md p-10 bg-info text-center"><span class="text-xs text-white font-semibold">2</span></div>
				<div class="rounded-md p-10 bg-info text-center"><span class="text-xs text-white font-semibold">3</span></div>
				<div class="rounded-md p-10 bg-info text-center"><span class="text-xs text-white font-semibold">4</span></div>
				<div class="rounded-md p-10 bg-info text-center"><span class="text-xs text-white font-semibold">5</span></div>
				<div class="col-start-auto rounded-md p-10 bg-info text-center"><span class="text-xs text-white font-semibold">6</span></div>
			</div>
			<div class="grid grid-cols-6 gap-10">
				<div class="rounded-md p-10 bg-info text-center"><span class="text-xs text-white font-semibold">1</span></div>
				<div class="col-end-4 rounded-md p-10 bg-info text-center"><span class="text-xs text-white font-semibold">2</span></div>
				<div class="rounded-md p-10 bg-info text-center"><span class="text-xs text-white font-semibold">3</span></div>
				<div class="rounded-md p-10 bg-info text-center"><span class="text-xs text-white font-semibold">4</span></div>
				<div class="rounded-md p-10 bg-info text-center"><span class="text-xs text-white font-semibold">5</span></div>
				<div class="col-end-auto rounded-md p-10 bg-info text-center"><span class="text-xs text-white font-semibold">6</span></div>
			</div>
		</div>
    </card-example>
</div>