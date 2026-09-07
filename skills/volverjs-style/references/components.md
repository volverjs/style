# Components

Verified against `src/settings/components/_vv-*.scss`, `dist/components/*.css` and the
canonical examples in `docs/contents/components/`. Every class named here exists;
markup shown is the documented structure.

## Rules that apply to every component

**Naming.** Block `.vv-{name}`, element `.vv-{name}__{element}`, modifier
`.vv-{name}--{modifier}`. The `vv` prefix follows `$components-prefix`.

**Semantic children replace element classes.** Many elements carry an alias, so the
library styles the natural HTML child and the BEM class is optional. Marked with † in
the tables below. Examples: `.vv-input-text > label` (no `__label` needed),
`.vv-button > svg`, `.vv-card > header`, `.vv-dialog > article`. Elements without an
alias (`__wrapper`, `__content`, `__close`, `__hint` on `<small>`... see tables) need
the class. Using the alias form keeps markup lean; using the class is never wrong.

**States have three equivalent hooks.** For each state the library emits the BEM class
(`.vv-button--disabled`), a bare class (`.vv-button.disabled`) and the natural selector
(`[disabled]`, `:hover`, `[open]`, `[aria-pressed="true"]`...). Use the natural one in
real markup; the classes exist to freeze a look for docs and tests.

| state | natural selector |
|---|---|
| disabled | `[disabled]` or `[aria-disabled="true"]` |
| readonly | `[readonly]` |
| checked / indeterminate | `:checked` / `:indeterminate` |
| open / close | `[open]` / `:not([open])` |
| pressed | `[aria-pressed="true"]` |
| selected | `[aria-selected="true"]` |
| dirty | `:not(:has(*:placeholder-shown))` |
| popover | `[popover]` |
| hover, active, focus-visible, focus-within, target, empty | the pseudo-class itself |
| current (nav, tab) | **class only**: `class="vv-nav__item-label current"` |

**Form components share one pattern.** `vv-input-text`, `vv-textarea`, `vv-select`,
`vv-input-file`, `vv-input-range`: a block `<div>` containing, in order, a direct-child
`<label>`, a `__wrapper` holding the control, and a direct-child `<small class="…__hint">`.
On these components:

- `valid`, `invalid`, `loading`, `floating`, `icon-before`, `icon-after` are **modifier
  classes** on the block. `aria-invalid` is good a11y but styles nothing.
- `disabled` and `readonly` propagate from the attribute on the control through a
  `:has(input[disabled])` rule, so no class is needed. `vv-input-text--disabled` also works.
- Their look comes from the shared `--input-*` tokens (`--input-background-color`,
  `--input-color`, `--input-min-height`, `--input-label-*`, `--input-hint-*`,
  `--input-valid-color`, `--input-invalid-color`); override those to restyle every field
  at once.

## vv-button

Only `a[href]`, `button`, `input[type=button|submit|reset]` receive the block styles; a
`<div class="vv-button">` or an `<a>` without `href` stays unstyled. Icons are direct
children (`svg` or `[data-icon]`), no class needed. Default look is the brand accent.

```html
<button type="button" class="vv-button">Save</button>
<button type="button" class="vv-button vv-button--primary">Primary</button>
<button type="button" class="vv-button vv-button--secondary">Secondary</button>
<button type="button" class="vv-button vv-button--danger">Delete</button>
<button type="button" class="vv-button vv-button--ghost">Ghost</button>
<a href="/docs" class="vv-button vv-button--link">Link</a>

<!-- icon + label; __label only when the text must truncate -->
<button type="button" class="vv-button">
  <svg>…</svg>
  <span class="vv-button__label">Long label that may truncate</span>
</button>

<!-- icon only, round -->
<button type="button" class="vv-button vv-button--icon-only vv-button--rounded" aria-label="Edit">
  <svg>…</svg>
</button>

<button type="button" class="vv-button" disabled>Disabled</button>
<button type="button" class="vv-button vv-button--action" aria-pressed="true">Toggled</button>
```

