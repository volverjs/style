---
title: Bubble
description: Bubble is the surface of a message in a conversation.
isNew: true
---

The corner on the side of the speaker is tighter, a tail at the last line. `vv-bubble--end` is a bubble of the one reading, filled, with the tail on the inline end, and `vv-bubble--plain` has no surface at all. The colours are tokens read with a fallback and never declared on the block: `--bubble-background`, `--bubble-color` and `--bubble-border-color` for the other side, `--bubble-end-background`, `--bubble-end-color` and `--bubble-end-border-color` for the one reading. Set on the conversation, one declaration paints every bubble of that side in the colour of a product. `__reactions` hang over the bottom edge, and `vv-bubble--reacted` leaves room for them.

<code-editor resource-folder="bubble" resource-name="default" class="mb-lg"></code-editor>

### Group
Consecutive bubbles of one speaker go in a `vv-bubble-group`, which stacks them close and joins them on the side of the speaker, the first keeping a round top; `vv-bubble-group--end` groups the bubbles of the one reading. Importing the components one by one, load `vv-bubble` before `vv-bubble-group`.

<code-editor resource-folder="bubble" resource-name="group"></code-editor>
