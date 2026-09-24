---
title: Message
description: Message is a row of a conversation, with who says it, what is said and what can be done with it.
isNew: true
---

A `vv-message` lays out an optional `__avatar`, anchored to the last line, beside a `__content` column holding a `__header` (the sender, a time), the bubbles, attachments or cards of the message, and a `__footer` (status, actions). The rows of the one reading take `vv-message--end`, mirrored to the inline end, and `vv-message--wide` lets the content take the whole row, for an answer set as rich text. `__meta` shows on hover or focus only, and always on a device that cannot hover.

<code-editor resource-folder="message" resource-name="conversation"></code-editor>
