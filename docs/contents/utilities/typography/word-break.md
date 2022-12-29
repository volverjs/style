---
title: Word Break
description: Utilities for controlling word breaks in an element.
---
<div>
	<div class="max-h-288 overflow-y-auto mb-32">
		<table class="vv-table vv-table--inline-spacing nx-md">
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
						.break-normal
					</td>
					<td translate="no" class="font-mono text-info whitespace-nowrap">
						word-break: normal;
					</td>
				</tr>
				<tr>
					<td translate="no" class="font-mono text-accent whitespace-nowrap">
						.break-words
					</td>
					<td translate="no" class="font-mono text-info whitespace-nowrap">
						word-break: word-break;
					</td>
				</tr>
				<tr>
					<td translate="no" class="font-mono text-accent whitespace-nowrap">
						.break-all
					</td>
					<td translate="no" class="font-mono text-info whitespace-nowrap">
						word-break: all;
					</td>
				</tr>
			</tbody>
		</table>
	</div>
    <card-example>
		<div class="container h-full rounded-md bg-surface-1 p-24">
			<p class="break-normal border-b border-alpha-1 mb-24 pb-24">This is some
				very very very long word:
				pneumonoultramicroscopicsilicovolcanoconiosis. The long word will
				not break and wrap to the next line.</p>
			<p class="break-words border-b border-alpha-1 mb-24 pb-24">This is some
				very very very long word:
				pneumonoultramicroscopicsilicovolcanoconiosis. The long word will
				break and wrap to the next line.</p>
			<p class="break-all">This is some very very very long word:
				pneumonoultramicroscopicsilicovolcanoconiosis. This text will break
				at any character.</p>
		</div>
    </card-example>
</div>