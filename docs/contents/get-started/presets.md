---
index: 5
label: Presets
title: Presets
description: 'Opt-in SCSS modules that change the look of a family of components at once, before the library emits anything.'
isNew: true
---

### Outlined fields
By default every field is a filled box: a tinted surface, a line along the bottom and a bar in the brand colour that slides in on focus. The outlined preset turns every field into a box on the plain surface with a 1px border, a radius and a ring on focus. It covers `vv-input-text`, `vv-textarea`, `vv-select`, `vv-input-file` and `vv-field`, with their floating label, which becomes a notch in the top border, and their `valid`, `invalid`, `loading`, disabled and readonly looks.

Load it after the context and before the library, because it rewrites the settings the library emits from:

```scss
@use '@volverjs/style/scss/context' with (
    $color-brand: #45cb85
);
@use '@volverjs/style/scss/presets/outlined-fields';
@use '@volverjs/style/scss';
@use '@volverjs/style/scss/themes/dark';
```

Loaded after `@volverjs/style/scss` it changes nothing. The preset changes the look only: heights, paddings and font sizes stay those of the library. It adds these tokens, which can be overridden like any other:

- `--input-border-color` and `--input-border-color-hover`
- `--input-border-radius`
- `--input-focus-color`, the colour of the border and of the ring on focus, and `--input-focus-ring`
- `--input-invalid-ring`
- `--input-disabled-background-color`, `--input-disabled-border-color` and `--input-disabled-color`

Set them where the theme is set, on `:root` or on a `.theme` element: `--input-focus-ring` is composed from `--input-focus-color` there, so a `--input-focus-color` set on a single field changes its border but not its ring.

The dark theme follows through the colours these tokens read. When the brand is too dark to ring a field on the dark surface, point `--input-focus-color` at another colour in the dark theme. Two things the preset does not reach: the dark theme keeps dimming a disabled `vv-select` to 80% (set `$dark-vv-select` in the dark context to change it), and `--input-background-color`, now the plain surface, is also read by the value of `vv-input-range` and by the list and the drop area of `vv-input-file`.
