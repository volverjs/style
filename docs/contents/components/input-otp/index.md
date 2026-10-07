---
title: Input OTP
description: Input OTP takes a one-time code one character per slot.
isNew: true
---

Each `__slot` is a text input of one character, optionally split into `__group`s by a `__separator`. Moving the focus from slot to slot, and pasting a whole code, belong to the script. `vv-input-otp--invalid` marks a code that was refused; the `aria-invalid` on the slots in the example is for assistive technology, the look comes from the modifier.

<code-editor resource-folder="input-otp" resource-name="default"></code-editor>
