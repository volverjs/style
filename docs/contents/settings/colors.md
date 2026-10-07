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
_Contrast colors_ are the text that goes on a filled color. Each of brand, accent, success, danger, info and warning has one, `--color-brand-contrast` and so on: pure white or pure black, whichever gives the text the higher WCAG contrast ratio on the base color, so never less than 4.58:1. It is computed in CSS, so it follows the color when it changes at runtime. Buttons, badges, avatars, notification headers and the switch use it, and the `text-*-contrast` classes expose it.

<card-example title="Contrast Colors">
  <div class="grid sm:grid-cols-2 gap-sm font-mono text-14">
    <div v-for="name in ['brand', 'accent', 'success', 'danger', 'info', 'warning']" class="flex flex-col rounded overflow-hidden">
      <div :class="`bg-${name} text-${name}-contrast`" class="px-sm py-sm">{{name}}-contrast</div>
      <div :class="`bg-${name}-darken-1 text-${name}-darken-1-contrast`" class="px-sm py-sm">{{name}}-darken-1-contrast</div>
      <div :class="`bg-${name}-darken-2 text-${name}-darken-2-contrast`" class="px-sm py-sm">{{name}}-darken-2-contrast</div>
    </div>
  </div>
</card-example>

Every darker shade has its own, `--color-brand-darken-1-contrast` to `--color-brand-darken-5-contrast`, chosen on that shade. A component takes the one of the shade it paints: the hovered button takes `darken-1`, the active and pressed one `darken-2`, the warning badge `warning-darken-5`. A color near the threshold can therefore take black at rest and white on its darker states, as `#9365ff` does, black at 5.55:1 and white at 5.20:1 on hover. Gray has no contrast token: the components fill with its dark shades, which always take white.

Next to it, the base and every darker shade have a _cover_, `--color-brand-cover`, `--color-brand-darken-1-cover` and so on: the shade itself where its contrast text turns dark, transparent where it stays white. The button lays it over its dark emboss, which suits light text only, so the emboss disappears under dark text; each state lays the cover of the shade it paints. Covers have no utility classes.

### Readable Colors
_Readable colors_ are a color written as text. Each of brand, accent, success, danger, info and warning has three, one per background the text can sit on:

- `--color-brand-readable`, on the neutral surfaces, `--color-surface` to `--color-surface-2`: links, outlined and ghost badges, tabs, the hints of the fields;
- `--color-brand-readable-strong`, a step further from the surface: a pressed link, the current crumb;
- `--color-surface-brand-readable`, on the tinted surface of the color, `--color-surface-brand`: the headers and icons of alerts, ring avatars, selected dropdown options.

Each one is the color itself while it reads at 4.6:1, and the color moved just far enough otherwise. It is computed in CSS, so it follows the color when it changes at runtime. In the light theme the color is darkened. In the dark theme it is brightened with its chromaticity kept as far as the screen can show it, and only what is left is mixed with white: a dark brand comes out vivid rather than greyish, and a light brand is left as it is. `--color-brand-readable-strong` is `--color-brand-readable` with its luminance halved in the light theme, and raised by half in the dark one. The dark theme redeclares the three, so a component writes the same token in both themes. The `text-*-readable` classes expose them.

<card-example title="Readable Colors">
  <div class="grid sm:grid-cols-2 gap-sm font-mono text-14">
    <div v-for="name in ['brand', 'accent', 'success', 'danger', 'info', 'warning']" class="flex flex-col rounded border border-surface-3 overflow-hidden">
      <div :class="`text-${name}-readable`" class="px-sm py-sm">{{name}}-readable</div>
      <div :class="`text-${name}-readable-strong`" class="px-sm py-sm">{{name}}-readable-strong</div>
      <div :class="`bg-surface-${name} text-surface-${name}-readable`" class="px-sm py-sm">surface-{{name}}-readable</div>
    </div>
  </div>
</card-example>

The ratio is kept on the neutral surfaces down to `--color-surface-2`, a hovered row or a pressed action, and on the tinted surfaces, in both cases against the hardest hue. The neutrals take their hue from `--color-tint` and a tinted surface from its color, and both can change at runtime, so the bound holds whatever color is set, at the price of a text a little further from the surface than the compiled colors alone would need. The bounds themselves are fixed at compile time: a `--color-surface` overridden at runtime does not move them, and a region that turns dark takes the `theme theme--dark` classes. The roles assume an opaque color: with a translucent one, `#9365ff80`, the page shows through the text and the tinted surfaces, and no ratio holds any more, as the check below shows.

```scss
@use '@volverjs/style/scss/context' with (
	// the contrast ratio the roles keep
	$color-readable-ratio: 4.6,
	// the deepest neutral surface they read on, --color-surface-2
	$color-readable-depth: 2,
	// the luminance step of readable-strong, $dark-color-readable-strong-factor
	// (1.5) in the dark theme
	$color-readable-strong-factor: 0.5
);
```

Without `$use-color-mix`, which emits no relative color syntax, a role is the first shade of the color that reads on the compiled surface, chosen at compile time.

The hints and the labels of the fields take `--input-valid-text-color` and `--input-invalid-text-color`, which are `--color-success-readable` and `--color-danger-readable`, while `--input-valid-color` and `--input-invalid-color` keep painting the bars and the borders. Overriding one of the colors needs its text token as well.

### Graphic Colors
_Graphic colors_ are a color that has to be seen but not read, a bar, a focus ring, a border that shows a state: the bar of `vv-progress` and the focus rings of the components take them. Each of brand, accent, success, danger, info and warning has one, `--color-brand-graphic`, built like the readable ones on the same neutral surfaces, for the 3:1 that WCAG asks of graphics and of the parts of a control that show its state, 3.1:1 with the margin for the rounding. It stays closer to the color than a readable role: on a white surface `#f5c400` keeps `#aa8700` where its text takes `#876b00`, and the color itself while it is already seen, as the default brand is in the light theme. Change the ratio with `$color-graphic-ratio`. The `bg-`, `text-`, `border-` and `decoration-` classes expose it.

<card-example title="Graphic Colors">
  <div class="grid sm:grid-cols-2 xl:grid-cols-3 gap-sm font-mono text-14">
    <div v-for="name in ['brand', 'accent', 'success', 'danger', 'info', 'warning']" class="flex flex-col gap-xs px-sm py-sm rounded border border-surface-3">
      {{name}}-graphic
      <div class="h-8 rounded-full overflow-hidden bg-surface-2"><div :class="`bg-${name}-graphic`" class="h-8 w-3/5"></div></div>
    </div>
  </div>
</card-example>

### Check
The check below sets a color at runtime on a light and a dark region, the way a tenant brand is set, and measures each text and the graphic on its background in the browser you are reading this in.

<readable-check></readable-check>

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