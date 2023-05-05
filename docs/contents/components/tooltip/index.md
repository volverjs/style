---
title: Tooltip
description: Tooltips are floating labels that briefly explain the function of a user interface element.
isNew: false
---

<div class="vv-alert vv-alert--callout vv-alert--warning mb-lg">
    <div class="vv-alert__header">
      <div class="vv-alert__title">Warning</div>
    </div>
    <div class="vv-alert__content">
        Tooltip currently does not working properly on Firefox for lack of <code>:has()</code> support.
        <div class="mt-sm">
            <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=418039" target="_blank" rel="noopener noreferrer" class="vv-button vv-button--action">
                <iconify-icon icon="akar-icons:bug" class="text-middle"></iconify-icon>
                Bugzilla <span class="vv-badge vv-badge--sm vv-badge--warning">#418039</span>
            </a>
        </div>
    </div>
</div>

### Parent element
Use tooltips to provide additional information about an element. They are triggered by hovering over or focusing an element.

<code-editor resource-folder="tooltip" resource-name="elements" class="mb-lg"></code-editor>

### Positioning
Add `vv-tooltip--top`, `vv-tooltip--bottom`, or `vv-tooltip--left` to change the tooltip position.

<code-editor resource-folder="tooltip" resource-name="position" class="mb-lg"></code-editor>