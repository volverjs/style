# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Added

* Two states for a block whose control is one of its children. `focus-visible-within` matches `:has(input:focus-visible)`: a segment or a card whose native input is not painted has to show a ring for the keyboard, and `focus-within` would draw it on a mouse click as well. Like `checked-within` it looks for the input only, so a button elsewhere in the block does not ring it. `pressed-within` matches `:has(> [aria-pressed="true"])`: `aria-pressed` is valid on a button only, so a row that is chosen through the button inside it carries the attribute one level down, where `pressed` does not look. The child combinator keeps a pressed button nested deeper, in the actions of the row, from marking the whole block. The `segment` modifier of `vv-radio` and `vv-checkbox` uses the first and `vv-item` the second, both below.
* `vv-empty`, what a list, a table or a page shows in place of its content. Elements are `media`, `title`, `description` and `actions`, all optional and centred in a column. The message is quiet on purpose: `word-3` for the block and `word-1` for the title alone, no colour of state. The media sets `font-size: var(--text-32)`, so an icon that measures `1em`, which is what Iconify emits, takes that size without a class of its own; an alias on `svg` would have reached the icons of the buttons in `actions` too. `compact` fits the block inside a list, a table or a card, and `bordered` draws a dashed frame for an area waiting to be filled, such as a drop zone.
* `vv-separator`, a hairline between two groups of content, with an optional label on it. The two halves of the line are the `::before` and `::after` of the block, either side of the label, so a long label wraps inside the row instead of being laid over a single line. Each half keeps a floor of 16px and does not shrink, which is what makes the label wrap rather than squeeze the line out of sight. The space around the label is the label's own padding and not a `gap` on the block: without a label the halves have to meet, and `:empty` cannot tell, since a single space inside the block defeats it. The halves take the `border-color` of the block, which the block never draws, so a `border-color` on the block, or `--vv-separator-border-color` with custom properties, recolours both at once; they read it through `border-color: inherit` written as a plain declaration, because a CSS-wide keyword in a custom property applies to the property itself and would resolve at the root. The label is a `<span>` or any element with `vv-separator__label`, and `vertical` stands the halves up between two items of a row, without the 16px floor, which would make a row of text taller than the text. Inside `.preflight`, `hr.vv-separator` is left to the component like every element carrying a component class (see Fixed).
* `vv-spinner`, a ring that turns while something is loading. It measures `1em` and draws in `currentcolor`, so it takes the size and the colour of the text it sits in, inside a button or next to a label, and a text utility sizes and colours it when it stands alone. The animation tokens are `none` under `prefers-reduced-motion`, and a spinner that stands still says nothing, so the block runs `spin` itself and a media query on the entry slows a turn from `0.75s` to `1.5s` instead of stopping it. `--spinner-duration` and `--spinner-thickness` are set on the block and read by plain declarations, because a `var()` inside a generated custom property is substituted at the root and would never see a value set on the block.
* `vv-radio` and `vv-checkbox` gain a `segment` and a `card` modifier, and their groups a `segmented` and a `cards` modifier. `vv-radio-group` shares its map with `vv-checkbox-group`, so both groups take both. A segmented control is a recessed track the height of a field, on `surface-2`, with the options side by side inside it and the chosen one raised on the plain surface with `shadow-sm`. The native input stays in the tree for the keyboard and assistive technology but is not painted, so the tile is the control: its chosen look comes from `checked-within` and its keyboard focus from `focus-visible-within`, which draws the same `1px` brand outline every other control of the library draws, on the tile instead of on the hidden input. The label centres the icon and the text, because `@volverjs/ui-vue` wraps the slot in a `__label` span that the block stretches. In the dark theme the plain surface is the darkest colour there is and would read as a hole in the track, so a dark map raises the chosen tile on `surface-4`; this adds `vv-radio` and `vv-checkbox` to the dark theme. A card is an option drawn as a bordered tile, the control at the start and a title over a description beside it, framed with the hairline of the other frames of the library and chosen through a step of surface and a border in the text colour. The tiles of a row share the width and wrap under 8rem. On a group, the options of both modifiers carry no margin of their own, so the wrapper takes the one they would have left under the last row, which is what the negative top margin of the hint expects. The two option modifiers are declared once, in `src/settings/components/_choice.scss`, which both maps load and `settings/_index.scss` does not forward: each map holds its own copy, and that is the one to deep-merge.
* `vv-item` and `vv-item-group`, a row of a list and the list that holds the rows: something to choose in a picker, to open, or to look at in a master list. The row is not the button. Its `entry` element is, a `<button>` or an `<a>`, because a row can hold other controls beside it and a button cannot contain buttons: `actions` holds the controls that act on the row, inline and without a divider, and `open` is a divided hit area that opens a level while the entry chooses the row. Inside the entry go `media`, `title`, or a `content` holding a `title` over a `description` clamped to two lines, and at the end a `note`, a `check` or a `chevron`. Selection is a step of surface, a step of weight on the title and a check, never a colour. The row chosen in a picker carries `aria-pressed="true"` on its entry, and the row reads it through the new `pressed-within` state; the row being looked at in a master list takes the `current` state instead, a bar along the inline start and no check, which there would read as a verdict. The chosen and the current row are declared after the hover, so they keep their surface under the pointer. A title over a description carries the weight of a heading on every row, since a list of medium titles over grey descriptions reads as one run of grey; the map cannot say "a title with a description beside it", so that rule is a `:has()` written on the entry, after the state rules it wins over. `roomy` gives the entry a 56px floor for richer content, `top` aligns the media to the first line, and `plain` drops the hover and the pointer for a row with nothing to click, such as a skeleton. The group sets `--item-divider`, `--item-hover`, `--item-chosen` and `--item-current`, and the rows read them with a fallback through plain declarations, because a `var()` inside a generated custom property is substituted at the root, where the group's values do not reach: a row works outside a group too, and a modifier of the group restyles every row without touching them. `framed` draws the hairline and the radius of the other frames, `fill` lets the list take the height it is given and scroll there, and `raised` steps the surfaces up for a list drawn on `surface-1`, with the current row going down to the plain surface. The list scrolls inside a 20rem bound otherwise, so the footer of a dialog stays in view. A row whose entry is disabled takes no hover, through a `:has()` on the entry, since the row never carries the attribute itself. Inside `.preflight` the entry, the open area and the list are left to the component (see Fixed).
* `vv-dialog` gains `drawer-start`, `drawer-top` and `drawer-bottom`, the other three sides of `drawer`, with the `slide-inline-start`, `slide-block-start` and `slide-block-end` transitions to pair with them. `drawer-start` is the inline end panel mirrored. `drawer-top` and `drawer-bottom` span the width of the viewport and grow with their content up to 90% of its height, rounded on the side that faces the page: the second is the bottom sheet of a phone. The flat header, the flat footer and the content without its top padding, which `drawer` already had, are declared once and shared by the four, and `drawer` compiles as it did.
* `scrollbar-thin` and `scrollbar-none`, for the native scrollbar of a scrolling element. The first thins it and draws the thumb in `word-5` on a transparent track, so the panel behind it shows through; the second hides it on a strip that still scrolls sideways, a row of chips or tabs. Both go through the standard `scrollbar-width` and `scrollbar-color`, which is all a scrolling panel needs: no component draws a scrollbar of its own.
* `vv-field`, the shell of a form field around a control the library does not draw: a code editor, a contenteditable prompt, a button that opens a picker, a switch that has to keep the rhythm of a form. The label, the box, the hint, the disabled and readonly states and the `valid`, `invalid` and `loading` modifiers are read from the map of `vv-input-text`, so the two are one field with one set of `--input-*` tokens. What is new goes inside the box: `control`, which takes the padding of a field and leaves hover and focus to the box, `before` and `after` on either side of it, padded on their outer side only like `input-before` and `input-after`, and `toolbar`, a row under the control that the box wraps onto, the way a message composer puts its actions under the text. The disabled and readonly states follow the attribute of the control through `:has()`, or the block when the control has no such attribute. The copy of the `vv-input-text` map is taken when the settings load, so a later override of that map does not reach `vv-field`, which is overridden on its own.
* `vv-prose`, a container for rich text that arrives as plain tags: rendered markdown, the output of an editor or a CMS. Every element is an alias on a bare tag inside the block, and a group of tags is a single selector through `:is()`, since an `_alias` cannot be a list. It covers headings, paragraphs, lists and nested lists, links, blockquotes, inline code, code blocks, keyboard keys, tables, rules, images and `details`, and gives back the meaning of the inline tags that the reset of the library unsets with `all: unset`: italic for `em`, `i` and `cite`, a line through `del` and `s`, an underline for `ins` and `u`, raised and lowered `sup` and `sub`, `small`, `mark`, a dotted `abbr`, the `white-space: pre` without which a code block runs on one line, the checkbox of a task list and the indent of a definition list. Sizes are in `em` rather than the static steps of `vv-text`, because rich text is set at 14px in a chat bubble and at 16px on a page and the headings have to follow it. The rhythm is a margin on every child after the first, with more room above a heading, so the block has no margin of its own at either end; the same rhythm runs inside a quote, a list item, a disclosure and a table cell, where markdown wraps its paragraphs too. `compact` sets the headings at the size of the text and halves the gaps, for rich text at the density of a field. The content of a prose block is left to it inside `.preflight`, whose scope now also excludes `.vv-prose *`.
* `vv-table` gains row states and sortable column headers. A body row takes `selected` from `aria-selected="true"`, one step of surface, and `current`, the row being looked at when the table is a master list, a surface that stands apart and a bar along the inline start drawn with an inset `box-shadow` on the `tr` that follows `--direction` in a right to left page, as `vv-item--current` draws it; plain markup puts `current` on the `tr`. A sortable column carries `aria-sort` on the `th` and a `vv-table__sort` button inside it, and the header draws the chevron of the library after the button, as a mask in the colour of the text: faint while the column is `none`, pointing down for `descending` and up for `ascending`. The generator learns `sort-none`, `sort-ascending` and `sort-descending` for it, read from the attribute, in the table both walks share.
* `vv-pagination`, for moving between the pages of a list or a table: a `<nav>` holding a list of `page` links or buttons, an `ellipsis` where pages are skipped and a `summary` that says where the reader is. The page being shown is read from `aria-current="page"` through a new `current-page` state, so the markup says it once for the eye and for assistive technology; `current` stays the class it always was. A page that cannot be reached is a `disabled` button, or a link with `aria-disabled="true"` and no `href`, which takes it out of the tab order as well.
* An outlined preset for the fields, `@volverjs/style/scss/presets/outlined-fields`. By default a field is a filled box, a tinted surface with a line along the bottom and a brand bar sliding in on focus; loaded between the context and the library, the preset turns `vv-input-text`, `vv-textarea`, `vv-select`, `vv-input-file` and `vv-field` into a box on the plain surface with a 1px border, a radius and a ring on focus, with the floating label as a notch in the top border and their `valid`, `invalid`, `loading`, disabled and readonly looks redrawn on the border. It reassigns `$input` and the five component maps through the context, which is why it has to run before the library emits anything, and it changes the look only: heights, paddings and font sizes stay those of the library. It adds `--input-border-color`, `--input-border-color-hover`, `--input-border-radius`, `--input-focus-color`, `--input-focus-ring`, `--input-invalid-ring` and three `--input-disabled-*` tokens, to be set where the theme is set, since the ring is composed from the focus colour there. The dimmed text of a disabled field is set on its control and the floated label reads its surface through a plain declaration, because both follow a token set on the block, which a generated property resolved at the root would miss. The preset writes through the context only, so the dark theme keeps dimming a disabled select to 80%. The preset is a partial, exported explicitly from `scripts/build.js`, so it compiles to nothing on its own and the default `dist/` does not move. It is the outlined look a product built on the library had written as 207 lines of overrides.
* The blocks of a conversation. `vv-message` is a row: an optional `avatar` anchored to the last line beside a `content` column with a `header`, the bubbles or cards of the message and a `footer`, and a `meta` element that shows on hover or focus and always on a device that cannot hover, through a media query written on the entry since a map cannot express one. `end` mirrors the row for the one reading, aligning the header and the footer to the end rather than reversing them, which would run the keyboard against the visual order, `wide` lets the content take the whole row. `vv-bubble` is the surface of a message, with the corner on the side of the speaker tightened into a tail; its colours are `--bubble-background`, `--bubble-color` and `--bubble-border-color`, with a `--bubble-end-*` trio for the one reading, read with a fallback by plain declarations and never declared on the block, so one value set on the conversation paints every bubble of a side in the colour of a product. `end` is a bubble of the one reading, `plain` a bubble with no surface for an answer set as rich text, and `reactions` hang over the bottom edge with `reacted` leaving room for them. `vv-bubble-group` stacks consecutive bubbles of one speaker and joins them on the speaker's side. `vv-message-scroller` is the scrolling column, with a thin scrollbar, a `jump` button pinned to the bottom edge that takes no room in the column and hides with `hidden` (a rule on the entry, since the reset hides `[hidden]` at zero specificity before the components), and a `fade` modifier for the edges that lifts the button above the faded strip; sticking to the latest message is left to the script that owns the list. `vv-attachment` is a file or an image in a tile, with its `media`, `title`, `description`, `actions` and a `remove` button over the top corner that follows `--direction`, plus the `image`, `invalid` and `loading` modifiers, and `vv-attachment-group` wraps a row of them. `vv-marker` is a quiet note in the conversation, `bordered` in a pill; a date between two days is a `vv-separator`. `vv-questionnaire` asks questions one step at a time, with a `progress` bar read from `--questionnaire-progress` and choices made of the radio and checkbox cards. Its `title` and `description` space themselves with a margin rather than a gap of the `item`, because a choice keeps them inside its fieldset, as the `legend` and a paragraph, where the gap would not reach: 12px before the choices, and 4px between a title and the description that follows it, which the entry tells through `:has()`. The family follows the styling a chat product built on the library had written for itself, and leaves out its reasoning timeline, which stays product specific.
* `vv-kbd` and `vv-kbd-group`, a key of the keyboard in the mono face and the keys of a combination, sized in `em` so they follow the text around them.
* `vv-popover`, a floating panel on the Popover API for a short piece of content or a small form, with a `title` and a `footer`. The reset of the library unsets the fixed position the browser gives an element with `popover`, so the block puts it back, with the z-index of a popover for a panel shown outside the top layer and a height bounded by the viewport, and leaves the placement next to the trigger to the script that opens it or to anchor positioning; without one it opens at the top left corner, and `center` centres it for a panel opened by `popovertarget` alone. A hover card is the same block with the delay in the script; `vv-dropdown` stays the menu and the list of options.
* `vv-command`, a command palette: a search field over a list of options grouped under headings, with a shortcut at the end of an option drawn as a `vv-kbd`. The field is the combobox, whose focus turns the divider under it to the brand colour since the reset leaves the input with no ring, and the list the listbox, grouped under labelled headings; the option the keyboard is on is read from `aria-selected="true"`, declared after the hover so it keeps its surface under the pointer, and a disabled option answers no pointer.
* `vv-input-otp`, a one-time code typed one character per slot, split into groups by a separator, with the surface and the text of the fields, a border so each slot reads as a box, and an `invalid` modifier.
* `vv-sidebar`, the side column of an application with a `header`, a `content` that scrolls and a `footer`. Its width is `--sidebar-width`, and `collapsed` narrows it to `--sidebar-collapsed-width` and hides every `label` from sight but not from assistive technology, leaving the icons with their names; both are read with a fallback and never declared on the block, so the layout around it can set them. In the rail the `header`, the `content` and the `footer` each become a grid of one column as wide as the rail, with what is left in it centred, so the icon of the header, those of a `vv-nav--sidebar` and the one of the footer line up on the middle of the rail although each carries a different padding. The column is anchored at the start and keeps its width while the rail narrows, so the icons land where the transition ends instead of riding the middle of a column that shrinks. The block does not shrink either, so a main column that overflows beside it cannot squeeze the rail off the width the icons are centred on.
* `vv-calendar`, a month to pick a date or a range from: a header with the month between two navigation buttons, and a table of day buttons under the weekdays. A day reads what it is from its markup: `aria-pressed="true"` for the chosen day and each end of a range, drawn in the text colour on the surface so it inverts with the theme, `aria-current="date"` for today through a new `current-date` state, `disabled` for a day that cannot be chosen, and `aria-selected="true"` on the cells of a range for the band between its ends. The keyboard ring of a day is a rule on the entry, because the grid is moved across with a roving tabindex and the shared `focus-visible` state leaves `tabindex="-1"` out. A date picker is the block in a `vv-popover` next to a field.
* `--color-{brand,accent,success,danger,info,warning}-contrast` and `--color-{name}-darken-{1..5}-contrast`, the text that goes on a filled color and on each of its darker shades, with a `text-` utility each and no `bg-`, `border-` or `decoration-` one (`text-brand-contrast`, `text-brand-darken-1-contrast`, ...). The token is pure white or pure black, whichever gives the higher WCAG 2 contrast ratio on its own shade, so never less than 4.58:1: white below a relative luminance of 0.1791, where the two ratios meet, black above it. With `$use-color-mix` it is computed in CSS from the color, so it follows a runtime override of `--color-brand`. The expression nests two relative colors, because no single one is both portable and exact. The inner one reads the luminance as the `y` channel of `xyz-d65` and stores the step as its alpha: those channels are numbers in every engine, while Safari 17 reads the channels of `srgb` as percentages and drops a value that mixes them with numbers. The outer one copies the alpha into the three sRGB channels, which keeps the result exactly white or black: written in `xyz-d65`, Chrome resolves the white point to `0.99987 1.00005 1.00007`, and text drawn with it differs from white at its edges. Measured in Chrome 154, Firefox 155 and Safari 17.6; the tokens of the darker shades, which read a shade that is itself a relative color, in Chrome 154 and Safari 17.6. Without `$use-color-mix` the choice is made on each shade at compile time by the new `contrast-color()` function, so it does not follow a runtime override. Gray has no token: the components fill with its dark shades, whose lightness does not depend on the brand, and white is always right on them. `npm run check:colors`, a new script that CI runs after `stylelint:dist`, checks the threshold against a reference set of fifteen colors and their darker shades, and on every one the token picks the higher ratio; it also checks the readable roles and the neutrals below.
* `--color-tint` and `$color-tint`, the color the neutrals take their hue from. `$color-tint` defaults to `$color-brand` and replaces it in the defaults of `$color-gray`, `$color-word`, `$color-surface`, `$color-shadow`, `$color-backdrop`, `$dark-color-word` and `$dark-color-surface`, so nothing moves unless it is set. With `$use-color-mix`, a neutral still at its default is now written relative to the token, `hsl(from var(--color-tint) h 15% 50%)` for gray, so a stylesheet that rebrands at runtime moves gray, the primary button, the borders, the shadows and the dark text and surfaces as well, by setting `--color-tint` next to `--color-brand`. Before, they were literals computed from the brand at compile time and kept the old hue. The dark theme does not redeclare the tint, so the neutrals keep the hue of the light brand in both themes, as they did; following `--color-brand` instead would have moved them for a consumer that sets a dark brand of another hue. A neutral set explicitly keeps its literal value: `tinted-neutral-value()` compares it with the default it would have and writes the relative expression only when the two are equal. The tint has no utilities. Resolved, the neutrals are the colors they were: compiled from SCSS, a page with the default brand and one with `#140e33` render pixel for pixel as before in both themes, in Chrome, and for `#140e33` they are gray `#736c93`, word `#17161d`, surface `#fff`, shadow `#22194d`, backdrop `#22194d33`, dark word `#d5d3de` and dark surface `#0c0b0e`, which `check:colors` also checks.
* Three readable roles for each of brand, accent, success, danger, info and warning, the color written as text: `--color-{name}-readable` on the neutral surfaces (links, outlined and ghost badges, tabs, the hints of the fields), `--color-{name}-readable-strong` a step further from them (a pressed link, the current crumb), and `--color-surface-{name}-readable` on the tinted surface of the color (the headers and icons of alerts, ring avatars, the selected and focused options), each with a `text-` utility and no `bg-`, `border-` or `decoration-` one. A role is the color itself while it reads at `$color-readable-ratio`, 4.6:1 by default, which leaves room above the 4.5:1 of WCAG for the rounding to 8-bit channels, and the color moved just far enough otherwise. The math runs in `xyz-d65`, whose channels are numbers in every engine, Safari 17 included, and where scaling is scaling linear light. In the light theme the channels are scaled down by bound / y, so the color keeps its chromaticity and lands on the bound. In the dark theme they are scaled up by the same ratio, which keeps the color as vivid as it was, then clipped to the sRGB gamut with `min(r, alpha)` in `srgb`, where `alpha` is the unit in the type each engine reads the channels in, and what the clip took is made up by mixing toward white. Mixing toward white alone would pull the chroma down, and a dark brand would come out greyish; this way `#0a3d62` gives `#2797e9`, and a light brand is left as it is. `readable-strong` is `readable` with its luminance scaled by `$color-readable-strong-factor`, 0.5, and in the dark theme by `$dark-color-readable-strong-factor`, 1.5, clipped to the gamut, so it reads at least as well. The dark theme redeclares the three roles, so a component writes one token for both themes. The bound is a number written in each formula, computed on the hardest hue. On the neutral surfaces it holds down to `--color-surface-2`, a hovered row or a pressed action, set by `$color-readable-depth`, for any hue `--color-tint` gives them: 0.1574 in the light theme and 0.2846 in the dark one. On a tinted surface, which follows its color, it holds for the hardest tint of any hue at the lightness of the tinted surfaces: 0.0983 and 0.3213. CSS cannot read the luminance of the surface and of the text in the same expression, so the bound is the one that holds whatever color is set at runtime. A role that already reads goes through a round trip in `xyz-d65` that lands within a fraction of an 8-bit step, so in rare cases a channel on the edge of a step moves by one. The bounds are fixed at compile time, so a `--color-surface` overridden at runtime does not move them. With `$use-color-mix: false`, the branch for browsers without relative color syntax, a role is the first shade of the color that reaches the bound, chosen at compile time, and `readable-strong` the first one past its step. `check:colors` evaluates the expressions in both themes: every reference color ends at 4.5:1 or more on the hardest neutral surface, is left alone when it already read and keeps its hue within 6 degrees, its `readable-strong` reads at least as well, and every shade of every reference color, and every hue at full saturation, ends at 4.5:1 or more on its own tinted surface. Chrome 154 and Safari 17.6 resolve the same 144 roles, for four brands in both themes, within 1/255 on a channel. Together with the contrast tokens above, the graphic roles and the covers below, the tokens make `props.css` grow from 29.0 to 44.1 KB and `volver.css` by 2.1%, 2.2% once compressed, and the dark stylesheet grow from 31.2 to 41.3 KB, from 2.1 to 2.3 KB once compressed.
* `--color-{brand,accent,success,danger,info,warning}-graphic`, the color that has to be seen but not read: the bar of `vv-progress`, a focus ring, a border that shows a state. It is built like `--color-{name}-readable`, on the same neutral surfaces down to `--color-surface-2` and for any hue of the tint, for `$color-graphic-ratio`, 3.1:1 by default, the 3:1 that WCAG asks of graphics and of the parts of a control that show its state with the margin for the rounding. It is the color itself when it is already seen, and otherwise the color moved just far enough, darker in the light theme and brighter, as vivid as it can, in the dark one, which redeclares it; the bounds are 0.2577 and 0.1755. It stays closer to the color than a readable role: `#f5c400` keeps `#aa8700` on a light surface, where its text takes `#876b00`. Every color utility exists, `bg-`, `text-`, `border-` and `decoration-`, and reads the token without repeating its expression as a fallback. With `$use-color-mix: false` it is the first shade that reaches the bound, chosen at compile time. `check:colors` evaluates it on the reference colors in both themes, and Chrome 154 and Safari 17.6 resolve it alike, within 1/255 on a channel.
* `--input-valid-text-color` and `--input-invalid-text-color`, the text of a valid or invalid field: `--color-success-readable` and `--color-danger-readable`, for its hints, its labels and its icons. `--input-valid-color` and `--input-invalid-color` keep painting the bar under a field, its border, the track of `vv-input-range` and the frame of the outlined preset, which are not text and take the graphic roles, `--color-success-graphic` and `--color-danger-graphic` (see Fixed); overriding one of them at runtime needs its text token as well.
* `--color-{name}-cover` and `--color-{name}-darken-{1..5}-cover` for the same six colors, the fill under its contrast text: the shade itself where the contrast text of that shade turns dark, transparent where it stays white. It reads the step of the contrast token of the same shade, so the two always agree, and `vv-button` lays the cover of the shade each state paints over its emboss (see Fixed). Covers have no utilities, and with `$use-color-mix: false` they follow the text chosen at compile time: the shade under dark text, `transparent` under white.
* `check:colors` holds the names an application reads at runtime, so that a rename fails the build of the library instead of reaching a release: `--color-{name}-contrast` and `--color-{name}-cover` with their darker shades, `--color-{name}-readable`, `--color-{name}-readable-strong`, `--color-surface-{name}-readable` and `--color-{name}-graphic` for the six colors, and `--color-tint`, each declared on `:where(:host, :root, .theme)` in `@layer volver.props` and nowhere else; the four roles redeclared by the dark theme in `@layer volver.themes`, under `@media (prefers-color-scheme: dark)` and on `.theme.theme--dark`, and nowhere else; the `text-` utilities of the contrast tokens and of the roles, each in `@layer volver.utilities` and reading its own token; and the order of the six layers as the first statement of the bundle. It compiles the library the way such an application does, with `$use-css-layers: true` and `$use-custom-props-for-components: false`.

