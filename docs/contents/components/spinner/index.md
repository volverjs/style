---
title: Spinner
description: Spinner is a ring that turns while something is loading.
isNew: true
---

The ring measures `1em` and draws in `currentcolor`, so it takes the size and the colour of the text around it: set a text utility on it, or put it inside a button. Give it `role="status"` and a label when it stands alone, or `aria-hidden="true"` when a visible text next to it already says what is happening. With `prefers-reduced-motion` the ring keeps turning, slower: a spinner that stands still says nothing.

<code-editor resource-folder="spinner" resource-name="default" class="mb-lg"></code-editor>

### In a button

<code-editor resource-folder="spinner" resource-name="button" class="mb-lg"></code-editor>

### Tokens
`--spinner-duration` sets the time of a turn and `--spinner-thickness` the width of the ring. Both are read on the block.

<code-editor resource-folder="spinner" resource-name="tokens"></code-editor>
