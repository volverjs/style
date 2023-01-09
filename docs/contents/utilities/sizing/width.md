---
title: Width
description: Utilities for setting the width of an element.
breakpoints: true
customProperties: true
spacing: true
---
<table-utility prefix="w" property="width" custom-property="w"></table-utility>

### Spacing scale
Width can also be set using the static and dynamic spacing scale, for example `w-lg`. 

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
				<td translate="no" class="font-mono text-accent whitespace-wrap">
					.w-{spacing-key}
				</td>
				<td translate="no" class="font-mono text-info whitespace-wrap">
					width: {spacing-value};
				</td>
		</tbody>
	</table>
</div>