### Fixed

* The dark theme matched three states differently from the light one when the library is compiled with `$use-custom-props-for-components: false`. The theme walk kept its own list of states and its own chain of branches, and the two had drifted: a `disabled` override matched `[disabled]` but not `[aria-disabled="true"]`, so an element disabled through ARIA kept the light values in the dark theme; a `checked` override was written `:not([disabled]):checked`, the fallback for a plain pseudo-class, while the light rule is `:checked`; and `popover` and `popover-open` were missing from the list, so a dark override of either was dropped without a word. Both walks now read one list and one table of selector suffixes from `src/tools/mixin-modules/_states.scss`, which `_index.scss` does not forward, so the table stays internal. The default build is not affected, because with custom properties the dark theme only reassigns the `--vv-*` properties that the light selectors read, and `dist/` compiles identical byte for byte. In the components of the library, the `disabled` override of the dark `vv-select` is the one that reaches those three states; the walk changed in more places at the same time, in the entry that follows.
* With `$use-custom-props-for-components: false`, a dark override of an element reached less markup than its light rule, and the state of an element under a modifier landed on the modifier block. The theme walk compounded the state of an element onto the parent it was handed, so `modifier.tabs.element.item-label.state.current` of the dark `vv-nav` came out as `.vv-nav.vv-nav--tabs.vv-nav__item-label--current`, a class on the navigation itself that nothing carries, and the current tab never took its dark colour. It now compounds onto the element, `.vv-nav.vv-nav--tabs .vv-nav__item-label.vv-nav__item-label--current`, as the light rule does. Two more gaps of the same walk are closed with it. The `_alias` of an element lives in the base map, which the walk did not read, so a dark override matched `.block__element` alone and missed the plain markup the alias exists for: the base map is now threaded down and the alias is emitted next to the element, nested under every selector of its parent, and takes the `.state` class and the suffixes of a state as the light walk gives them. And an element under a state of the block hung under `.block--state` alone, without `.block.state` or what the state reads from the DOM (`[open]`, `[disabled]`): it now hangs under all of them. Selectors are suffixed and nested one entry at a time, as the light walk does since 0.1.27. The default build does not run this walk, so `dist/` compiles identical byte for byte; compiled without custom properties, the dark `vv-nav` is the one component in the library whose output moves.
* Inside `.preflight`, an element carrying a class of a component was dressed as a bare tag. The container styles bare tags at a specificity of (0,1,0), above the zero specificity of every component rule, so `button.vv-badge__button` of an action badge came out as a primary button, 77.1px wide instead of 46.7px, a `<button type="button" class="vv-button vv-button--secondary">` came out primary, and a `label.vv-radio` took the plain radio look over any modifier it carried. The scope of the container now reads `:not(.preflight-revert *, [class*='vv-'])` (with the configured prefix), so every element that carries a component class is left to its component; both arguments of the `:not()` weigh a class, so the specificity does not move. The 132 rules of the container in `volver.css` change selector and not declarations. A bare child that a component reaches only through an `_alias`, such as a `<button>` written without its class inside an action badge, has nothing to tell it apart and is still dressed; `.preflight-revert` remains the way out for it.
* The hint of `vv-checkbox`, `vv-radio` and their groups read `--input-hint-max-width`, which nothing declared, so `max-width` was invalid at computed value time and did nothing. `$input` gains `hint.max-width: 100%`, the value the label already has, so the declaration is valid and `--input-hint-max-width` can be overridden like the other hint tokens.
* Text on a filled color was white whatever the color, which on a light brand such as `#f5c400` reads at 1.64:1. The default `vv-button`, `vv-badge` and `vv-avatar`, the `danger` button, the `danger`, `success` and `accent` badges and avatars, the header and the icon of a `notification` alert in `brand`, `success`, `danger` and `accent`, in the dark theme too, and the knob of a checked `vv-checkbox--switch` now take the contrast token of the color they sit on. With the default palette every one of them picks white, so nothing changes, and a light brand gets black text at 12.78:1. The `warning` and `info` badges, avatars and notification headers fill with the `-darken-5` shade and take the token of that shade, `--color-warning-darken-5-contrast`: white with the default palette, as before, and black for a warning light enough that its darkest shade stays light, such as `#fff7cc`, whose `darken-5` reads 12.02:1 with black and 1.75:1 with white. `gray` and the `transparent` avatar keep white, now written on the modifier, since the block no longer gives it. The `primary` button writes the `text-shadow` it used to inherit from the block. In the default build the dark theme already reassigned the header color of a colored notification to white, but no rule read that property, and the header took the white of the notification; the light rule that reads it now exists.
* The 1px dark emboss under the label of `vv-button` suits light text only, and under dark text it smears the glyphs. The block now stacks a second shadow over it, at the same offset: `--color-brand-cover`, transparent while the text is white, so the emboss shows as before, and the fill itself once the text turns dark, so it hides the emboss under the label. The hover, active and pressed states lay the cover of the shade they paint, `--color-brand-darken-1-cover` and `--color-brand-darken-2-cover`, since the cover of the base color would leave a lighter line under the label on a darker fill, and `danger` does the same with its own color. The states take the text of that shade too, `--color-brand-darken-1-contrast` on hover and `--color-brand-darken-2-contrast` when active or pressed, so every state reads at 4.58:1 or more whatever the color. A color near the threshold takes black at rest and white on its darker states: `#9365ff` reads black at 5.55:1, then white at 5.20:1 on hover and 6.69:1 when active, where the text of the base color would have read 4.04:1 and 3.14:1, and `#6366f1`, black at 4.70:1, would have read 2.60:1 when pressed. The button transitions `all`, so the text fades from one to the other. With the default palette every state keeps white, and in Chrome the buttons of the default `dist/` render pixel for pixel as before in both themes.
* Text written in a palette color did not adapt to the color or to what it sat on: with a light brand such as `#f5c400` a link read at 2.04:1 and an outlined badge at 1.64:1, the checked option of `vv-select` and the hovered `vv-dropdown-action` wrote the plain brand on `surface-brand`, and the dark theme had the same problem the other way round. Every place in the components that writes in a color now takes one of the readable roles above, and the 30 that write in the color of a valid or invalid field take its text token: the `link` button and its states, the `outline` and `ghost` badges, the `ring` avatars, the headers and icons of the colored alerts, the selected and focused dropdown options, the checked option of `vv-select`, `vv-dropdown-action`, the current and hovered tabs of `vv-nav`, the active crumb of `vv-breadcrumb`, the `link` of `vv-text`, the links of `vv-prose`, the error of `vv-questionnaire` and of an invalid `vv-attachment`, and the hints, labels and icons of the fields. Text on a tinted surface takes the role of that surface, and so does a state that paints one. `vv-progress` paints a bar, not text, and takes the graphic role instead, see below. The dark theme drops the 31 overrides that only swapped a text color: `vv-dropdown-action`, `vv-dropdown-option` and `vv-nav` have no dark rule left, and `vv-alert`, `vv-avatar`, `vv-badge` and `vv-button` keep only their other ones. Measured in Chrome on 47 colored texts with the default palette, against 0.1.29, all at 4.5:1 or more after. In the light theme 33 move, all of them at 4.5:1 or more before as well: the text on the tinted surfaces takes the color pushed to the bound that holds for any hue (the success alert from 5.02:1 to 6.15:1, the accent one from 4.68:1 to 5.28:1, the brand one from `darken-3` at 7.03:1 to 5.54:1); the `link` button takes the brand instead of `darken-1` (6.47:1 to 5.48:1); the active crumb and the pressed links take `readable-strong` (8.69:1); the outlined and ghost warning and info badges move from `darken-5` to the color pushed to the bound (5.80:1 to 5.04:1). In the dark theme 38 move: the icons of the colored alerts, which the dark theme never overrode and still drew the dark shades of the light theme, from 1.95:1 to 2.89:1 to 5.46:1 or more; the outlined and ghost `danger` badges (4.23:1 before), the invalid hint (3.81:1), the `vv-text` and `vv-prose` links (3.55:1), the active crumb (2.57:1), the `vv-questionnaire` error (2.86:1) and the invalid `vv-attachment` on its raised surface (2.58:1) to 5.56:1 or more; and the other colored texts brighten and gain chroma, the brand links from `#2c8ae6` to `#2593ff` and the accent badges from `#c042d5` to `#e942ff`. With a runtime brand, `#f5c400` gives the link 5.08:1 in the light theme, and `#9365ff` writes its links in `#a677ff` in the dark theme, where they were `#ded0ff`. An audit that builds every selector of the components in Chrome, in both themes and for six brands, finds no colored text below 4.5:1 on its own background, the lowest at 4.60:1.
* The bar of `vv-progress` was painted in the plain brand on its `surface-2` track, against which a graphic needs 3:1: 2.78:1 with the default brand in the dark theme, 1.51:1 with `#f5c400` and 1.91:1 with `#45cb85` in the light one, 1.03:1 with `#1a0d66` in the dark one. The bar and the stripe of the indeterminate state now take `--color-brand-graphic`, so all of them reach 3.1:1 or more, the default bar of the dark theme from `#166abd` to `#1975d0`, while a bar that was already seen keeps its color, the default brand in the light theme included. Measured in Chrome with six brands in both themes.
* What shows the focus was drawn in the plain palette color or in a light shade, while it has to keep 3:1 with what it sits on: the rings of the components in the brand, in the danger color around the `danger` button, in `--color-brand-lighten-4` around the `link` one and in `--color-gray-lighten-4` around the `secondary`, `ghost`, `action` and `action-quiet` buttons and the remove button of `vv-input-file`; the ring of `vv-badge` in `currentcolor`, which on a filled badge is its contrast text, white on a white page; the bar under the filled fields, the border of the outlined preset, the divider of `vv-command`, the border of a slot of `vv-input-otp` and the caret. With the default colors the brand ring read at 2.78:1 on `surface-2` in the dark theme and the ring of the `danger` button at 2.24:1, while in the light theme the ring of a link read at 2.90:1 and the gray rings at 1.49:1; with a brand set at runtime the brand ones fell to 1.51:1 for `#f5c400` and 1.91:1 for `#45cb85` in the light theme and to 1.03:1 for `#1a0d66` in the dark one. They now take the graphic role of their color, `--color-brand-graphic` or `--color-danger-graphic`, and a badge of a palette color the role of that color, while the gray rings take `--color-gray`, which the dark theme already gave `secondary` and `ghost`, so its overrides of the two are gone. All of them keep 3:1 or more on the neutral surfaces down to `surface-2`: the graphic roles for any tint, the gray rings at 3.1:1 or more with the three tints measured. A color that was already seen keeps it, the default brand and danger in the light theme included; in the dark theme the default ring and bar move from `#166abd` to `#1975d0` and the danger ring from `#af2323` to `#dd2f2f`. The ring of a link takes the brand where it was a lighter shade, `#166abd` instead of `#3f94e9` in the light theme and `#1975d0` in the dark one, where it reads at 3.26:1 instead of 4.80:1, and the gray rings of `action` and `action-quiet` read at 3.73:1 there instead of 9.38:1. The ring of `vv-avatar` moves 2px out, off the fill of the same color it sat on. `check:colors` fails on a focus indicator in a palette color outside its graphic role, following the custom properties it reads, and on a ring in `currentcolor` or in a light gray, in the build compiled with layers and without custom properties for the components and in the outlined preset; it caught the ring of the link, written over two lines. Measured in Chrome with four brands in both themes.
* The bar and the border of a valid or invalid field, the track of `vv-input-range`, the slots of an invalid `vv-input-otp` and the frame of the outlined preset were painted in the plain success and danger colors in the light theme and in their `lighten-2` shades in the dark one, which follow neither a color set at runtime nor the surface: the invalid bar of the dark theme read at 2.98:1 on `surface-2`. `--input-valid-color` and `--input-invalid-color` are now `--color-success-graphic` and `--color-danger-graphic` in both themes, and `$dark-input`, which held the two shades, is empty. The light theme keeps its colors; in the dark one the invalid bar reads at 3.28:1 and the valid one at 3.26:1, where its lighter shade read at 4.25:1. Measured in Chrome.
* With `$use-color-mix`, the shades of word and surface, `hsl(from var(--color-word) h s calc(l + 12))`, did not resolve in Safari 17, which reads `l` as a percentage and drops a sum of a percentage and a number: text in `word-1` to `word-5` fell back to the inherited color and backgrounds in `surface-1` to `surface-5` to transparent, in both themes. The steps are now emitted a second time in percent, `calc(l + 12%)`, under `@supports not (color: hsl(from red h s calc(l + 1)))`, which holds in Safari 17 alone; Chrome and Firefox read `l` as a number and keep the first form. Measured in Safari 17.6, where `word-2` now resolves to `#4b5863`, against `#4a5764` in Chrome.
* `mark` inside `.preflight` takes `--color-warning-contrast` for its text. It inherited the word color, which on the warning background reads at 1.31:1 in the dark theme; it is black now in both themes, see Changed.
* With `$use-custom-props-for-components: false`, a dark override of a state under a modifier lost to a dark override of the same state on the block. The theme walk emitted the modifiers before the states, the light walk the other way round, so at equal specificity the later rule won: a focused `vv-dropdown-option--unselectable` took the green of a focused option in the dark theme instead of its own red. The theme walk now emits elements, states and modifiers in the order of the light walk. The rules it emits are the same 15331 and only their order moves, and the default build does not run this walk, so its `dist/` is identical.

