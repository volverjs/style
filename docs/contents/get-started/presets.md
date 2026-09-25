---
index: 5
label: Presets
title: Presets
description: 'Opt-in SCSS modules that change the look of a family of components at once, before the library emits anything.'
isNew: true
---

Tokens restyle what a component already draws: a color, a radius, a height. A preset changes what it draws. It is an opt-in SCSS module that rewrites the settings of a family of components before the library emits its CSS, so it can hide a decoration, move a label or show a state another way, in every component of the family at once and in both themes. The compiled CSS carries the new look and nothing else: there is no second stylesheet of overrides to load after the library and keep in step with it.

Presets exist in the SCSS build only. The precompiled CSS in `dist/` has the default look, so a preset is for a project that compiles the library with its own [configuration](/style/get-started/configuration).

### Outlined fields
By default every field is a filled box: a tinted surface, a line along the bottom and a bar in the brand color that slides in on focus. The outlined preset turns every field into a box on the plain surface with a 1px border, a radius and a ring on focus. It covers `vv-input-text`, `vv-textarea`, `vv-select`, `vv-input-file` and `vv-field`, with their floating label, which becomes a notch in the top border, and their `valid`, `invalid`, `loading`, disabled and readonly looks. The same fields, with the same markup, in the two looks:

<card-example title="Default and outlined">
    <div class="grid md:grid-cols-2 gap-lg items-start">
        <div>
            <p class="font-semibold text-word-2 mb-md">Default</p>
            <div class="vv-input-text">
                <label for="preset-email-default">Email</label>
                <div class="vv-input-text__wrapper">
                    <input id="preset-email-default" type="email" placeholder="name@example.com" aria-describedby="preset-email-default-hint" />
                </div>
                <small id="preset-email-default-hint" class="vv-input-text__hint">We send the invoice here.</small>
            </div>
            <div class="vv-input-text">
                <label for="preset-name-default">Name (focus)</label>
                <div class="vv-input-text__wrapper focus-within">
                    <input id="preset-name-default" type="text" value="Maria Rossi" />
                </div>
            </div>
            <div class="vv-input-text vv-input-text--floating">
                <label for="preset-company-default">Company</label>
                <div class="vv-input-text__wrapper">
                    <input id="preset-company-default" type="text" placeholder="Company" value="Acme" />
                </div>
            </div>
            <div class="vv-select vv-select--dirty">
                <label for="preset-country-default">Country</label>
                <div class="vv-select__wrapper">
                    <select id="preset-country-default">
                        <option value="it" selected="selected">Italy</option>
                        <option value="fr">France</option>
                        <option value="de">Germany</option>
                    </select>
                </div>
            </div>
            <div class="vv-input-text vv-input-text--invalid">
                <label for="preset-vat-default">VAT number</label>
                <div class="vv-input-text__wrapper">
                    <input id="preset-vat-default" type="text" value="IT123" aria-invalid="true" aria-describedby="preset-vat-default-hint" />
                </div>
                <small id="preset-vat-default-hint" class="vv-input-text__hint">Enter the 11 digits after the country code.</small>
            </div>
            <div class="vv-input-text">
                <label for="preset-code-default">Customer code</label>
                <div class="vv-input-text__wrapper">
                    <input id="preset-code-default" type="text" value="C-0042" disabled="disabled" />
                </div>
            </div>
        </div>
        <preset-outlined-fields>
            <p class="font-semibold text-word-2 mb-md">Outlined</p>
            <div class="vv-input-text">
                <label for="preset-email-outlined">Email</label>
                <div class="vv-input-text__wrapper">
                    <input id="preset-email-outlined" type="email" placeholder="name@example.com" aria-describedby="preset-email-outlined-hint" />
                </div>
                <small id="preset-email-outlined-hint" class="vv-input-text__hint">We send the invoice here.</small>
            </div>
            <div class="vv-input-text">
                <label for="preset-name-outlined">Name (focus)</label>
                <div class="vv-input-text__wrapper focus-within">
                    <input id="preset-name-outlined" type="text" value="Maria Rossi" />
                </div>
            </div>
            <div class="vv-input-text vv-input-text--floating">
                <label for="preset-company-outlined">Company</label>
                <div class="vv-input-text__wrapper">
                    <input id="preset-company-outlined" type="text" placeholder="Company" value="Acme" />
                </div>
            </div>
            <div class="vv-select vv-select--dirty">
                <label for="preset-country-outlined">Country</label>
                <div class="vv-select__wrapper">
                    <select id="preset-country-outlined">
                        <option value="it" selected="selected">Italy</option>
                        <option value="fr">France</option>
                        <option value="de">Germany</option>
                    </select>
                </div>
            </div>
            <div class="vv-input-text vv-input-text--invalid">
                <label for="preset-vat-outlined">VAT number</label>
                <div class="vv-input-text__wrapper">
                    <input id="preset-vat-outlined" type="text" value="IT123" aria-invalid="true" aria-describedby="preset-vat-outlined-hint" />
                </div>
                <small id="preset-vat-outlined-hint" class="vv-input-text__hint">Enter the 11 digits after the country code.</small>
            </div>
            <div class="vv-input-text">
                <label for="preset-code-outlined">Customer code</label>
                <div class="vv-input-text__wrapper">
                    <input id="preset-code-outlined" type="text" value="C-0042" disabled="disabled" />
                </div>
            </div>
        </preset-outlined-fields>
    </div>
