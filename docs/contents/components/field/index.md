---
title: Field
description: Field is the shell of a form field around a control the library does not draw, with the label, the box, the hint and the states of the other fields.
isNew: true
---

Label, box, hint, the `valid`, `invalid` and `loading` modifiers and the disabled and readonly states are those of Input Text, so a custom control sits in a form next to the other fields. Inside the box go the `__control`, which takes the padding of a field and lets the box draw hover and focus, an optional `__before` and `__after` on either side of it, and an optional `__toolbar`, a row under the control.

<code-editor resource-folder="field" resource-name="default" class="mb-lg"></code-editor>

### Before and after
An icon, a unit or a button inline with the control goes in `__before` or `__after`, inside the box.

<code-editor resource-folder="field" resource-name="addons" class="mb-lg"></code-editor>

### Toolbar
A row of buttons under the control, inside the box, the way a message composer puts its actions under the text.

<code-editor resource-folder="field" resource-name="toolbar" class="mb-lg"></code-editor>

### A switch in a form
A single boolean control framed like a field, so it keeps the rhythm of the form: the switch is the control.

<code-editor resource-folder="field" resource-name="switch" class="mb-lg"></code-editor>

### States
The disabled and readonly states follow the `disabled` and `readonly` attributes of the control. A control that has no such attribute, a contenteditable for one, takes `contenteditable="false"` and the state on the block instead: `aria-disabled="true"` or `vv-field--readonly`.

<code-editor resource-folder="field" resource-name="states"></code-editor>
