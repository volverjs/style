# SCSS API: imports, configuration, extending components

Verified against `package.json` exports, `src/_config.scss`, `src/_context.scss`,
`src/tools/**`, and by compiling the snippets with the repo's Sass.

## Import paths

CSS (pre-built, `dist/`):

| Path | Content |
|---|---|
| `@volverjs/style` | everything (reset, preflight, props, components, utilities) |
| `@volverjs/style/reset` `…/base` `…/props` `…/components` `…/utilities` | one layer each |
| `@volverjs/style/components/vv-button` (one per component) | a single component |
| `@volverjs/style/props/colors` (one per group) | a single token group |
| `@volverjs/style/utilities/spacing` (one per group) | a single utility group |
| `@volverjs/style/themes/dark` `…/themes/dark/props` `…/themes/dark/components` | dark theme |

Use them with CSS `@import` or a JS `import '@volverjs/style'`.

SCSS (`src/`, prefix every path with `scss/`):

| Path | Content |
|---|---|
| `@volverjs/style/scss` | the full library, configurable through `scss/context` |
| `@volverjs/style/scss/context` | config + settings maps + tools; the module to `@use … with (…)` |
| `@volverjs/style/scss/reset` `…/scss/preflight` `…/scss/base` `…/scss/props` `…/scss/components` `…/scss/utilities` | one layer each |
| `@volverjs/style/scss/components/vv-button`, `…/scss/props/colors`, `…/scss/utilities/spacing` | single modules |
| `@volverjs/style/scss/tools` `…/scss/mixins` `…/scss/functions` `…/scss/settings` | tools only, no output |
| `@volverjs/style/scss/themes/dark` (+ `/context` `/props` `/components` `/settings`) | dark theme |

The settings partials (`src/settings/components/_vv-*.scss`) are published but not
exported: read them from `node_modules/@volverjs/style/src/…` as documentation, and
reach the maps through `scss/context`.

## Configuring through the context

Configure once, before the first `@use` that emits CSS. Every settings variable is
`!default`, so they are all reachable from one `with (…)` block on `scss/context`.

```scss
@use '@volverjs/style/scss/context' with (
  $color-brand: #45cb85,
  $color-accent: #e040fb,
  $font-family-sans: "'Inter', sans-serif",
  $use-css-layers: true,
  $preflight: false
);
@use '@volverjs/style/scss';
```

A font stack is **one** quoted string. `$font-family-sans: 'Inter', sans-serif` is a
compile error, because the comma separates configuration entries.

| Variable | Default | Effect |
|---|---|---|
| `$color-brand` `$color-accent` `$color-success` `$color-danger` `$color-info` `$color-warning` `$color-gray` `$color-word` `$color-surface` | brand `#166abd`, accent `#9c27b0` … | palette bases; shades derive |
| `$font-family-sans` `$font-family-serif` `$font-family-mono` | system stacks | one quoted string each |
| `$font-size` `$font-size-dynamic` `$font-weight` `$spacing` `$spacing-dynamic` `$breakpoints` `$colors` | maps | override the scales themselves |
| `$vv-button` `$vv-card` … one per component | maps | see "Extending a component" |
| `$components-prefix` | `vv` | class prefix for every component |
| `$components-names` | map | rename or drop components |
| `$preflight` | `true` | emit the opinionated base styles |
| `$use-custom-props-for-components` | `true` | expose `--vv-{block}-*` properties (turn off for a smaller CSS) |
| `$use-color-mix` | `true` | relative color syntax for shades; `false` falls back to HSL channel variables |
| `$use-css-layers` | `false` | wrap output in `@layer` |
| `$layer-order` | `(reset, preflight, props, components, themes, utilities)` | |
| `$layer-prefix` | `'volver'` | layers are emitted as `volver.reset`, `volver.utilities` … |
| `$zero-specificity-for-components` `$zero-specificity-for-utilities` | `true` | wrap selectors in `:where()` |

## Cherry-picking modules

Files that share a basename (`props/spacing` and `utilities/spacing`) collide on the
default namespace, so alias them. Components consume tokens from several prop groups
(borders, typography, effects, transitions, not just colors and spacing): when picking
components, take `scss/props` whole.

```scss
@use '@volverjs/style/scss/context' with ($color-brand: #45cb85);
@use '@volverjs/style/scss/reset';
@use '@volverjs/style/scss/props';
@use '@volverjs/style/scss/utilities/spacing' as utilities-spacing;
@use '@volverjs/style/scss/utilities/layout' as utilities-layout;
@use '@volverjs/style/scss/utilities/flexbox' as utilities-flexbox;
@use '@volverjs/style/scss/components/vv-button';
@use '@volverjs/style/scss/components/vv-card';
```

## Extending a component

Components are SCSS maps. Root keys style the block; `element`, `modifier`, `state`
sub-maps generate BEM selectors; `modifier` can nest `element` and `state`; `pseudo`
targets pseudo-elements; `_alias` lets a plain child tag stand in for an element class.
Deep-merge into the map before the library is emitted:

