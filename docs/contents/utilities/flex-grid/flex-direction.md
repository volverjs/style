---
title: Flex Direction
description: Utilities for controlling the direction of flex items.
breakpoints: true
---
<div>
    <table-utility prefix="flex" property="flex-direction" class="mb-lg"></table-utility>
    <card-example>
        <div class="relative container h-full rounded-md bg-surface-1 text-alpha p-24">
			<div class="flex flex-row justify-between border-b border-alpha-1 mb-24 pb-24">
				<div class="p-10 bg-info rounded-sm"><span class="text-xs text-white font-semibold">1</span></div>
				<div class="p-10 bg-info rounded-sm"><span class="text-xs text-white font-semibold">2</span></div>
				<div class="p-10 bg-info rounded-sm"><span class="text-xs text-white font-semibold">3</span></div>
			</div>
			<div class="flex flex-row-reverse justify-between border-b border-alpha-1 mb-24 pb-24">
				<div class="p-10 bg-info rounded-sm"><span class="text-xs text-white font-semibold">1</span></div>
				<div class="p-10 bg-info rounded-sm"><span class="text-xs text-white font-semibold">2</span></div>
				<div class="p-10 bg-info rounded-sm"><span class="text-xs text-white font-semibold">3</span></div>
			</div>
			<div class="flex flex-col items-center border-b border-alpha-1 mb-24 pb-24">
				<div class="w-1/2 p-10 mb-8 bg-info text-center rounded-sm"><span class="text-xs text-white font-semibold">1</span></div>
				<div class="w-1/2 p-10 mb-8 bg-info text-center rounded-sm"><span class="text-xs text-white font-semibold">2</span></div>
				<div class="w-1/2 p-10 bg-info text-center rounded-sm"><span class="text-xs text-white font-semibold">3</span></div>
			</div>
			<div class="flex flex-col-reverse items-center">
				<div class="w-1/2 p-10 bg-info text-center rounded-sm"><span class="text-xs text-white font-semibold">1</span></div>
				<div class="w-1/2 p-10 mb-8 bg-info text-center rounded-sm"><span class="text-xs text-white font-semibold">2</span></div>
				<div class="w-1/2 p-10 mb-8 bg-info text-center rounded-sm"><span class="text-xs text-white font-semibold">3</span></div>
			</div>
		</div>
    </card-example>
</div>