---
title: Order
description: Utilities for controlling the order of flex and grid items.
breakpoints: true
---
Order utilities are used to control the order of flex and grid items. They can be used to change the order of flex and grid items from their default order to a specific order, or vice versa.

<table-utility prefix="order" property="order" class="mb-lg"></table-utility>
<card-example>
	<div class="absolute inset-0 bg-grid mix-blend-plus-lighter"></div>
	<div class="relative flex flex-row justify-between gap-md text-center text-xs text-white font-semibold">
		<div class="flex-1 order-last rounded-md py-10 bg-info">order-last</div>
		<div class="flex-1 order-first rounded-md py-10 bg-info">order-first</div>
		<div class="flex-1 rounded-md py-10 bg-info"></div>
	</div>
</card-example>