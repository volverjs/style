---
title: Width
description: Utilities for setting the width of an element.
breakpoints: true
customProperties: true
spacing: true
---
<table-utility prefix="w" property="width" custom-property="w"></table-utility>

### Spacing scale
Width can also be set using the spacing scale: a static step, for example `w-96`, or a dynamic one from `w-xs` to `w-xl`, which grows with the viewport.

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
					.w-{spacing-key}
				</td>
				<td translate="no" class="font-mono text-info whitespace-normal">
					width: {spacing-value};
				</td>
			</tr>
		</tbody>
	</table>
</div>