---
title: Progress
description: Progress is a bar that shows how much of a task is done, or that something is loading when the amount is unknown.
uiVue: true
---

### Determinate
A `<progress class="vv-progress">` with a `value` and a `max` fills the bar to that share. Give it a label, with `for` or `aria-label`, so the value has a name.

<code-editor resource-folder="progress" resource-name="determinate" class="mb-lg"></code-editor>

### Indeterminate
Without a `value` the element is `:indeterminate`, and the bar runs back and forth until a value is set.

<code-editor resource-folder="progress" resource-name="indeterminate"></code-editor>
