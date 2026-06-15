---
name: volverjs-style
description: >
  Use @volverjs/style design system library for CSS/SCSS styling. Covers component markup (BEM classes like vv-button, vv-card, vv-input-text), utility classes (spacing, layout, flexbox, grid, typography), design tokens (colors, spacing, breakpoints), SCSS customization, theming, and CSS custom properties.
  USE FOR: styling with @volverjs/style, writing HTML with vv-* component classes, using volver utility classes (m-*, p-*, flex-*, grid-*, text-*), customizing design tokens, creating themes, extending components, SCSS configuration with context, responsive design with breakpoints, dark mode, vv-button/vv-card/vv-input-text/vv-alert/vv-dialog markup, CSS custom properties, zero-specificity overrides.
  DO NOT USE FOR: building @volverjs/ui-vue component logic (use Vue skills), general CSS without @volverjs/style, Tailwind CSS (similar concepts but different implementation).
---

# @volverjs/style Design System

A lightweight, responsive CSS/SCSS design system with utility-first classes, BEM components, design tokens, and zero-specificity via `:where()`.

## Key Principles

- **Zero Specificity** — All component and utility selectors wrapped in `:where()`, so your custom CSS always wins without `!important`
- **CSS Custom Properties** — Every token and component attribute exposed as CSS variables for easy overrides
- **Hybrid approach** — Utility-first classes (like Tailwind) + BEM-based components (`.vv-button`, `.vv-button__icon`, `.vv-button--primary`)
- **Responsive by default** — Dynamic spacing and typography that adapt across breakpoints

## Installation

```bash
# npm / yarn / pnpm
pnpm add @volverjs/style
```

### Full Import

```scss
// CSS (pre-built)
@import '@volverjs/style';

// SCSS (with customization)
@use '@volverjs/style/scss';
```

### Cherry-Pick (recommended for production)

```scss
@use '@volverjs/style/scss/reset';
@use '@volverjs/style/scss/props/colors';
@use '@volverjs/style/scss/props/spacing';
@use '@volverjs/style/scss/utilities/spacing';
@use '@volverjs/style/scss/utilities/layout';
@use '@volverjs/style/scss/components/vv-button';
```

### SCSS Customization via Context

Override design tokens before importing the library:

```scss
@use '@volverjs/style/scss/context' with (
  $color-brand: #45cb85,
  $color-accent: #e040fb,
  $font-family-sans: 'Inter', sans-serif,
  $use-color-mix: true,           // modern relative color syntax
  $use-css-layers: false,         // CSS @layer support
  $components-prefix: vv,         // component class prefix
  $zero-specificity-for-components: true,
  $zero-specificity-for-utilities: true
);
@use '@volverjs/style/scss';
```

### CSS-Only Customization

```css
:root {
  --color-brand-hue: 149deg;
  --color-brand-saturation: 56%;
  --color-brand-lightness: 53%;
  --font-sans: 'Inter', sans-serif;
}
```

---

## Components

All components follow BEM naming: `.vv-{name}`, `.vv-{name}__{element}`, `.vv-{name}--{modifier}`.

### Available Components

**Form:** vv-input-text, vv-input-file, vv-textarea, vv-checkbox, vv-radio, vv-select, vv-dropdown
**Display:** vv-button, vv-badge, vv-alert, vv-avatar, vv-progress, vv-tooltip, vv-skeleton, vv-text
**Layout:** vv-card, vv-dialog, vv-nav, vv-table, vv-breadcrumb, vv-tab
**Interactive:** vv-accordion, vv-dropdown-action, vv-dropdown-option, vv-dropdown-optgroup
**Grouped:** vv-button-group, vv-checkbox-group, vv-radio-group, vv-alert-group, vv-avatar-group, vv-accordion-group

### Component Markup Patterns

#### vv-button

