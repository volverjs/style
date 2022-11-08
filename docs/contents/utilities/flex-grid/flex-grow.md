---
title: Flex Grow
description: Utilities for controlling how flex items grow.
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
						grow
					</td>
					<td translate="no" class="font-mono text-info whitespace-nowrap">
						flex-grow: 1;
					</td>
				</tr>
				<tr>
					<td translate="no" class="font-mono text-accent whitespace-nowrap">
						grow-0
					</td>
					<td translate="no" class="font-mono text-info whitespace-nowrap">
						flex-grow: 0;
					</td>
				</tr>
			</tbody>
		</table>
	</div>
    <card-example>
		<div class="container h-full rounded-md bg-surface-1 p-24">
			<div class="flex flex-row justify-between gap-md border-b border-alpha-1 mb-24 pb-24">
				<div class="w-100 grow rounded-md py-10 bg-info text-center"><span class="text-xs text-white font-semibold">1</span></div>
				<div class="w-100 rounded-md py-10 bg-info text-center"><span class="text-xs text-white font-semibold">2</span></div>
				<div class="w-100 rounded-md py-10 bg-info text-center"><span class="text-xs text-white font-semibold">3</span></div>
			</div>
			<div class="flex flex-row justify-between gap-md">
				<div class="w-100 grow-0 rounded-md py-10 bg-info text-center"><span class="text-xs text-white font-semibold">1</span></div>
				<div class="w-100 rounded-md py-10 bg-info text-center"><span class="text-xs text-white font-semibold">2</span></div>
				<div class="w-100 rounded-md py-10 bg-info text-center"><span class="text-xs text-white font-semibold">3</span></div>
			</div>
		</div>
    </card-example>
</div>