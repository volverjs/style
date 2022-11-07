---
title: Border Radius
description: Utilities for controlling the border radius of an element.
---
<div>
	<table-helper property="border-radius-spacer" title="Border radius spacers" class="mb-lg"></table-helper>
    <div class="max-h-288 overflow-y-auto mb-32">
		<table class="vv-table">
			<thead class="sticky z-sticky top-0 bg-surface-1">
				<tr>
					<th>
						Class
					</th>
					<th>
						Properties
					</th>
				</tr>
			</thead>
			<tbody class="align-baseline">
				<tr>
					<td translate="no" class="font-mono text-accent whitespace-nowrap">
						rounded-{spacer-size}
					</td>
					<td translate="no" class="font-mono text-info whitespace-nowrap">
						border-radius: {spacer-value};
					</td>
				</tr>
				<tr>
					<td translate="no" class="font-mono text-accent whitespace-nowrap">
						rounded-{t|b}-{spacer-size}
					</td>
					<td translate="no" class="font-mono text-info whitespace-nowrap">
						<div>border-{top|bottom}-left-radius: {spacer-value};</div>
						<div>border-{top|bottom}-right-radius: {spacer-value};</div>
					</td>
				</tr>
				<tr>
					<td translate="no" class="font-mono text-accent whitespace-nowrap">
						rounded-{r|l}-{spacer-size}
					</td>
					<td translate="no" class="font-mono text-info whitespace-nowrap">
						<div>border-top-{right|left}-radius: {spacer-value};</div>
						<div>border-bottom-{right|left}-radius: {spacer-value};</div>
					</td>
				</tr>
				<tr>
					<td translate="no" class="font-mono text-accent whitespace-nowrap">
						rounded-t{r|l}-{spacer-size}
					</td>
					<td translate="no" class="font-mono text-info whitespace-nowrap">
						border-top-{right|left}-radius: {spacer-value};
					</td>
				</tr>
				<tr>
					<td translate="no" class="font-mono text-accent whitespace-nowrap">
						rounded-b{r|l}-{spacer-size}
					</td>
					<td translate="no" class="font-mono text-info whitespace-nowrap">
						border-bottom-{right|left}-radius: {spacer-value};
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>