```scss
@use 'sass:map';
@use '@volverjs/style/scss/context' as ctx;

ctx.$vv-button: map.deep-merge(
  ctx.$vv-button,
  (
    modifier: (
      success: (
        background: var(--color-success),
        border-color: var(--color-success),
        color: var(--color-white),
        state: (
          hover: (
            background: var(--color-success-darken-1),
            border-color: var(--color-success-darken-1),
          ),
        ),
      ),
    ),
  )
);

@use '@volverjs/style/scss';
```

Emits `.vv-button--success` with `--vv-button-modifier-success-*` properties and the
hover selector (`.vv-button--success.vv-button:not([disabled]):hover`). Use it as
`class="vv-button vv-button--success"`. Utility maps (`$spacing`, `$colors`, …) can be
extended the same way.

Valid `state` keys: `active` `focus` `hover` `focus-within` `focus-visible` `target`
`visited` `disabled` `readonly` `checked` `checked-within` `indeterminate` `determinate`
`open` `close` `popover` `popover-open` `pressed` `selected` `multiple` `dirty` `valid`
`invalid` `empty` `placeholder-shown` `first-child` `last-child` `current`. Other keys are
silently dropped.

## Creating a component

```scss
@use '@volverjs/style/scss/context' as ctx;

$my-panel: (
  display: flex,
  gap: var(--spacing-md),
  padding: var(--spacing-lg),
  background: var(--color-surface-1),
  border-radius: var(--rounded-lg),
  element: (
    title: (font-weight: var(--font-semibold), color: var(--color-word-1)),
    body: (flex: 1),
  ),
  modifier: (
    compact: (padding: var(--spacing-sm)),
  ),
  state: (
    hover: (background: var(--color-surface-2)),
  ),
);

@include ctx.spread-map-into-bem(
  $map: $my-panel,
  $block: my-panel,
  $use-custom-props: true,
  $zero-specificity: true,
  $bps: ctx.$breakpoints
);
```

Generates `--my-panel-*` properties, `.my-panel`, `.my-panel__title`, `.my-panel__body`,
`.my-panel--compact` and the hover selectors. A dark variant of a custom component is
built with `spread-theme-component($base-map, $theme-map, $component-name, …)` from
`scss/themes/dark/context`; `src/themes/dark/components/_vv-button.scss` is the model.

A component that wraps a native control needs one extra call, because its own `state`
rules would compile to selectors like `.my-field:disabled` that can never match a
`<div>`. `spread-map-into-control-states` re-emits them on the control's attribute:
pass `$states: ('disabled')` where HTML has no readonly, and list in
`$except-modifiers` any modifier that undoes the disabled look. Every `vv-input-*` and
`vv-select` is built this way (`src/components/vv-input-range.scss` is the shortest
example).

## Mixins and functions

| Name | Signature | Purpose |
|---|---|---|
| `spread-map-into-bem` | `($map, $block, $use-custom-props: true, $zero-specificity: true, $bps: (xxs: 0), …)` | map → BEM block, elements, modifiers, states, custom props |
| `spread-map-into-utilities` | `($map, $class, $attribute, $deep: true, $bps: (xxs: 0), $prefix: '', $zero-specificity: false)` | map → utility classes, optional responsive variants |
| `spread-map-into-props` | `($map, $prefix, $deep: true)` | map → `--{prefix}-{key}` custom properties |
| `media-breakpoint-up` / `bp-up` | `($name, $bps: $breakpoints)` | `@media (min-width: …)` |
| `media-breakpoint-down` / `bp-down` | `($name, $bps)` | `@media (max-width: …)` |
| `media-breakpoint-between` / `bp-between` | `($lower, $upper, $bps)` | |
| `media-breakpoint-only` / `bp-only` | `($name, $bps)` | |
| `wrap-with-where` | `($selector, $enabled: true)` | `:where()` wrapper |
| `layer` | `($name, $enabled, $prefix)` | emit inside a cascade layer when enabled |
| `spread-map-into-control-states` | `($map, $block, $control: 'input', $states: ('disabled', 'readonly'), $except-modifiers: (), $zero-specificity: true)` | for a wrapper field component: re-applies its `state` rules on the control's attribute through `:has()`, so `<input disabled>` styles the whole block |
| `spread-theme-component` | `($base-map, $theme-map, $component-name, $bps, $use-custom-props, $zero-specificity)` | dark (or any) theme variant of a component |
| `relative-color-value`, `color-mix-lighten-map`, `color-mix-darken-map`, `color-mix-alpha-map` | functions | shade generation used by the palette |

```scss
@use '@volverjs/style/scss/context' as ctx;

.sidebar {
  display: none;
  @include ctx.bp-up(md) { display: block; }
}
```

## Cascade layers

With `$use-css-layers: true` the output opens with

```css
@layer volver.reset, volver.preflight, volver.props, volver.components, volver.themes, volver.utilities;
```

so utilities beat components and themes beat base styles regardless of source order.
Your own unlayered CSS beats all of them. `$layer-order` and `$layer-prefix` change the
list and the prefix.
