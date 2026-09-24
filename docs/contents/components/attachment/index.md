---
title: Attachment
description: Attachment is a file or an image attached to a message or waiting in a composer.
isNew: true
---

A tile with a `__media` (the icon of the kind of file, or a thumbnail), a `__content` with a `__title` and a `__description`, optional `__actions`, and an optional `__remove` button over the top corner. `vv-attachment--image` shows a picture whole with the caption under it, `vv-attachment--invalid` is an upload that failed and `vv-attachment--loading` dims the media while a spinner turns in it. A row of them is a `vv-attachment-group`, which leaves room above for the remove buttons.

<code-editor resource-folder="attachment" resource-name="default"></code-editor>
