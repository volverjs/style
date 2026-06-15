<div align="center">

[![volverjs](public/volverjs-style.svg)](https://volverjs.github.io/style)

## @volverjs/style

`backgrounds` `border` `colors` `aspect ratios` `typography`\
`easings` `animations` `sizes` `borders` `z-indexes` `media-queries`\
`layout` `spacing` `flexbox` `grid` `custom properties` `scss`
  
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=volverjs_style&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=volverjs_style) [![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=volverjs_style&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=volverjs_style) [![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=volverjs_style&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=volverjs_style) [![Depfu](https://badges.depfu.com/badges/bb76a99db33bb40379950c71c172e7da/status.svg)](https://depfu.com) [![Depfu](https://badges.depfu.com/badges/bb76a99db33bb40379950c71c172e7da/overview.svg)](https://depfu.com/github/volverjs/style?project_id=38570)

<br>

maintained with ❤️ by

<br>

[![8 wave](public/8wave.svg)](https://8wave.it)

<br>

</div>

## Install

```bash
# pnpm
pnpm add @volverjs/style

# yarn
yarn add @volverjs/style

# npm 
npm i -s @volverjs/style
```

## Usage

```scss
/* css */
@import '@volverjs/style';

/* scss */
@use '@volverjs/style/scss';
```

or cherry pick what you want

```scss
/* css */
@import '@volverjs/style/reset';
@import '@volverjs/style/props/layout';
@import '@volverjs/style/utilities/layout';
@import '@volverjs/style/components/vv-button';

/* scss */
@use '@volverjs/style/scss/reset';
@use '@volverjs/style/scss/props/layout';
@use '@volverjs/style/scss/utilities/layout';
@use '@volverjs/style/scss/components/vv-button';
```

## Principles

### 👌 Zero Specificity

Everything is defined with *:where()* so you can override all definitions easily.

### 🎨 Custom properties

All attributes have a [custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) (CSS variables) for easy theming.

### 😱 Utility-first + BEM

You can style utility-first (with [tailwindcss](https://tailwindcss.com) syntax) and use components (*vv-\** for ex. *vv-button*) written with [BEM](http://getbem.com/introduction/).

## Basic personalization

### Custom props

```css
@import '@volverjs/style';
@import url('https://fonts.googleapis.com/css2?family=Open+Sans');

:root {
  /* custom color brand */
  --color-brand-hue: 149deg;
  --color-brand-saturation: 56%;
  --color-brand-lightness: 53%;

  /* custom font sans */
  --font-sans: 'Open Sans', sans-serif;
}
```

### SCSS

```scss
@use '@volverjs/style/scss/context' with (
  // custom color brand 
  $color-brand: #45cb85,
  //custom font sans
  $font-family-sans: 'Open Sans', sans-serif
);
@use '@volverjs/style/scss';

@import url('https://fonts.googleapis.com/css2?family=Open+Sans');
```

### Relative Color Syntax Mode

By default, `@volverjs/style` uses CSS Relative Color Syntax for generating color shades. This reduces the number of CSS variables and improves browser DevTools performance.

```scss
@use '@volverjs/style/scss/context' with (
  // Enable/disable Relative Color Syntax mode (default: true)
  $use-color-mix: true
);
@use '@volverjs/style/scss';
```

With this mode enabled, color shades are generated using:
```css
/* Brand colors use proportional scaling (multiplication) */
--color-brand-lighten-1: hsl(from var(--color-brand) h s calc(l * 1.1));
--color-brand-darken-1: hsl(from var(--color-brand) h s calc(l * 0.9));

/* Surface/word colors use fixed steps (addition) */
--color-surface-1: hsl(from var(--color-surface) h s calc(l - 2));
--color-word-1: hsl(from var(--color-word) h s calc(l + 12));
```

To use the legacy HSL-based system with separate hue/saturation/lightness variables:
```scss
@use '@volverjs/style/scss/context' with (
  $use-color-mix: false
);
```

## Deep override

All components are written through SCSS maps.
Root attributes style the component, submaps *state*, *element*, and *modifier* generates BEM selectors.

```scss
@use 'sass:map';
// import volverjs default settings, functions and mixins
@use '@volverjs/style/scss/context';

// override vv-button map
context.$vv-button: map.deep-merge(
  context.$vv-button,
  (
    // change default button background
    background: #ddd,
    state: (
      hover: (
        // change default button background on hover
        background: #aaa
      )
    ),
    modifier: (
      // add a custom modifier
      my-error: (
        background: red
      )
    )
  )
);

// import volverjs style
@use '@volverjs/style/scss';
```

```html
<button type="button" class="vv-button vv-button--my-error">Error</button>
```

## Documentation
To learn more about `@volverjs/style`, check [its documentation](https://volverjs.github.io/style).

## License
[MIT](http://opensource.org/licenses/MIT)
