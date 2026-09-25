---
title: Popover
description: Popover is a floating panel for a short piece of content or a small form, on the Popover API.
isNew: true
---

The element carries `popover`, and a button with `popovertarget` opens it: the browser moves it to the top layer and shows it while it is open. The block puts back the fixed position the reset of the library unsets, at the top of the stacking order, with a `__title` and a `__footer` for actions. Placing it next to its trigger is left to the script that opens it, or to anchor positioning where the browser has it, which set its inset. Without either the panel opens at the top left corner of the viewport; `vv-popover--center` centres it, as the example does. A panel that opens on hover is the same block, with the delay in the script; menus and lists of options stay a [Dropdown](/style/components/dropdown).

<code-editor resource-folder="popover" resource-name="default"></code-editor>
