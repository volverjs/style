---
title: Scrollbar
description: Utilities for the width and the color of the native scrollbar of a scrolling element.
isNew: true
---

Scrollbar utilities set the native scrollbar through the standard `scrollbar-width` and `scrollbar-color`. Where the system draws overlay scrollbars, as macOS does by default, even a thin bar shows only while the element scrolls, and `scrollbar-none` never shows one: let the last item of a strip be cut by its edge, so the strip still reads as one that scrolls.

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
	<div class="grid md:grid-cols-2 gap-md items-start">
		<div class="scrollbar-thin overflow-y-auto h-128 rounded-md bg-surface-1 p-md">
			<p>A panel with a thin scrollbar.</p>
			<p>It keeps scrolling like any other element.</p>
			<p>The thumb takes the faintest text color.</p>
			<p>The track is transparent,</p>
			<p>so it takes the panel behind it.</p>
			<p>One more line to scroll to.</p>
			<p>Last line.</p>
		</div>
		<div class="flex flex-col gap-md min-w-0">
			<div>
				<p class="font-mono text-12 text-word-3 mb-8">.scrollbar-thin</p>
				<div class="scrollbar-thin overflow-x-auto flex gap-8 pb-8">
					<span class="vv-badge vv-badge--gray vv-badge--rounded shrink-0">All</span>
					<span class="vv-badge vv-badge--gray vv-badge--rounded shrink-0">Invoices</span>
					<span class="vv-badge vv-badge--gray vv-badge--rounded shrink-0">Receipts</span>
					<span class="vv-badge vv-badge--gray vv-badge--rounded shrink-0">Contracts</span>
					<span class="vv-badge vv-badge--gray vv-badge--rounded shrink-0">Offers</span>
					<span class="vv-badge vv-badge--gray vv-badge--rounded shrink-0">Orders</span>
					<span class="vv-badge vv-badge--gray vv-badge--rounded shrink-0">Reports</span>
					<span class="vv-badge vv-badge--gray vv-badge--rounded shrink-0">Payroll</span>
					<span class="vv-badge vv-badge--gray vv-badge--rounded shrink-0">Taxes</span>
					<span class="vv-badge vv-badge--gray vv-badge--rounded shrink-0">Archive</span>
				</div>
			</div>
			<div>
				<p class="font-mono text-12 text-word-3 mb-8">.scrollbar-none</p>
				<div class="scrollbar-none overflow-x-auto flex gap-8">
					<span class="vv-badge vv-badge--gray vv-badge--rounded shrink-0">All</span>
					<span class="vv-badge vv-badge--gray vv-badge--rounded shrink-0">Invoices</span>
					<span class="vv-badge vv-badge--gray vv-badge--rounded shrink-0">Receipts</span>
					<span class="vv-badge vv-badge--gray vv-badge--rounded shrink-0">Contracts</span>
					<span class="vv-badge vv-badge--gray vv-badge--rounded shrink-0">Offers</span>
					<span class="vv-badge vv-badge--gray vv-badge--rounded shrink-0">Orders</span>
					<span class="vv-badge vv-badge--gray vv-badge--rounded shrink-0">Reports</span>
					<span class="vv-badge vv-badge--gray vv-badge--rounded shrink-0">Payroll</span>
					<span class="vv-badge vv-badge--gray vv-badge--rounded shrink-0">Taxes</span>
					<span class="vv-badge vv-badge--gray vv-badge--rounded shrink-0">Archive</span>
				</div>
			</div>
		</div>
	</div>
</card-example>
