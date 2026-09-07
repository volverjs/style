---
title: Input Range
description: Range fields let users pick a numeric value between known bounds, with the value they picked shown next to the slider.
uiVue: true
---

The slider is the native control: the browser draws track and thumb, and
`accent-color` colors them, so the filled part follows the thumb with no
script. Everything around it is the chrome of the other fields, the label, the
filled wrapper with its focus underline, the hint and the validation colors.

What the browser draws stays the browser's: the thumb is round on Chrome and
grey on Firefox, the empty part of the track keeps its light grey even under
`color-scheme: dark`, because no engine adapts it, and a readonly field shows
the greyed slider of a disabled control, which is what it is.

<code-editor resource-folder="input-range" resource-name="default" class="mb-lg"></code-editor>

### Value and unit
Add a `vv-input-range__value` element next to the slider to show the current
value, and a `vv-input-range__unit` inside it for the unit of measure. Like
`vv-input-text__limit`, the text is written by the application, so keep it in
sync with the value of the input.

### Accent color
Set `--input-range-accent-color` to recolor every range field of the project.
A single field takes `accent-color` directly on the block element, because the
property is inherited by the native slider.

### States
The `input` state controls the style of the component.

Use `vv-input-range--invalid` to show an invalid state,
`vv-input-range--valid` to show a valid state and `vv-input-range--loading` to
show a loading state. The disabled state needs no class: `:has(input[disabled])`
picks it up from the attribute, which is why the example below leaves the
modifier out.

A range input has no readonly state in HTML. Disable the input and add
`vv-input-range--readonly`, the same pattern `vv-select` uses: the modifier
undoes the disabled look, keeping full opacity and hiding the underline.

<code-editor resource-folder="input-range" resource-name="states"></code-editor>
