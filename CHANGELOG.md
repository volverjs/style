# Changelog

All notable changes to this project will be documented in this file.

## [0.1.28] - 2026-09-16

### Added

* `self-first-line`, a flex utility that aligns an icon with the first line of a label that wraps instead of with the centre of the whole block. `align-self: center` centres the icon on the flex line, which is the whole block once the label wraps, and `align-self: flex-start` drops the half leading that sits above the first line, so both need a hand written offset to look right. The class starts the icon at the top and pushes it down by half the difference between the line box and the icon, `calc((1lh - var(--icon-size, 1em)) / 2)`, which holds at any font size and any icon size. `--icon-size` is the rendered size of the icon and defaults to the `1em` an inline SVG carries. The offset itself is never zero: on a label that fits on one line it places the icon exactly where `align-self: center` would, because the first line is then the whole block. That is why the class is safe to apply at every width and has no breakpoint variants while the rest of `align-self` does. It moves the icon with `transform` and not with `translate`, because several components move their own elements with `translate` and the two would overwrite each other.
* `vv-badge` gains an `icon` element. The block set a `gap` for an icon and centred whatever it was given, but never sized it, so an icon survived only if it arrived with its own dimensions. Its `_alias` is a descendant selector rather than a child one, because the icon of an action badge sits inside `.vv-badge__button`, and it excludes an `<svg>` nested inside another `<svg>`, which a composite icon draws itself.
* `$input` gains a `control` sub-map, so `--input-control-size` names the block size of a checkbox, a radio and the pill of a switch: the side of the square, and the figure the offset that keeps the control on the first line of its label is derived from. The size used to be written twice per component, once as `min-width` and once as `height`, and the switch spelled a third value of its own. The declarations that read it are plain declarations, which removes `--vv-checkbox-element-input-min-width`, `--vv-checkbox-element-input-height`, `--vv-radio-element-input-min-width`, `--vv-radio-element-input-height` and `--vv-checkbox-modifier-switch-element-input-height`: a `var()` inside a generated custom property is substituted at the root, so the switch could not have overridden the token through them. The switch declares `--input-control-size: var(--spacing-24)` on the control and keeps its own `min-width`, because its box is a pill and not a square, and that one reads no token of the control, so `--vv-checkbox-modifier-switch-element-input-min-width` stays.
* `vv-checkbox` and `vv-radio` gain a `label` element, aliased on `> span:not([class])`, that keeps the label beside the control with `flex: 1` and `min-width: 0`. The alias is there for plain markup and stops at a span that carries a class, because a badge or an icon written next to the label is a span too and `flex: 1` would stretch it: anything with a class of its own takes `vv-checkbox__label` to be the label. `@volverjs/ui-vue` renders that span from the release that pairs with this one; markup written by hand needs it too, and a bare text node keeps behaving as it did.
* `vv-nav` gains an `icon` element, and `item-label` a `gap`. A voice had no gap and no icon element at all, so an icon touched the label and was sized by nothing.

### Fixed

