---
name: volverjs-style
description: >
  Style HTML and Vue templates with the @volverjs/style design system: vv-* BEM components (vv-button, vv-input-text, vv-card, vv-dialog, vv-alert, vv-select, vv-input-range…), utility classes (p-md, flex, grid-cols-3, text-brand, bg-surface-1), design tokens (--color-*, --spacing-*, --vv-button-*), SCSS context configuration, component maps and the dark theme.
  The vocabulary looks like Tailwind but diverges in dozens of places (bare flex/grid/none, no responsive spacing, rounded-xxl, z-modal), so consult this skill before writing or reviewing ANY class name in a project that depends on @volverjs/style or @volverjs/ui-vue, even when the user only says "add spacing", "make it a grid", "style this form", "add dark mode" or "change the brand color". Also use it to pick valid modifiers for @volverjs/ui-vue components.
  Not for Tailwind projects, CSS unrelated to @volverjs/style, or @volverjs/ui-vue component logic (props, events, composables: volverjs-ui-vue skill).
---

# @volverjs/style

A CSS/SCSS design system: BEM components (`.vv-button`, `.vv-button__label`,
`.vv-button--primary`), Tailwind-like utilities (`p-md`, `flex`, `grid-cols-3`), design
tokens as CSS custom properties, and an SCSS layer that generates all of it from maps.
Every selector is wrapped in `:where()`, so it has zero specificity and any CSS you write
wins without `!important`.

The vocabulary is close enough to Tailwind that guessing feels safe. It is not: a class
that does not exist fails silently, and about a third of the classes an agent tends to
guess (`display-flex`, `md:p-16`, `z-10`, `rounded-2xl`, `text-uppercase`, `hidden`) are
not in this library. Work from the reference files, not from memory.

## Workflow

1. **Locate the installed library.** In a consuming project it is
   `node_modules/@volverjs/style/` (the package ships `src/`, `dist/` and
   `design-tokens.json`). Inside the library repo itself use `./src` and `./dist`
   (`pnpm build` regenerates `dist`).
2. **Read the reference for what you are about to write** (all in `references/`):
   - [utilities.md](references/utilities.md): every utility class with its exact value
     set and whether it has responsive variants.
   - [components.md](references/components.md): canonical markup, elements, modifiers and
     states for all 32 components, plus how states are expressed.
   - [tokens.md](references/tokens.md): custom properties, CSS-only overrides, dark theme.
   - [scss.md](references/scss.md): import paths, context configuration, extending and
     creating components, mixins, cascade layers.
3. **Verify anything not in the references** against the compiled CSS before using it:

   ```bash
   # does a utility exist? (responsive form: escape the colon)
   grep -c -F '.gap-md' node_modules/@volverjs/style/dist/utilities.css
   grep -c -F '.md\:grid-cols-3' node_modules/@volverjs/style/dist/utilities.css
   # which modifiers does a component have?
   grep -oE '\.vv-alert--[a-z-]+' node_modules/@volverjs/style/dist/components/vv-alert.css | sort -u
   # the full map of a component (elements, modifiers, states, aliases)
   cat node_modules/@volverjs/style/src/settings/components/_vv-alert.scss
   ```

4. **Prefer the library's idiom over custom CSS**: a token override or a modifier from the
   map beats a new rule, and stays coherent with the dark theme.

## Where it differs from Tailwind

These are the mistakes that recur. Each row is verified against the compiled CSS.

| Habit | In @volverjs/style |
|---|---|
| `display-flex`, `hidden` | Bare names: `flex` `grid` `block` `inline-flex` `none` (there is no `hidden`) |
| `relative`, `absolute` | Same bare names, fine |
| `md:p-16`, `lg:gap-8` | Spacing and gap have **no responsive variants**. Use the dynamic tokens `xs sm md lg xl` (`p-md`, `gap-lg`), which grow with the viewport by themselves |
| `xxs:` prefix, `2xl:` | Prefixes are `xs: sm: md: lg: xl: xxl: xxxl:` (360, 576, 992, 1024, 1280, 1440, 1536px) and only display, position, visibility, flex/grid, sizing, text size/align, border width/style, aspect and columns accept them |
| `hover:bg-…`, `dark:text-…`, `focus:` | No state or theme variants at all. Use component states, tokens, or your own CSS |
| `max-w-md`, `max-w-2xl` | `max-w-screen-md` … `max-w-screen-xxxl`, `max-w-prose`, or `container` |
| `z-10` … `z-50` | Semantic: `z-sticky` `z-fixed` `z-dropdown` `z-modal-backdrop` `z-modal` `z-popover` `z-tooltip` `z-toast` (plus `z-1`, `z-auto`) |
| `aspect-video` | `aspect-wide` (16/9); also `square` `photo` `tv` `ultrawide` |
| `rounded-2xl`, `rounded-3xl` | `rounded-xxl`, `rounded-xxxl` (shadows do use `shadow-2xl`) |
| `text-xl`, `text-4xl`, `text-40` | Dynamic `text-xs`…`text-xl` (responsive by design) or static `text-12 14 16 18 20 22 24 26 28 30 32 34 36 48 60 72 96 128`. No 40, 44, 56, 64, 80 |
| `font-italic`, `text-uppercase`, `tracking-loose` | Bare `italic` `non-italic` `uppercase` `lowercase` `capitalize`; `tracking-tighter/tight/normal/wide/wider/widest` |
| `text-blue-500`, `bg-gray-100` | Semantic palette: `text-brand` `text-word` `text-word-2` `bg-surface-1` `border-surface-3` `bg-surface-brand` `text-danger-darken-1` |
| `space-y-4`, `divide-y` | Not available: use `flex flex-col gap-md` |
| `w-1/2` | Exists, written literally: `w-1/2`, `col-span-6` |
| `border-none` to remove a border | `border-0` (`border-none` is `border-style: none`) |
| `p-30`, `m-11` | The scale has no 11, 15, 30, 60, 72: see the list in utilities.md |

