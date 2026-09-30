---
title: Input File
description: Input File is a field to pick files, with an optional drop area, preview and file list.
---

### States
`disabled` on the input styles the whole field, no modifier needed. A file input has no `readonly`: disable it, take it out of the tab order with `tabindex="-1"` and add `vv-input-file--readonly`, which keeps it at full strength. `placeholder` and `value` do not apply to a file input. While a file uploads, `vv-input-file--with-progress` and a `vv-input-file__progress` bar show how far it got.

Use `vv-input-file--invalid` to show an invalid state and `vv-input-file--valid` to show a valid state. Use `vv-input-file--loading` to show a loading state.

<code-editor resource-folder="input-file" resource-name="states"></code-editor>

### Icons
Use `vv-input-file--icon-before` modifier to show an icon before the input and `vv-input-file--icon-after` to show an icon after the input.

<code-editor resource-folder="input-file" resource-name="icons"></code-editor>

### Drop area
Use `vv-input-file__drop-area` to show a drop area, with an optional `vv-input-file__drop-area-action`. `vv-input-file--hidden` hides the field and leaves the drop area alone: make the drop area a focusable control (`role="button" tabindex="0"`) that opens the input, or the keyboard cannot reach it. The script adds `vv-input-file--dragging` while a file is dragged over the area.

<code-editor resource-folder="input-file" resource-name="drop-area"></code-editor>

### Preview
Use `vv-input-file__preview` to show a preview of the file. `vv-input-file--square` and `vv-input-file--circle` give the drop area that shape, for an avatar or a logo.

<code-editor resource-folder="input-file" resource-name="preview"></code-editor>

### File list
Use `vv-input-file__list` to show a file list. Each `vv-input-file__item` holds an `__item-icon`, an `__item-name` (or an `__item-link`), an optional `__item-info` and the `__item-action` or `__item-remove` buttons, each with an `aria-label` naming the file.

<code-editor resource-folder="input-file" resource-name="files"></code-editor>

### Example
This is an example of a form with a file field.

<code-editor resource-folder="input-file" resource-name="example"></code-editor>