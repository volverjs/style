---
title: Order
description: Utilities for controlling the order of flex and grid items.
---
<div>
    <table-utility prefix="order" property="order" class="mb-lg"></table-utility>
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