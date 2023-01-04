---
title: Font Size
description: Utilities for controlling the font size of an element.
customProperties: true
---

### Static Font Sizes
Static font sizes are defined in the `--text` CSS Custom Property. The key rapresents the font size in `px` and the value is the font size in `rem`.

<table-utility prefix="text" property="font-size" custom-property="text" class="mb-lg"></table-utility>

### Dynamic Font Sizes
Dynamic font sizes change based on the breakpoint.

<table-utility prefix="text" property="font-size-dynamic" custom-property="text" class="mb-lg">
<template #custom-property="{ value, key }">
        <div v-for="(item, breakpoint) in value" :key="breakpoint" class="whitespace-pre leading-relaxed">
            <pre v-if="breakpoint !== 'xxs'">
@media (--breakpoint-{{ breakpoint }}) {
    --text-{{ key }}: var(--text-{{ item }});
}</pre>
            <template v-else>--text-{{ key }}: var(--text-{{ item }});</template>
        </div>
    </template>
    <template #value="{ key }">
        font-size: var(--text-{{ key }});
    </template>
</table-utility>

### Customization
You can customize the font sizes by changing the values of the `--text` CSS Custom Property.

```css
:root {
	--text-7: 0.4375rem;
}
```
Or overriding the `$font-size` SCSS variable.

```scss 
@use 'sass:map';
@use '@volverjs/style/scss/context';

// override font-size map
context.$font-size: map.deep-merge(
  context.$font-size,
  (
    7: 0.4375rem,
  )
);

@use '@volverjs/style/scss';
```

Or the `$font-size-dynamic` SCSS variable for dynamic font sizes.

```scss
@use 'sass:map';
@use '@volverjs/style/scss/context';

// override font-size-dynamic map
context.$font-size-dynamic: map.deep-merge(
  context.$font-size-dynamic,
  (
	// --text-xxl
    xxl: (
		// initial font size
		xxs: 24,
		// from sm breakpoint
		sm: 28,
		// from lg breakpoint
		lg: 32,
	),
  )
);

@use '@volverjs/style/scss';
```