* A badge icon that did not carry its own `width` and `height` was not drawn at all. An `<svg>` with a `viewBox` and no dimensions is 0 by 0 in a flex container, and an `[data-icon]` element with a `background-image` has no intrinsic size either, so both collapsed and the badge closed up around the gap: 40.7px wide instead of 51.9px, with nothing where the icon should have been. The new `icon` element gives them `inline-size: 1lh`, `block-size: auto` and `aspect-ratio: 1`, so the box is a square the height of the line box, and `background-size: contain` with a centred, non repeating position, so an icon painted as a background is scaled into that square instead of being cropped at its natural size. An icon that already measures `1em`, which is what Iconify emits and what the documentation uses, comes out at the same 11.2px it had before.
* The icon of an action badge sat above the icon of every other badge. `.vv-badge__button` was a block, so the `<svg>` inside it was an inline box on a baseline, and with `line-height: var(--leading-none)` the descent of the font pushed the glyph up: 0.6px above where a badge that holds its icon directly puts it, and 1.1px above the centre of the capitals next to it. The button is now a flex container that centres its content, which puts the icon exactly where a plain badge puts it.
* The title of an alert was truncated without an ellipsis as soon as it was longer than the alert. `.vv-alert__header` was `flex-shrink: 0`, so it kept its max-content width, ran past the edge of the block and was cut by the `overflow: hidden` of the alert: a 500px header inside a 300px alert lost 245px of title, and the `text-overflow: ellipsis` it carries could not show because `text-overflow` needs `white-space: nowrap`, which only the `nowrap` modifier sets. The header now has `min-width: 0` and shrinks, so the title wraps inside the alert, and the block and the header align their rows at `flex-start`, because a wrapped title makes the header the tall item and centring the content against it reads as detached. `--vv-alert-element-header-flex-shrink` is gone, `--vv-alert-element-header-min-width` takes its place, and `--vv-alert-align-items` and `--vv-alert-element-header-align-items` go from `center` to `flex-start`.
* The icon of an alert had no size of its own and was not aligned to the first line of a wrapping title. It now measures `1.1em` with `aspect-ratio: 1`, like the icon of a button, and is centred on the first line with `translate: 0 calc((1lh - var(--alert-icon-size)) / 2)`. `--alert-icon-size` is declared on the icon, and both the declarations that read it are emitted as plain declarations instead of going through the generated `--vv-*` properties: a `var()` inside a custom property is substituted where that property is declared, so wrapping them would look the token up at the root, where it does not exist, and drop both declarations. It is the same reason `vv-input-range` writes its fill as a plain declaration.
* The icon of a navigation voice was crushed and sat below the first line of its label. Nothing sized it and nothing kept it from shrinking, so once the label wrapped the flex algorithm took the space out of the icon: 15.4px of icon came out 5.1px wide at a 150px sidebar, 7px at 190px and 8.4px at 220px, squeezed to a sliver while keeping its full height, and centred on the whole block, 17px below the centre of the first line. The new `icon` element gives it `flex-shrink: 0`, a square box of `1.1em` and the first-line offset. It carries `align-self: flex-start` rather than moving the whole voice to `flex-start`, so a counter badge next to the label stays centred on the voice as before. The selector reads the structure and not the role: every `<svg>` or `[data-icon]` that is a direct child of the voice is treated as its icon, a trailing chevron included, and goes to the first line too. On a voice of one line that is where it already sat.
* The `full` modifier of a navigation put the icon of a voice back on the baseline. `vv-nav--full` made `item-label` a block, so that `text-align: center` could centre the label, which takes the icon out of the flex context: `align-self` became inert, the `gap: 0.5ch` between the icon and the label was dropped, and the offset that centres the icon on the first line turned into a nudge of its own, 2.6px above the centre of the line at the default leading and 4.4px below it with `leading-loose`. The modifier keeps `display: flex` and centres with `justify-content: center` instead, which centres the icon and the label together and leaves `text-align: center` for the lines of a label that wraps. `--vv-nav-modifier-full-element-item-label-display` goes from `block` to `flex`, and `--vv-nav-modifier-full-element-item-label-justify-content` joins it. A tab that holds only a label, which is what the documentation shows, comes out at the same width and the same height as before, with its label centred to within 0.02px.
* A long label in a `vv-checkbox` or a `vv-radio` did not sit beside its control: it dropped below it, at full width, leaving the control dangling on its own row. The block is `flex-wrap: wrap` and the label was an anonymous flex item, whose hypothetical main size is its max-content width: an item that does not fit the remaining space starts a new flex line, so any label longer than the field wrapped as a block instead of as text. The centre of the control ended up 22px above the centre of the first line of text, 24px for a switch. With the label in an element that takes `flex: 1`, it stays on the line and wraps as text, and the control is offset onto its first line. This is the one place in the library where CSS alone could not do it: a text node has no selector.
* An icon painted as a `background-image` on a `[data-icon]` element inside a button was drawn at its natural size, anchored to the top left corner of a box that is 1.1em wide and one line tall, so it was cropped and off centre. The `_alias` of the icon has always claimed to take that shape. It now gets the same `background-size: contain` with a centred, non repeating position as the badge. The three declarations are inert for an `<svg>`, which carries no background.
* The hint of a dropdown option was aligned by its bottom edge instead of by its baseline. `align-items: flex-end` lines up the bottom edges of two items set at different font sizes, which drifts with the descenders of the face; `baseline` is what puts the label and the hint on the same line of text, and is what the rule meant to say.
* The icon of an action badge sat further from its label than the icon of any other badge. The gap was `calc(0.5ch + 0.5em)` while the button around the icon widens its hit area toward the label with `margin: 0 -0.5em` and puts the drawing back with an equal `padding`, so the extra half em only pushed the icon away: 9.1px from the label against the 3.5px of a plain badge, and asymmetric, since the distance to the edge stayed 5.6px on both. The gap is now `0.5ch`, which is the badge's own, and the geometry of an action badge mirrors a plain one.

