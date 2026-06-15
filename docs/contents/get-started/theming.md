---
index: 3
label: Theming
title: Multiple Colors 
description: Volver offer color themes for components and utilities based on user color scheme preferences or design requirements. 
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
The light or dark theme can be forced by the `theme--light` and `theme--dark` modifier classes on the root element.

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
2. **Explicit component overrides** are added only where the automatic token swap isn't enough (e.g. borders, shadows or contrast that need a different value in dark mode). These live in `src/themes/dark/components` and currently cover: `vv-alert`, `vv-avatar`, `vv-badge`, `vv-button`, `vv-dropdown-action`, `vv-dropdown-option`, `vv-nav` and `vv-select`.

If a component you customized doesn't look right in dark mode, add a matching file under `src/themes/dark/settings/components` and register it in `src/themes/dark/components/index.scss`.
