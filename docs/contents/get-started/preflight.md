---
index: 4
label: Preflight
title: Default Style without Classes
description: Use native HTML tags semantic keeping the code simple. The perfect companion for Markdown generated templates, WYSIWYG or rich text editors.
---

### Usage
*Preflight* is already included in compliled *CSS*. In a custom build keep preflight import at the end. 

```scss
@use '@volverjs/style/scss/reset';
@use '@volverjs/style/scss/props';
@use '@volverjs/style/scss/components';
@use '@volverjs/style/scss/utilities';
/* keep at the end */
@import '@volverjs/style/scss/preflight';
```

To use *Preflight* just add `preflight` class to the wrapper element.

```html
<div class="preflight">
  ...
</div>
```

<div class="vv-alert vv-alert--callout vv-alert--warning mb-lg">
  <div class="vv-alert__header">
    <div class="vv-alert__title">Warning</div>
  </div>
  <div class="vv-alert__content">
      Preflight form currently does not working properly on Firefox for lack of <code>:has()</code> support.
    <div class="mt-sm">
      <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=418039" target="_blank" rel="noopener noreferrer" class="vv-button vv-button--action">
        <iconify-icon icon="akar-icons:bug" class="text-middle"></iconify-icon>
        Bugzilla <span class="vv-badge vv-badge--sm vv-badge--warning">#418039</span>
      </a>
    </div>
  </div>
</div>

### Form fields

<code-editor resource-type="get-started" resource-folder="examples" resource-name="preflight-form" class="mb-lg">
</code-editor>

### Typography
<code-editor resource-type="get-started" resource-folder="examples" resource-name="preflight-typography" class="mb-lg">
</code-editor>

### Buttons
<code-editor resource-type="get-started" resource-folder="examples" resource-name="preflight-buttons" class="mb-lg">
</code-editor>

### Tables
<code-editor resource-type="get-started" resource-folder="examples" resource-name="preflight-table">
</code-editor>