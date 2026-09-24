---
title: Table
description: Tables are containers for displaying information.
uiVue: false
isDraft: true
---

<code-editor resource-folder="table" resource-name="standard" class="mb-lg"></code-editor>

<code-editor resource-folder="table" resource-name="inline-spacing" class="mb-lg"></code-editor>

<code-editor resource-folder="table" resource-name="bordered" class="mb-lg"></code-editor>

### Sortable and selectable
A sortable column carries `aria-sort` on the `th` (`none`, `ascending`, `descending`) and a `vv-table__sort` button inside it. A selected row carries `selected`, or `aria-selected="true"` when the table is a grid (`role="grid"`), the only kind of table whose rows expose that state; the row being looked at, when the table is a master list, carries `current`.

<code-editor resource-folder="table" resource-name="sortable"></code-editor>
