---
title: Message Scroller
description: Message Scroller is the scrolling column of a conversation.
isNew: true
section: AI
---

It lays the messages out with the gap of a conversation and keeps the scroll inside itself, with a thin scrollbar. Sticking to the latest message while a reply streams in is behavior and belongs to the script that owns the list. `__jump` is the button that goes back to the latest message, pinned to the bottom edge without taking room in the column; the script hides it with `hidden` while the reader is at the bottom. `vv-message-scroller--fade` dissolves the top and bottom edges into the surface. Give the column `role="log"` and `aria-live="polite"` so new messages are announced.

<code-editor resource-folder="message-scroller" resource-name="default"></code-editor>
