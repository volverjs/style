---
title: Align / Justify Self
description: Utilities for controlling how an individual flex or grid item is positioned along its container's cross axis.
breakpoints: true
---
<div>
    <table-utility prefix="self" property="justify-align-self" attribute="align-self" class="mb-lg"></table-utility>
    <table-utility prefix="justify-self" property="justify-align-self" attribute="justify-self" class="mb-lg"></table-utility>
    <card-example>
		<div class="container h-full rounded-md bg-surface-1 p-24">
			<div class="flex flex-wrap justify-around gap-4">
				<div class="w-full h-100 flex flex-wrap justify-around items-start border-b border-alpha-1 mb-24 pb-24">
					<div class="w-100 rounded-md py-10 bg-info text-center"><span class="text-xs text-white font-semibold">I'm not self</span></div>
					<div class="w-100 self-auto rounded-md py-10 bg-info text-center"><span class="text-xs text-white font-semibold">I'm self</span></div>
					<div class="w-100 rounded-md py-10 bg-info text-center"><span class="text-xs text-white font-semibold">I'm not self</span></div>
				</div>
				<div class="w-full h-100 flex flex-wrap justify-around items-start border-b border-alpha-1 mb-24 pb-24">
					<div class="w-100 rounded-md py-10 bg-info text-center"><span class="text-xs text-white font-semibold">I'm not self</span></div>
					<div class="w-100 self-start rounded-md py-10 bg-info text-center"><span class="text-xs text-white font-semibold">I'm self</span></div>
					<div class="w-100 rounded-md py-10 bg-info text-center"><span class="text-xs text-white font-semibold">I'm not self</span></div>
				</div>
				<div class="w-full h-100 flex flex-wrap justify-around items-start border-b border-alpha-1 mb-24 pb-24">
					<div class="w-100 rounded-md py-10 bg-info text-center"><span class="text-xs text-white font-semibold">I'm not self</span></div>
					<div class="w-100 self-end rounded-md py-10 bg-info text-center"><span class="text-xs text-white font-semibold">I'm self</span></div>
					<div class="w-100 rounded-md py-10 bg-info text-center"><span class="text-xs text-white font-semibold">I'm not self</span></div>
				</div>
				<div class="w-full h-100 flex flex-wrap justify-around items-start border-b border-alpha-1 mb-24 pb-24">
					<div class="w-100 rounded-md py-10 bg-info text-center"><span class="text-xs text-white font-semibold">I'm not self</span></div>
					<div class="w-100 self-center rounded-md py-10 bg-info text-center"><span class="text-xs text-white font-semibold">I'm self</span></div>
					<div class="w-100 rounded-md py-10 bg-info text-center"><span class="text-xs text-white font-semibold">I'm not self</span></div>
				</div>
				<div class="w-full h-100 flex flex-wrap justify-around items-start">
					<div class="w-100 rounded-md py-10 bg-info text-center"><span class="text-xs text-white font-semibold">I'm not self</span></div>
					<div class="w-100 self-baseline rounded-md py-10 bg-info text-center"><span class="text-xs text-white font-semibold">I'm self</span></div>
					<div class="w-100 rounded-md py-10 bg-info text-center"><span class="text-xs text-white font-semibold">I'm not self</span></div>
				</div>
			</div>
		</div>
		<span class="text-xs text-white font-semibold">1</span>
    </card-example>
</div>