### Changed

* Everything that derived the height of a line by hand now reads it with `1lh`. The icon of a button took `min-height: calc(1em * var(--button-line-height))` so that a button with only an icon stands as tall as one with a label, and the `action` and `action-quiet` modifiers repeated the figure as `calc(1em * var(--leading-snug))` for both dimensions, a third and fourth copy of a line height they had already set two lines above. The marker of an accordion spelled `calc(var(--leading-normal) * 1em)` three times, once for the space it reserves in the padding of the summary and once for each side of its square. Each of these is now `1lh`, which is the line box of the element that reads it, so there is one source of truth instead of four and the figure cannot drift from the `line-height` it is supposed to match.

  The two forms compute to the same value as long as nothing overrides `line-height` past the token the map reads, which is why the rendering of every component in the documentation is unchanged. They part company as soon as a consumer sets `line-height` directly, and a utility class is the ordinary way to do that: with `leading-loose` on a button the line box became 32px while the icon box stayed at 24px, so a button with only an icon came out 42px tall next to the 50px of its siblings in the same toolbar. With `1lh` the three agree again.

  `lh` is resolved where it is read and not where it is written, including when it travels through a custom property declared on an ancestor, so `--accordion-marker-size` stays a token on the block and still follows the line box of the summary, which is the element that consumes it. This is the opposite of how a `var()` inside a custom property behaves, and it is what lets these declarations keep going through the generated `--vv-*` properties. The unit needs Safari 16.4, Firefox 120 or Chrome 133.

* The alert examples in the documentation carry `class="vv-alert__icon"` on the icon of the header, which is what `@volverjs/ui-vue` renders and what the `icon` element of the map has always been written for. The plain markup in the documentation left the class out, so it was the one place where the icon of an alert was styled by nothing at all. The icons inside the buttons of the `alert-dialog` footer are left as they are.
* `package.json` declares a `browserslist`, and the README says what sets it: Chrome and Edge 133, Firefox 128, Safari and iOS Safari 16.4. Two features draw that line. Relative Color Syntax, the default for colour shades, needs Safari 16.4 and Firefox 128 and can be turned off with `$use-color-mix: false`; the `lh` unit needs Chrome 133 and cannot. Until now the threshold was implicit and `postcss-preset-env` compiled against its own defaults, which are looser than anything this library can actually run on.

  Declaring it changes the compiled CSS beyond the components touched above, always by removing work that is no longer needed: `-moz-` prefixed declarations drop from 304 to 62, `system-ui` is no longer expanded into a stack of named families in `--font-sans`, `:not(html):not(iframe):not(canvas)...` in the reset compiles to a single `:not(html,iframe,canvas,...)`, `word-wrap` is emitted as `overflow-wrap`, the `background-color: #0000` fallback before `initial` is gone, and `color: unset` on `::placeholder` is no longer rewritten to `color: inherit`, which for an inherited property is the same value. `volver.css` loses 14.5 kB.

## [0.1.27] - 2026-09-09

### Fixed