```html
<!-- Base -->
<button class="vv-button">Label</button>

<!-- With modifier -->
<button class="vv-button vv-button--primary">Primary</button>
<button class="vv-button vv-button--secondary">Secondary</button>
<button class="vv-button vv-button--danger">Danger</button>
<button class="vv-button vv-button--ghost">Ghost</button>
<button class="vv-button vv-button--link">Link</button>

<!-- With elements -->
<button class="vv-button">
  <svg class="vv-button__icon">…</svg>
  <span class="vv-button__label">Click me</span>
</button>

<!-- Icon only -->
<button class="vv-button vv-button--icon-only">
  <svg class="vv-button__icon">…</svg>
</button>

<!-- Layout modifiers -->
<button class="vv-button vv-button--block">Full width</button>
<button class="vv-button vv-button--rounded">Rounded</button>

<!-- Anchor as button -->
<a href="/path" class="vv-button vv-button--primary">Link Button</a>
```

**Button modifiers:** primary, secondary, danger, ghost, link, static-light, static-dark, action, action-quiet, rounded, block, reverse, column, full-bleed

#### vv-input-text

```html
<div class="vv-input-text">
  <label class="vv-input-text__label" for="name">Name</label>
  <div class="vv-input-text__wrapper">
    <div class="vv-input-text__inner">
      <input class="vv-input-text__input" id="name" type="text" />
    </div>
  </div>
  <small class="vv-input-text__hint">Helper text</small>
</div>

<!-- With icon -->
<div class="vv-input-text vv-input-text--icon-before">
  <label class="vv-input-text__label" for="search">Search</label>
  <div class="vv-input-text__wrapper">
    <div class="vv-input-text__inner">
      <svg class="vv-input-text__icon">…</svg>
      <input class="vv-input-text__input" id="search" type="text" />
    </div>
  </div>
</div>

<!-- Floating label -->
<div class="vv-input-text vv-input-text--floating">
  <div class="vv-input-text__wrapper">
    <div class="vv-input-text__inner">
      <input class="vv-input-text__input" id="email" type="email" placeholder=" " />
      <label class="vv-input-text__label" for="email">Email</label>
    </div>
  </div>
</div>

<!-- Validation states -->
<div class="vv-input-text vv-input-text--valid">…</div>
<div class="vv-input-text vv-input-text--invalid">…</div>
```

**Input elements:** label, wrapper, inner, input, input-before, input-after, icon, actions-group, action, hint, limit, unit, number
**Input modifiers:** icon-before, icon-after, valid, invalid, loading, floating, auto-width

#### vv-card

```html
<div class="vv-card">
  <div class="vv-card__header">Title</div>
  <div class="vv-card__picture">
    <img src="…" alt="…" />
  </div>
  <div class="vv-card__content">Content here</div>
  <div class="vv-card__footer">Footer actions</div>
</div>

<!-- Glass effect -->
<div class="vv-card vv-card--glass">…</div>
```

#### vv-alert

```html
<div class="vv-alert">
  <svg class="vv-alert__icon">…</svg>
  <div class="vv-alert__content">
    <strong class="vv-alert__title">Alert title</strong>
    <p class="vv-alert__description">Alert description</p>
  </div>
  <button class="vv-alert__action">Dismiss</button>
</div>

<!-- Grouped alerts -->
<div class="vv-alert-group">
  <div class="vv-alert">…</div>
  <div class="vv-alert">…</div>
</div>
```

#### vv-dialog

```html
<dialog class="vv-dialog">
  <div class="vv-dialog__header">
    <h2 class="vv-dialog__title">Dialog Title</h2>
    <button class="vv-dialog__close">✕</button>
  </div>
  <div class="vv-dialog__content">Content</div>
  <div class="vv-dialog__footer">
    <button class="vv-button vv-button--secondary">Cancel</button>
    <button class="vv-button vv-button--primary">Confirm</button>
  </div>
</dialog>
```

For the full list of component elements, modifiers, and states, read the component settings files at `src/settings/components/_vv-{name}.scss` in the workspace.

---

## Utility Classes

Utility classes follow Tailwind-like naming and support responsive breakpoint prefixes.

### Responsive Prefixes

All utilities support breakpoint prefixes: `xxs:`, `xs:`, `sm:`, `md:`, `lg:`, `xl:`, `xxl:`, `xxxl:`

```html
<div class="p-8 sm:p-12 md:p-16 lg:p-24">Responsive padding</div>
<div class="display-block md:display-flex">Block on mobile, flex on desktop</div>
```

