---
title: Item
description: Item is a row of a list, something to choose, to open or to act on, and Item Group is the list that holds the rows.
isNew: true
---

A `vv-item` holds an `__entry`, the clickable part (a `<button>` or an `<a>`), and whatever sits beside it with a hit area of its own: `__actions` for controls that act on the row, `__open` for a divided area that opens a level while the entry chooses the row. A button cannot contain buttons, which is why the row itself is not the button. Inside the entry go an optional `__media`, a `__title` (or a `__content` holding a `__title` over a `__description`), and at the end a `__note`, a `__check` or a `__chevron`.

Selection is a step of surface, a step of weight on the title and a check, never a color. The row chosen in a picker carries `aria-pressed="true"` on its entry, which the row reads through the `pressed-within` state. The row being looked at in a master list is `vv-item--current` instead, marked by a bar along the inline start and no check. When the content of a row is several lines tall, `vv-item--top` keeps the media and the controls next to its first line.

The rows sit in a `vv-item-group__list`, under an optional `vv-item-group__header`. `vv-item-group--framed` adds the hairline and the radius of the other frames of the library: leave it off when the list already sits in a card or a panel. A group with nothing to list holds an [Empty](/style/components/empty) state instead.

### Picker
A framed group with a trail on top and rows that are either chosen or opened.

<code-editor resource-folder="item" resource-name="picker" class="mb-lg"></code-editor>

### Master list
Rows with a title over a description take `vv-item--roomy` for room. A `__title` next to a `__description` carries the weight of a heading on every row by itself, whatever the modifier. `vv-item--plain` is a row with nothing to click, such as a skeleton standing in for a row still loading.

<code-editor resource-folder="item" resource-name="master" class="mb-lg"></code-editor>

### Raised
On a ground that is already `surface-1`, `vv-item-group--raised` steps the hover and the chosen row up and the current row down to the plain surface. `vv-item-group--fill` makes the list take the height it is given and scroll there. The four surfaces are the custom properties `--item-divider`, `--item-hover`, `--item-chosen` and `--item-current`, which a group sets and a row reads.

<code-editor resource-folder="item" resource-name="raised"></code-editor>
