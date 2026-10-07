---
title: Pointer Events
description: Utilities for controlling whether an element responds to the pointer.
---
`pointer-events-none` lets clicks and hovers pass through an element to what is under it. It does not take the element out of the tab order: a control that must not be used also needs `disabled` or `tabindex="-1"`.

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
          .pointer-events-none
        </td>
        <td translate="no" class="font-mono text-info whitespace-nowrap">
          pointer-events: none;
        </td>
      </tr>
      <tr>
        <td translate="no" class="font-mono text-accent whitespace-nowrap">
          .pointer-events-auto
        </td>
        <td translate="no" class="font-mono text-info whitespace-nowrap">
          pointer-events: auto;
        </td>
      </tr>
    </tbody>
  </table>
</div>
