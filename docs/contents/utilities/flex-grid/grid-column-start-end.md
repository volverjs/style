---
title: Grid Column Start / End
description: Utilities for controlling how elements are sized and placed across grid columns.
breakpoints: true
---
<div>
	<p class="vv-text text-word-2 max-w-prose">Grid column with start and end utilities</p>
    <table-utility prefix="col" attribute="grid-column" property="grid-column" class="mb-lg"></table-utility>
	<table-utility prefix="col-start" property="grid-column-start-end" attribute="grid-column-start" class="mb-lg"></table-utility>
	<table-utility prefix="col-end" property="grid-column-start-end" attribute="grid-column-end" class="mb-lg"></table-utility>
    <card-example>
		<div class="container h-full rounded-md bg-surface-1 p-24">
			<div class="grid grid-cols-6 gap-10 border-b border-alpha-1 mb-24 pb-24">
				<div class="rounded-md p-10 bg-info text-center"><span class="text-xs text-white font-semibold">1</span></div>
				<div class="col-span-4 rounded-md p-10 bg-info text-center"><span class="text-xs text-white font-semibold">2</span></div>
				<div class="rounded-md p-10 bg-info text-center"><span class="text-xs text-white font-semibold">3</span></div>
				<div class="col-span-3 rounded-md p-10 bg-info text-center"><span class="text-xs text-white font-semibold">4</span></div>
				<div class="rounded-md p-10 bg-info text-center"><span class="text-xs text-white font-semibold">5</span></div>
				<div class="col-span-full rounded-md p-10 bg-info text-center"><span class="text-xs text-white font-semibold">6</span></div>
			</div>
			<div class="grid grid-cols-6 gap-10 border-b border-alpha-1 mb-24 pb-24">
				<div class="rounded-md p-10 bg-info text-center"><span class="text-xs text-white font-semibold">1</span></div>
				<div class="col-start-3 rounded-md p-10 bg-info text-center"><span class="text-xs text-white font-semibold">2</span></div>
				<div class="rounded-md p-10 bg-info text-center"><span class="text-xs text-white font-semibold">3</span></div>
				<div class="rounded-md p-10 bg-info text-center"><span class="text-xs text-white font-semibold">4</span></div>
				<div class="rounded-md p-10 bg-info text-center"><span class="text-xs text-white font-semibold">5</span></div>
				<div class="col-start-auto rounded-md p-10 bg-info text-center"><span class="text-xs text-white font-semibold">6</span></div>
			</div>
			<div class="grid grid-cols-6 gap-10">
				<div class="rounded-md p-10 bg-info text-center"><span class="text-xs text-white font-semibold">1</span></div>
				<div class="col-end-4 rounded-md p-10 bg-info text-center"><span class="text-xs text-white font-semibold">2</span></div>
				<div class="rounded-md p-10 bg-info text-center"><span class="text-xs text-white font-semibold">3</span></div>
				<div class="rounded-md p-10 bg-info text-center"><span class="text-xs text-white font-semibold">4</span></div>
				<div class="rounded-md p-10 bg-info text-center"><span class="text-xs text-white font-semibold">5</span></div>
				<div class="col-end-auto rounded-md p-10 bg-info text-center"><span class="text-xs text-white font-semibold">6</span></div>
			</div>
		</div>
    </card-example>
</div>