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

### Container Queries
A breakpoint prefix reads the width of the viewport. A container prefix, the same name after an `@`, reads the width of the nearest ancestor with the `@container` class, so a component lays itself out by the room it is given: a card in a sidebar and the same card in the main column.

```html
<div class="@container">
  <article class="flex flex-col @md:flex-row gap-md">…</article>
</div>
```

<table-utility label-class="Prefix" property="container-breakpoints" class="mb-lg">
  <template #class="{ key }">
    @{{ key }}:
  </template>
  <template #value="{ value }">
    {{ value }}
  </template>
</table-utility>

The steps are the ones of Tailwind CSS, smaller than the viewport breakpoints because a container is narrower than the page. They are available on the utilities that lay a block out: display, flex direction and wrap, the justify and align utilities of content and items, grid template columns, the `col-*` column spans and text align. A container class is emitted after the responsive classes of its utility, so it wins when both apply. With no `@container` above it, a container class never applies.

`@container` sets `container-type: inline-size`, which stops the element from taking its width from its content. Put it on a block that fills its parent (a card, a column, a panel), not on one that shrinks to what it holds, such as an `inline-flex` or a flex item with no basis: that one collapses to a width of 0.

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

The container steps have their own mixin, a shorthand for `container-breakpoint-up` with `$container-breakpoints`. An unknown step, or a step of 0, stops the compilation with an error.

```scss
// nearest @container from md up: (min-width: 28rem)
@include cq-up('md') {
  // ...
}
```

### Customization
You can create your own breakpoints overriding the `$breakpoints` SCSS variable. The map must be in ascending order and start with a key set to `0`: the compilation only prints a warning otherwise, and the CSS is wrong: without a key set to `0` the classes with no prefix are not emitted, and out of order a smaller breakpoint overrides a larger one.

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

The container steps are the `$container-breakpoints` SCSS variable: an ascending map of widths above 0. A step of 0 stops the compilation, a map out of order prints a warning, and an empty map emits no container class.

```scss
@use '@volverjs/style/scss/context' with (
  $container-breakpoints: (
    sm: 20rem,
    md: 30rem,
    lg: 40rem,
  )
);
@use '@volverjs/style/scss';
```