* Three places in the BEM generator suffixed a selector list as if it were a single selector. A list glued with commas reaches its last entry alone: the suffix lands there, and every entry before it stays in the rule bare, matching more than it was meant to or nothing at all. Each of them now walks the list and suffixes one entry at a time.

  `spread-map-into-control-states` appended the `_alias` of an element to its BEM selector with `list.append`, and a list of one has no separator, so Sass fell back to a space and the two compiled to a descendant selector instead of two alternatives: the `:has()` rule for a state on an aliased element came out as `.vv-input-text:has(input[disabled]) .vv-input-text__input .vv-input-text:has(input[disabled]) input`, four levels deep and matching nothing, and its `state` and `pseudo` variants inherited the same chain. The override the rule carried was dropped rather than applied. The three selectors now pass through `list-to-string`, the way the rest of the generator emits a selector list.

  `spread-map-into-states` interpolated the alias whole while it walked the block selectors one by one. Under a state of the block, where the parent expands to four selectors, the alias arrives as four selectors too, so `.vv-select__option, select > option.checked` put the state on the last one and left the others as unconditional element selectors, repeated once per block selector. Block and alias are built side by side by `spread-map-into-elements`, one entry per selector of the parent, so they are now walked by index and each alias is paired with the block selector it was nested under.

  `spread-map-into-breakpoints` compounded the block onto the modifier as `#{$modifier}#{$block}`. A modifier is a single selector, but a state and a transition hand down their whole selector list, so `state.<name>.breakpoint` scoped only its last entry to the block and `transition.<name>.active.breakpoint` only its second. The two are now compounded pair by pair.

  No component map in the library reaches any of the three branches, so `volver.scss` and the dark theme compile identical byte for byte: every element carrying a `state` or `pseudo` map under a state of the block is one without an alias, and the only `breakpoint` maps sit under a modifier or under an element, where the modifier is empty or a single selector.

## [0.1.26] - 2026-09-07

### Added

* `vv-input-range`, a slider for a numeric value between known bounds, with the value picked shown next to the track. Elements are `label`, `wrapper`, `input-before`, `input`, `input-after`, `value`, `unit` and `hint`, modifiers are `valid`, `invalid` and `readonly`, and the `disabled` state also applies through `:has(input[disabled])`, so plain markup is styled without the modifier class. A range input takes no `readonly` attribute. The recommended markup disables the native control and adds `vv-input-range--readonly`, which restores the read-only look: full opacity, the default cursor and a muted accent. `vv-checkbox` and `vv-select` resolve their own missing `readonly` the same way.
* `$input` gains a `range` sub-map, so a slider is themed together with the other fields: `--input-range-accent-color`, `--input-range-track-color`, `--input-range-track-height`, `--input-range-thumb-size`, `--input-range-thumb-shadow`, `--input-range-thumb-shadow-hover` and `--input-range-progress`.

  CSS cannot read the value of a range input, so the filled part of the track is drawn from `--input-range-progress`, the share of the distance between `min` and `max`, which the consumer writes on the block element. Every declaration reading one of these tokens is emitted as a plain declaration instead of being wrapped in the generated `--vv-input-range-*` custom property: a `var()` inside a custom property is substituted where that property is declared, so wrapping them would freeze the fill and the accent at the `:root` values and neither the progress written on the block nor the `valid`, `invalid`, `readonly` and `disabled` overrides would move. It is the same reason `vv-input-text` writes `[padding-inline]` around `--input-spacing-left`.
* The BEM generator accepts the pseudo-elements of a range input: `-webkit-slider-runnable-track`, `-webkit-slider-thumb`, `-moz-range-track`, `-moz-range-progress` and `-moz-range-thumb`.
* `spread-map-into-control-states`, in the BEM generator: it re-applies the `state` maps of a field component on the attribute of the native control it wraps, through `:has()`, block first and then element by element. The state maps of a wrapper component compile to selectors that can never match (`.vv-input-text:disabled` is a `div`), so `vv-input-text`, `vv-textarea`, `vv-select` and `vv-input-file` each carried their own copy of those eighty-odd lines, differing in the control and in the state list alone. They now call the mixin, which compiles byte for byte to what they emitted before, and `vv-input-range` is not a fifth copy. `$except-modifiers` covers the components that spell readonly as a modifier because they freeze the control with the disabled attribute: without it the hook would dim a readonly field, and source order would not settle it, because `:has()` carries the specificity of its argument.
* `vv-dialog` gains a `drawer` modifier and a `slide-inline-end` transition: a side panel anchored to the inline end, full width below `sm` and `min(75dvw, 32rem)` above it. Its header and footer are flat, because the filled bands read as heavy on a panel that spans the whole height, and the footer keeps its divider, because the content above it scrolls. The dialog example in the styleguide offers both.
* `--direction`, the sign of the inline axis: `1` where it runs left to right, `-1` where it runs the other way. CSS has logical properties for the box, but none for `translate`, `rotate` or `scale`, so a component that moves an element along the inline axis multiplies its offset by this token instead of naming a physical direction. It is declared on the `dir` attribute rather than through `:dir()`, so an island of one direction inside a document of the other flips with its container. Its default sits on the document root alone, and not on the `:host` and `.theme` scopes the other props share: those inherit a direction from their ancestors, and re-declaring the default there would replace it, so a themed section of a right-to-left document would move its components the other way. Every declaration reading the token passes a `1` fallback, so a cherry-picked component keeps working without `props/layout`.

