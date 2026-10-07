---
title: Min Width
description: Utilities for setting the minimum width of an element.
breakpoints: true
spacing: true
---
<div>
	<table-utility prefix="min-w" property="min-width" class="mb-lg"></table-utility>
</div>

### Spacing scale
Min width can also be set using the static spacing scale, for example `min-w-96`.

<div class="max-h-288 overflow-y-auto mb-lg preflight-revert">
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
				<td translate="no" class="font-mono text-accent whitespace-nowrap">
					.min-w-{spacing-key}
				</td>
				<td translate="no" class="font-mono text-info whitespace-nowrap">
					min-width: {spacing-value};
				</td>
			</tr>
		</tbody>
	</table>
</div>
