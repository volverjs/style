---
title: Gap
description: Utilities for controlling gutters between grid and flexbox items.
spacing: true
---
<table-helper property="spacers" title="Spacing & Spacing-dynamic" class="mb-lg"></table-helper>
<div class="max-h-288 overflow-y-auto mb-32">
	<table class="vv-table">
		<thead class="sticky z-sticky top-0 bg-surface-1">
			<tr>
				<th>
					Class
				</th>
				<th>
					Value
				</th>
			</tr>
		</thead>
		<tbody class="align-baseline">
			<tr>
				<td translate="no" class="font-mono text-accent whitespace-wrap">
					gap-{spacing-key}
				</td>
				<td translate="no" class="font-mono text-info whitespace-wrap">
					gap: {spacing-value};
				</td>
			</tr>
			<tr>
				<td translate="no" class="font-mono text-accent whitespace-wrap">
					gap-x-{spacing-key}
				</td>
				<td translate="no" class="font-mono text-info whitespace-wrap">
					column-gap: {spacing-value};
				</td>
			</tr>
			<tr>
				<td translate="no" class="font-mono text-accent whitespace-wrap">
					gap-y-{spacing-key}
				</td>
				<td translate="no" class="font-mono text-info whitespace-wrap">
					row-gap: {spacing-value};
				</td>
			</tr>
		</tbody>
	</table>
</div>
<card-example>
	<div class="relative container h-full rounded-md bg-surface-1 p-24">
		<div class="absolute inset-0 bg-grid mix-blend-plus-lighter"></div>
		<div class="relative w-full flex flex-wrap justify-center gap-20">
			<div class="w-100 rounded-md py-10 bg-info text-center"><span class="text-xs text-white font-semibold">1</span></div>
			<div class="w-100 rounded-md py-10 bg-info text-center"><span class="text-xs text-white font-semibold">2</span></div>
			<div class="w-100 rounded-md py-10 bg-info text-center"><span class="text-xs text-white font-semibold">3</span></div>
			<div class="w-100 rounded-md py-10 bg-info text-center"><span class="text-xs text-white font-semibold">4</span></div>
			<div class="w-100 rounded-md py-10 bg-info text-center"><span class="text-xs text-white font-semibold">5</span></div>
			<div class="w-100 rounded-md py-10 bg-info text-center"><span class="text-xs text-white font-semibold">6</span></div>
		</div>
	</div>
</card-example>