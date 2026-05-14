# Volver Style Skill for Claude Code

Agent skill that helps Claude Code style interfaces with [@volverjs/style](https://github.com/volverjs/style), the CSS/SCSS design system with utilities, BEM components, and design tokens.

## Installation

```bash
npx skills add volverjs/style
```

This adds the skill to your Claude Code configuration.

## What This Skill Covers

The skill is specialized for real `@volverjs/style` implementation patterns:

- **BEM Components**: `vv-button`, `vv-card`, `vv-input-text`, `vv-alert`, `vv-dialog`, `vv-select`, `vv-dropdown`, and grouped components like `vv-button-group`.
- **Utility Classes**: spacing (`m-*`, `p-*`), layout (`display-*`, `position-*`), flexbox/grid, typography (`text-*`, `font-*`), borders, effects, and transitions.
- **Responsive Utilities**: breakpoint-prefixed classes (`xxs:` through `xxxl:`) for adaptive layouts.
- **Design Tokens**: CSS custom properties for colors, spacing, typography, breakpoints, borders, and effects.
- **SCSS Customization**: context overrides (`@use .../context with (...)`), component map extension, and custom component generation via mixins.
- **Theming**: dark theme setup and scoped token overrides.
- **Zero Specificity Strategy**: `:where()` wrapping behavior and CSS cascade layering.

## Usage

Once installed, Claude Code should automatically use this skill when you ask to:

- Build UI markup using `vv-*` BEM classes.
- Apply utility-first styling with responsive variants.
- Customize design tokens and theme variables.
- Extend or override component styles using SCSS context and maps.
- Compose layouts with flex/grid utilities while preserving design system conventions.

### Example Prompts

```text
Create a login form layout using `vv-input-text`, `vv-checkbox`, and `vv-button vv-button--primary` with utility spacing classes.
```

```text
Show how to override brand colors and typography using `@use '@volverjs/style/scss/context' with (...)`.
```

```text
Build a responsive dashboard section with `display-grid`, `md:grid-cols-3`, and `gap-*` utilities.
```

```text
Create a card and alert pattern with BEM elements/modifiers and token-based overrides.
```

```text
Extend `vv-button` with a custom `success` modifier via SCSS map deep merge.
```

## Source of Truth

When coding, verify implementation details directly from the library source:

- `src/components/` (all `vv-*` component styles)
- `src/utilities/` (utility class generators)
- `src/props/` (design token property maps)
- `src/settings/` (component/theme configuration maps)
- `src/themes/` (theme contexts)
- `src/tools/` (SCSS mixins and helpers)

## Documentation

- [Volver Style Repository](https://github.com/volverjs/style)
- [Skill Specification](./SKILL.md)

## License

MIT