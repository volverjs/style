---
title: Avatar
description: Avatar is the picture, the initials or the icon that stands for a person or an entity.
uiVue: true
---

### Wrappers
You can use the following wrappers to display an avatar.

<code-editor resource-folder="avatar" resource-name="wrappers" class="mb-lg"></code-editor>

### Rounded
Add `vv-avatar--rounded` to display a rounded avatar.

<code-editor resource-folder="avatar" resource-name="rounded" class="mb-lg"></code-editor>

### Square
Add `vv-avatar--square` to display a square avatar.

<code-editor resource-folder="avatar" resource-name="square" class="mb-lg"></code-editor>

### Colors
Add `vv-avatar--{color}` to display a colored avatar: `accent`, `success`, `danger`, `warning`, `info` or `gray`. `vv-avatar--surface` takes the surface of the page and `vv-avatar--transparent` has no background at all. An avatar that is only a picture needs no role; one made of initials takes `role="img"` and an `aria-label` with the name.

<code-editor resource-folder="avatar" resource-name="colors" class="mb-lg"></code-editor>

### Bordered
Add `vv-avatar--bordered` to display a bordered avatar.

<code-editor resource-folder="avatar" resource-name="bordered" class="mb-lg"></code-editor>

### Ring
Add `vv-avatar--ring` to display a ring avatar.

<code-editor resource-folder="avatar" resource-name="ring" class="mb-lg"></code-editor>

### Sizes
Add `vv-avatar--md` or `vv-avatar--lg` modifiers to display an avatar in different sizes.

<code-editor resource-folder="avatar" resource-name="sizing"></code-editor>

### Badge
You can use the `vv-badge` component to display a badge on an avatar: a `<sup>` sits at the top end and a `<sub>` at the bottom end. An empty badge is drawn as a dot, so write it with nothing inside, not even a space.

<code-editor resource-folder="avatar" resource-name="badge" class="mb-lg"></code-editor>

### Group
You can use the `vv-avatar-group` component to display a group of overlapping avatars. `vv-avatar-group--tight` overlaps them more and `vv-avatar-group--relaxed` less.

<code-editor resource-folder="avatar" resource-name="group" class="mb-lg"></code-editor>