| elements | modifiers | states |
|---|---|---|
| icon† `> svg, [data-icon]`, label | `primary` `secondary` `danger` `ghost` `link` `static-light` `static-dark` `action` `action-quiet` `icon-only` `rounded` `block` `reverse` `column` `full-bleed` | focus-visible, hover, active, pressed, disabled |

There is no `accent` (it is the default), no `loading`, no `sm`/`lg` size modifier.

## vv-button-group

```html
<div class="vv-button-group" role="group">
  <button type="button" class="vv-button vv-button--secondary">Cancel</button>
  <button type="button" class="vv-button">Confirm</button>
</div>
```

Modifiers: `block` `vertical` `compact`.

## vv-input-text

```html
<div class="vv-input-text">
  <label for="name">Name</label>
  <div class="vv-input-text__wrapper">
    <input id="name" type="text" name="name" placeholder="Jane Doe" aria-describedby="name-hint" />
  </div>
  <small id="name-hint" class="vv-input-text__hint">Shown on your profile</small>
</div>

<!-- icon: unclassed direct child of the wrapper, before or after the input -->
<div class="vv-input-text vv-input-text--icon-before">
  <label for="search">Search</label>
  <div class="vv-input-text__wrapper">
    <svg>…</svg>
    <input id="search" type="search" name="search" placeholder="Search" />
  </div>
</div>

<!-- floating label: label stays outside the wrapper, the input needs a placeholder -->
<div class="vv-input-text vv-input-text--floating">
  <label for="email">Email</label>
  <div class="vv-input-text__wrapper">
    <input id="email" type="email" name="email" placeholder="you@example.com" />
  </div>
</div>

<div class="vv-input-text vv-input-text--invalid">
  <label for="pwd">Password</label>
  <div class="vv-input-text__wrapper">
    <input id="pwd" type="password" name="pwd" aria-invalid="true" aria-describedby="pwd-hint" />
  </div>
  <small id="pwd-hint" class="vv-input-text__hint">At least 8 characters</small>
</div>

<!-- disabled: the attribute is enough -->
<div class="vv-input-text">
  <label for="ro">Code</label>
  <div class="vv-input-text__wrapper"><input id="ro" type="text" value="ABC-123" disabled /></div>
</div>
```

| elements | modifiers | states |
|---|---|---|
| label† `> label`, wrapper, inner, input† `input`, input-before, input-after, number† `input[type=number]`, icon†, icon-after†, actions-group, action, action-chevron, action-chevron-up, hint† `> small`, limit, unit | `icon-before` `icon-after` `valid` `invalid` `loading` `floating` `auto-width` | disabled, readonly, dirty; wrapper: hover, focus-within |

`__unit`, `__limit`, `__actions-group`/`__action` (number stepper, clear button) live
inside the wrapper next to the input. `__inner` is only relevant with `--auto-width`.

## vv-textarea

Same structure as vv-input-text with a `<textarea>` in the wrapper.

| elements | modifiers | states |
|---|---|---|
| label†, wrapper, inner, input† `textarea`, input-before, input-after, icon†, icon-after†, actions-group, hint†, limit | `icon-before` `icon-after` `resizable` `valid` `invalid` `loading` `floating` | disabled, readonly, dirty |

## vv-select

```html
<div class="vv-select">
  <label for="country">Country</label>
  <div class="vv-select__wrapper">
    <select id="country" name="country">
      <option value="">Choose…</option>
      <option value="it">Italy</option>
    </select>
  </div>
  <small class="vv-select__hint">Used for shipping</small>
</div>
```

| elements | modifiers | states |
|---|---|---|
| label†, wrapper, inner, value, input† `select`, input-before, input-after, option†, icon†, icon-after†, action, hint† | `readonly` `dirty` `multiple` `icon-before` `icon-after` `valid` `invalid` `loading` `floating` | disabled; wrapper: hover, focus-within, open |

## vv-checkbox and vv-radio

The block is the `<label>` wrapping the control.

```html
<label class="vv-checkbox">
  <input type="checkbox" name="terms" />
  I accept the terms
  <small>Required</small>
</label>

<label class="vv-checkbox vv-checkbox--switch">
  <input type="checkbox" name="notify" checked />
  Notifications
</label>

<label class="vv-radio">
  <input type="radio" name="plan" value="pro" />
  Pro
</label>
```