Color semantics: `word` is text (`word-1`…`word-5` progressively fainter), `surface` is
background (`surface-1`…`surface-5` progressively deeper), `surface-{brand,success,…}`
are tinted backgrounds for badges and callouts, `alpha-*` are translucent overlays.
Every palette color has `-lighten-1..5` and `-darken-1..5`.

## Layout recipes (verified)

```html
<main class="container mx-auto px-md py-lg">…</main>

<div class="grid md:grid-cols-2 xl:grid-cols-3 gap-lg">…</div>

<div class="grid lg:grid-cols-12 gap-lg">
  <aside class="lg:col-span-3">…</aside>
  <section class="lg:col-span-9">…</section>
</div>

<div class="flex items-center justify-between gap-sm flex-wrap">…</div>   <!-- toolbar -->
<div class="flex flex-col gap-md">…</div>                                  <!-- stack -->
<div class="flex items-center justify-center min-h-screen">…</div>         <!-- centered -->
<nav class="none md:flex gap-sm">…</nav>                                    <!-- desktop only -->

<h2 class="text-lg font-semibold text-word">Title</h2>
<p class="text-14 text-word-2 leading-relaxed">Secondary copy</p>
<span class="truncate">Long text</span>
```

## Components

Naming: block `.vv-{name}`, element `.vv-{name}__{el}`, modifier `.vv-{name}--{mod}`.
Available: `vv-button` `vv-button-group` `vv-input-text` `vv-textarea` `vv-select`
`vv-checkbox` `vv-radio` `vv-checkbox-group` `vv-radio-group` `vv-input-file`
`vv-input-range` `vv-card` `vv-dialog` `vv-alert` `vv-alert-group` `vv-dropdown`
`vv-dropdown-action` `vv-dropdown-option` `vv-dropdown-optgroup` `vv-nav` `vv-tab`
`vv-accordion` `vv-accordion-group` `vv-table` `vv-badge` `vv-avatar` `vv-avatar-group`
`vv-tooltip` `vv-progress` `vv-skeleton` `vv-breadcrumb` `vv-text`.

Three facts shape the markup; components.md has the full structure of each component.

**Semantic children replace element classes.** Most elements have an alias, so the
natural tag is styled with no class: `.vv-input-text > label`, `.vv-button > svg`,
`.vv-card > header`, `.vv-dialog > article`, `.vv-accordion > summary`. Elements without
an alias (`__wrapper`, `__content`, `__close`, `__hint` on a `<small>`) need the class.

**States come from the DOM, not from classes.** Each state also has a natural selector:
`[disabled]` or `[aria-disabled="true"]`, `[readonly]`, `[open]`, `[aria-pressed="true"]`,
`[aria-selected="true"]`, `:hover`, `:focus-visible`. Write `<button class="vv-button"
disabled>`; the `--disabled`/`.disabled` classes exist only to freeze a look in docs.
Exception: `current` (nav, tab) is class only.

**Form fields share one skeleton and one token set.** A block `<div>` with a direct-child
`<label>`, a `__wrapper` around the control, a direct-child `<small class="…__hint">`.
`valid`, `invalid`, `loading`, `floating`, `icon-before`, `icon-after` are modifiers on
the block. `disabled` always propagates from the control's attribute through `:has()`, and
so does `readonly` on the three controls HTML gives the attribute to (text, textarea,
file). A `select`, a range, a checkbox and a radio take no `readonly` attribute at all:
there the recipe is the same for all four, disable the control, add `tabindex="-1"` and the
`--readonly` modifier, which undoes the disabled dimming. A disabled control submits
nothing, so add a hidden input when the value has to reach the server. Restyle all fields
at once with `--input-*` tokens.

