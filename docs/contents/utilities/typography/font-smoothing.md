---
title: Font Smoothing
description: Utilities for controlling the font smoothing of an element.
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
  <div class="rounded-md bg-surface-1 px-sm">
    <div class="antialiased border-b border-surface-3 p-sm">I'm antialiased</div>
    <div class="subpixel-antialiased p-sm">I'm subpixel-antialiased</div>
  </div>
  </card-example>