### Changed

* Development dependencies updated, among them `stylelint` to 17.15.0, `sass-embedded` to 1.104.0, `vite` to 8.2.2, `postcss-preset-env` to 11.5.2, `markdown-it-anchor` to 10.0.0, `vue` to 3.5.42 and `vue-router` to 5.3.1. `eslint` becomes a direct development dependency instead of being resolved through the plugins that peer on it, and `packageManager` moves to pnpm 12.3.4.

### Fixed

* Everything that moves along the inline axis moved toward the physical right, whatever the writing direction, so in a right-to-left document a component anchored by a logical property drifted away from where it was anchored. `vv-dialog` slid its `fade-inline` and `slide-inline-end` panels in from the wrong side, `vv-alert` faded `fade-inline-end` and `fade-inline-start` toward the wrong edge, `vv-tooltip` placed itself correctly with `inset-inline` and then pushed itself into the anchor with a physical offset while its arrow kept pointing away from it, and the knob of a `vv-checkbox--switch` sat on a physical `inset` and travelled the wrong way. Each of these now multiplies its offset by `--direction`, the arrow of a tooltip is mirrored with `scale` so it keeps pointing at the anchor, and the knob of a switch sits on `inset-inline`. In a left-to-right document every one of these declarations computes to the value it had before.

  They are emitted as plain declarations, which removes the generated custom properties that used to wrap them: `--vv-dialog-transition-fade-inline-{enter-from,leave-to}-element-wrapper-translate`, `--vv-dialog-transition-slide-inline-end-inert-element-wrapper-translate`, `--vv-alert-transition-fade-inline-{end,start}-{enter-from,leave-to}-translate`, `--vv-tooltip-translate` with its `modifier-{top,bottom,left}` and `pseudo-after` variants, and `--vv-checkbox-modifier-switch-element-input-{state-checked,state-indeterminate}-pseudo-after-translate`. A `var()` inside a custom property is substituted where that property is declared, so wrapping these would read `--direction` at the `:root` and freeze it there, and an island of one direction inside a document of the other would not turn. It is the same reason `vv-input-range` writes its fill as a plain declaration. The switch swaps `--vv-checkbox-modifier-switch-element-input-pseudo-after-inset` for `-inset-block` and `-inset-inline`.
* `vv-dialog` read `var(--rounded-0)` for the square corners of the `fullscreen` modifier, a token that does not exist. The declaration was invalid at computed-value time, which resolves `border-radius` to its initial `0`, so it worked by accident. It is `var(--rounded-none)`, the token the rest of the library uses, and the new `drawer` modifier follows.
* `spread-map-into-attrs` reused `$original` and `$key` for every nested map it walked. Sass assignment reaches the enclosing scope, so from the second key onwards a lookup landed in the map of the previous one: inside a `pseudo` map under a `state` or a `modifier`, the first pseudo-element reassigned the custom property of the component, while the ones after it emitted a spurious `content: ""` and a direct declaration, which bypasses the override by custom property that `$use-custom-props-for-components` exists for. The test for a `pseudo` map is now made on the map key instead of the postfixed name too, so a `pseudo` map nested one level down is no longer spread as plain declarations on the parent selector. No map in the library reaches either branch, the new `vv-input-range` one included: compiled with this branch in place, `volver.scss` and the dark theme are identical byte for byte before and after the change.

## [0.1.25] - 2026-08-03