```html
<button type="button" class="vv-button vv-button--primary">Save</button>
<button type="button" class="vv-button vv-button--icon-only vv-button--rounded" aria-label="Edit"><svg>…</svg></button>

<div class="vv-input-text vv-input-text--invalid">
  <label for="email">Email</label>
  <div class="vv-input-text__wrapper">
    <input id="email" type="email" name="email" aria-invalid="true" aria-describedby="email-hint" />
  </div>
  <small id="email-hint" class="vv-input-text__hint">Enter a valid address</small>
</div>

<article class="vv-card">
  <header>Title</header>
  <div class="vv-card__content">…</div>
  <footer class="flex justify-end gap-sm">…</footer>
</article>

<dialog class="vv-dialog vv-dialog--small">
  <article class="vv-dialog__wrapper">
    <header class="vv-dialog__header">Title <button type="button" class="vv-dialog__close" aria-label="Close"></button></header>
    <div class="vv-dialog__content">…</div>
    <footer class="vv-dialog__footer"><div class="vv-button-group" role="group">…</div></footer>
  </article>
</dialog>

<div class="vv-alert vv-alert--success vv-alert--dismissable" role="alert">
  <div class="vv-alert__header">
    <svg>…</svg><strong class="vv-alert__title">Saved</strong>
    <button type="button" class="vv-alert__close" aria-label="Close"></button>
  </div>
  <div class="vv-alert__content">Your changes are live.</div>
</div>
```

Button modifiers: `primary` `secondary` `danger` `ghost` `link` `action` `action-quiet`
`static-light` `static-dark` `icon-only` `rounded` `block` `reverse` `column` `full-bleed`.
The default button is the brand accent; there is no `accent`, `loading` or size modifier.

Traps: `vv-dialog` needs the `<article class="vv-dialog__wrapper">` panel (the
`<dialog>` itself is the backdrop) and has no `__title`; `vv-alert` has no
`__description`/`__action`, icon and title live in `__header`; `vv-card__picture` goes
on the `<img>`; `vv-alert-group` wraps its alerts in `<div role="group">`; the checkbox
switch is `vv-checkbox--switch`; `vv-input-range` needs
`style="--input-range-progress: 45%"` on the block or the track renders empty.

## Tokens and theming

Tokens live on `:where(:host, :root, .theme)`, so `:root { --color-brand: #45cb85 }`
recolors the whole palette (shades derive with relative color syntax; there are no
`--color-brand-hue/saturation/lightness` channels). Component properties are prefixed
with the block: `--vv-button-background`, `--vv-button-state-hover-background`,
`--vv-button-modifier-primary-background`. Fields share `--input-*`.

```css
:root { --color-brand: #45cb85; --rounded: 0.5rem; --input-min-height: var(--spacing-44); }
.vv-button--success { --vv-button-background: var(--color-success); --vv-button-border-color: var(--color-success); }
```

Dark theme is a separate stylesheet (`@import '@volverjs/style/themes/dark'` or
`@use '@volverjs/style/scss/themes/dark'`) loaded after the base. With it loaded the page
follows `prefers-color-scheme`; force with `class="theme theme--dark"` or
`class="theme theme--light"` on `<html>` or on any subtree. Both classes are required;
there is no `data-theme`. Keep custom colors as `var(--color-…)` so they follow the theme.

## SCSS

```scss
@use '@volverjs/style/scss/context' with (
  $color-brand: #45cb85,
  $font-family-sans: "'Inter', sans-serif",   // one quoted string, or it will not compile
  $use-css-layers: true
);
@use '@volverjs/style/scss';
@use '@volverjs/style/scss/themes/dark';
```

Extend a component by deep-merging its map before the library is emitted
(`ctx.$vv-button: map.deep-merge(ctx.$vv-button, (modifier: (success: (…))))`), create
one with `spread-map-into-bem`, and query breakpoints with `@include ctx.bp-up(md)`.
When cherry-picking, alias modules that share a basename (`props/spacing` and
`utilities/spacing` collide) and take `scss/props` whole with any component. Layers are
emitted as `volver.reset`, `volver.utilities`, … Details and signatures in scss.md.

## With @volverjs/ui-vue

Vue components render these classes; `modifiers="primary"` becomes `.vv-button--primary`,
so valid modifier names are the ones in components.md. Utilities go on wrappers and
slots as usual (`<VvCard class="mb-lg">`). Import `@volverjs/style` once in the entry
file and the dark theme next to it; toggle `theme theme--dark` on `<html>` (the library
docs use `useDark({ attribute: 'class', valueDark: 'theme theme--dark', valueLight: 'theme theme--light' })`).

## Before you finish

- Every class you wrote is in the references or was confirmed with grep.
- Responsive prefixes only on groups that support them; spacing uses dynamic tokens.
- Disabled comes from the attribute, and readonly too where HTML has one; elsewhere
  readonly is the modifier. Hints are linked with `aria-describedby`, labels have `for`.
- Dialogs have the `__wrapper` article; range inputs have `--input-range-progress`.
- Colors are tokens, not hex, so the dark theme keeps working.
