[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=volverjs_style&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=volverjs_style) [![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=volverjs_style&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=volverjs_style) [![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=volverjs_style&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=volverjs_style) [![Depfu](https://badges.depfu.com/badges/bb76a99db33bb40379950c71c172e7da/status.svg)](https://depfu.com) [![Depfu](https://badges.depfu.com/badges/bb76a99db33bb40379950c71c172e7da/overview.svg)](https://depfu.com/github/volverjs/style?project_id=38570)

<div align="center">

[![volverjs](public/volverjs.svg)](https://volverjs.github.io/style)

## @volverjs/style

`backgrounds` `border` `colors` `aspect ratios` `typography`\
`easings` `animations` `sizes` `borders` `z-indexes` `media-queries`\
`layout` `spacing` `flexbox` `grid` `custom properties` `scss`

<br>

#### proudly powered by

<br>

[![8 Wave](public/8wave.svg)](https://8wave.it)

<br>

</div>

## Install

```bash
# pnpm
pnpm add @volverjs/style

# yarn
yarn add @volverjs/style

# npm 
npm install @volverjs/style --save
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

You can style utility-first (with [tailwindcss](https://tailwindcss.com) syntax) or use components (*vv-\** for ex. *vv-button*) written with [BEM](http://getbem.com/introduction/).

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