### Added
* `popover` and `popover-open` states in the BEM generator: a component map can now style an element promoted to the top layer through the Popover API. They compile to `[popover]` and `:popover-open` alongside the usual `--state` and `.state` selectors.
* `vv-dropdown` neutralizes the user agent styles applied to `[popover]` elements (`inset`, `margin`, `padding`, `border`, `overflow`, `background`, `color`), so a dropdown promoted to the top layer keeps the coordinates set by its positioning library instead of being centered in the viewport.

### Changed
* **`--z-dropdown` moved from `1000` to `1025`**, above `--z-sticky` (`1010`) and `--z-fixed` (`1020`). A dropdown anchored to a fixed header or to a sticky toolbar has to cover it, and it was the only floating layer sitting below the app chrome: `--z-popover` (`1070`) and `--z-tooltip` (`1080`) were already above it. Layouts that relied on a dropdown being painted under a fixed header need to raise that element instead.

## [0.1.24] - 2026-06-15

### Added
* **CSS Relative Color Syntax support**: New color generation system using native CSS `hsl(from color h s calc(...))`. Brand/accent colors use proportional scaling (`l * 1.1`), while surface/word colors use fixed steps (`l + 12`). This significantly reduces the number of CSS variables, improving Chrome DevTools inspector performance.
* **CSS `@layer` support**: Optional cascade layers for better CSS specificity management.
* **Components without CSS custom properties**: Option to generate components with hardcoded values instead of CSS variables for maximum performance.
* New configuration options:
  - `$use-color-mix: true` - Enable/disable Relative Color Syntax mode (default: `true`)
  - `$use-css-layers: false` - Enable/disable CSS @layer cascade management (default: `false`)
  - `$layer-order` - Define layer priority order
  - `$layer-prefix` - Prefix for layer names (default: `volver`)
  - `$use-custom-props-for-components: true` - Enable/disable CSS variables in components (default: `true`)
* New color functions: `relative-color-value()`, `color-mix-shades-map()`, `color-mix-darken-map()`, `color-mix-lighten-map()`, `color-mix-alpha-map()`
* `contrast` filter props (`--contrast-*`) and utility classes (`.contrast-*`).
* `design-tokens.json` is now regenerated on build and shipped with the package.

### Changed
* Migrated `if()` function calls to new Sass CSS-compatible syntax (`if(sass($condition): $value; else: $fallback)`)
* Color shades now use single `--color-{name}` variable with Relative Color Syntax instead of separate `-hue`, `-saturation`, `-lightness` variables
* Updated box-shadow, glass effects, and component modifiers to use modern CSS color functions
* `.transition-*` utilities now use the `--duration-*` / `--ease-*` custom properties so they react to theming.

### Fixed
* Reduced CSS output size and number of CSS custom properties for better browser DevTools performance
* Invalid `flex-wrap: no-wrap` value in `vv-breadcrumb` and `vv-dialog`.
* `:export` color tokens not being emitted due to a wrong type check.
* Aligned focus and disabled states between `vv-avatar`, `vv-radio` and `vv-tab`.

## [0.1.23] - 2025-10-21

### Fixed
* Add `list-style-type: none` for `vv-accordion` items (ios safari issue).

## [0.1.22] - 2025-09-08

### Fixed
*  Dependencies updates.

## [0.1.21] - 2025-07-10

### Fixed
*  Default `$breakpoints` for mixins;
*  Dependencies updates.

## [0.1.20] - 2025-07-10

### Fixed
*  Dependencies updates.

## [0.1.19] - 2025-05-22

### Fixed
*  Select and textarea icon positioning;

## [0.1.18] - 2025-05-22

### Fixed
*  Dependencies updates;

## [0.1.17] - 2025-02-26

### Fixed
*  `vv-select` readonly with loading;

### Added
*  `vv-nav__item-label` disabled state;

## [0.1.16] - 2025-02-06

### Fixed
*  Border width for `vv-card` component;

## [0.1.15] - 2024-11-08

### Added
*  Breakpoints for `min-w`, `max-w`, `min-h`, `max-h`, for example `md:min-w-288` or `xl:max-h-56`;

## [0.1.14] - 2024-10-18

### Fixed

*  Remove `@import` statements;
*  Input `label` display property;
*  `string.unquote()` function;

