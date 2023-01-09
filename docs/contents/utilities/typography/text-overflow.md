---
title: Text Overflow
description: Utilities for controlling text overflow in an element.
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
          .truncate
        </td>
        <td translate="no" class="font-mono text-info whitespace-nowrap">
          <pre class="whitespace-pre">
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;</pre>
        </td>
      </tr>
    </tbody>
  </table>
</div>
<card-example>
	<div class="container rounded-md bg-surface-1 p-24">
		<div class="w-1/2 truncate">This is some long text that will not fit in the box.</div>
	</div>
</card-example>