### Spacing

**Margin:** `m-{size}`, `mx-{size}`, `my-{size}`, `mt-{size}`, `mr-{size}`, `mb-{size}`, `ml-{size}`
**Padding:** `p-{size}`, `px-{size}`, `py-{size}`, `pt-{size}`, `pr-{size}`, `pb-{size}`, `pl-{size}`
**Negative margin:** `n-{size}`, `nx-{size}`, `ny-{size}`, `nt-{size}`, etc.
**Auto:** `m-auto`, `mx-auto`, `my-auto`, `mt-auto`, etc.

Sizes: 0, px (1px), 1–8, 10, 12, 14, 16, 20, 24, 28, 32, 36, 40, 44, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 288, 320, 384
Dynamic sizes: sm, md, lg, xl (responsive, adapt per breakpoint)

```html
<div class="m-16 p-24 mb-32">Spaced element</div>
<div class="mx-auto max-w-md">Centered container</div>
```

### Layout

**Display:** `display-block`, `display-flex`, `display-grid`, `display-inline`, `display-inline-flex`, `display-none`, etc.
**Position:** `position-relative`, `position-absolute`, `position-fixed`, `position-sticky`
**Inset:** `inset-{size}`, `inset-x-{size}`, `inset-y-{size}`, `top-{size}`, `right-{size}`, `bottom-{size}`, `left-{size}`
**Z-index:** `z-{value}` (0, 10, 20, 30, 40, 50, auto)
**Overflow:** `overflow-auto`, `overflow-hidden`, `overflow-visible`, `overflow-x-auto`, etc.
**Container:** `container` (responsive max-width)
**Aspect Ratio:** `aspect-auto`, `aspect-square`, `aspect-video`
**Visibility:** `visibility-visible`, `visibility-hidden`
**Object Fit:** `object-contain`, `object-cover`, `object-fill`, `object-none`

### Flexbox

**Flex container:** `display-flex`, `display-inline-flex`
**Direction:** `flex-row`, `flex-col`, `flex-row-reverse`, `flex-col-reverse`
**Wrap:** `flex-wrap`, `flex-nowrap`, `flex-wrap-reverse`
**Justify:** `justify-start`, `justify-end`, `justify-center`, `justify-between`, `justify-around`, `justify-evenly`
**Align items:** `items-start`, `items-end`, `items-center`, `items-baseline`, `items-stretch`
**Align self:** `self-auto`, `self-start`, `self-end`, `self-center`, `self-stretch`
**Gap:** `gap-{size}`, `gap-x-{size}`, `gap-y-{size}`
**Flex grow/shrink:** `flex-1`, `flex-auto`, `flex-initial`, `flex-none`, `grow`, `grow-0`, `shrink`, `shrink-0`
**Order:** `order-{n}` (1–12, first, last, none)

```html
<div class="display-flex flex-wrap gap-16 justify-between items-center">
  <div class="flex-1">Grows</div>
  <div class="flex-none">Fixed</div>
</div>
```

### Grid

**Grid container:** `display-grid`, `display-inline-grid`
**Columns:** `grid-cols-{1-12}`, `grid-cols-none`
**Rows:** `grid-rows-{1-6}`, `grid-rows-none`
**Span:** `col-span-{1-12}`, `col-span-full`, `row-span-{1-6}`, `row-span-full`
**Start/End:** `col-start-{1-13}`, `col-end-{1-13}`, `row-start-{1-7}`, `row-end-{1-7}`
**Flow:** `grid-flow-row`, `grid-flow-col`, `grid-flow-dense`
**Gap:** `gap-{size}`, `gap-x-{size}`, `gap-y-{size}`

```html
<div class="display-grid grid-cols-1 md:grid-cols-3 gap-24">
  <div class="col-span-2">Wide column</div>
  <div>Normal column</div>
</div>
```

### Typography

