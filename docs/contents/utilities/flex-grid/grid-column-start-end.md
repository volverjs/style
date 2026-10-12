---
title: Grid Column Start / End
description: Utilities for controlling how elements are sized and placed across grid columns.
breakpoints: true
containerQueries: true
---
Column start and end utilities are used to control how elements are sized and placed across grid columns. They can be used to change the size and placement of elements from the default to a specific size and placement, or vice versa.

<table-utility prefix="col" attribute="grid-column" property="grid-column" class="mb-lg"></table-utility>

The `col-*` classes above also take a container prefix, `@md:col-span-6`. The `col-start-*` and `col-end-*` classes below take the breakpoint prefix only.

### Column Start
The column start utilities are used to control the starting column of an element. They can be used to change the starting column of an element from the default to a specific column, or vice versa.

<table-utility prefix="col-start" property="grid-column-start-end" attribute="grid-column-start" class="mb-lg"></table-utility>

### Column End
The column end utilities are used to control the ending column of an element. They can be used to change the ending column of an element from the default to a specific column, or vice versa.

<table-utility prefix="col-end" property="grid-column-start-end" attribute="grid-column-end"></table-utility>