---
title: Pagination
description: Pagination moves between the pages of a list or a table.
isNew: true
---

A `<nav>` holding a list of `__page` links or buttons, with an `__ellipsis` where pages are skipped and an optional `__summary`. The page being shown carries `aria-current="page"`, which the block reads, so the markup states it once. A page that cannot be reached is a `disabled` button, or a link with `aria-disabled="true"` and no `href`, so the keyboard skips it as well as the pointer.

<code-editor resource-folder="pagination" resource-name="default"></code-editor>
