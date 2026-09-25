---
title: Radio
description: Radio is a choice of one option from a set.
uiVue: true
---

### States
A `label.vv-radio` wraps its `<input type="radio">` and the text. `disabled` on the input dims the option. A radio has no `readonly` attribute: disable it, take it out of the tab order with `tabindex="-1"` and add `vv-radio--readonly`, which keeps it at full strength. A single radio can carry `vv-radio--valid` or `vv-radio--invalid` and a `vv-radio__hint`.

<code-editor resource-folder="radio" resource-name="states" class="mb-lg"></code-editor>

### Group
A `fieldset.vv-radio-group` holds a `legend`, a `vv-radio-group__wrapper` around the options and an optional `vv-radio-group__hint`. The options are stacked; `vv-radio-group--horizontal` lays them in a row.

<code-editor resource-folder="radio" resource-name="group-horizontal" class="mb-lg"></code-editor>
<code-editor resource-folder="radio" resource-name="group-vertical" class="mb-lg"></code-editor>

### Validation
`vv-radio-group--valid` and `vv-radio-group--invalid` color the hint of the group.

<code-editor resource-folder="radio" resource-name="group-validation" class="mb-lg"></code-editor>

### Segmented
Add `vv-radio-group--segmented` to the group and `vv-radio--segment` to each option for a segmented control: a recessed track with the chosen option raised. The native radio is not painted but stays in the tree, so the keyboard and assistive technology work as usual, and the keyboard focus draws an outline on the tile.

<code-editor resource-folder="radio" resource-name="segmented" class="mb-lg"></code-editor>

### Cards
Add `vv-radio-group--cards` to the group and `vv-radio--card` to each option to draw it as a bordered tile, the control at the start and a title over a description beside it.

<code-editor resource-folder="radio" resource-name="cards"></code-editor>
