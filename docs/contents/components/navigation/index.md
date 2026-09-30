---
title: Navigation
description: Navigation is a set of links that allow users to navigate between pages or sections of a website.
uiVue: true
---

A `<nav>` holds a `vv-nav__menu` list of `vv-nav__item` entries, each with a `vv-nav__item-label` link or button; plain `ul`, `li` and `li > a` are styled too. Mark the current link with the class `current`, which is the only way the navigation reads it, and with `aria-current="page"` for assistive technology. A voice that cannot be reached takes `aria-disabled="true"` (or `disabled` on a button). An icon inside a label is sized and kept on its first line when the label wraps. Give each `<nav>` an `aria-label` when a page has more than one.

### Sidebar and Aside
Use the `vv-nav--sidebar` or `vv-nav--aside` modifier to display the navigation vertically.

<code-editor resource-folder="navigation" resource-name="vertical" class="mb-lg"></code-editor>

### Tabs
Use the `vv-nav--tabs` modifier to display tab navigation. Add the `vv-nav--full` modifier to make the tabs fill the available space.

<code-editor resource-folder="navigation" resource-name="horizontal"></code-editor>