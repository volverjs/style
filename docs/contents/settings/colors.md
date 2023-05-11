---
index: 2
label: Colors
title: Color Palette
description: Volver Style includes a default color palette that can be used to style your site. You can also create your own color palette.
---

### Surface Colors
_Surface colors_ are used for backgrounds and borders. They are defined in the `--color-surface` CSS Custom Property and have 5 shades and 6 colors for each theme.

<card-example title="Surface Palette">
  <div class="grid grid-cols-3 xl:grid-cols-6 text-center font-mono whitespace-nowrap text-14">
    <div class="bg-surface py-22">surface</div>
    <div v-for="i in 5" :class="`bg-surface-${i}`" class="py-22">surface-{{i}}</div>
  </div>
  <div class="grid grid-cols-2 xl:grid-cols-3 text-center font-mono whitespace-nowrap text-14">
    <div class="bg-surface-brand py-22">surface-brand</div>
    <div class="bg-surface-success py-22">surface-success</div>
    <div class="bg-surface-warning py-22">surface-warning</div>
    <div class="bg-surface-danger py-22">surface-danger</div>
    <div class="bg-surface-info py-22">surface-info</div>
    <div class="bg-surface-accent py-22">surface-accent</div>
  </div>
</card-example>

<color-palette name="surface"></color-palette>

### Word Colors
_Word colors_ are used for text. They are defined in the `--color-word` CSS Custom Property and have 5 shades for each theme.

<card-example title="Word Palette">
  <div class="grid grid-cols-3 xl:grid-cols-6 text-center font-mono whitespace-nowrap text-14">
    <div class="text-word py-22">word</div>
    <div v-for="i in 5" :class="`text-word-${i}`" class="py-22">word-{{i}}</div>
  </div>
</card-example>

<color-palette name="word"></color-palette>

### Brand Colors
_Brand colors_ are used for primary actions. They are defined in the `--color-brand` CSS Custom Property and have 10 shades.

<color-palette name="brand"></color-palette>


### Success Colors
_Success colors_ are used for success actions. They are defined in the `--color-success` CSS Custom Property and have 10 shades.

<color-palette name="success"></color-palette>

### Warning Colors
_Warning colors_ are used for warning actions. They are defined in the `--color-warning` CSS Custom Property and have 10 shades.

<color-palette name="warning"></color-palette>

### Danger Colors
_Danger colors_ are used for danger actions. They are defined in the `--color-danger` CSS Custom Property and have 10 shades.

<color-palette name="danger"></color-palette>

### Info Colors
_Info colors_ are used for info actions. They are defined in the `--color-info` CSS Custom Property and have 10 shades.

<color-palette name="info"></color-palette>

### Accent Colors
_Accent colors_ are used for accent actions. They are defined in the `--color-accent` CSS Custom Property and have 10 shades.

<color-palette name="accent"></color-palette>

### Gray Colors
_Gray colors_ are used for neutral actions. They are defined in the `--color-gray` CSS Custom Property and have 10 shades.

<color-palette name="gray"></color-palette>

### Class Names
You can also use the color class names to style your site, `bg-*` for background, `text-*` for text color and `border-*` for border color.

```html
<div class="bg-surface">
  <p class="text-word">This is a paragraph</p>
</div>
```

### CSS Custom Properties
Colors are defined as CSS Custom Properties. You can use them in your css files to style your site.

```css
@import '@volverjs/style';

body {
  background-color: var(--color-surface);
  color: var(--color-word);
}
```

Colors properties are splitted in hue, saturation and lightness. You can use them to create your own shades.

```css
@import '@volverjs/style';

:root {
  --color-surface-6: hsl(var(--color-surface-hue), var(--color-surface-saturation), 86%);
}
```

Overriding hue, saturation and lightness properties you can create your own color palette.

```css
@import '@volverjs/style';

:root {
  --color-brand-hue: 149deg;
  --color-brand-saturation: 56%;
  --color-brand-lightness: 53%;
}
```

### SCSS Variables
You can also use the color variables in your SCSS files.

```scss
@use '@volverjs/style/scss/context'

body {
  background-color: $color-surface;
  color: $color-word;
}

```

Override the color variables to create the palette automatically.

```scss
@use '@volverjs/style/scss/context' with (
	$color-brand: #45cb85
);

@use '@volverjs/style/scss';
```

Or you can create your own color palette.

```scss
@use 'sass:map';
@use '@volverjs/style/scss/context';

context.$colors: map.deep-merge(
  contex.$colors,
  (
    brand: (
      brand: #45cb85,
      lighten-1: #5edc9f,
      lighten-2: #75ecb9,
    )
  )
);

@use '@volverjs/style/scss';
```