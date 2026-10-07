---
index: 4
label: Spacing
title: Spacing
description: Volver Style uses a spacing scale to control the padding, margin and position of elements.
---

### Static Spacing
Static spacing is defined by a CSS Custom Property. The key represents the size in `px` and the value is the length in `rem`.

<table-utility property="spacing" custom-property="spacing" hide-class class="mb-lg">
  <template #custom-property="{ key }">
    --spacing-{{ key }}
  </template>
  <template #value="{ value }">
    {{ value }}
  </template>
</table-utility>

### Dynamic Spacing
Dynamic spacing changes with the breakpoint: each step points to a step of the static scale.

<table-utility prefix="spacing" property="spacing-dynamic" custom-property="spacing" hide-class class="mb-lg">
  <template #custom-property="{ key }">
    --spacing-{{ key }}
  </template>
  <template #value="{ value, key }">
    <div v-for="(item, breakpoint) in value" :key="breakpoint" class="whitespace-pre leading-relaxed">
      <template v-if="breakpoint !== 'xxs'">from {{ breakpoint }}: --spacing-{{ key }}: var(--spacing-{{ item }});</template>
      <template v-else>--spacing-{{ key }}: var(--spacing-{{ item }});</template>
    </div>
  </template>
</table-utility>

### Customization
You can customize the spacing by changing the values of the `--spacing-*` CSS Custom Properties.

```css
:root, :host, .theme {
  --spacing-16: 1.125rem;
}
```
Or overriding the `$spacing` SCSS variable.

```scss 
@use 'sass:map';
@use '@volverjs/style/scss/context';

// add a step to the spacing map: --spacing-60, p-60, m-60, ...
context.$spacing: map.deep-merge(
  context.$spacing,
  (
    60: 3.75rem
  )
);

@use '@volverjs/style/scss';
```

Or the `$spacing-dynamic` SCSS variable for dynamic spacing.

```scss
@use 'sass:map';
@use '@volverjs/style/scss/context';

// add a step to the dynamic spacing map
context.$spacing-dynamic: map.deep-merge(
  context.$spacing-dynamic,
  (
    // --spacing-xxl
    xxl: (
      // initial spacing: var(--spacing-28)
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