</card-example>

Load it after the context and before the library, because it rewrites the settings the library emits from:

```scss
@use '@volverjs/style/scss/context' with (
    $color-brand: #45cb85
);
@use '@volverjs/style/scss/presets/outlined-fields';
@use '@volverjs/style/scss';
@use '@volverjs/style/scss/themes/dark';
```

Loaded after `@volverjs/style/scss` it changes nothing. The preset changes the look only: heights, paddings and font sizes stay those of the library, so a form keeps its rhythm when it switches look.

#### Tuning the outlined look
The preset adds these tokens, which can be overridden like any other:

- `--input-border-color` and `--input-border-color-hover`
- `--input-border-radius`
- `--input-focus-color`, the color of the border and of the ring on focus, and `--input-focus-ring`
- `--input-invalid-ring`
- `--input-disabled-background-color`, `--input-disabled-border-color` and `--input-disabled-color`

Set them where the theme is set, on `:root` or on a `.theme` element: `--input-focus-ring` is composed from `--input-focus-color` there, so a `--input-focus-color` set on a single field changes its border but not its ring. Pill shaped search fields that ring in the success color, for instance:

```css
:root {
    --input-border-radius: var(--rounded-full);
    --input-focus-color: var(--color-success);
}
```

<card-example title="Outlined, with tokens">
    <preset-outlined-fields>
        <div class="grid md:grid-cols-2 gap-lg items-start" style="--input-border-radius: var(--rounded-full); --input-focus-color: var(--color-success); --input-focus-ring: 0 0 0 var(--spacing-3) color-mix(in srgb, var(--color-success) 16%, transparent);">
            <div class="vv-input-text">
                <label for="preset-search">Search</label>
                <div class="vv-input-text__wrapper">
                    <input id="preset-search" type="search" placeholder="Invoices, customers, products" />
                </div>
            </div>
            <div class="vv-input-text">
                <label for="preset-search-focus">Search (focus)</label>
                <div class="vv-input-text__wrapper focus-within">
                    <input id="preset-search-focus" type="search" value="Acme" />
                </div>
            </div>
        </div>
    </preset-outlined-fields>
</card-example>

The dark theme follows through the colors these tokens read: switch the examples above to the dark theme to see it. When the brand is too dark to ring a field on the dark surface, point `--input-focus-color` at another color in the dark theme. Two things the preset does not reach: the dark theme keeps dimming a disabled `vv-select` to 80% (set `$dark-vv-select` in the dark context to change it), and `--input-background-color`, now the plain surface, is also read by the value of `vv-input-range` and by the list and the drop area of `vv-input-file`.
