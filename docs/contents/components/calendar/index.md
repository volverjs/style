---
title: Calendar
description: Calendar is a month to pick a date or a range from.
isNew: true
---

A `__header` with the `__title` of the month between two `__nav` buttons, over a `__grid`, a table whose headers are the weekdays and whose cells hold the `__day` buttons. What a day is comes from its markup: the chosen day, or each end of a range, is `aria-pressed="true"`, today is `aria-current="date"`, a day that cannot be chosen is `disabled`, and the cells of a range carry `aria-selected="true"`. Days of the months around are left out, or written as disabled buttons. Computing the month and moving the keyboard across it belong to the script: one day is `tabindex="0"`, the others `tabindex="-1"`, and the arrow keys move the focus and the zero between them. The table, its headers and its cells are reached through the block, so inside `.preflight` the table keeps its `vv-calendar__grid` class, which leaves it to the block. A date picker is a calendar in a [Popover](/style/components/popover) next to a field.

<code-editor resource-folder="calendar" resource-name="default"></code-editor>
