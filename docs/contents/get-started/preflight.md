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