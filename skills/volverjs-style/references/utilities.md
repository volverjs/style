# Utility classes

Every class below was verified against `src/settings/*.scss`, `src/utilities/*.scss`
and the compiled `dist/utilities/*.css`. If a class is not in this file, assume it
does not exist and check `node_modules/@volverjs/style/dist/utilities/<group>.css`
before using it.

## How names are built

- `{prefix}-{value}` for most groups: `p-16`, `gap-md`, `text-brand`, `w-1/2`.
- **Bare value names** (no prefix) for display, position, visibility, font style,
  text transform, text decoration line, font smoothing and font-variant-numeric:
  `flex`, `grid`, `none`, `relative`, `invisible`, `italic`, `uppercase`, `underline`.
- Responsive variant: `{breakpoint}:{class}`, mobile-first (`min-width`), **only for
  the groups marked "Responsive: yes" below**. Prefixes: `xs:` `sm:` `md:` `lg:` `xl:`
  `xxl:` `xxxl:`. There is no `xxs:` prefix (xxs is 0px, the unprefixed class).

| Breakpoint | xs | sm | md | lg | xl | xxl | xxxl |
|---|---|---|---|---|---|---|---|
| min-width | 360px | 576px | 992px | 1024px | 1280px | 1440px | 1536px |

## Scales shared by several groups

**Static spacing scale** (used by margin, padding, gap, inset, sizing):

```text
0 px 1 2 3 4 5 6 7 8 9 10 12 14 16 18 20 22 24 26 28 32 34 36 38 40 44 48 50 52 56 64
80 96 100 112 128 144 150 160 176 192 208 224 240 256 288 300 320 384
```

There is no 11, 15, 30, 60 or 72 step. `px` is 1px.

**Dynamic spacing scale**: `xs` `sm` `md` `lg` `xl`. Each one resolves to a different
static step per viewport, so the same class breathes on larger screens:

| token | < 576px | ≥ 576px | ≥ 1024px |
|---|---|---|---|
| xs | 6 | 8 | 10 |
| sm | 10 | 12 | 14 |
| md | 12 | 14 | 16 |
| lg | 16 | 22 | 36 |
| xl | 24 | 36 | 48 |

Prefer the dynamic tokens for layout rhythm (`p-md`, `gap-lg`, `mb-xl`) and static
numbers only for pixel-exact needs. Spacing utilities have **no** responsive
variants, so `md:p-16` does nothing: the dynamic tokens are how spacing adapts.

**Color names** (used by `text-`, `bg-`, `border-`, `decoration-`):

```text
brand accent success danger info warning gray      each also -lighten-1..5 and -darken-1..5
word word-1..word-5                                 text colors, from strongest to faintest
surface surface-1..surface-5                        backgrounds, from page to deepest inset
surface-brand surface-accent surface-success surface-danger surface-info surface-warning
alpha alpha-1..alpha-5                              translucent overlays
white black transparent shadow backdrop
```

## Spacing (not responsive)

| Class | Values | Notes |
|---|---|---|
| `m-` `mx-` `my-` `mt-` `mr-` `mb-` `ml-` | spacing scale + dynamic | margin |
| `p-` `px-` `py-` `pt-` `pr-` `pb-` `pl-` | spacing scale + dynamic | padding |
| `n-` `nx-` `ny-` `nt-` `nr-` `nb-` `nl-` | spacing scale + dynamic | **negative** margin (`n-16` = `margin: -16`) |
| `m-auto` `mx-auto` `my-auto` `mt-auto` `mr-auto` `mb-auto` `ml-auto` | | margin only, no `p-auto` |

## Layout