| component | elements | modifiers | states |
|---|---|---|---|
| vv-checkbox | input† `> input[type=checkbox]`, hint† `> small` | `readonly` `switch` `valid` `invalid` | disabled; input: checked, indeterminate, focus-visible |
| vv-radio | input† `> input[type=radio]`, hint† | `readonly` `valid` `invalid` | disabled; input: checked, focus-visible |

The switch modifier is `switch`, not `toggle`.

## vv-checkbox-group and vv-radio-group

Identical maps. The block is a `<fieldset>`; vertical is the default (there is no
`--vertical`).

```html
<fieldset class="vv-checkbox-group vv-checkbox-group--horizontal">
  <legend>Channels</legend>
  <div class="vv-checkbox-group__wrapper">
    <label class="vv-checkbox"><input type="checkbox" name="ch" value="email" /> Email</label>
    <label class="vv-checkbox"><input type="checkbox" name="ch" value="sms" /> SMS</label>
  </div>
  <small>Pick at least one</small>
</fieldset>
```

| elements | modifiers |
|---|---|
| legend† `> legend`, wrapper, hint† `> small` | `horizontal` `valid` `invalid` |

## vv-input-range

CSS cannot read the value of a range input, so the filled part of the track comes from
`--input-range-progress` set inline on the block as `(value - min) / (max - min)` in
percent. Without it the track renders empty.

```html
<div class="vv-input-range" style="--input-range-progress: 45%">
  <label for="temp">Temperature</label>
  <div class="vv-input-range__wrapper">
    <input id="temp" type="range" name="temp" min="0" max="40" value="18" />
    <div class="vv-input-range__value">18 <span class="vv-input-range__unit">°C</span></div>
  </div>
  <small class="vv-input-range__hint">Drag to set the target</small>
</div>

<!-- HTML has no readonly range: disable the input and add the modifier -->
<div class="vv-input-range vv-input-range--readonly" style="--input-range-progress: 45%">
  <div class="vv-input-range__wrapper">
    <input type="range" min="0" max="40" value="18" disabled tabindex="-1" />
  </div>
</div>
```

| elements | modifiers | states |
|---|---|---|
| label†, wrapper, input-before, input† `input[type=range]`, input-after, value, unit, hint† | `valid` `invalid` `readonly` | disabled (attribute or `:has(input[disabled])`) |

Tokens: `--input-range-accent-color`, `--input-range-track-color`,
`--input-range-track-height`, `--input-range-thumb-size`, `--input-range-thumb-shadow`.

## vv-input-file

Same label/wrapper/hint skeleton as vv-input-text with `<input type="file">`. Extra
elements build the drop zone and the file list; read
`docs/contents/components/input-file/` or the settings map before using them.

| elements | modifiers | states |
|---|---|---|
| label†, wrapper, inner, input† `input[type=file]`, input-before, input-after, icon†, icon-after†, hint†, drop-area, drop-area-action, preview, progress, list, item, item-name, item-info, item-link, item-icon, item-action, item-remove | `icon-before` `icon-after` `with-progress` `valid` `invalid` `loading` `hidden` `dragging` `square` `circle` | disabled, readonly |

## vv-card

`__picture` goes on the `<img>`, not on a wrapper. `<header>` and `<footer>` direct
children are styled without a class.

```html
<article class="vv-card">
  <header>Title</header>
  <picture><img class="vv-card__picture aspect-photo" src="…" alt="…" /></picture>
  <div class="vv-card__content">Body copy</div>
  <footer class="flex items-center gap-sm">
    <button type="button" class="vv-button vv-button--secondary">Action</button>
  </footer>
</article>

<article class="vv-card vv-card--glass">…</article>
```

| elements | modifiers |
|---|---|
| header† `> header`, picture† `> picture > img`, content, footer† `> footer` | `glass` |

## vv-alert

Icon and title live inside `__header`; the close button is an empty `<button>` whose
glyph is a background image. There is no `__description` or `__action`.

