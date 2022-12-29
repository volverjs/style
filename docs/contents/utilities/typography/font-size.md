---
title: Font Size
description: Utilities for controlling the font size of an element.
customProperties: true
---
<div>
	<table-helper property="font-size" title="Font-size & Font-size-dynamic" class="mb-lg"></table-helper>
    <div class="max-h-288 overflow-y-auto mb-32">
		<table class="vv-table vv-table--inline-spacing nx-md">
			<thead class="sticky z-sticky top-0 bg-surface-1">
				<tr>
					<th>
						Class
					</th>
					<th>
						CSS Custom Property
					</th>
					<th>
						Value
					</th>
				</tr>
			</thead>
			<tbody class="align-baseline">
				<tr>
					<td translate="no" class="font-mono text-accent whitespace-nowrap">
						.text-{size-key}
					</td>
					<td translate="no" class="font-mono text-brand whitespace-nowrap">
						--text-{size-key}: {size-value};
					</td>
					<td translate="no" class="font-mono text-info whitespace-nowrap">
						font-size: var(--text-{size-key});
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>