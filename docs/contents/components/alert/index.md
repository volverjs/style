---
title: Alert
description: Alerts are used to communicate a state that affects a system, feature or page.
uiVue: true
isNew: false
---

### Colors

Add `vv-alert--${color}` to change the color of the alert.

<code-editor resource-folder="alert" resource-name="colors" class="mb-lg"></code-editor>

### Notification
Add `vv-alert--notification` to show the alert as a notification.

<code-editor resource-folder="alert" resource-name="notification" class="mb-lg"></code-editor>

### Callout
Add `vv-alert--callout` to show the alert inside the page content.

<code-editor resource-folder="alert" resource-name="callout" class="mb-lg"></code-editor>

### Dismissable
Add `vv-alert--dismissable` to add a close button to the right of the alert.

<code-editor resource-folder="alert" resource-name="dismissable" class="mb-lg"></code-editor>

### Alert-dialog
With `vv-alert__footer` you can add a footer to the alert.

<div class="vv-alert vv-alert--callout vv-alert--warning">
  <div class="vv-alert__content">
    If the alert has <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/alertdialog_role" target="_blank" rel="noopener noreferrer">interactive controls</a>, remember to add the <code>role="alertdialog"</code> and the corresponding <code>aria-*</code> attributes.
  </div>
</div>

<code-editor resource-folder="alert" resource-name="alert-dialog" class="mb-lg"></code-editor>

### Group
Use `vv-alert-group` to group alerts. 

The grup can be positioned with `vv-alert-group--[fixed|absolute]` and `vv-alert-group--[top|center|bottom]-[start|middle|end]` modifiers.

<code-editor resource-folder="alert" resource-name="group" class="mb-lg"></code-editor>

With `vv-alert-group--stack` you can stack alerts.

<code-editor resource-folder="alert" resource-name="group-stack" class="mb-lg"></code-editor>

A group or a stack of alerts can be reversed with `vv-alert-group--reverse`.

<code-editor resource-folder="alert" resource-name="group-stack-reverse" class="mb-lg"></code-editor>

### Example
Use [utilities](/style/utilities/layout/top-right-bottom-left) to change alert position and [z-index](/style/utilities/layout/z-index) or the helper `vv-alert--fixed` with `vv-alert--top` or `vv-alert--bottom`.

<code-editor resource-folder="alert" resource-name="example"></code-editor>