```html
<div class="vv-alert vv-alert--danger vv-alert--dismissable" role="alert">
  <div class="vv-alert__header">
    <svg>…</svg>
    <strong class="vv-alert__title">Operation failed</strong>
    <button type="button" class="vv-alert__close" aria-label="Close"></button>
  </div>
  <div class="vv-alert__content">The server rejected the request.</div>
  <div class="vv-alert__footer">
    <div class="vv-button-group" role="group">
      <button type="button" class="vv-button vv-button--secondary">Retry</button>
    </div>
  </div>
</div>
```

Use `role="alertdialog"` with `aria-labelledby`/`aria-describedby` when the alert has
controls.

| elements | modifiers |
|---|---|
| header, title, content, footer, close, icon, close-mask | `success` `danger` `warning` `info` `accent` `brand` `dismissable` `nowrap` `notification` `callout` `auto-close`; transitions `fade` `fade-inline-end` `fade-inline-start` `fade-block-top` `fade-block-bottom` |

### vv-alert-group

Positioned stacks of notifications. The alerts sit in an inner `<div role="group">`.

```html
<div class="vv-alert-group vv-alert-group--fixed vv-alert-group--top-end">
  <div role="group">
    <div class="vv-alert vv-alert--notification vv-alert--success">…</div>
  </div>
</div>
```

Modifiers: `fixed` `absolute` `reverse` `stack` `full-bleed`, position `top-start`
`top-middle` `top-end` `center-start` `center-middle` `center-end` `bottom-start`
`bottom-middle` `bottom-end`.

## vv-dialog

The `<dialog>` block is the backdrop; the panel is the mandatory `<article>` child
(`__wrapper`). The header holds the title text directly (no `__title`).

```html
<dialog class="vv-dialog vv-dialog--small" id="confirm">
  <article class="vv-dialog__wrapper">
    <header class="vv-dialog__header">
      Delete item?
      <button type="button" class="vv-dialog__close" aria-label="Close"></button>
    </header>
    <div class="vv-dialog__content"><p>This cannot be undone.</p></div>
    <footer class="vv-dialog__footer">
      <div class="vv-button-group" role="group">
        <button type="button" class="vv-button vv-button--secondary">Cancel</button>
        <button type="button" class="vv-button vv-button--danger">Delete</button>
      </div>
    </footer>
  </article>
</dialog>
```

| elements | modifiers | states |
|---|---|---|
| wrapper† `> article`, header† `> article > header`, close, content, footer† `> article > footer` | `small` `fullscreen` `drawer`; transitions `fade-block` `fade-inline` `scale` `slide-inline-end` (pair `drawer` with `slide-inline-end`) | open `[open]`, close `:not([open])` |

## vv-dropdown family

`vv-dropdown` is a popover container (`[popover]`) positioned by script in
`@volverjs/ui-vue`. Its list is a `div[role=menu]` or `div[role=list-box]` (a `<ul>` needs
the `__list` class). Items are `vv-dropdown-action` (buttons) or `vv-dropdown-option`
(selectable, `aria-selected`), grouped by `vv-dropdown-optgroup`.

```html
<div class="vv-dropdown vv-dropdown--rounded" popover id="menu">
  <div role="menu">
    <button type="button" class="vv-dropdown-action">Rename</button>
    <button type="button" class="vv-dropdown-action" disabled>Archive</button>
  </div>
</div>
```

| component | elements | modifiers | states |
|---|---|---|---|
| vv-dropdown | list†, item†, item-first†, item-last†, item-not-last†, search, arrow | `rounded` `block` `bottom` `top` `full-bleed` `dialog` `mobile` | popover |
| vv-dropdown-action | | | disabled, hover, focus-visible, pressed |
| vv-dropdown-option | hint, label | `unselectable` `inert` | disabled, focus-visible, selected |
| vv-dropdown-optgroup | | | |

## vv-nav

```html
<nav class="vv-nav">
  <ul>
    <li><a href="/" class="current">Home</a></li>
    <li><a href="/docs">Docs</a></li>
    <li role="separator"></li>
    <li><button type="button">Sign out</button></li>
  </ul>
</nav>
```

