---
title: Height
description: Utilities for setting the height of an element.
breakpoints: true
customProperties: true
spacing: true
---

<table-utility prefix="h" property="height" custom-property="h"></table-utility>

### Spacing scale
Height can also be set using the static spacing scale, for example `h-96`.

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
				<td translate="no" class="font-mono text-accent whitespace-normal">
					.h-{spacing-key}
				</td>
				<td translate="no" class="font-mono text-info whitespace-normal">
					height: {spacing-value};
				</td>
			</tr>
		</tbody>
	</table>
</div>