### Added

*  `$preflight` variable to disable `preflight` module;

## [0.1.13] - 2024-10-09

### Fixed

*   Components classes duplication;
*   Remove alerts for Firefox `:has()` lack of support;

### Added

*   `bp-up`, `bp-down`, `bp-only` and `bp-between` shorthand for `breakpoint` mixin;

## [0.1.12] - 2024-10-04

### Fixed

*   `vv-alert` auto close radius;
*   From `transform` to `translate`, `rotate` and `scale` separated properties;
*   Mobile improvements;
*   A11y review;
*   Update figma design tokens;
*   `bordered` modifier for `vv-table`;
*   Add `min-w-{spacing}` and `min-h-{spacing}` utilities;
*   `breakpoint` for states;
*   replace deprecated `sass` functions;

### Changed

*   `vv-nav__divider` is now `vv-nav__separator`.

### Added

*   `.text-balance` utility;
*   `user-select` utilities;
*   `vv-input-file` component.

## [0.1.11] - 2023-05-24

### Added

*   `vv-dropdown` `mobile` modifier

### Fixed

*   `vv-select__value` element. 

## [0.1.10] - 2023-05-11

### Added

*   `vv-input-text__unit` element. A unit label for text input;
*   `vv-accordion` square modifier;
*   `vv-dropdown` docs;
*   `vv-dropdown-optgroup` component;
*   `vv-alert-group` component;
*   `vv-alert` notifications and transitions;
*   `vv-accordion-group` condensed modifier.
  
### Fixed

*   `wrap-with-where` fix to work properly with List and Map of selectors;
*   `breakpoint` keyword in components maps;
*   `vv-table` empty caption;
*   `vv-alert` colors accessibility;
*   `loading` state for inputs has more accessible colors.

### Removed

*   `vv-toast` component;

## [0.1.8] - 2023-02-03

### Added

*   `vv-dropdown-option` for vv-dropdown combobox;
*   `base.css` style with reset and props.

### Fixed

*   `.container` utility and docs;
*   `vv-dropdown-action` for vv-dropdown menus.


## [0.1.7] - 2023-02-01

### Fixed

*   `vv-dropdown` search input, arrow and position;
*   `vv-input-text` type date placeholder align on Safari;
*   `transition-*` utilities and props;
*   `translate-*` utilities now works on both x and y axis.

### Added

*   `vv-avatar-group` block for group of avatars;
*   `vv-avatar` with sub `vv-badge`;
*   `vv-avatar--{color}` modifiers;
*   `vv-avarar--bordered` modifier;
*   `vv-avatar--ring` modifier;
*   `vv-avatar--square` modifier;
*   `vv-dropdown-action` block for actions inside dropdowns;
*   `vv-badgte--action` modifier for actions inside badges.

### Changed

*   `vv-input-text`, `vv-textarea` and `vv-select` now have a `*--icon-after` element and modifier that replace the `*--icon-right`.

## [0.1.6] - 2023-01-18

### Fixed

*   `vv-input-text` fix floating modifier and label alignment;
*   `vv-select` fix floating modifier;
*   `vv-textarea` fix floating modifier.

### Added

*   `vv-select` multiple modifier;
*   `@spread-map-into-modifiers` mixin now support nested modifiers.

## [0.1.5] - 2023-01-18

### Fixed

*   `vv-button` min-height with `vv-button--icon-only` modifier;
*   `vv-input-text`, `vv-textarea` and `vv-select` wrapper min-height.

## [0.1.4] - 2023-01-17

### Fixed

*   `translate` utilities;
*   `rotate` utilities;
*   `origin` utilities;
*   `scale` utilities;
*   `table` utilities specificity;
*   `vv-button` spacing in `rem`;
*   `eslint`, `eslint-plugin-vue`, `glob` and `vite-plugin-stylelint` updates;
*   `vv-button--icon-only` modifier.

## [0.1.3] - 2023-01-09

### Added

*   `translate` utilities;
*   `rotate` utilities;
*   `origin` utilities;
*   `scale` utilities;
*   `table` utilities;
*   `border-collapse` and `border-separate` utilities;
*   `vv-accordion-group` component.