| Class | Values | Responsive |
|---|---|---|
| display (bare) | `block` `inline-block` `inline` `flex` `inline-flex` `grid` `inline-grid` `none` | yes |
| display (bare) | `table` `inline-table` `table-caption` `table-cell` `table-column` `table-column-group` `table-footer-group` `table-header-group` `table-row-group` `table-row` `flow-root` `contents` `list-item` | no |
| position (bare) | `static` `fixed` `absolute` `relative` `sticky` | yes |
| visibility (bare) | `visible` `invisible` | yes |
| `inset-` `inset-x-` `inset-y-` `top-` `right-` `bottom-` `left-` | spacing scale + dynamic + `1/2` `1/3` `2/3` `1/4` `2/4` `3/4` `full` `auto` | no |
| `z-` | `1` `sticky` `fixed` `dropdown` `modal-backdrop` `modal` `confirm-backdrop` `confirm` `popover` `tooltip` `toast` `notification-alert` `auto` | no |
| `overflow-` `overflow-x-` `overflow-y-` | `visible` `hidden` `scroll` `auto` | no |
| `container` | | width 100%, max-width follows the current breakpoint; no size suffixes |
| `aspect-` | `auto` `square` `photo` (3/2) `tv` (4/3) `wide` (16/9) `ultrawide` (21/9) | yes |
| `object-` (fit) | `fill` `contain` `cover` `none` `scale-down` | no |
| `object-` (position) | `top` `bottom` `left` `right` `center` `left-top` `left-bottom` `right-top` `right-bottom` | no |
| `columns-` | `1`..`12` | yes |
| `break-after-` `break-before-` | `auto` `avoid` `all` `avoid-page` `page` `left` `right` `column` | no |
| `break-inside-` | `auto` `avoid` `avoid-page` `avoid-column` | no |

The z-index scale is semantic and stacks in the order listed (1, 1010, 1020, 1025,
1030, 1040, 1050, 1060, 1070, 1080, 1090, 1100). There is no `z-10`/`z-50`.
`display: none` is the class `none`; there is no `hidden` class.

## Flexbox

| Class | Values | Responsive |
|---|---|---|
| `flex-` (direction) | `row` `col` `row-reverse` `col-reverse` | yes |
| `flex-` (wrap) | `wrap` `nowrap` `wrap-reverse` | yes |
| `flex-` (size) | `1` `auto` `initial` `none` | yes |
| `grow` `grow-0` `shrink` `shrink-0` | | no |
| `order-` | `1`..`12` `first` `last` `none` | yes |
| `justify-` | `start` `end` `center` `between` `around` `evenly` | yes |
| `justify-items-` | `start` `end` `center` `baseline` `stretch` | yes |
| `justify-self-` | `auto` `start` `end` `center` `baseline` `stretch` | yes |
| `items-` | `start` `end` `center` `baseline` `stretch` | yes |
| `self-` | `auto` `start` `end` `center` `baseline` `stretch` | yes |
| `content-` (align-content) | `start` `end` `center` `between` `around` `evenly` | yes |
| `gap-` `gap-x-` `gap-y-` | spacing scale + dynamic | **no** |

## Grid

All grid utilities are responsive.

| Class | Values |
|---|---|
| `grid-cols-` | `1`..`12` `none` |
| `grid-rows-` | `1`..`6` `none` |
| `col-span-` | `1`..`12` `full`; plus `col-auto` |
| `row-span-` | `1`..`6` `full`; plus `row-auto` |
| `col-start-` `col-end-` | `1`..`13` `auto` |
| `row-start-` `row-end-` | `1`..`7` `auto` |
| `grid-flow-` | `row` `col` `dense` `row-dense` `col-dense` |
| `auto-cols-` `auto-rows-` | `auto` `min` `max` `fr` |

`gap-*` is shared with flexbox and is not responsive.

## Sizing (all responsive)

| Class | Values |
|---|---|
| `w-` | spacing scale, `auto` `full` `screen` `min` `max` `fit`, fractions `1/2` `1/3` `2/3` `1/4` `2/4` `3/4` `1/5`..`4/5` `1/6`..`5/6` `1/12`..`11/12` |
| `h-` | spacing scale, `auto` `full` `screen` `min` `max` `fit`, fractions `1/2`..`5/6` (no twelfths) |
| `max-w-` | spacing scale, `0` `none` `full` `min` `max` `fit` `prose` (65ch), `screen-xs` `screen-sm` `screen-md` `screen-lg` `screen-xl` `screen-xxl` `screen-xxxl` |
| `max-h-` | spacing scale, `full` `screen` `min` `max` `fit` |
| `min-w-` | spacing scale, `0` `full` `min` `max` `fit` |
| `min-h-` | spacing scale, `0` `full` `screen` `min` `max` `fit` |

