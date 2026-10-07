---
title: Input Range
description: Input Range is a slider that picks a number between known bounds, with the value shown next to it.
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
Use `vv-input-range--invalid` to show an invalid state and
`vv-input-range--valid` to show a valid state. The disabled state needs no
class: `:has(input[disabled])` picks it up from the attribute, which is why the
example below leaves the modifier out.

A range input has no readonly state in HTML. Disable the input and add
`vv-input-range--readonly`, which restores the read-only look: full opacity,
the default cursor and a muted accent.

<code-editor resource-folder="input-range" resource-name="states"></code-editor>
