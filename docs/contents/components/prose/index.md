---
title: Prose
description: Prose is a container for rich text that arrives as plain tags, such as rendered markdown or the output of an editor.
isNew: true
---

Every tag inside `vv-prose` is styled without a class: headings, paragraphs, lists and task lists, definition lists, links, quotes, inline code and code blocks, tables, rules, images, `details`, and the inline tags `strong`, `em`, `mark`, `abbr`, `sub`, `sup`, `kbd`, `small`, `del` and `ins`. Sizes are in `em`, so the headings follow the text around them, and the rhythm is a margin on every child after the first, so the block has no margin of its own at either end. Inside a `.preflight` container the content of a prose block is left to it. The numbering style an `ol` takes from its `type` attribute is not restored: set `list-style-type` on the list if the content relies on it.

<code-editor resource-folder="prose" resource-name="default" class="mb-lg"></code-editor>

### Compact
Add `vv-prose--compact` for rich text at the density of a field or a list: headings at the size of the text, the gaps halved.

<code-editor resource-folder="prose" resource-name="compact"></code-editor>
