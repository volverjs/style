---
index: 4
label: Preflight
title: Default Style without Classes
description: Use native HTML tags semantic keeping the code simple. The perfect companion for Markdown generated templates, WYSIWYG or rich text editors.
---

### Usage
*Preflight* is already included in compliled *CSS* and default *SCSS* export. To use *Preflight* just add `preflight` class to the wrapper element.

```html
<div class="preflight">
  ...
</div>
```

### Disable Preflight
To disable *Preflight* in a section of your page you can use the `preflight-revert` class.

```html
<div class="preflight">
  ...
  <div class="preflight-revert">
    ...
  </div>
</div>
```

To completely disable *Preflight* just set the `$preflight` variable to `false`.

```scss
// disable preflight
@use '@volverjs/style/scss/context' with (
  $preflight: false
);

@use '@volverjs/style/scss';
```

### Custom Build
In a custom build `components` and `utilities` scss modules are included in `preflight` *SCSS* module.

```scss
// reset and custom properties
@use '@volverjs/style/scss/base';
// components and utilities are included in preflight
@use '@volverjs/style/scss/preflight';
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