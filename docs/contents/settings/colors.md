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

### Alpha Colors
_Alpha colors_ are translucent layers of black, from `--color-alpha` (fully transparent) to `--color-alpha-5`. They darken whatever surface they sit on, so they suit hover layers and hairlines that have to work on any background (`bg-alpha-1`, `border-alpha-1`).

<color-palette name="alpha"></color-palette>

The palette also holds `--color-black`, `--color-white`, `--color-transparent`, `--color-shadow`, the tint of the shadows, and `--color-backdrop`, the veil behind a dialog.

### Contrast Colors
_Contrast colors_ are the text that goes on a filled color. Each of brand, accent, success, danger, info and warning has one, `--color-brand-contrast` and so on: pure white or pure black, whichever gives the text the higher WCAG contrast ratio on the base color. It is computed in CSS, so it follows the color when it changes at runtime. Buttons, badges, avatars, notification headers and the switch use it, and the `text-*-contrast` classes expose it.

<card-example title="Contrast Colors">
  <div class="grid grid-cols-3 xl:grid-cols-6 text-center font-mono whitespace-nowrap text-14">
    <div v-for="name in ['brand', 'accent', 'success', 'danger', 'info', 'warning']" :class="`bg-${name} text-${name}-contrast`" class="py-22">{{name}}-contrast</div>
  </div>
</card-example>

The token reads the base color only. On a darker shade, such as the `warning-darken-5` that fills a warning badge, white is the right text whatever the color, and the components keep `--color-white` there. Gray has no contrast token: the components fill with its dark shades, which always take white.

Next to it, the base and every darker shade have a _cover_, `--color-brand-cover`, `--color-brand-darken-1-cover` and so on: the fill itself where the contrast text of the base color turns dark, transparent where it stays white. The button lays it over its dark emboss, which suits light text only, so the emboss disappears under dark text; each state lays the cover of the shade it paints. Covers have no utility classes.

### Readable Colors
_Readable colors_ are the shades of a color written as text on the surface. Every shade of brand, accent, success, danger, info and warning has one, `--color-brand-readable`, `--color-brand-darken-1-readable` and so on: the shade itself when it already reads, and otherwise the shade pushed just far enough from the surface for a contrast ratio of 4.6:1, darker in the light theme and lighter in the dark one. Links, outlined and ghost badges, tabs, breadcrumbs, the headers of alerts, the hints of the fields and the other components that write in a color use them, and the `text-*-readable` classes expose them.

<card-example title="Readable Colors">
  <div class="grid grid-cols-3 xl:grid-cols-6 text-center font-mono whitespace-nowrap text-14">
    <div v-for="name in ['brand', 'accent', 'success', 'danger', 'info', 'warning']" :class="`text-${name}-readable`" class="py-22">{{name}}-readable</div>
  </div>
</card-example>

The ratio is kept against the plain surface of the theme, `--color-surface`, as it is compiled. On a deeper or tinted surface, such as the `surface-brand` of an alert, the text reads lower: still darker than the shade it replaces, but not always at 4.5:1. Change the target with `$color-readable-ratio`. The bound it gives each theme is `--color-readable-luminance`, with `--color-readable-target` saying which way the shades are pushed, `0` toward black and `1` toward white: they are numbers fixed at compile time, so a `--color-surface` overridden at runtime does not move them, and a region that turns its surface dark has to set both, as the dark theme does.

The hints and the labels of the fields take `--input-valid-text-color` and `--input-invalid-text-color`, the readable form of `--input-valid-color` and `--input-invalid-color`, which keep painting the bars and the borders. Overriding the color moves both.

### Tint
_Gray_, _word_, _surface_, _shadow_ and _backdrop_ take their hue from `--color-tint`, which holds the light brand and is not redeclared by the dark theme. Set it next to the brand to move the neutrals at runtime too:

```css
@import '@volverjs/style';

:root, :host, .theme {
  --color-brand: #45cb85;
  --color-tint: #45cb85;
}
```

A neutral set in SCSS to a value other than its default (`$color-gray`, `$color-word`, ...) keeps that value and does not follow the tint; set to exactly its default, it is written relative to the tint like the default. `--color-tint` exists only with `$use-color-mix`, the default, and has no utility classes.

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

Color shades are generated using CSS Relative Color Syntax with two algorithms:

- **Proportional scaling** for brand, accent, success, danger, info, warning and gray: `calc(l * 1.1)` multiplies lightness
- **Fixed steps** for surface/word colors: `calc(l + 12)` adds to lightness

You can create custom shades:

```css
@import '@volverjs/style';

:root, :host, .theme {
  /* Surface uses fixed steps (addition/subtraction) */
  --color-surface-6: hsl(from var(--color-surface) h s calc(l - 12));
  
  /* Brand uses proportional scaling (multiplication) */
  --color-brand-lighten-6: hsl(from var(--color-brand) h s calc(l * 1.6));
}
```

The library declares the colors on `:root`, `:host` and every `.theme` element, the dark theme included, so set yours on the same selectors, or a themed section would fall back to the default. The dark theme runs its steps the other way, so a custom shade may need a dark counterpart. Override the base color to update all shades automatically:

```css
@import '@volverjs/style';

:root, :host, .theme {
  --color-brand: #45cb85;
}
```

### SCSS Variables
You can also use the color variables in your SCSS files. They are values fixed at compile time and do not follow the dark theme: prefer `var(--color-*)` wherever the value has to change with the theme.

```scss
@use '@volverjs/style/scss/context' as *;

body {
  background-color: $color-surface;
  color: $color-word;
}

```

Override the color variables to create the palette automatically: `$color-brand`, `$color-accent`, `$color-success`, `$color-danger`, `$color-info`, `$color-warning`, `$color-tint`, `$color-gray`, `$color-word`, `$color-surface`, `$color-shadow`, `$color-backdrop` and `$color-alpha`. `$color-tint` defaults to `$color-brand` and gives its hue to the neutrals that keep their default.

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
  context.$colors,
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