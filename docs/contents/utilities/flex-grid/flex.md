---
title: Flex
description: Utilities for controlling how flex items both grow and shrink.
breakpoints: true
---
<div>
    <table-utility prefix="flex" property="flex" class="mb-lg"></table-utility>
    <card-example>
		<div class="container h-full rounded-md bg-surface-1 p-24">
			<div class="flex flex-row justify-between gap-md border-b border-alpha-1 mb-24 pb-24">
				<div class="w-100 flex-1 rounded-md py-10 bg-info text-center">
					<span class="text-xs text-white font-semibold">Flex-1</span>
				</div>
				<div class="w-100 rounded-md py-10 bg-info text-center"></div>
				<div class="w-100 rounded-md py-10 bg-info text-center"></div>
			</div>
			<div class="flex flex-row justify-between gap-md border-b border-alpha-1 mb-24 pb-24">
				<div class="w-100 flex-auto rounded-md py-10 bg-info text-center">
					<span class="text-xs text-white font-semibold">Flex-auto</span>
				</div>
				<div class="w-100 rounded-md py-10 bg-info text-center"></div>
				<div class="w-100 rounded-md py-10 bg-info text-center"></div>
			</div>
			<div class="flex flex-row justify-between gap-md border-b border-alpha-1 mb-24 pb-24">
				<div class="w-100 flex-initial rounded-md py-10 bg-info text-center">
					<span class="text-xs text-white font-semibold">Flex-initial</span>
				</div>
				<div class="w-100 rounded-md py-10 bg-info text-center"></div>
				<div class="w-100 rounded-md py-10 bg-info text-center"></div>
			</div>
			<div class="flex flex-row justify-between gap-md">
				<div class="w-100 flex-none rounded-md py-10 bg-info text-center">
					<span class="text-xs text-white font-semibold">Flex none</span>
				</div>
				<div class="w-100 rounded-md py-10 bg-info text-center"></div>
				<div class="w-100 rounded-md py-10 bg-info text-center"></div>
			</div>
		</div>
    </card-example>
</div>