**Font family:** `font-sans`, `font-serif`, `font-mono`
**Font weight:** `font-thin` (100), `font-extralight` (200), `font-light` (300), `font-normal` (400), `font-medium` (500), `font-semibold` (600), `font-bold` (700), `font-extrabold` (800), `font-black` (900)
**Font size:** `text-{size}` — static: 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 28, 32, 36, 40, 44, 48, 56, 64, 80, 96, 128; dynamic: xs, sm, md, lg, xl
**Text align:** `text-left`, `text-center`, `text-right`, `text-justify`
**Line height:** `leading-none`, `leading-tight`, `leading-normal`, `leading-relaxed`, `leading-loose`
**Letter spacing:** `tracking-tight`, `tracking-normal`, `tracking-loose`, `tracking-wide`
**Font style:** `font-italic`, `font-not-italic`
**Text transform:** `text-uppercase`, `text-lowercase`, `text-capitalize`, `text-normal-case`
**Text decoration:** `underline`, `overline`, `line-through`, `no-underline`
**Whitespace:** `whitespace-normal`, `whitespace-nowrap`, `whitespace-pre`, `whitespace-pre-wrap`
**Word break:** `break-normal`, `break-words`, `break-all`, `truncate`

### Colors

**Text color:** `text-{color}` — brand, accent, success, danger, info, warning, gray, word, surface, white, black
**Background:** `bg-{color}` — same palette
**Shade variants:** `text-brand-darken-1` … `text-brand-darken-5`, `text-brand-lighten-1` … `text-brand-lighten-5`
**Surface variants:** `bg-surface-1` … `bg-surface-5`

### Borders

**Border width:** `border`, `border-0`, `border-2`, `border-4`, `border-8`
**Border sides:** `border-t-{width}`, `border-r-{width}`, `border-b-{width}`, `border-l-{width}`
**Border radius:** `rounded`, `rounded-sm`, `rounded-md`, `rounded-lg`, `rounded-xl`, `rounded-2xl`, `rounded-3xl`, `rounded-full`, `rounded-none`
**Border color:** `border-{color}`

### Effects & Transitions

**Shadow:** `shadow-sm`, `shadow`, `shadow-md`, `shadow-lg`, `shadow-xl`, `shadow-2xl`, `shadow-none`
**Opacity:** `opacity-{0,5,10,20,25,30,40,50,60,70,75,80,90,95,100}`
**Transition:** `transition-none`, `transition-all`, `transition-colors`, `transition-opacity`, `transition-shadow`, `transition-transform`
**Duration:** `duration-{75,100,150,200,300,500,700}`
**Timing:** `ease-linear`, `ease-in`, `ease-out`, `ease-in-out`
**Blur:** `blur` (default 8px), `blur-{none,sm,md,lg,xl,xxl,xxxl}`
**Backdrop blur:** `backdrop-blur-{none,sm,blur,md,lg,xl,xxl,xxxl}`
**Brightness:** `brightness-{0,50,75,90,95,100,105,110,125,150,200,250,500,1000}`
**Contrast:** `contrast-{0,50,75,100,125,150,200,300}`
**Saturation:** `saturate-{0,50,100,150,200}`

---

## Design Tokens (CSS Custom Properties)

All values are exposed as CSS variables, prefixed by category:

```css
/* Colors */
--color-brand, --color-brand-darken-1, --color-brand-lighten-1
--color-accent, --color-success, --color-danger, --color-info, --color-warning
--color-gray, --color-word, --color-surface, --color-surface-1 … --color-surface-5

/* Spacing */
--spacing-0 … --spacing-384
--spacing-sm, --spacing-md, --spacing-lg, --spacing-xl  /* dynamic/responsive */

/* Typography */
--font-sans, --font-serif, --font-mono
--text-14, --text-16, …
--text-sm, --text-md, --text-lg  /* dynamic */

/* Borders */
--rounded, --rounded-sm, --rounded-md, --rounded-lg, …
--border-0 … --border-8

/* Breakpoints */
--breakpoint-xxs (0), --breakpoint-xs (360px), --breakpoint-sm (576px),
--breakpoint-md (992px), --breakpoint-lg (1024px), --breakpoint-xl (1280px),
--breakpoint-xxl (1440px), --breakpoint-xxxl (1536px)

/* Effects */
--shadow-sm, --shadow, --shadow-md, --shadow-lg
--opacity-0 … --opacity-100
```

