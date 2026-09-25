---
title: Max Height
description: Utilities for setting the maximum height of an element.
breakpoints: true
spacing: true
---
<div>
	<table-utility prefix="max-h" property="max-height" class="mb-lg"></table-utility>
</div>

### Spacing scale
Max height can also be set using the static spacing scale, for example `max-h-288`.

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
					.max-h-{spacing-key}
				</td>
				<td translate="no" class="font-mono text-info whitespace-nowrap">
					max-height: {spacing-value};
				</td>
			</tr>
		</tbody>
	</table>
</div>