`screen` uses `100dvw`/`100dvh`. The Tailwind container idiom `max-w-md` does not
exist here (the dynamic spacing names are not valid sizing values): use
`max-w-screen-md` or `container`. Fractions are written literally in the markup
(`class="w-1/2"`).

## Typography

| Class | Values | Responsive |
|---|---|---|
| `text-` (size, static) | `smaller` `larger` `6` `8` `10` `12` `14` `16` `18` `20` `22` `24` `26` `28` `30` `32` `34` `36` `48` `60` `72` `96` `128` | yes |
| `text-` (size, dynamic) | `xs` `sm` `md` `lg` `xl` | yes |
| `text-` (align) | `left` `center` `right` `justify` `start` `end` | yes |
| `text-` (color) | color names | no |
| `text-ellipsis` `text-clip` `text-balance` | | no |
| `font-` (family) | `sans` `serif` `mono` | no |
| `font-` (weight) | `thin` `extralight` `light` `normal` `medium` `semibold` `bold` `extrabold` `black` | no |
| font style (bare) | `italic` `non-italic` | no |
| `leading-` | `none` `tight` `snug` `normal` `relaxed` `loose` | no |
| `tracking-` | `tighter` `tight` `normal` `wide` `wider` `widest` | no |
| text transform (bare) | `uppercase` `lowercase` `capitalize` `normal-case` | no |
| decoration line (bare) | `underline` `overline` `line-through` `no-underline` | no |
| `decoration-` | color names; style `solid` `double` `dotted` `dashed` `wavy`; thickness `auto` `from-font` `0` `1` `2` `4` `8` | no |
| `underline-offset-` | `auto` `from-font` `0` `1` `2` `4` `8` | no |
| `whitespace-` | `normal` `nowrap` `pre` `pre-line` `pre-wrap` | no |
| word break | `break-normal` `break-words` `break-all` `truncate` | no |
| `align-` (vertical-align) | `baseline` `top` `middle` `bottom` `text-top` `text-bottom` `sub` `super` | no |
| `list-` | `none` `disc` `decimal` `lower-latin` `upper-latin` `lower-roman` `upper-roman` `inside` `outside` | no |
| font smoothing (bare) | `antialiased` `subpixel-antialiased` | no |
| numeric variants (bare) | `normal-nums` `ordinal` `slashed-zero` `lining-nums` `oldstyle-nums` `proportional-nums` `tabular-nums` `diagonal-fractions` `stacked-fractions` | no |

Dynamic text sizes resolve per viewport like dynamic spacing:

| token | < 576px | ≥ 576px | ≥ 1024px |
|---|---|---|---|
| xs | 10 | 12 | 14 |
| sm | 12 | 14 | 16 |
| md | 14 | 16 | 18 |
| lg | 16 | 18 | 20 |
| xl | 18 | 20 | 22 |

There is no `text-40`, `text-44`, `text-56`, `text-64` or `text-80`; the scale jumps
36 → 48 → 60 → 72 → 96 → 128.

## Colors and backgrounds (not responsive)

| Class | Values |
|---|---|
| `text-` `bg-` `border-` `decoration-` | color names (see shared scales) |
| `bg-` (size) | `auto` `cover` `contain` |
| `bg-` (position) | `top` `bottom` `left` `right` `center` `left-top` `left-bottom` `right-top` `right-bottom` |
| `bg-` (repeat) | `repeat` `no-repeat` `repeat-x` `repeat-y` `repeat-round` `repeat-space` |
| `bg-` (attachment) | `fixed` `local` `scroll` |
| `bg-clip-` | `border` `padding` `content` `text` |
| `bg-origin-` | `border` `padding` `content` |
| `bg-gradient-` | `1`..`30`, `brand` `accent` `success` `danger` `info` `warning` `gray` |
| `bg-noise-` | `1`..`5` |
| `bg-` (patterns) | `grid` `chessboard` `check` `chevron` `close` `minus` `none` |

