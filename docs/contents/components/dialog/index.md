---
title: Dialog
description: Dialog is a container to display content in an overlay window.
uiVue: true
---

A `<dialog class="vv-dialog">` is the backdrop, and the panel is the `article.vv-dialog__wrapper` inside it, which the dialog needs: a `__header` with the title and a `__close` button, a `__content` and a `__footer`. Name the dialog with `aria-labelledby` pointing to its title.

`vv-dialog--small` and `vv-dialog--fullscreen` change the size. The drawers dock the panel to a side of the viewport: `vv-dialog--drawer` at the inline end, `--drawer-start`, `--drawer-top` and `--drawer-bottom`. The `fade-*`, `scale` and `slide-*` classes are the enter and leave classes of a Vue `<Transition>` of the same name: pair each drawer with the slide from its side, `slide-inline-end` for `drawer`, `slide-inline-start` for `drawer-start`, `slide-block-start` for `drawer-top` and `slide-block-end` for `drawer-bottom`.

<code-editor resource-folder="dialog" resource-name="example"></code-editor>