### Changed

* The current voice of `vv-nav--sidebar` is inverted, `surface` text on a `word-1` background, where it had a `surface-1` background. That background was lighter than the `surface-2` of a hovered voice, so a voice under the pointer looked more chosen than the current one, and on a `surface-1` column, which is what `vv-sidebar` draws, the current voice did not show at all. The inverted voice reads on any surface, and in the dark theme as well, where the two tokens swap. The state is declared after `hover` and `active`, so a current voice under the pointer stays inverted. Only the sidebar modifier moves: in `dist/` its `current` rule gains a `color` and changes its `background-color`, and nothing else changes.
* The text of `mark` inside `.preflight` is black in the light theme too, where it was the word color, `#161a1d` with the default brand: it is the contrast token of the warning background, which fixes the dark theme (see Fixed).
* The neutrals of the prebuilt `dist/` move by up to 3/255 in a channel. Their bases were hex literals that the minifier had rounded to 8 bits, `#161a1d` for word, and their shades were computed from the rounded value. They are now relative to `--color-tint` and resolve at full precision, so the bases render as before while the shades shift slightly, the most on `word-3` and `surface-5`. Compiled from SCSS nothing moves, because Sass writes the literal at full precision. `design-tokens.json` gains `tint`, the 36 contrast entries, the 18 readable roles in each theme and the 36 covers, and its neutrals carry the relative expression in place of the HSL literal.
* The contrast, cover, readable and graphic tokens, and through them the text in a color, the focus indicators and the bar of `vv-progress`, are computed by the browser with relative color syntax in `xyz-d65` and `srgb`, with `min()` and `max()` inside the channels, so a brand set at runtime moves them. The `browserslist` of the package does not change, Chrome and Edge 133, Firefox 128 and Safari 16.4, but these tokens were measured in Chrome 154 and Safari 17.6 alone, which resolve them within 1/255 on a channel, and `check:colors` resolves them with the formulas of CSS Color 4; Firefox, and Safari before 17.6, were not measured. An application that supports those versions can open the readable check of the colors page of the documentation in them, or compile with `$use-color-mix: false`, which emits no relative color syntax: the contrast texts, the covers and the roles are then chosen at compile time and do not follow a brand set at runtime.