## [0.1.2] - 2023-01-04

### Added

*   Docs site;
*   `saturation` utility and custom property;
*   `cursor` utilities and custom properties;
*   `vv-skeleton` component;
*   `vv-tab` component;
*   `vv-nav` component for navigation and tabs;
*   `vv-avatar` component;
*   `vv-toast` component;
*   `vv-alert` component;
*   `vv-tooltip` component;
*   `vv-badge` component;
*   `vv-breadcrumb` component;
*   `vv-button` *action* and *action-quite* modifier.

### Fixed

*   Preflight for themes;
*   A11y improvements;
*   Transition utilities and custom properties;
*   Typo in SCSS variable $zero-specificity-for-components, thanks to @tinny77 for the PR [#](https://github.com/volverjs/style/pull/2);
*   Safari iOS improvements;
*   `vv-radio` and `vv-checkbox` readonly state.

### Changed

*   Move from `@import` to `@use`;
*   `vv-input-checkbox` is now `vv-checkbox`;
*   `vv-input-checkbox-group` is now `vv-checkbox-group`;
*   `vv-input-radio` is now `vv-radio`;
*   `vv-input-radio-group` is now `vv-radio-group`;
*   `vv-collapse` is now `vv-accordion`;
*   state *selected* is now *pressed* in `vv-button` component.

## [0.1.1] - 2022-10-18

### Added

*   `vv-badge` component;
*   `vv-button` component;
*   `vv-button-group` component;
*   `vv-progress` component;
*   `vv-accordion` component;
*   `vv-dialog` component;
*   `vv-dropdown` component;
*   `vv-checkbox` component;
*   `vv-checkbox-group` component;
*   `vv-radio` component;
*   `vv-radio-group` component;
*   `vv-input-text` component;
*   `vv-textarea` component;
*   `vv-select` component;
*   `vv-table` component;
*   `vv-card` component;
*   `vv-text` component.

[0.1.24]: https://github.com/volverjs/style/compare/v0.1.23...v0.1.24
[0.1.23]: https://github.com/volverjs/style/compare/v0.1.22...v0.1.23
[0.1.22]: https://github.com/volverjs/style/compare/v0.1.21...v0.1.22
[0.1.21]: https://github.com/volverjs/style/compare/v0.1.20...v0.1.21
[0.1.20]: https://github.com/volverjs/style/compare/v0.1.19...v0.1.20
[0.1.19]: https://github.com/volverjs/style/compare/v0.1.18...v0.1.19
[0.1.18]: https://github.com/volverjs/style/compare/v0.1.17...v0.1.18
[0.1.17]: https://github.com/volverjs/style/compare/v0.1.16...v0.1.17
[0.1.16]: https://github.com/volverjs/style/compare/v0.1.15...v0.1.16
[0.1.15]: https://github.com/volverjs/style/compare/v0.1.14...v0.1.15
[0.1.14]: https://github.com/volverjs/style/compare/v0.1.13...v0.1.14
[0.1.13]: https://github.com/volverjs/style/compare/v0.1.12...v0.1.13
[0.1.12]: https://github.com/volverjs/style/compare/v0.1.11...v0.1.12
[0.1.11]: https://github.com/volverjs/style/compare/v0.1.10...v0.1.11
[0.1.10]: https://github.com/volverjs/style/compare/v0.1.9...v0.1.10
[0.1.9]: https://github.com/volverjs/style/compare/v0.1.8...v0.1.9
[0.1.8]: https://github.com/volverjs/style/compare/v0.1.7...v0.1.8
[0.1.7]: https://github.com/volverjs/style/compare/v0.1.6...v0.1.7
[0.1.6]: https://github.com/volverjs/style/compare/v0.1.5...v0.1.6
[0.1.5]: https://github.com/volverjs/style/compare/v0.1.4...v0.1.5
[0.1.4]: https://github.com/volverjs/style/compare/v0.1.3...v0.1.4
[0.1.3]: https://github.com/volverjs/style/compare/v0.1.2...v0.1.3
[0.1.2]: https://github.com/volverjs/style/compare/v0.1.1...v0.1.2
[0.1.1]: https://github.com/volverjs/style/compare/v0.1.0...v0.1.1
