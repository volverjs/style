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
Many utilities classes can be used with a breakpoint suffix.

```html
<div class="none lg:flex"></div>
```

The breakpoint suffix has a greater specificity than the default utility class. This means that the breakpoint suffix will override the default utility class.

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
@use '@volverjs/style/scss/context'

@include media-breakpoint-up('md', $breakpoints) {
  // ...
}

@include media-breakpoint-down('md', $breakpoints) {
  // ...
}

@include media-breakpoint-between('md', 'lg', $breakpoints) {
  // ...
}

@include media-breakpoint-only('md', $breakpoints) {
  // ...
}
```

### Customization
You can create your own breakpoints overriding the `$breakpoints` SCSS variable.

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