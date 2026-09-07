# Design tokens, CSS-only customization, dark theme

All tokens are CSS custom properties declared on `:where(:host, :root, .theme)`, which
has zero specificity: a plain `:root { … }` in your stylesheet overrides any of them
without `!important`. The machine-readable copy is
`node_modules/@volverjs/style/design-tokens.json` (keys `volver` and `volver-dark`,
entries shaped `{ value, type }`; read it by path, it has no `exports` entry).

## Token groups

| Group | Custom properties |
|---|---|
| Palette | `--color-{brand,accent,success,danger,info,warning,gray}` each with `-lighten-1..5` and `-darken-1..5` |
| Text | `--color-word`, `--color-word-1..5` (progressively fainter) |
| Surfaces | `--color-surface`, `--color-surface-1..5` (progressively deeper), `--color-surface-{brand,accent,success,danger,info,warning}` (tinted) |
| Overlays | `--color-alpha`, `--color-alpha-1..5`, `--color-shadow`, `--color-backdrop`, `--color-transparent`, `--color-white`, `--color-black`, `--color-scheme` |
| Spacing | `--spacing-{0,px,1..384 static steps}`, dynamic `--spacing-{xs,sm,md,lg,xl}` |
| Font family | `--font-sans`, `--font-serif`, `--font-mono` |
| Font weight | `--font-{thin,extralight,light,normal,medium,semibold,bold,extrabold,black}` |
| Font size | `--text-{6..128 static steps}`, `--text-smaller`, `--text-larger`, dynamic `--text-{xs,sm,md,lg,xl}` |
| Line height, tracking | `--leading-{none,tight,snug,normal,relaxed,loose}`, `--tracking-{tighter,tight,normal,wide,wider,widest}` |
| Borders | `--border` (1px), `--border-{0,2,4,8}`, `--rounded`, `--rounded-{none,sm,md,lg,xl,xxl,xxxl,full}` |
| Breakpoints | `--breakpoint-{xs,sm,md,lg,xl,xxl,xxxl}` (no xxs); `--breakpoint-key` and `--breakpoint-value` are re-declared inside each media query and always hold the current breakpoint |
| Layout | `--z-{1,sticky,fixed,dropdown,modal-backdrop,modal,confirm-backdrop,confirm,popover,tooltip,toast,notification-alert,auto}`, `--aspect-*`, `--w-*`, `--h-*` |
| Effects | `--shadow`, `--shadow-{sm,md,lg,xl,2xl,inner,none}`, `--opacity-{0..100 step 5}`, `--blur*`, `--brightness-*`, `--contrast-*`, `--saturate-*` |
| Motion | `--duration-{75..1000}`, `--ease-{linear,in,out,in-out}`, `--transition-{none,all,colors,opacity,shadow,transform}`, `--transition-property-*`, `--animation-{none,indeterminate,progress-indeterminate,spin,ping,pulse,bounce,shine,clippath}` |
| Backgrounds | `--bg-*` (patterns and glyphs such as `--bg-close`, `--bg-chevron`), `--gradient-*` |
| Form fields | `--input-*`: `--input-background-color`, `--input-color`, `--input-min-height`, `--input-gap`, `--input-font-size`, `--input-placeholder-color`, `--input-label-color`, `--input-label-font-size`, `--input-hint-color`, `--input-valid-color`, `--input-invalid-color`, `--input-range-*` … |
| Components | `--vv-{block}-{attribute}`, `--vv-{block}-element-{element}-{attribute}`, `--vv-{block}-modifier-{modifier}-{attribute}`, `--vv-{block}-state-{state}-{attribute}` |

Motion tokens (`--duration-*`, `--transition-*`) are `0s`/`none` unless the user has
`prefers-reduced-motion: no-preference`; motion respects the OS setting for free.

Component properties follow the settings map one to one: every key in
`src/settings/components/_vv-button.scss` becomes `--vv-button-…`. Examples from the
compiled output: `--vv-button-background`, `--vv-button-border-color`,
`--vv-button-state-hover-background`, `--vv-button-element-icon-block-size`,
`--vv-button-modifier-primary-background`. There is no unprefixed `--button-background`.

## CSS-only customization

Brand colors derive their ten shades from the base with relative color syntax
(`hsl(from var(--color-brand) h s calc(l * 1.1))`), so one override recolors everything.
There are no `--color-brand-hue/saturation/lightness` channels in the default build
(they exist only when the library is compiled with `$use-color-mix: false`).

```css
:root {
  --color-brand: #45cb85;
  --color-accent: #e040fb;
  --font-sans: 'Inter', ui-sans-serif, system-ui, sans-serif;
  --rounded: 0.5rem;
}

/* one component, everywhere */
:root {
  --vv-button-border-radius: var(--rounded-full);
  --vv-button-font-weight: var(--font-medium);
}

/* a new variant without touching SCSS */
.vv-button--success {
  --vv-button-background: var(--color-success);
  --vv-button-border-color: var(--color-success);
  --vv-button-state-hover-background: var(--color-success-darken-1);
}

/* all form fields at once */
:root {
  --input-min-height: var(--spacing-44);
  --input-background-color: var(--color-surface);
}

/* scoped to a region */
.marketing-hero {
  --color-brand: #ff5722;
}
```

## Dark theme

The dark theme is a separate stylesheet, never part of the main bundle. Load it after
the base:

```css
@import '@volverjs/style';
@import '@volverjs/style/themes/dark';
```

```scss
@use '@volverjs/style/scss';
@use '@volverjs/style/scss/themes/dark';
```

Activation is class based. There is no `data-theme` attribute.

| Markup | Result |
|---|---|
| nothing (or `class="theme"`) | follows `prefers-color-scheme` |
| `<html class="theme theme--dark">` | forced dark |
| `<html class="theme theme--light">` | forced light |
| `<section class="theme theme--dark">` | dark for that subtree only |

Both classes are required for forcing: the emitted selectors are
`:where(.theme.theme--dark)` and, for the automatic branch,
`:where(:host, :root, .theme):not(.theme--light)` inside
`@media (prefers-color-scheme: dark)`.

In a Vue app the reference implementation is `docs/App.vue` in the library repo:
`useDark({ attribute: 'class', valueDark: 'theme theme--dark', valueLight: 'theme theme--light' })`.

Dark values override the same custom properties (`--color-word`, `--color-surface-*`,
`--input-background-color`, `--vv-button-modifier-primary-background` …), so custom CSS
written against tokens adapts automatically. Custom CSS written with hard-coded colors
does not; keep colors as `var(--color-…)`.
