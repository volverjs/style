---
title: Button
description: Button is an interactive element that runs an action, such as submitting a form or opening a dialog.
uiVue: true
---
### Accent
Accent buttons are used to indicate the <em class="italic">main</em> action on the page or a <abbr class="underline decoration-dotted" title="Call To Action">CTA</abbr>.

<code-editor resource-folder="button" resource-name="accent" class="mb-lg"></code-editor>

### Primary
Primary buttons are used to indicate a form submit.

<code-editor resource-folder="button" resource-name="primary" class="mb-lg"></code-editor>

### Secondary
Secondary buttons are used to indicate a less important action, for example a form reset.

<code-editor resource-folder="button" resource-name="secondary" class="mb-lg"></code-editor>

### Danger
Danger buttons are red. They help to keep attention on an important or potentially dangerous action, for example deleting something.

<code-editor resource-folder="button" resource-name="danger" class="mb-lg"></code-editor>

### Ghost
When you want a link, but you want it padded and line heightened like a regular button.

<code-editor resource-folder="button" resource-name="ghost" class="mb-lg"></code-editor>

### Link
Create a button that looks like a link.

<code-editor resource-folder="button" resource-name="link" class="mb-lg"></code-editor>

### Action
Action buttons let users perform an action or mark a selection. They are ideal where buttons are not meant to draw a lot of attention.

<code-editor resource-folder="button" resource-name="action" class="mb-lg"></code-editor>
<code-editor resource-folder="button" resource-name="action-quiet" class="mb-lg"></code-editor>

### Static
A light or dark button that keeps its style in every theme. They can be used over a theme independent background, for example an image.

<code-editor resource-folder="button" resource-name="static-light" class="mb-lg"></code-editor>
<code-editor resource-folder="button" resource-name="static-dark" class="mb-lg"></code-editor>

### Rounded
`vv-button--rounded` rounds the corners of any button variant. An icon-only button takes a circle shape.

<code-editor resource-folder="button" resource-name="rounded" class="mb-lg"></code-editor>

### Full-bleed
`vv-button--full-bleed` gives a button a minimum width of 20 characters, so short labels line up. `vv-button--block` makes it take the whole width of its container.

<code-editor resource-folder="button" resource-name="full-bleed" class="mb-lg"></code-editor>

### Icon
Icons can be added to any button, before the label or, with `vv-button--reverse`, after it. Wrap the text in a `vv-button__label` when it has to truncate or change order. `vv-button--column` stacks the icon over the label. A button with an icon and no text takes `vv-button--icon-only` and an `aria-label`, since the icon says nothing to assistive technology.

<code-editor resource-folder="button" resource-name="icon" class="mb-lg"></code-editor>
<code-editor resource-folder="button" resource-name="icon-vertical" class="mb-lg"></code-editor>
<code-editor resource-folder="button" resource-name="icon-only" class="mb-lg"></code-editor>

### Badge
You can also use badge component within button.

<code-editor resource-folder="button" resource-name="badge" class="mb-lg"></code-editor>

### Overflow
The button label can be truncated with ellipsis.

<code-editor resource-folder="button" resource-name="overflow" class="mb-lg"></code-editor>

### Group
Buttons can be grouped in a `vv-button-group`, keeping their separation, or attached to each other with `vv-button-group--compact`. `vv-button-group--vertical` stacks them and `vv-button-group--block` makes the group take the whole width.

<code-editor resource-folder="button" resource-name="group" class="mb-lg"></code-editor>
<code-editor resource-folder="button" resource-name="group-compact" class="mb-lg"></code-editor>
<code-editor resource-folder="button" resource-name="group-vertical"></code-editor>