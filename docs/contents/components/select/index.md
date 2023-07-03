---
title: Select
description: Select is used to select an item from a list of options.
uiVue: true
---

### States
The `select` state controls the style of the component. Select by default cannot be readonly. Use `vv-select--readonly` modifier to make the select readonly. 

Use `vv-select--invalid` to show an invalid state and `vv-select--valid` to show a valid state. Use `vv-select--loading` to show a loading state.

<code-editor resource-folder="select" resource-name="states" class="mb-lg"></code-editor>

### Floating label
Use `vv-select--floating` modifier to show the label inside the select.

<code-editor resource-folder="select" resource-name="floating-label" class="mb-lg"></code-editor>

### Icons
Use `vv-select--icon-before` modifier to show an icon before the select and `vv-select--icon-after` to show an icon after the select.

<code-editor resource-folder="select" resource-name="icons" class="mb-lg"></code-editor>

### Multiple
Use `vv-select--multiple` modifier to make the select multiple.

<code-editor resource-folder="select" resource-name="multiple" class="mb-lg"></code-editor>

<div class="vv-alert vv-alert--callout vv-alert--warning mb-lg">
    <div class="vv-alert__header">
      <div class="vv-alert__title">Warning</div>
    </div>
    <div class="vv-alert__content">
        Multiple select currently does not working properly on Safari.
    </div>
</div>
