---
title: Separator
description: Separator is a hairline between two groups of content, with an optional label on it.
isNew: true
---

A plain `<hr class="vv-separator">` draws the line. With a label, the line runs on both sides of it and a long label wraps instead of overlapping what is around it. The label is a `<span>` or any element with `vv-separator__label`. The line takes the `border-color` of the block, so one override recolours both halves.

<code-editor resource-folder="separator" resource-name="default" class="mb-lg"></code-editor>

### Vertical
Add `vv-separator--vertical` between two items of a row: the block stretches to the height of the row.

<code-editor resource-folder="separator" resource-name="vertical"></code-editor>
