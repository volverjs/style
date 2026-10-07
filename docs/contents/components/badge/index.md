---
title: Badge
description: Badge is a small status indicator for another element.
uiVue: true
---

### Colors
Use `vv-badge--{color}` to change the color of the badge: `accent`, `success`, `danger`, `warning`, `info`, `gray`, `white` or `black`. A badge with no content, not even a space, is drawn as a dot. A badge is static text: add `role="status"` only to one whose content changes while the page is open, such as a counter updated live.

<code-editor resource-folder="badge" resource-name="colors" class="mb-lg"></code-editor>

### Rounded
Add the `vv-badge--rounded` modifier to change the shape of the badge.

<code-editor resource-folder="badge" resource-name="rounded" class="mb-lg"></code-editor>

### Outline
Add `vv-badge--outline` to change the style of the badge.

<code-editor resource-folder="badge" resource-name="outline" class="mb-lg"></code-editor>

### Ghost
Add `vv-badge--ghost` for a transparent background.

<code-editor resource-folder="badge" resource-name="ghost" class="mb-lg"></code-editor>

### Small
Use `vv-badge--sm` to change the size of the badge.

<code-editor resource-folder="badge" resource-name="small"></code-editor>

### Action
Add `vv-badge--action` and a `vv-badge__button` inside the badge, a `<button type="button">` with an `aria-label`, to make it removable or interactive, as a filter chip.

<code-editor resource-folder="badge" resource-name="action"></code-editor>
