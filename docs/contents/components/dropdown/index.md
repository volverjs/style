---
title: Dropdown
description: Dropdown is a floating list of options to choose from or of actions to run.
uiVue: true
---

A `vv-dropdown` holds a `vv-dropdown__list` of items, with an optional `vv-dropdown__search` field on top and an `__arrow` pointing at its trigger. `vv-dropdown--bottom` and `vv-dropdown--top` place it under or over its trigger, which needs `position: relative`; a positioning library can set the coordinates instead, and a dropdown promoted to the top layer with the `popover` attribute keeps them. `vv-dropdown--block` makes it as wide as its container, `vv-dropdown--full-bleed` gives the items a minimum width of 20 characters, and `vv-dropdown--rounded` rounds its corners, which are square by default.

### Listbox
The `listbox` role is used for lists from which a user may select one or more items. Each `vv-dropdown-option` carries `aria-selected`, an optional `__hint`, and sits in a `vv-dropdown-optgroup` when the options are grouped. `vv-dropdown-option--inert` is a line that cannot be chosen, such as a note, and `vv-dropdown-option--unselectable` flags in red the option the keyboard is on when it cannot be chosen. Only one option is in the tab order (`tabindex="0"`, the others `-1`), or the list uses `aria-activedescendant`.

<code-editor resource-folder="dropdown" resource-name="listbox"></code-editor>

### Menu
The `menu` role is used for lists of actions: each item is a `vv-dropdown-action` button.

<code-editor resource-folder="dropdown" resource-name="menu"></code-editor>

### Dialog
With the `vv-dropdown--dialog` modifier, the dropdown is rendered as a dialog in the middle of the viewport.

<code-editor resource-folder="dropdown" resource-name="dialog"></code-editor> 

<div class="vv-alert vv-alert--callout vv-alert--info mb-lg">
  <div class="vv-alert__content">
    The same effect applies below the <code>xs</code> breakpoint only with the <code>vv-dropdown--mobile</code> modifier.
  </div>
</div>
