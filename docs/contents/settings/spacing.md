---
index: 4
label: Spacing
title: Spacing
description: Volver uses a spacing scale to control the padding, margin and position of elements.
---

### Static Spacing
Static spacing is defined by a CSS Custom Property. The key rapresents the size in `px` and the value is the font size in `rem`.

<table-utility property="spacing" custom-property="spacing" hide-class class="mb-lg">
  <template #custom-property="{ key }">
    --spacing-{{ key }}
  </template>
  <template #value="{ value }">
    {{ value }}
  </template>
</table-utility>

### Dynamic Spacing
Dynamic spacing change based on the breakpoint.

<table-utility prefix="spacing" property="spacing-dynamic" custom-property="spacing" hide-class class="mb-lg">
  <template #custom-property="{ key }">
    --spacing-{{ key }}
  </template>
  <template #value="{ value, key }">
    <div v-for="(item, breakpoint) in value" :key="breakpoint" class="whitespace-pre leading-relaxed">
      <pre v-if="breakpoint !== 'xxs'">
@media (--breakpoint-{{ breakpoint }}) {
  --spacing-{{ key }}: var(--spacing-{{ item }});
}</pre>
      <template v-else>--spacing-{{ key }}: var(--spacing-{{ item }});</template>
    </div>
  </template>
</table-utility>

### Customization
You can customize the spacing by changing the values of the `--spacing` CSS Custom Property.

```css
:root {
  --spacing-7: 0.4375rem;
}
```
Or overriding the `$spacing` SCSS variable.

```scss 
@use 'sass:map';
@use '@volverjs/style/scss/context';

// override font-size map
context.$spacing: map.deep-merge(
  context.$spacing,
  (
    7: 0.4375rem
  )
);

@use '@volverjs/style/scss';
```

Or the `$spacing-dynamic` SCSS variable for dynamic spacing.

```scss
@use 'sass:map';
@use '@volverjs/style/scss/context';

// override font-size-dynamic map
context.$spacing-dynamic: map.deep-merge(
  context.$spacing-dynamic,
  (
    // --text-xxl
    xxl: (
      // initial font size
      xxs: 28,
      // from sm breakpoint
      sm: 38,
      // from lg breakpoint
      lg: 50
    )
  )
);

@use '@volverjs/style/scss';
```