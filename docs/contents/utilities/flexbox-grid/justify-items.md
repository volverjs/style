---
title: Justify Items
description: Utilities for controlling how grid items are aligned along their inline axis.
---
<div>
    <table-utility prefix="justify-items" property="justify-align-items" custom-property="justify-items" class="mb-lg"></table-utility>
    <card-example>
		<div class="container h-full rounded-md bg-surface-1 p-24">
			<div class="container grid justify-items-start border-b border-alpha-1 mb-24 pb-24">
				<div class="w-1/2 p-10 mb-8 bg-info text-center rounded-sm"><span class="text-xs text-white font-semibold">1</span></div>
				<div class="w-1/2 p-10 bg-info text-center rounded-sm"><span class="text-xs text-white font-semibold">2</span></div>
			</div>
			<div class="container grid justify-items-end border-b border-alpha-1 mb-24 pb-24">
				<div class="w-1/2 p-10 mb-8 bg-info text-center rounded-sm"><span class="text-xs text-white font-semibold">1</span></div>
				<div class="w-1/2 p-10 bg-info text-center rounded-sm"><span class="text-xs text-white font-semibold">2</span></div>
			</div>
			<div class="container grid justify-items-center border-b border-alpha-1 mb-24 pb-24">
				<div class="w-1/2 p-10 mb-8 bg-info text-center rounded-sm"><span class="text-xs text-white font-semibold">1</span></div>
				<div class="w-1/2 p-10 bg-info text-center rounded-sm"><span class="text-xs text-white font-semibold">2</span></div>
			</div>
			<div class="container grid justify-items-baseline border-b border-alpha-1 mb-24 pb-24">
				<div class="w-1/2 p-10 mb-8 bg-info text-center rounded-sm"><span class="text-xs text-white font-semibold">1</span></div>
				<div class="w-1/2 p-10 bg-info text-center rounded-sm"><span class="text-xs text-white font-semibold">2</span></div>
			</div>
			<div class="container grid justify-items-stretch">
				<div class="w-1/2 p-10 mb-8 bg-info text-center rounded-sm"><span class="text-xs text-white font-semibold">1</span></div>
				<div class="w-1/2 p-10 bg-info text-center rounded-sm"><span class="text-xs text-white font-semibold">2</span></div>
			</div>
		</div>
    </card-example>
</div>