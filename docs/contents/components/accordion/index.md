---
title: Accordion
description: Accordion is an interactive widget that the user can open and close on demand.
uiVue: true
---

An accordion is a native `<details class="vv-accordion">` with a `summary` and a `vv-accordion__content`: the browser opens and closes it and tells assistive technology its state, so no `aria-expanded` is needed. A `vv-accordion-group` stacks several of them.

<code-editor resource-folder="accordion" resource-name="standard" class="mb-lg"></code-editor>

### Disabled
`<details>` has no `disabled` attribute. Set `aria-disabled="true"` on it, which dims it and stops the pointer, and `tabindex="-1"` on its summary; stopping a key that would still open it is up to the script.

<code-editor resource-folder="accordion" resource-name="disabled" class="mb-lg"></code-editor>

### Marker right
`vv-accordion--marker-right` moves the marker to the inline end of the summary.

<code-editor resource-folder="accordion" resource-name="marker-right" class="mb-lg"></code-editor>

### Bordered
`vv-accordion--bordered` draws each accordion in a frame of its own.

<code-editor resource-folder="accordion" resource-name="bordered" class="mb-lg"></code-editor>

### Square
`vv-accordion--square` takes the radius away, and `vv-accordion-group--condensed` joins the accordions of a group with no gap between them.

<code-editor resource-folder="accordion" resource-name="square"></code-editor>
