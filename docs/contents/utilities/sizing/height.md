---
title: Height
description: Utilities for setting the height of an element.
breakpoints: true
---
<div>
	<table-helper property="spacers" title="Spacing & Spacing-dynamic" class="mb-lg"></table-helper>
	<table-helper property="height-spacer" title="Height spacers" class="mb-lg"></table-helper>
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
					<td translate="no" class="font-mono text-accent whitespace-wrap">
						h-{spacer-size}
					</td>
					<td translate="no" class="font-mono text-info whitespace-wrap">
						height: {spacer-value};
					</td>
				</tr>
				<tr>
					<td translate="no" class="font-mono text-accent whitespace-wrap">
						h-{height-spacer-size}
					</td>
					<td translate="no" class="font-mono text-info whitespace-wrap">
						height: {height-spacer-value};
					</td>
				</tr>
			</tbody>
		</table>
	</div>
	<details id="accordion-item-1" class="vv-accordion vv-accordion--bordered vv-accordion--marker-right bg-surface mb-lg">
		<summary class="vv-accordion__summary flex items-center" aria-controls="#accordion-item-1" aria-expanded="false">
			<iconify-icon icon="akar-icons:info" class="mr-sm"></iconify-icon>
			Accept breakpoint utilities
		</summary>
		<div aria-hidden="true" class="vv-accordion__content">
			<p class="font-light text-word-3">
				You can also use the breakpoint modifier to apply the class at only a specific screen size and above.<br />
				Example: md:w-{spacer-size|width-spacer-size}
			</p>
		</div>
	</details>
</div>