---

## Theming

### Dark Mode

```scss
// SCSS setup
@use '@volverjs/style/scss/themes/dark/context' with (
  $color-brand: #45cb85
);
@use '@volverjs/style/scss';
```

```html
<!-- Activate dark theme on a container or body -->
<body class="theme" data-theme="dark">…</body>
```

Theme variables are scoped to `:where(:host, :root, .theme)` so they cascade naturally.

### Custom Theme

Override color variables at root or component level:

```css
/* Brand override */
:root {
  --color-brand: #e040fb;
}

/* Component-level override */
.my-special-section {
  --button-background: var(--color-accent);
  --button-border-color: transparent;
}
```

---

## Extending Components (SCSS)

To add custom modifiers or override default styles:

```scss
@use 'sass:map';
@use '@volverjs/style/scss/context' as ctx;

// Deep merge custom styles into the component map
ctx.$vv-button: map.deep-merge(
  ctx.$vv-button,
  (
    modifier: (
      success: (
        background: var(--color-success),
        color: var(--color-white),
        state: (
          hover: (background: var(--color-success-darken-1))
        )
      )
    )
  )
);

@use '@volverjs/style/scss';
```

This creates `.vv-button--success` with hover state.

### Creating Custom Components

Use the same BEM mixin system:

```scss
@use '@volverjs/style/scss/context' as ctx;

$my-component: (
  display: flex,
  padding: var(--spacing-16),
  background: var(--color-surface-1),
  element: (
    title: (font-weight: var(--font-bold)),
    body: (flex: 1),
  ),
  modifier: (
    compact: (padding: var(--spacing-8)),
  ),
  state: (
    hover: (background: var(--color-surface-2)),
  ),
);

@include ctx.spread-map-into-bem(
  $map: $my-component,
  $block: my-component,
  $use-custom-props: true,
  $zero-specificity: true,
  $bps: ctx.$breakpoints
);
```

---

## SCSS Mixins & Functions

### `spread-map-into-bem($map, $block, ...)`
Generates full BEM structure (block, elements, modifiers, states) from an SCSS map.

### `spread-map-into-utilities($map, $class, $attribute, ...)`
Generates utility classes from a map with optional responsive variants.

### `spread-map-into-props($map, $prefix)`
Generates CSS custom properties from a map. Recurses nested maps.

### `media-breakpoint-up($breakpoint)`
Mobile-first media query shortcut:
```scss
@include ctx.media-breakpoint-up(md) {
  .my-class { display: grid; }
}
```

### `wrap-with-where($selector, $enabled)`
Wraps a selector in `:where()` for zero specificity.

---

## Vue.js Integration Notes

When using with `@volverjs/ui-vue`, the CSS classes are applied automatically by the Vue components. You typically:
1. Import `@volverjs/style` in your main entry file
2. Use `<VvButton>`, `<VvInputText>`, etc. — they render the correct BEM classes
3. Pass modifiers as props: `<VvButton modifiers="primary">` → `.vv-button--primary`
4. Override styles via CSS custom properties or SCSS context

For static HTML or other frameworks, apply the classes manually as shown above.

---

## CSS Cascade Layers

When `$use-css-layers: true`:

```
@layer reset, preflight, props, components, themes, utilities;
```

Layer order ensures utilities always win over components, and themes override base styles.

---

## Quick Reference

| Need | Pattern |
|------|---------|
| Button | `<button class="vv-button vv-button--primary">…</button>` |
| Input | `<div class="vv-input-text"><label class="vv-input-text__label">…</label><div class="vv-input-text__wrapper"><div class="vv-input-text__inner"><input class="vv-input-text__input" /></div></div></div>` |
| Card | `<div class="vv-card"><div class="vv-card__content">…</div></div>` |
| Flex row | `<div class="display-flex gap-16 items-center">…</div>` |
| Grid 3 cols | `<div class="display-grid grid-cols-3 gap-24">…</div>` |
| Responsive | `class="p-8 md:p-16 lg:p-24"` |
| Centering | `class="display-flex justify-center items-center"` |
| Override token | `--color-brand: #e040fb;` in `:root` |