## [0.1.29] - 2026-09-30

### Changed

* The SCSS entry no longer emits the `@custom-media` rules of `props/media`. `props/index.scss` pulled the module in, so `@volverjs/style/scss`, `scss/base` and `scss/props` wrote 38 definitions (`--motion-ok`, `--os-dark`, `--touch`, the ranges of the breakpoints...) into the stylesheet of every consumer that compiles the SCSS, although nothing in the library queries them. `@custom-media` is a draft that has to be resolved at build time. The library's own `dist/` never carried the rules, because `postcss-preset-env` at stage 0 resolves the definitions and drops them, but a consumer that compiles the SCSS does not run that step: the rules shipped as dead weight, and a minifier that does not know the draft reported every one of them. On Vite 8, whose default CSS minifier is Lightning CSS, a build printed `Unknown at rule: @custom-media` 38 times, each with its code frame, some 270 lines for `src/volver.scss` alone, which buried the warnings that mattered.

  The definitions are now opt-in. `@volverjs/style/scss/props/media` was already exported and still emits them, so a project that resolves custom media, with `postcss-custom-media` or with Lightning CSS and `drafts.customMedia`, imports it after the context in each stylesheet that writes a query, since both resolvers read the definitions of the file they transform. The definitions were never documented, and nothing changes for a consumer of the compiled CSS or for one without a resolver. The one stylesheet to touch is one that compiles the entry, resolves custom media and writes a query in the same file: it adds `@use '@volverjs/style/scss/props/media';` after the context, otherwise `postcss-custom-media` leaves the query unresolved, so it matches nothing, and Lightning CSS stops the build with `Custom media query --motion-ok is not defined`.

  `dist/` is identical byte for byte before and after, and so are `design-tokens.json` and the `exports` map: `props.css` never contained the rules, and `props/media.css` was empty and stays empty. Compiled with Sass, `src/volver.scss` now carries no `@custom-media` rule instead of 38, the only lines that leave it, together with the `/* stylelint-disable */` comment of the module, and Lightning CSS minifies it without a warning. The configuration page of the documentation and the SCSS reference of the skill describe the opt-in.

