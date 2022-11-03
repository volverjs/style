---
title: Grid Auto Flow
description: Utilities for controlling how elements in a grid are auto-placed.
---
<div>
    <table-utility prefix="grid-flow" property="grid-auto-flow" class="mb-lg"></table-utility>
    <card-example>
		<div class="container h-full rounded-md bg-surface-1 p-24">
			<div class="relative grid grid-flow-row gap-10 border-b border-alpha-1 mb-24 pb-24" style="grid-template-columns: auto auto auto; grid-template-rows: auto auto;">
				<div class="rounded-md p-10 bg-info text-center"><span class="text-xs text-white font-semibold">1</span></div>
				<div class="rounded-md p-10 bg-info text-center"><span class="text-xs text-white font-semibold">2</span></div>
				<div class="rounded-md p-10 bg-info text-center"><span class="text-xs text-white font-semibold">3</span></div>
				<div class="rounded-md p-10 bg-info text-center"><span class="text-xs text-white font-semibold">4</span></div>
			</div>
			<div class="grid grid-flow-col gap-10 border-b border-alpha-1 mb-24 pb-24" style="grid-template-columns: auto auto auto; grid-template-rows: auto auto;">
				<div class="rounded-md p-10 bg-info text-center"><span class="text-xs text-white font-semibold">1</span></div>
				<div class="rounded-md p-10 bg-info text-center"><span class="text-xs text-white font-semibold">2</span></div>
				<div class="rounded-md p-10 bg-info text-center"><span class="text-xs text-white font-semibold">3</span></div>
				<div class="rounded-md p-10 bg-info text-center"><span class="text-xs text-white font-semibold">4</span></div>
			</div>
			<div class="grid grid-cols-5 grid-rows-3 grid-flow-dense gap-10 border-b border-alpha-1 mb-24 pb-24">
				<div class="rounded-md p-10 bg-info text-center"><span class="text-xs text-white font-semibold">1</span></div>
				<div class="rounded-md p-10 bg-info text-center"><span class="text-xs text-white font-semibold">2</span></div>
				<div class="col-span-4 rounded-md p-10 bg-info text-center"><span class="text-xs text-white font-semibold">3</span></div>
				<div class="rounded-md p-10 bg-info text-center"><span class="text-xs text-white font-semibold">4</span></div>
				<div class="col-span-3 rounded-md p-10 bg-info text-center"><span class="text-xs text-white font-semibold">5</span></div>
				<div class="rounded-md p-10 bg-info text-center"><span class="text-xs text-white font-semibold">6</span></div>
				<div class="col-span-2 rounded-md p-10 bg-info text-center"><span class="text-xs text-white font-semibold">7</span></div>
				<div class="rounded-md p-10 bg-info text-center"><span class="text-xs text-white font-semibold">8</span></div>
			</div>
			<div class="grid grid-cols-5 grid-flow-row-dense gap-10 border-b border-alpha-1 mb-24 pb-24">
				<div class="rounded-md p-10 bg-info text-center"><span class="text-xs text-white font-semibold">1</span></div>
				<div class="rounded-md p-10 bg-info text-center"><span class="text-xs text-white font-semibold">2</span></div>
				<div class="col-span-4 rounded-md p-10 bg-info text-center"><span class="text-xs text-white font-semibold">3</span></div>
				<div class="rounded-md p-10 bg-info text-center"><span class="text-xs text-white font-semibold">4</span></div>
				<div class="col-span-3 rounded-md p-10 bg-info text-center"><span class="text-xs text-white font-semibold">5</span></div>
				<div class="rounded-md p-10 bg-info text-center"><span class="text-xs text-white font-semibold">6</span></div>
				<div class="col-span-2 rounded-md p-10 bg-info text-center"><span class="text-xs text-white font-semibold">7</span></div>
				<div class="rounded-md p-10 bg-info text-center"><span class="text-xs text-white font-semibold">8</span></div>
			</div>
			<div class="grid grid-cols-5 grid-rows-3 grid-flow-col-dense gap-10">
				<div class="rounded-md p-10 bg-info text-center"><span class="text-xs text-white font-semibold">1</span></div>
				<div class="rounded-md p-10 bg-info text-center"><span class="text-xs text-white font-semibold">2</span></div>
				<div class="col-span-4 rounded-md p-10 bg-info text-center"><span class="text-xs text-white font-semibold">3</span></div>
				<div class="rounded-md p-10 bg-info text-center"><span class="text-xs text-white font-semibold">4</span></div>
				<div class="col-span-3 rounded-md p-10 bg-info text-center"><span class="text-xs text-white font-semibold">5</span></div>
				<div class="rounded-md p-10 bg-info text-center"><span class="text-xs text-white font-semibold">6</span></div>
				<div class="col-span-2 rounded-md p-10 bg-info text-center"><span class="text-xs text-white font-semibold">7</span></div>
				<div class="rounded-md p-10 bg-info text-center"><span class="text-xs text-white font-semibold">8</span></div>
			</div>
		</div>
    </card-example>
</div>