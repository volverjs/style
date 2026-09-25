---
title: Max Width
description: Utilities for setting the maximum width of an element.
breakpoints: true
spacing: true
---
<div>
	<table-utility prefix="max-w" property="max-width" class="mb-lg"></table-utility>
</div>

### Spacing scale
Max width can also be set using the static spacing scale, for example `max-w-384`.

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
					.max-w-{spacing-key}
				</td>
				<td translate="no" class="font-mono text-info whitespace-nowrap">
					max-width: {spacing-value};
				</td>
			</tr>
		</tbody>
	</table>
</div>

### Breakpoints
`max-w-screen-{breakpoint}` caps the width at a breakpoint, from `xs` to `xxxl`. These classes have no responsive variants.

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
					.max-w-screen-{breakpoint}
				</td>
				<td translate="no" class="font-mono text-info whitespace-nowrap">
					max-width: {breakpoint-value};
				</td>
			</tr>
		</tbody>
	</table>
</div>
