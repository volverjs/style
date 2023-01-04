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
