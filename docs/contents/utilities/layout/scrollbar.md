---
title: Scrollbar
description: Utilities for the width and the colour of the native scrollbar of a scrolling element.
isNew: true
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
          .scrollbar-thin
        </td>
        <td translate="no" class="font-mono text-info whitespace-nowrap">
          <pre class="whitespace-pre">
scrollbar-width: thin;
scrollbar-color: var(--color-word-5) transparent;</pre>
        </td>
      </tr>
      <tr>
        <td translate="no" class="font-mono text-accent whitespace-nowrap">
          .scrollbar-none
        </td>
        <td translate="no" class="font-mono text-info whitespace-nowrap">
          <pre class="whitespace-pre">
scrollbar-width: none;</pre>
        </td>
      </tr>
    </tbody>
  </table>
</div>
<card-example>
	<div class="grid md:grid-cols-2 gap-md">
		<div class="scrollbar-thin overflow-y-auto h-128 rounded-md bg-surface-1 p-md">
			<p>A panel with a thin scrollbar.</p>
			<p>It keeps scrolling like any other element.</p>
			<p>The thumb takes the faintest text colour.</p>
			<p>The track is transparent, so it takes the panel behind it.</p>
			<p>Last line.</p>
		</div>
		<div class="scrollbar-none overflow-x-auto rounded-md bg-surface-1 p-md whitespace-nowrap">
			A row that scrolls sideways without showing a scrollbar, such as a strip of chips or tabs that overflows its container.
		</div>
	</div>
</card-example>
