---
title: Align / Justify Content
description: Utilities for controlling how rows are positioned in multi-row flex and grid containers.
breakpoints: true
---
<div>
    <table-utility prefix="content" property="justify-align-content" attribute="align-content" class="mb-lg"></table-utility>
    <table-utility prefix="justify" property="justify-align-content" attribute="justify-content" class="mb-lg"></table-utility>
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