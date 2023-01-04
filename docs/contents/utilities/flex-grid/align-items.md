---
title: Align / Justify Items
description: Utilities for controlling how flex and grid items are positioned along a container's cross axis.
breakpoints: true
---
<div>
    <table-utility prefix="items" property="justify-align-items" attribute="align-items" class="mb-lg"></table-utility>
	 <table-utility prefix="justify-items" property="justify-align-items" attribute="justify-items" class="mb-lg"></table-utility>
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