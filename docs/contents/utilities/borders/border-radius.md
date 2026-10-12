---
title: Border Radius
description: Utilities for controlling the border radius of an element.
customProperties: true
---
<table-utility prefix="rounded" property="border-radius" custom-property="rounded" class="mb-lg"></table-utility>

### Corner radius
Border radius utilities are available for individual corners, as well as for all corners at once.

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
          .rounded-t-{size-key}
        </td>
        <td translate="no" class="font-mono text-info whitespace-nowrap">
          <div>border-top-left-radius: {size-value};</div>
          <div>border-top-right-radius: {size-value};</div>
        </td>
      </tr>
      <tr>
        <td translate="no" class="font-mono text-accent whitespace-nowrap">
          .rounded-b-{size-key}
        </td>
        <td translate="no" class="font-mono text-info whitespace-nowrap">
          <div>border-bottom-left-radius: {size-value};</div>
          <div>border-bottom-right-radius: {size-value};</div>
        </td>
      </tr>
      <tr>
        <td translate="no" class="font-mono text-accent whitespace-nowrap">
          .rounded-tl-{size-key}
        </td>
        <td translate="no" class="font-mono text-info whitespace-nowrap">
          border-top-left-radius: {size-value};
        </td>
      </tr>
      <tr>
        <td translate="no" class="font-mono text-accent whitespace-nowrap">
          .rounded-tr-{size-key}
        </td>
        <td translate="no" class="font-mono text-info whitespace-nowrap">
          border-top-right-radius: {size-value};
        </td>
      </tr>
      <tr>
        <td translate="no" class="font-mono text-accent whitespace-nowrap">
          .rounded-bl-{size-key}
        </td>
        <td translate="no" class="font-mono text-info whitespace-nowrap">
          border-bottom-left-radius: {size-value};
        </td>
      </tr>
      <tr>
        <td translate="no" class="font-mono text-accent whitespace-nowrap">
          .rounded-br-{size-key}
        </td>
        <td translate="no" class="font-mono text-info whitespace-nowrap">
          border-bottom-right-radius: {size-value};
        </td>
      </tr>
    </tbody>
  </table>
</div>

### Rescale the corners
`--rounded` is the base of the scale: the other steps are declared as a multiple of it, so one declaration rescales every corner of the utilities and of the components. `none` and `full` keep their value.

```css
:root, :host, .theme {
  --rounded: 0.375rem; /* sm 0.1875rem, lg 0.75rem, xxl 1.5rem */
}
```

The steps are computed where they are declared, on the root and on every `.theme` element, so a section gets its own scale with the `theme` class:

```html
<section class="theme" style="--rounded: 0">
  <!-- square corners -->
</section>
```

In SCSS the ratios come from `$border-radius` at compile time. A step that is not a size, like a pill, goes in `$border-radius-fixed` to keep its own value:

```scss
@use '@volverjs/style/scss/context' with (
  $border-radius: (none: 0px, sm: 2px, rounded: 4px, lg: 8px, pill: 9999px, full: 9999px),
  $border-radius-fixed: (none, pill, full)
);
```
