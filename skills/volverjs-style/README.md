# Volver Style Skill for Claude Code

Agent skill that helps Claude Code style interfaces with [@volverjs/style](https://github.com/volverjs/style), the CSS/SCSS design system with utilities, BEM components and design tokens.

## Installation

```bash
npx skills add volverjs/style
```

This adds the skill to your Claude Code configuration.

## What this skill covers

- **Where the vocabulary differs from Tailwind**: bare `flex`/`grid`/`none`, spacing without responsive variants (dynamic `sm`/`md`/`lg` tokens instead), semantic `z-*`, `rounded-xxl`, the real text-size scale, the semantic `word`/`surface` palette.
- **BEM components**: canonical markup for all 32 `vv-*` components, their elements, modifiers and states, alias children that need no class, and how states map to attributes.
- **Utility classes**: every class with its exact value set and whether it accepts breakpoint prefixes.
- **Design tokens**: CSS custom properties, CSS-only overrides, component `--vv-*` properties, the dark theme and its `theme theme--dark` activation.
- **SCSS**: import paths, `@use '@volverjs/style/scss/context' with (…)`, component map extension, custom components, mixins and cascade layers.

## Layout

```
volverjs-style/
├── SKILL.md                  workflow, Tailwind differences, essentials
└── references/
    ├── utilities.md          full utility catalogue
    ├── components.md         markup and maps for every component
    ├── tokens.md             custom properties, CSS overrides, dark theme
    └── scss.md               imports, context, extending, mixins, layers
```

Everything in the reference files is verified against the library source and its compiled CSS.

## Usage

Once installed, Claude Code uses this skill when you ask to:

- Build markup with `vv-*` BEM classes.
- Lay out pages with utility classes and responsive variants.
- Customize tokens, brand colors, or the dark theme.
- Extend or override component styles through the SCSS context and maps.
- Pick valid modifiers for `@volverjs/ui-vue` components.

### Example prompts

```text
Create a login form with vv-input-text, vv-checkbox and a primary vv-button, spaced with utility classes.
```

```text
Override brand color and font family with @use '@volverjs/style/scss/context' with (...).
```

```text
Build a responsive dashboard: a grid that goes from one column to three at md, with gap-lg.
```

```text
Add a success modifier to vv-button through the SCSS map.
```

```text
Add dark mode to the app and make sure the custom hero section follows it.
```

## Source of truth

The package ships its SCSS source, so in a consuming project the skill verifies details against:

- `node_modules/@volverjs/style/dist/` (compiled CSS, the ground truth for class names)
- `node_modules/@volverjs/style/src/settings/components/_vv-*.scss` (component maps)
- `node_modules/@volverjs/style/src/settings/` and `src/props/` (scales and tokens)
- `node_modules/@volverjs/style/design-tokens.json` (machine-readable tokens)

## Documentation

- [Volver Style Repository](https://github.com/volverjs/style)
- [Skill Specification](./SKILL.md)

## License

MIT
