---
title: Justify Content
description: Utilities for controlling how flex and grid items are positioned along a container's main axis.
---
<div>
    <table-utility prefix="justify" property="justify-align-content" custom-property="justify-content" class="mb-lg"></table-utility>
    <card-example>
		<div class="container h-full rounded-md bg-surface-1 p-24">
			<div class="flex flex-row justify-start gap-md border-b border-alpha-1 mb-24 pb-24">
				<div class="w-100 rounded-md py-10 bg-info text-center"><span class="text-xs text-white font-semibold">1</span></div>
				<div class="w-100 rounded-md py-10 bg-info text-center"><span class="text-xs text-white font-semibold">2</span></div>
				<div class="w-100 rounded-md py-10 bg-info text-center"><span class="text-xs text-white font-semibold">3</span></div>
			</div>
			<div class="flex flex-row justify-end gap-md border-b border-alpha-1 mb-24 pb-24">
				<div class="w-100 rounded-md py-10 bg-info text-center"><span class="text-xs text-white font-semibold">1</span></div>
				<div class="w-100 rounded-md py-10 bg-info text-center"><span class="text-xs text-white font-semibold">2</span></div>
				<div class="w-100 rounded-md py-10 bg-info text-center"><span class="text-xs text-white font-semibold">3</span></div>
			</div>
			<div class="flex flex-row justify-center gap-md border-b border-alpha-1 mb-24 pb-24">
				<div class="w-100 rounded-md py-10 bg-info text-center"><span class="text-xs text-white font-semibold">1</span></div>
				<div class="w-100 rounded-md py-10 bg-info text-center"><span class="text-xs text-white font-semibold">2</span></div>
				<div class="w-100 rounded-md py-10 bg-info text-center"><span class="text-xs text-white font-semibold">3</span></div>
			</div>
			<div class="flex flex-row justify-between gap-md border-b border-alpha-1 mb-24 pb-24">
				<div class="w-100 rounded-md py-10 bg-info text-center"><span class="text-xs text-white font-semibold">1</span></div>
				<div class="w-100 rounded-md py-10 bg-info text-center"><span class="text-xs text-white font-semibold">2</span></div>
				<div class="w-100 rounded-md py-10 bg-info text-center"><span class="text-xs text-white font-semibold">3</span></div>
			</div>
			<div class="flex flex-row justify-around gap-md border-b border-alpha-1 mb-24 pb-24">
				<div class="w-100 rounded-md py-10 bg-info text-center"><span class="text-xs text-white font-semibold">1</span></div>
				<div class="w-100 rounded-md py-10 bg-info text-center"><span class="text-xs text-white font-semibold">2</span></div>
				<div class="w-100 rounded-md py-10 bg-info text-center"><span class="text-xs text-white font-semibold">3</span></div>
			</div>
			<div class="flex flex-row justify-evenly gap-md">
				<div class="w-100 rounded-md py-10 bg-info text-center"><span class="text-xs text-white font-semibold">1</span></div>
				<div class="w-100 rounded-md py-10 bg-info text-center"><span class="text-xs text-white font-semibold">2</span></div>
				<div class="w-100 rounded-md py-10 bg-info text-center"><span class="text-xs text-white font-semibold">3</span></div>
			</div>
		</div>
    </card-example>
</div>