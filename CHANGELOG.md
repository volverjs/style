# Changelog

All notable changes to this project will be documented in this file.

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
