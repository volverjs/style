---
index: 4
label: Preflight
title: Default Style without Classes
description: Style semantic native HTML tags and keep the markup simple. The perfect companion for Markdown generated templates, WYSIWYG or rich text editors.
---

### Usage
*Preflight* is already included in the compiled `@volverjs/style` *CSS* and in the default *SCSS* export, not in the cherry-picked files. To use *Preflight* just add `preflight` class to the wrapper element.

```html
<div class="preflight">
  ...
</div>
```

### Specificity
Preflight dresses bare tags with a specificity of (0,1,0), above the zero specificity of the utilities and the components. So on a bare tag inside `.preflight` it wins over a utility: an `<h2 class="text-34">` keeps the size of an `h2`. An element that carries a component class (`vv-*`) is left to its component, and so is everything inside `.vv-prose` or `.preflight-revert`. A bare child that a component reaches only through a plain tag selector, such as a `<button>` written without its class inside a badge, is still dressed: give it its element class or wrap the block in `.preflight-revert`.

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

With `$use-css-layers: true`, declare the order of the layers before anything else, as the full build does, or the browser orders them by first appearance. The order comes from a mixin of the context, so it lives in a file of its own:

```scss
// _layers.scss
@use '@volverjs/style/scss/context' as *;
@include define-layers($use-css-layers, $layer-order, $layer-prefix);
```

```scss
@use '@volverjs/style/scss/context' with ($use-css-layers: true);
@use 'layers';
@use '@volverjs/style/scss/base';
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