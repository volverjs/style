---
title: Popover
description: Popover is a floating panel for a short piece of content or a small form, on the Popover API.
isNew: true
---

The element carries `popover`, and a button with `popovertarget` opens it: the browser moves it to the top layer and shows it while it is open. The block puts back the fixed position the reset of the library unsets, at the top of the stacking order, with a `__title` and a `__footer` for actions. Placing it next to its trigger is left to the script that opens it, or to anchor positioning where the browser has it, which set its inset. Without either the panel opens at the top left corner of the viewport; `vv-popover--center` centers it, as the example does. A panel that opens on hover is the same block, with the delay in the script; menus and lists of options stay a [Dropdown](/style/components/dropdown).

A panel with `popover` fades in and out: `@starting-style` gives the fade in its first frame, and `transition-behavior: allow-discrete` keeps the panel on the page until the fade out ends. Where the browser lacks one of them it skips that half (Safari 17 fades the panel in and hides it at once), and under reduced motion it shows and hides at once. A panel shown without `popover` does not fade.

<code-editor resource-folder="popover" resource-name="default"></code-editor>
