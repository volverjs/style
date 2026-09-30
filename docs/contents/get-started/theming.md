---
index: 3
label: Theming
title: Multiple Colors
description: Volver Style offers color themes for components and utilities based on user color scheme preferences or design requirements.
---

### Add Dark theme

You can load the theme file *CSS* after the main one.

```css
@import '@volverjs/style';
@import '@volverjs/style/themes/dark';
```

Same as for the *SCSS* source.

```scss
@use '@volverjs/style/scss';
@use '@volverjs/style/scss/themes/dark';
```

### Color Scheme

Dark theme will be automatically applied by `prefers-color-scheme` value.
The light or dark theme can be forced by the `theme--light` and `theme--dark` modifier classes, always together with the `theme` class, on the root element.

```html
<!-- light theme -->
<html lang="en" dir="ltr" class="theme theme--light">

<!-- dark theme -->
<html lang="en" dir="ltr" class="theme theme--dark">
```

#### Section Theme

A custom theme can also be defined inside a specific page section.

```html
<body>
  <section class="theme theme--light">
    Light Section 
  </section>
  <section class="theme theme--dark">
    Dark Section 
  </section>
</body>
```

### Component Coverage

The dark theme works in two layers:

1. **Color custom properties** are redefined for the dark scheme (see `src/themes/dark/props`). Because every component is styled through these tokens (`--color-surface`, `--color-word`, `--color-brand`, …), **all components adapt to the dark theme automatically** without a dedicated override.
2. **Explicit component overrides** are added only where the automatic token swap isn't enough (e.g. borders, shadows or contrast that need a different value in dark mode). These live in `src/themes/dark/components` and currently cover: `vv-alert`, `vv-avatar`, `vv-badge`, `vv-button`, `vv-checkbox`, `vv-dropdown-action`, `vv-dropdown-option`, `vv-nav`, `vv-radio` and `vv-select`.

### Customize the Dark Theme

The dark palette has its own SCSS variables: `$dark-color-word`, `$dark-color-surface` and `$dark-color-scheme` for the base colors, `$dark-color-surface-palette` and `$dark-colors` for the whole palette. Configure them on the dark settings, between the context and the library:

```scss
@use '@volverjs/style/scss/context' with (
  $color-brand: #45cb85
);
@use '@volverjs/style/scss/themes/dark/settings' with (
  $dark-color-surface: #101418
);
@use '@volverjs/style/scss';
@use '@volverjs/style/scss/themes/dark';
```

The dark overrides of a component are the `$dark-vv-*` maps of the same settings (`$dark-vv-button`, `$dark-vv-select`, ...), which can be changed with `map.deep-merge` like the maps of the light theme. Without custom properties (`$use-custom-props-for-components: false`) they are emitted as their own rules; with them, they reassign the `--vv-*` properties the light rules read.

Inside the library repository, a component that needs dark overrides of its own gets a file under `src/themes/dark/settings/components`, forwarded by `src/themes/dark/settings/_index.scss`, and an entry in `src/themes/dark/components`, registered in its `index.scss`.