### Fixed

* The breakpoint ranges of `props/media` did not cover the widths their names promise, nor the ones of the mixins they sit next to. Each rule was written from the value of the next breakpoint: `--md-n-above` was `width >= 1024px`, the value of `lg`, so every `n-above` query started one breakpoint late and left the 992px to 1023px of `md` out. `-only` and `n-below` included their upper bound, so at exactly 1024px both `--md-only` and `--lg-only` matched, and the last breakpoint had no range at all: `--xxxl-only` was undefined, which Lightning CSS turns into a failed build. The loop now writes `--{name}-n-above` from the value of the breakpoint itself, stops `-only` and `n-below` short of the next one with `width <`, and closes on the last breakpoint with `--xxxl-only (width >= 1536px)` and an `n-below` that matches every width. Compared at the same 19 widths, the 24 ranges now match `bp-only`, `bp-up` and `bp-down` at all 456 points, where the 21 old ones disagreed at 31 of 399. The module emits 41 definitions instead of 38, and a consumer that queried `--{name}-n-above` gets one breakpoint more than before.

  The module also stopped writing `/* stylelint-disable */` into the stylesheet of whoever imports it. The directive was a loud comment that switched off every rule for the rest of the file; it is now a silent `// stylelint-disable custom-media-pattern`, the one rule the interpolated names need, closed after the loop.

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
