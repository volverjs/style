---
title: Text Wrap
description: Utilities for controlling how the lines of a text are balanced when they wrap.
---
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
          .text-balance
        </td>
        <td translate="no" class="font-mono text-info whitespace-nowrap">
          text-wrap: balance;
        </td>
      </tr>
    </tbody>
  </table>
</div>
<card-example>
	<div class="grid md:grid-cols-2 gap-md">
		<p class="max-w-288 rounded-md bg-surface-1 p-md">A heading that wraps onto two lines, leaving a single word alone on the second one.</p>
		<p class="max-w-288 rounded-md bg-surface-1 p-md text-balance">A heading that wraps onto two lines, leaving a single word alone on the second one.</p>
	</div>
</card-example>
