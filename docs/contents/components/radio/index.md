---
title: Radio
description: A radio button allows the user to select one option from a set.
uiVue: true
---

<code-editor resource-folder="radio" resource-name="states" class="mb-lg"></code-editor>
<code-editor resource-folder="radio" resource-name="group-horizontal" class="mb-lg"></code-editor>
<code-editor resource-folder="radio" resource-name="group-vertical" class="mb-lg"></code-editor>
<code-editor resource-folder="radio" resource-name="group-validation" class="mb-lg"></code-editor>

### Segmented
Add `vv-radio-group--segmented` to the group and `vv-radio--segment` to each option for a segmented control: a recessed track with the chosen option raised. The native radio is not painted but stays in the tree, so the keyboard and assistive technology work as usual, and the keyboard focus draws an outline on the tile.

<code-editor resource-folder="radio" resource-name="segmented" class="mb-lg"></code-editor>

### Cards
Add `vv-radio-group--cards` to the group and `vv-radio--card` to each option to draw it as a bordered tile, the control at the start and a title over a description beside it.

<code-editor resource-folder="radio" resource-name="cards"></code-editor>