| elements | modifiers | states |
|---|---|---|
| menu† `ul`, item† `li`, item-label† `li > :is(a, button)`, heading-label, separator† `li[role=separator]` | `sidebar` `aside` `tabs` `full` | item-label: hover, current (class only), disabled |

## vv-tab

Panels toggle on `:target` or the `current` class.

| elements | states |
|---|---|
| panel | panel: target |

## vv-accordion

```html
<details class="vv-accordion vv-accordion--bordered">
  <summary>Shipping</summary>
  <div>Delivered in 3 to 5 days.</div>
</details>

<div class="vv-accordion-group vv-accordion-group--condensed">
  <details class="vv-accordion" name="faq">…</details>
  <details class="vv-accordion" name="faq">…</details>
</div>
```

| component | elements | modifiers | states |
|---|---|---|---|
| vv-accordion | summary† `> summary`, content† `> summary + *` | `marker-right` `bordered` `square` | open `[open]`, disabled |
| vv-accordion-group | not-last-child† | `condensed` | |

## vv-table

Plain semantic table, no cell classes needed.

```html
<table class="vv-table vv-table--bordered">
  <caption>Orders</caption>
  <thead><tr><th>Id</th><th>Total</th></tr></thead>
  <tbody><tr><td>1042</td><td>€ 120</td></tr></tbody>
</table>
```

Modifiers: `inline-spacing` `bordered`.

## vv-badge, vv-avatar, vv-avatar-group

```html
<span class="vv-badge vv-badge--success">Paid</span>
<span class="vv-badge vv-badge--outline vv-badge--sm">Draft</span>
<span class="vv-badge vv-badge--action">Tag <button type="button" aria-label="Remove"></button></span>

<img class="vv-avatar vv-avatar--rounded" src="…" alt="Jane" />
<div class="vv-avatar vv-avatar--lg vv-avatar--ring">
  <img src="…" alt="Jane" />
  <sup>3</sup>
</div>

<div class="vv-avatar-group vv-avatar-group--tight">
  <img class="vv-avatar vv-avatar--rounded" src="…" alt="" />
  <img class="vv-avatar vv-avatar--rounded" src="…" alt="" />
</div>
```

| component | elements | modifiers |
|---|---|---|
| vv-badge | button† `> button` | `action` `sm` `rounded` `white` `black` `danger` `success` `warning` `info` `accent` `gray` `outline` `ghost` (brand is the default) |
| vv-avatar | badge† `> sup`, badge-bottom† `> sub`, image† `> img` | `rounded` `square` `bordered` `md` `lg` `transparent` `surface` `danger` `success` `warning` `info` `accent` `gray` `ring` |
| vv-avatar-group | item† `> *`, item-not-first† | `tight` `relaxed` |

## vv-tooltip, vv-progress, vv-skeleton, vv-breadcrumb, vv-text

```html
<button type="button" class="vv-button">
  Save
  <span class="vv-tooltip vv-tooltip--top" role="tooltip" inert>Ctrl+S</span>
</button>

<progress class="vv-progress" value="40" max="100"></progress>
<progress class="vv-progress"></progress> <!-- indeterminate -->

<div class="vv-skeleton"><div class="vv-skeleton__item"></div></div>

<nav class="vv-breadcrumb" aria-label="Breadcrumb">
  <ol>
    <li><a href="/">Home</a></li>
    <li><a href="/docs">Docs</a></li>
    <li>Buttons</li>
  </ol>
</nav>

<h1 class="vv-text vv-text--headline vv-text--size-1">Title</h1>
<p class="vv-text vv-text--copy">Body copy</p>
<a href="#" class="vv-text vv-text--link">Read more</a>
```

| component | elements | modifiers | states |
|---|---|---|---|
| vv-tooltip | | `visible` `top` `bottom` `left` (default inline-end) | |
| vv-progress | | | indeterminate |
| vv-skeleton | item | | |
| vv-breadcrumb | list† `> ol`, item† `li:has(a)`, item-active† `li:not(:has(a))`, link† `li > a` | `multiline` | link: hover, focus-within, active |
| vv-text | | `headline` `copy` `link` `quote` `size-1`..`size-6` | link: focus-visible, hover, active, disabled |
