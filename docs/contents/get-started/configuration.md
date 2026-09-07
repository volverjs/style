---
index: 2
label: Configuration
title: Define your Preferences
description: Specificity, custom properties and components names can be configured as you want.
---

### Specificity
By design Volver Style has zero specificity. This means that you can easily overwrite the style of any component or utility class without `!important` or complex selector filters.

In some circumstances you may want to increase the specificity of components or utilities. For example, if you want to use Volver Style in a CMS or a framework that already has its own style or if you want to use Volver Style in a legacy project.

An other reason could be to avoid the change of components style with utilities.

You can configure the specificity of components and utilities by setting the `$zero-specificity-for-components` and the `$zero-specificity-for-utilities` variables.

```scss
@use '@volverjs/style/scss/context' with (
  // disable zero specificity for components
  $zero-specificity-for-components: false,
  // enable zero specificity for utilities
  $zero-specificity-for-utilities: true
);
@use '@volverjs/style/scss';
```


### CSS Custom Properties
By default every component attribute is defined by a *CSS Custom Property* so it can be overwritten easily. If you want to disable this feature you can set the `$use-custom-props-for-components` variable to `false`.

```scss
@use '@volverjs/style/scss/context' with (
  // disable custom properties for components
  $use-custom-props-for-components: false
);
@use '@volverjs/style/scss';
```

### Components Names
By default all components are defined with [BEM](https://getbem.com/) methodology and the they have a `vv-` prefix. If you want to change the prefix you can set the `$components-prefix` variable.

```scss
@use '@volverjs/style/scss/context' with (
  // custom components prefix
  $components-prefix: my
);
@use '@volverjs/style/scss';

// now all components have a `my-` prefix
// example: my-button, my-button--primary, my-button__icon
```

If you want a completely different name for a component you can set the `$components-names` variable.

```scss
@use 'sass:map';

// import default settings, functions and mixins
@use '@volverjs/style/scss/context';

// override components names
context.$components-names: map.deep-merge(
  context.$components-names,
  (
    // change button name
    vv-button: 'btn'
  )
);
@use '@volverjs/style/scss';

// now vv-button class is btn
// example: btn, btn--primary, btn__icon
```

### CSS Layers

CSS `@layer` is a modern CSS feature that allows you to define the order of cascade for your styles. This is useful to avoid specificity conflicts and to make your styles more predictable.

By default Volver Style doesn't use CSS layers. If you want to enable them you can set the `$use-css-layers` variable to `true`.

```scss
@use '@volverjs/style/scss/context' with (
  // enable CSS layers
  $use-css-layers: true
);
@use '@volverjs/style/scss';
```

When enabled, Volver Style will wrap all styles in layers with this order (from lowest to highest priority):

1. `reset` - CSS reset styles
2. `preflight` - Volver preflight/normalization styles  
3. `props` - CSS custom properties
4. `components` - Component styles
5. `themes` - Theme overrides (dark mode, etc.)
6. `utilities` - Utility classes (highest priority)

The layers are prefixed with `volver.` by default, so the full layer names are: `volver.reset`, `volver.preflight`, `volver.props`, etc.

#### Customizing Layer Order

You can customize the layer order and prefix:

```scss
@use '@volverjs/style/scss/context' with (
  $use-css-layers: true,
  // custom layer order (later = higher priority)
  $layer-order: (reset, preflight, props, components, themes, utilities),
  // custom layer prefix
  $layer-prefix: 'my-app'
);
@use '@volverjs/style/scss';

// layers will be: my-app.reset, my-app.preflight, my-app.props, etc.
```

#### Browser Support

CSS `@layer` is supported in all modern browsers (Chrome 99+, Firefox 97+, Safari 15.4+, Edge 99+). For older browsers, you may need to disable this feature or use a polyfill.

### Writing Direction

CSS has logical properties for the box: `inset-inline`, `padding-inline` and
`margin-inline` follow the writing direction, and the library uses them
throughout. It has none for `translate`, `rotate` or `scale`, so a component
that moves an element along the inline axis cannot express the movement
logically.

`--direction` carries the sign of that axis. It is `1` where the inline axis
runs left to right and `-1` where it runs the other way, and a declaration
multiplies its offset by it:

```scss
// slides in from the inline start, whichever side that is
[translate]: calc(-100% * var(--direction, 1)),
```

The token is declared on the `dir` attribute, so it follows the document and
also an island that sets its own direction:

```html
<html lang="ar" dir="rtl">
  <!-- everything here moves toward the left -->
  <div dir="ltr">
    <!-- and everything here moves toward the right again -->
  </div>
</html>
```

Set `dir` on `<html>` for the whole document. Without it the token stays `1`,
which is what a left-to-right document needs, and every declaration reading it
passes a `1` fallback, so a cherry-picked component keeps its movement even
without `props/layout`.

#### Writing a Direction-Aware Component

Reach for the token whenever a value would otherwise name a physical side.
Because a `var()` inside a custom property is substituted where that property is
declared, the declaration has to be written in brackets so that it is emitted
plainly instead of being wrapped in a generated `--vv-*` property. Wrapped, it
would read the token at the `:root` and freeze it there, and an island of the
other direction would not turn.

```scss
$my-drawer: (
  position: fixed,
  inset-inline: auto 0,
  // plain declaration: --direction is read on the element
  [translate]: calc(100% * var(--direction, 1)),
);
```

An arrow or a glyph that points sideways is mirrored rather than offset, which
`scale` does in one declaration:

```scss
[scale]: var(--direction, 1) 1,
```

A `rotate` on the block axis, and a `translate` on it, are the same in both
directions and need nothing.
