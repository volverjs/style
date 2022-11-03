---
title: Flex Shrink
description: Utilities for controlling how flex items shrink.
---
<div>
    <div class="max-h-288 overflow-y-auto mb-32">
		<table class="vv-table">
			<thead class="sticky z-sticky top-0">
				<tr>
					<th>
						Class
					</th>
					<th>
						Properties
					</th>
				</tr>
			</thead>
			<tbody class="align-baseline">
				<tr>
					<td translate="no" class="font-mono text-accent whitespace-nowrap">
						shrink
					</td>
					<td translate="no" class="font-mono text-info whitespace-nowrap">
						flex-shrink: 1;
					</td>
				</tr>
				<tr>
					<td translate="no" class="font-mono text-accent whitespace-nowrap">
						shrink-0
					</td>
					<td translate="no" class="font-mono text-info whitespace-nowrap">
						flex-shrink: 0;
					</td>
				</tr>
			</tbody>
		</table>
	</div>
    <card-example>
		<div class="container h-full rounded-md bg-surface-1 p-24">
			<div class="flex flex-row justify-between gap-md border-b border-alpha-1 mb-24 pb-24">
				<div class="w-100 shrink rounded-md py-10 bg-info text-center"><span class="text-xs text-white font-semibold">1</span></div>
				<div class="w-100 rounded-md py-10 bg-info text-center"><span class="text-xs text-white font-semibold">2</span></div>
				<div class="w-100 rounded-md py-10 bg-info text-center"><span class="text-xs text-white font-semibold">3</span></div>
			</div>
			<div class="flex flex-row justify-between gap-md">
				<div class="w-100 shrink-0 rounded-md py-10 bg-info text-center"><span class="text-xs text-white font-semibold">1</span></div>
				<div class="w-100 rounded-md py-10 bg-info text-center"><span class="text-xs text-white font-semibold">2</span></div>
				<div class="w-100 rounded-md py-10 bg-info text-center"><span class="text-xs text-white font-semibold">3</span></div>
			</div>
		</div>
    </card-example>
</div>