---
title: Input Range
description: Range fields let users pick a numeric value between known bounds, with the value they picked shown next to the slider.
uiVue: true
---

CSS cannot read the value of a range input, so the filled part of the track is
drawn from `--input-range-progress`: write it on the block element, as a
percentage of the distance between `min` and `max`.

<code-editor resource-folder="input-range" resource-name="default" class="mb-lg"></code-editor>

### Value and unit
Add a `vv-input-range__value` element next to the slider to show the current
value, and a `vv-input-range__unit` inside it for the unit of measure.

### States
The `input` state controls the style of the component.

Use `vv-input-range--invalid` to show an invalid state and
`vv-input-range--valid` to show a valid state. A range input has no readonly
state in HTML: disable the input and add `vv-input-range--readonly`, which
keeps the field from looking disabled.

<code-editor resource-folder="input-range" resource-name="states"></code-editor>
