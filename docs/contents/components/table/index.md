---
title: Table
description: Table is a grid of data in rows and columns.
uiVue: false
---

A `<table class="vv-table">` styles its `caption`, `thead`, `tbody` and `tfoot` without a class of its own. An empty `caption` is hidden. The cells are padded by `--table-cell-padding`, set on the block.

### Standard
Rows divided by a hairline, the cells padded above and below only, so the text lines up with the content around the table.

<code-editor resource-folder="table" resource-name="standard" class="mb-lg"></code-editor>

### Inline spacing
`vv-table--inline-spacing` pads the cells on the sides too, for a table that sits in a frame of its own.

<code-editor resource-folder="table" resource-name="inline-spacing" class="mb-lg"></code-editor>

### Bordered
`vv-table--bordered` draws a border around every cell.

<code-editor resource-folder="table" resource-name="bordered" class="mb-lg"></code-editor>

### Sortable and selectable
A sortable column carries `aria-sort` on the `th` (`none`, `ascending`, `descending`) and a `vv-table__sort` button inside it. A selected row carries the class `selected`, or `aria-selected="true"` when the table is a grid (`role="grid"`), the only kind of table whose rows expose that state; the row being looked at, when the table is a master list, carries the class `current`.

<code-editor resource-folder="table" resource-name="sortable"></code-editor>
