---
title: Tab
description: Tab is a set of panels shown one at a time under a row of tabs.
isDraft: true
uiVue: true
---

A `vv-tab` holds a [Navigation](/style/components/navigation) with `vv-nav--tabs` and one `vv-tab__panel` per tab. A panel is hidden until it is the `:target` of the URL, so plain links to `#panel-id` switch the tabs without a script, or until it carries the class `target`, which a script can set instead.

<code-editor resource-folder="tab" resource-name="example"></code-editor>
