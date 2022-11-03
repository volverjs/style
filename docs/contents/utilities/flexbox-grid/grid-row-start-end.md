---
title: Grid Row Start / End
description: Utilities for controlling how elements are sized and placed across grid rows.
---
<div>
	<p class="vv-text text-word-2 max-w-prose">Grid row with start and end utilities</p>
    <table-utility prefix="row-span" property="grid-row" class="mb-lg"></table-utility>
	<p class="vv-text text-word-2 max-w-prose">Grid row with start or end utilities</p>
	<table-utility prefix="row-{start|end}" property="grid-row-start-end" custom-property="grid-row-{start|end}" class="mb-lg"></table-utility>
    <card-example>
		<div class="container h-full rounded-md bg-surface-1 p-24">
			<div class="grid grid-cols-2 gap-10 border-b border-alpha-1 mb-24 pb-24">
				<div class="rounded-md p-10 bg-info text-center"><span class="text-xs text-white font-semibold">1</span></div>
				<div class="row-span-4 rounded-md p-10 bg-info text-center"><span class="text-xs text-white font-semibold">2</span></div>
				<div class="rounded-md p-10 bg-info text-center"><span class="text-xs text-white font-semibold">3</span></div>
				<div class="row-span-3 rounded-md p-10 bg-info text-center"><span class="text-xs text-white font-semibold">4</span></div>
				<div class="rounded-md p-10 bg-info text-center"><span class="text-xs text-white font-semibold">5</span></div>
				<div class="row-span-full rounded-md p-10 bg-info text-center"><span class="text-xs text-white font-semibold">6</span></div>
			</div>
			<div class="grid grid-rows-2 gap-10 border-b border-alpha-1 mb-24 pb-24">
				<div class="rounded-md p-10 bg-info text-center"><span class="text-xs text-white font-semibold">1</span></div>
				<div class="row-start-5 rounded-md p-10 bg-info text-center"><span class="text-xs text-white font-semibold">2</span></div>
				<div class="rounded-md p-10 bg-info text-center"><span class="text-xs text-white font-semibold">3</span></div>
				<div class="rounded-md p-10 bg-info text-center"><span class="text-xs text-white font-semibold">4</span></div>
				<div class="rounded-md p-10 bg-info text-center"><span class="text-xs text-white font-semibold">5</span></div>
				<div class="row-start-auto rounded-md p-10 bg-info text-center"><span class="text-xs text-white font-semibold">6</span></div>
			</div>
			<div class="grid grid-rows-2 gap-10">
				<div class="rounded-md p-10 bg-info text-center"><span class="text-xs text-white font-semibold">1</span></div>
				<div class="row-end-5 rounded-md p-10 bg-info text-center"><span class="text-xs text-white font-semibold">2</span></div>
				<div class="rounded-md p-10 bg-info text-center"><span class="text-xs text-white font-semibold">3</span></div>
				<div class="rounded-md p-10 bg-info text-center"><span class="text-xs text-white font-semibold">4</span></div>
				<div class="rounded-md p-10 bg-info text-center"><span class="text-xs text-white font-semibold">5</span></div>
				<div class="row-end-auto rounded-md p-10 bg-info text-center"><span class="text-xs text-white font-semibold">6</span></div>
			</div>
		</div>
    </card-example>
</div>