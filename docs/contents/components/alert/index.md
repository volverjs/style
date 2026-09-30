---
title: Alert
description: Alert is a message that communicates a state affecting a system, a feature or a page.
uiVue: true
---

### Colors

Add `vv-alert--{color}` to change the color of the alert: `success`, `danger`, `warning`, `info`, `accent` or `brand`. `vv-alert--nowrap` lays the header and the content on a single row from the `sm` breakpoint up.

<code-editor resource-folder="alert" resource-name="colors" class="mb-lg"></code-editor>

### Notification
Add `vv-alert--notification` to show the alert as a notification.

<code-editor resource-folder="alert" resource-name="notification" class="mb-lg"></code-editor>

### Callout
Add `vv-alert--callout` to show the alert inside the page content.

<code-editor resource-folder="alert" resource-name="callout" class="mb-lg"></code-editor>

### Dismissable
Add `vv-alert--dismissable` and a `<button type="button" class="vv-alert__close" aria-label="Close">` in the header: the modifier reserves room for the button on the right. With `vv-alert--auto-close` the close button draws a ring that empties in `--alert-duration`, 3s by default, set on the block; the script that closes the alert runs on the same time.

<code-editor resource-folder="alert" resource-name="dismissable" class="mb-lg"></code-editor>

### Alert dialog
With `vv-alert__footer` you can add a footer to the alert.

<div class="vv-alert vv-alert--callout vv-alert--warning">
  <div class="vv-alert__content">
    If the alert has <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/alertdialog_role" target="_blank" rel="noopener noreferrer">interactive controls</a>, remember to add the <code>role="alertdialog"</code> and the corresponding <code>aria-*</code> attributes.
  </div>
</div>

<code-editor resource-folder="alert" resource-name="alert-dialog" class="mb-lg"></code-editor>

### Group
Use `vv-alert-group` to group alerts. The alerts go in a `role="group"` child, the `vv-alert-group__list`: the group itself lets the pointer through to the page, and only the alerts in the list take it back.

The group can be positioned with `vv-alert-group--{fixed|absolute}` and `vv-alert-group--{top|center|bottom}-{start|middle|end}` modifiers, and `vv-alert-group--full-bleed` lets it take the whole width.

<code-editor resource-folder="alert" resource-name="group" class="mb-lg"></code-editor>

With `vv-alert-group--stack` you can stack alerts.

<code-editor resource-folder="alert" resource-name="group-stack" class="mb-lg"></code-editor>

A group or a stack of alerts can be reversed with `vv-alert-group--reverse`.

<code-editor resource-folder="alert" resource-name="group-stack-reverse" class="mb-lg"></code-editor>

### Example
Use [utilities](/style/utilities/layout/top-right-bottom-left) to change the alert position and the [z-index](/style/utilities/layout/z-index), or place a group with the modifiers above. The `vv-alert--fade`, `--fade-inline-start`, `--fade-inline-end`, `--fade-block-top` and `--fade-block-bottom` classes are the enter and leave classes of a Vue `<Transition>` of the same name, as in the example.

<code-editor resource-folder="alert" resource-name="example"></code-editor>
