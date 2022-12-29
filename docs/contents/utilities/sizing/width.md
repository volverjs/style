---
title: Width
description: Utilities for setting the width of an element.
breakpoints: true
customProperties: true
---
<div>
	<table-helper property="spacers" title="Spacing & Spacing-dynamic" class="mb-lg"></table-helper>
	<table-helper property="width-spacer" title="Width spacers" class="mb-lg"></table-helper>
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
						.w-{spacing-key}
					</td>
					<td translate="no" class="font-mono text-info whitespace-wrap">
						width: {spacing-value};
					</td>
			</tbody>
		</table>
	</div>
	<table-utility prefix="w" property="width" custom-property="w" ></table-utility>
</div>