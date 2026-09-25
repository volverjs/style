---
title: Command
description: Command is a palette that searches the commands of an application and runs one.
isNew: true
---

A search field over a list of commands grouped under headings, inline in a page or inside a [Dialog](/style/components/dialog). The field is the `combobox` and the list the `listbox`, each group a `role="group"` labelled by its heading: the option the keyboard is on carries `aria-selected="true"`, which the block reads, and a shortcut at the end of an option is a [Kbd](/style/components/kbd). Filtering and the keyboard belong to the script. When nothing matches, the list holds a single `vv-command__empty` item with `role="presentation"`. The lists of the groups carry no class, so inside a `.preflight` container wrap the block in `.preflight-revert`, or they are dressed as bulleted lists.

<code-editor resource-folder="command" resource-name="default"></code-editor>
