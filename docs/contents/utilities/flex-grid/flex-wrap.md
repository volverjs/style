---
title: Flex Wrap
description: Utilities for controlling how flex items wrap.
breakpoints: true
---
<div>
    <table-utility prefix="flex" property="flex-wrap" class="mb-lg"></table-utility>
    <card-example>
		<div class="container h-full rounded-md bg-surface-1 p-24">
			<div class="flex flex-row justify-between flex-wrap gap-md border-b border-alpha-1 mb-24 pb-24">
				<div class="w-150 rounded-md py-10 bg-info text-center"><span class="text-xs text-white font-semibold">1</span></div>
				<div class="w-150 rounded-md py-10 bg-info text-center"><span class="text-xs text-white font-semibold">2</span></div>
				<div class="w-150 rounded-md py-10 bg-info text-center"><span class="text-xs text-white font-semibold">3</span></div>
			</div>
			<div class="flex flex-row justify-between flex-wrap-reverse gap-md border-b border-alpha-1 mb-24 pb-24">
				<div class="w-150 rounded-md py-10 bg-info text-center"><span class="text-xs text-white font-semibold">1</span></div>
				<div class="w-150 rounded-md py-10 bg-info text-center"><span class="text-xs text-white font-semibold">2</span></div>
				<div class="w-150 rounded-md py-10 bg-info text-center"><span class="text-xs text-white font-semibold">3</span></div>
			</div>
			<div class="flex flex-row justify-between flex-nowrap gap-md">
				<div class="w-150 rounded-md py-10 bg-info text-center"><span class="text-xs text-white font-semibold">1</span></div>
				<div class="w-150 rounded-md py-10 bg-info text-center"><span class="text-xs text-white font-semibold">2</span></div>
				<div class="w-150 rounded-md py-10 bg-info text-center"><span class="text-xs text-white font-semibold">3</span></div>
			</div>
		</div>
    </card-example>
</div>