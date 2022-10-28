<div align="center">
  
[![volverjs](public/volverjs.svg)](https://volverjs.github.io/style)

## @volverjs/style

`backgrounds` `border` `colors` `aspect ratios` `typography`  
`easings` `animations` `sizes` `borders` `z-indexes` `media-queries`
`layout` `spacing` `flexbox` `grid` `custom properties` `scss`

<br>

#### proudly powered by

<br>

[![24/Consulting](public/24consulting.svg)](https://24consulting.it)

<br>

</div>

## Install

```
$ npm i -s @volverjs/style
```

## Usage

```scss
/* css */
@import '@volverjs/style';

/* scss */
@import '@volverjs/style/scss';
```

or cherry pick what you want

```scss
/* css */
@import '@volverjs/style/reset';
@import '@volverjs/style/props/layout';
@import '@volverjs/style/utilities/layout';
@import '@volverjs/style/components/vv-button';

/* scss */
@import '@volverjs/style/scss/reset';
@import '@volverjs/style/scss/props/layout';
@import '@volverjs/style/scss/utilities/layout';
@import '@volverjs/style/scss/components/vv-button';
```

## Principles

### 👌 Zero Specificity

Everything is defined with _:where()_ so you can override all definitions easily.

### 🎨 Custom properties

All attributes have a [custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) (CSS variables) for easy theming.

### 😱 Utility-first + BEM

You can style utility-first (with [tailwindcss](https://tailwindcss.com) syntax) or use components (_vv-\*_ for ex. _vv-button_) written with [BEM](http://getbem.com/introduction/).

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
/* custom color brand */
$color-brand: #45cb85;

/* custom font sans */
$font-sans: 'Open Sans', sans-serif;

@import '@volverjs/style';
@import url('https://fonts.googleapis.com/css2?family=Open+Sans');
```

## Deep override

All components are written through SCSS maps.
Root attributes style the component, submaps _state_, _element_, and _modifier_ generates BEM selectors.

```scss
@use 'sass:map';
// import volverjs default settings, functions and mixins
@import '@volverjs/style/scss/context';

// override vv-button map
$vv-button: map.deep-merge(
	$vv-button,
	(
		// change default button background
		background: #ddd,
		state: (
			hover: (
				// change default button background on hover
				background: #aaa,
			),
		),
		modifier: (
			// add a custom modifier
			my-error:
				(
					background: red,
				)
		)
	)
);

// import volverjs style
@import '@volverjs/style/scss';
```

```html
<button type="button" class="vv-button vv-button--my-error">Error</button>
```
