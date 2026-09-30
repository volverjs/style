---
title: Tooltip
description: Tooltip is a floating label that briefly explains the element it belongs to.
uiVue: true
---

### Parent element
Use tooltips to provide additional information about an element. Put the tooltip directly inside its trigger, which the rule gives `position: relative`: it shows while the trigger is hovered or has the keyboard focus, so the trigger has to be focusable, a button or a link. The tooltip text is `inert` and hidden from assistive technology, so an icon-only trigger still needs its own `aria-label`. `vv-tooltip--visible` shows a tooltip without hover or focus.

<code-editor resource-folder="tooltip" resource-name="elements" class="mb-lg"></code-editor>

### Positioning
The tooltip opens at the inline end of its trigger, on the right in a left-to-right page and on the left in a right-to-left one. Add `vv-tooltip--top`, `vv-tooltip--bottom`, or `vv-tooltip--left` to change the tooltip position.

<code-editor resource-folder="tooltip" resource-name="position" class="mb-lg"></code-editor>