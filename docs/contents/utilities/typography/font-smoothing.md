---
title: Font Smoothing
description: Utilities for controlling the font smoothing of an element.
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
						.antialiased
					</td>
					<td translate="no" class="font-mono text-info whitespace-nowrap">
						<pre class="whitespace-pre">
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;</pre>
					</td>
				</tr>
				<tr>
					<td translate="no" class="font-mono text-accent whitespace-nowrap">
						.subpixel-antialiased
					</td>
					<td translate="no" class="font-mono text-info whitespace-nowrap">
						<pre class="whitespace-pre">
-webkit-font-smoothing: auto;
-moz-osx-font-smoothing: auto;</pre>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
    <card-example>
		<div class="container h-full rounded-md bg-surface-1 p-24">
			<p class="antialiased border-b border-alpha-1 mb-24 pb-24">I'm antialiased</p>
			<p class="subpixel-antialiased">I'm subpixel-antialiased</p>
		</div>
    </card-example>
</div>