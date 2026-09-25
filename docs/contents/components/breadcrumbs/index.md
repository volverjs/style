---
title: Breadcrumbs
description: Breadcrumbs is the trail of links that leads to the current page, with the separators drawn by CSS.
uiVue: true
---

A `<nav class="vv-breadcrumb">` with an `aria-label` holds an `ol`: every `li` with a link is a step, and the current page is the `li` without one, which carries `aria-current="page"`. The separators are drawn by CSS, so the markup holds none. A long trail stays on one line and scrolls; `vv-breadcrumb--multiline` lets it wrap.

<code-editor resource-folder="breadcrumbs" resource-name="standard" class="mb-lg"></code-editor>
<code-editor resource-folder="breadcrumbs" resource-name="multiline"></code-editor>