`bg-` is overloaded: `bg-center`, `bg-cover`, `bg-fixed`, `bg-none` are not colors.

## Borders

| Class | Values | Responsive |
|---|---|---|
| `border` `border-0` `border-2` `border-4` `border-8` | width (bare `border` = 1px) | yes |
| `border-x-` `border-y-` `border-t-` `border-r-` `border-b-` `border-l-` | `0` `2` `4` `8`; bare side (`border-t`) = 1px | yes |
| `border-` (style) | `solid` `dashed` `dotted` `double` `hidden` `none` | yes |
| `border-` (color) | color names | no |
| `rounded` `rounded-` | `none` `sm` (bare `rounded` = .25rem) `md` `lg` `xl` `xxl` `xxxl` `full` | no |
| `rounded-t-` `rounded-b-` `rounded-tl-` `rounded-tr-` `rounded-bl-` `rounded-br-` | same radius names; bare corner (`rounded-tl`) = .25rem | no |

`border-none` sets `border-style: none`; to remove a border width use `border-0`.
The radius scale is `xxl`/`xxxl`, not `2xl`/`3xl`.

## Effects, filters, transitions (not responsive)

| Class | Values |
|---|---|
| `shadow` `shadow-` | `sm` (bare `shadow` = default) `md` `lg` `xl` `2xl` `inner` `none` |
| `opacity-` | `0` `5` `10` … `95` `100` (every multiple of 5) |
| `mix-blend-` `bg-blend-` | CSS blend mode names (`multiply` `screen` `overlay` …) |
| `blur` `blur-` | `none` `sm` (4px) `md` (12px) `lg` (16px) `xl` (24px) `xxl` (40px) `xxxl` (64px); bare `blur` = 8px |
| `backdrop-blur-` | `none` `sm` `blur` (8px) `md` `lg` `xl` `xxl` `xxxl`; no bare `backdrop-blur` |
| `brightness-` | `0` `50` `75` `90` `95` `100` `105` `110` `125` `150` `200` `250` `500` `1000` |
| `contrast-` | `0` `50` `75` `100` `125` `150` `200` `300` |
| `saturate-` | `0` `50` `100` `150` `200` |
| `transition-` | `none` `all` `colors` `opacity` `shadow` `transform` (each sets duration 300 and ease-in-out) |
| `transition-property-` | same names, property only |
| `duration-` `delay-` | `75` `100` `150` `200` `300` `500` `700` `1000` |
| `ease-` | `linear` `in` `out` `in-out` |

Transition and duration tokens are `0s` unless the user has
`prefers-reduced-motion: no-preference`, so motion switches itself off for users
who asked for it. There are no `animate-*` utilities; animation keyframes exist only
as `--animation-*` custom properties.

## Transforms (not responsive)

| Class | Values |
|---|---|
| `scale-` `scale-x-` `scale-y-` | `0` `50` `75` `90` `95` `100` `105` `110` `125` `150` |
| `rotate-` | `0` `1` `2` `3` `6` `12` `45` `90` `180` |
| `translate-` `translate-x-` `translate-y-` | `1/2` `1/3` `2/3` `1/4` `2/4` `3/4` `full` |
| `-translate-` `-translate-x-` `-translate-y-` | same, negative |
| `origin-` | `center` `top` `top-right` `top-left` `bottom` `bottom-right` `bottom-left` `right` `left` |

## Interactivity and tables (not responsive)

| Class | Values |
|---|---|
| `cursor-` | `auto` `default` `pointer` `wait` `text` `move` `help` `not-allowed` `none` `grab` `grabbing` `zoom-in` `zoom-out` `progress` `crosshair` `copy` `alias` `cell` `context-menu` `no-drop` `vertical-text` `all-scroll` `col-resize` `row-resize` `n-resize` `e-resize` `s-resize` `w-resize` `ne-resize` `nw-resize` `se-resize` `sw-resize` `ew-resize` `ns-resize` `nesw-resize` `nwse-resize` |
| `pointer-events-` | `none` `auto` |
| `user-select-` | `none` `text` `all` `auto` |
| table (bare) | `border-collapse` `border-separate` `table-auto` `table-fixed` |
