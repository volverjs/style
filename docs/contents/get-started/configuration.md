---
index: 2
label: Configuration
title: Define your Preferences
description: Specificity, custom properties and components names can be configured as you want.
---

### Specificity
By design Volver Style has zero specificity. This means that you can easily overwrite the style of any component or utility class without `!important` or complex selector filters.

In some circumstances you may want to increase the specificity of components or utilities. For example, if you want to use Volver Style in a CMS or a framework that already has its own style or if you want to use Volver Style in a legacy project.

Another reason could be to keep utilities from changing the style of components.

You can configure the specificity of components and utilities by setting the `$zero-specificity-for-components` and the `$zero-specificity-for-utilities` variables.

```scss
@use '@volverjs/style/scss/context' with (
  // disable zero specificity for components
  $zero-specificity-for-components: false,
  // keep zero specificity for utilities (the default)
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

### Color Shades
The shades of every color (`--color-brand-lighten-1`, `--color-surface-2`, ...) are computed in the browser from a single base token with CSS Relative Color Syntax, so overriding `--color-brand` recolors all of them. It needs Chrome 119, Safari 16.4 or Firefox 128. For older browsers set `$use-color-mix` to `false`: the shades are then computed from three channel tokens, `--color-brand-hue`, `--color-brand-saturation` and `--color-brand-lightness`, which are the ones to override.

```scss
@use '@volverjs/style/scss/context' with (
  // legacy HSL channels instead of relative color syntax
  $use-color-mix: false
);
@use '@volverjs/style/scss';
```

### Components Names
By default all components are defined with [BEM](https://getbem.com/) methodology and they have a `vv-` prefix. If you want to change the prefix you can set the `$components-prefix` variable.

```scss
@use '@volverjs/style/scss/context' with (
  // custom components prefix
  $components-prefix: my
);
@use '@volverjs/style/scss';

// now all components have a `my-` prefix
// example: my-button, my-button--primary, my-button__icon
// and so do their custom properties: --my-button-background
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
// and its custom properties: --btn-background
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

1. `reset`: CSS reset styles
2. `preflight`: reserved, since the [Preflight](/style/get-started/preflight) rules are emitted inside `components` and `utilities`
3. `props`: CSS custom properties
4. `components`: component styles
5. `themes`: theme overrides (dark mode, etc.)
6. `utilities`: utility classes (highest priority)

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

### Custom Media

Volver Style has a set of [custom media queries](https://drafts.csswg.org/mediaqueries-5/#custom-mq) that name a user preference, a kind of pointer or a breakpoint range: `--motion-ok`, `--os-dark`, `--high-contrast`, `--touch`, `--mouse`, `--md-only` and more. `@custom-media` is still a draft, so the queries work only in a pipeline that replaces them with their definition at build time.

For this reason `@volverjs/style/scss` does not emit them. Import `scss/props/media` in the stylesheet that uses them, after the context and after its `with (...)` if you configure one, so that the breakpoint ranges follow your `$breakpoints`. The configuration has to reach that compilation: the `<style>` block of a component is compiled on its own, and without a `with (...)` of its own it gets the default breakpoints.

```scss
@use '@volverjs/style/scss/context';
@use '@volverjs/style/scss/props/media';

@media (--motion-ok) {
  .card {
    transition: transform 0.2s;
  }
}
```

Then let your pipeline resolve them, with [postcss-custom-media](https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-custom-media) (also part of `postcss-preset-env`) or with Lightning CSS:

```js
// vite.config.js
export default defineConfig({
  css: {
    transformer: 'lightningcss',
    lightningcss: {
      drafts: { customMedia: true },
    },
  },
})
```

Both read the definitions of the file they are transforming, so every stylesheet that uses a query imports the module, the `<style>` block of a component included. The PostCSS configuration of this repository resolves them for its own `dist/` only and is not published, so the resolver has to be configured in your project. Lightning CSS resolves them when `drafts.customMedia` is on and it has `targets`: Vite sets the targets for its `lightningcss` transformer and for its minifier, so `drafts.customMedia` on the default transformer resolves them in the production build but not in development. Without a resolver a query matches nothing, in development and in production, and the minifier warns about every `@custom-media` rule.

The breakpoint ranges cover the same widths as the `bp-only`, `bp-up` and `bp-down` [mixins](/style/settings/breakpoints): with the default breakpoints `--md-only` is `992px <= width < 1024px`, `--md-n-above` is `width >= 992px` and `--md-n-below` is `width < 1024px`. The mixins emit plain media queries and need no build step.

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
