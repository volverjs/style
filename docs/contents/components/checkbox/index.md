---
title: Checkbox
description: Checkbox is a choice that can be on or off, alone or among several options.
uiVue: true
---

### States
A `label.vv-checkbox` wraps its `<input type="checkbox">` and the text. `disabled` on the input dims the option. A checkbox has no `readonly` attribute: disable it, take it out of the tab order with `tabindex="-1"` and add `vv-checkbox--readonly`, which keeps it at full strength. A single checkbox can carry `vv-checkbox--valid` or `vv-checkbox--invalid` and a `vv-checkbox__hint`.

<code-editor resource-folder="checkbox" resource-name="states" class="mb-lg"></code-editor>

### Switch
`vv-checkbox--switch` draws the checkbox as a switch. Add `role="switch"` to the input, so assistive technology announces it as on or off.

<code-editor resource-folder="checkbox" resource-name="switch" class="mb-lg"></code-editor>

### Group
A `fieldset.vv-checkbox-group` holds a `legend`, a `vv-checkbox-group__wrapper` around the options and an optional `vv-checkbox-group__hint`. The options are stacked; `vv-checkbox-group--horizontal` lays them in a row.

<code-editor resource-folder="checkbox" resource-name="group-horizontal" class="mb-lg"></code-editor>
<code-editor resource-folder="checkbox" resource-name="group-vertical" class="mb-lg"></code-editor>

### Validation
`vv-checkbox-group--valid` and `vv-checkbox-group--invalid` color the hint of the group.

<code-editor resource-folder="checkbox" resource-name="group-validation" class="mb-lg"></code-editor>

### Segmented
Add `vv-checkbox-group--segmented` to the group and `vv-checkbox--segment` to each option for a segmented control where more than one option can be on.

<code-editor resource-folder="checkbox" resource-name="segmented" class="mb-lg"></code-editor>

### Cards
Add `vv-checkbox-group--cards` to the group and `vv-checkbox--card` to each option to draw it as a bordered tile.

<code-editor resource-folder="checkbox" resource-name="cards"></code-editor>
