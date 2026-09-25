---
index: 1
label: Breakpoints
title: Breakpoints
description: Volver Style includes a default breakpoint system that can be used to style your site. You can also create your own breakpoint system.
---

### List of Breakpoints
Each breakpoint is defined by a CSS Custom Property. The default breakpoints are:

<table-utility label-class="Name" property="breakpoints" custom-property="breakpoint" class="mb-lg">
  <template #class="{ key }">
    {{ key }}
  </template>
  <template #custom-property="{ key }">
    --breakpoint-{{ key }}
  </template>
  <template #value="{ value }">
    {{ value }}
  </template>
</table-utility>

### Responsive Utilities
Many utility classes can be used with a breakpoint prefix.

```html
<div class="none lg:flex"></div>
```

Responsive classes have the same zero specificity as the others: they are emitted after the base classes, so at their breakpoint and above they override them.

### Current Breakpoint
The current breakpoint can be accessed using the `--breakpoint-key` and `--breakpoint-value` CSS Custom Properties.

```js
const computedStyle = getComputedStyle(document.documentElement)
const breakpointKey = computedStyle.getPropertyValue('--breakpoint-key')
const breakpointValue = computedStyle.getPropertyValue('--breakpoint-value')
```


### Mixins
Volver Style includes a set of SCSS mixins that can be used to create responsive utilities. 

```scss
@use '@volverjs/style/scss/context' as *;

// from md up: (min-width: 992px)
@include bp-up('md') {
  // ...
}

// up to the end of md: (max-width: 1023.98px)
@include bp-down('md') {
  // ...
}

// from md to the end of lg: (min-width: 992px) and (max-width: 1279.98px)
@include bp-between('md', 'lg') {
  // ...
}

// md only: (min-width: 992px) and (max-width: 1023.98px)
@include bp-only('md') {
  // ...
}
```

Each is a shorthand for the `media-breakpoint-*` mixin of the same name with `$breakpoints` as the last argument.

### Customization
You can create your own breakpoints overriding the `$breakpoints` SCSS variable. The map must be in ascending order and start with a key set to `0`, or the compilation stops with an error.

```scss 
@use '@volverjs/style/scss/context' with (
  $breakpoints: (
    xxs: 0,
    xs: 480px,
    sm: 768px,
    md: 1024px,
    lg: 1280px,
    xl: 1920px,
  )
);
@use '@volverjs/style/scss';
```