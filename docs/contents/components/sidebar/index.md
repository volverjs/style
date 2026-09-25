---
title: Sidebar
description: Sidebar is the side column of an application, with a header, a navigation that scrolls and a footer.
isNew: true
---

A `__header` (the product, a switcher), a `__content` that scrolls, usually a [Navigation](/style/components/navigation) with `vv-nav--sidebar`, and a `__footer` (the account). Its width is `--sidebar-width`, 16rem by default; `vv-sidebar--collapsed` narrows it to `--sidebar-collapsed-width`, a 64px rail, and hides every `__label` from sight, so only the icons remain and each still carries the name of its link for assistive technology. In the rail the header, the content and the footer are each one column as wide as the rail, so their icons line up on its middle whatever padding they carry; any text left outside a `__label`, such as a heading of the navigation, stays in the rail. Both widths can be set on the layout around the sidebar.

<code-editor resource-folder="sidebar" resource-name="default"></code-editor>
