---
title: Gap
description: Utilities for controlling gutters between grid and flexbox items.
spacing: true
---
The `gap` utilities are used to control the gutters between grid and flexbox items. They can be used to change the gap between grid and flexbox items from the default value to a custom value.

<table-helper property="spacers" title="Spacing & Spacing-dynamic" class="mb-lg"></table-helper>
<div class="max-h-288 overflow-y-auto preflight-revert">
	<table class="vv-table vv-table--inline-spacing">
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