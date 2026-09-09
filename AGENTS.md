# AGENTS.md

Notes for agents working on `@volverjs/style`, the SCSS design system that produces the CSS
consumed by `@volverjs/ui-vue` and by static pages.

## What this repository is

The source of truth is SCSS under `src/`, and the deliverable is the compiled CSS under
`dist/`. Nothing in `dist/` is edited by hand.

| Path | What lives there |
| --- | --- |
| `src/settings/components/` | One configuration map per component (`$vv-button`, `$vv-input-text`, ...). This is where a component's look is declared. |
| `src/tools/mixin-modules/_bem.scss` | The BEM generator: it walks those maps and emits blocks, elements, modifiers, states, breakpoints and transitions. |
| `src/tools/mixin-modules/_theme.scss` | The same walk for the dark theme, without `@extend`. |
| `src/components/` | One entry per component, which calls the generator with its map. |
| `src/props/`, `src/settings/` | Design tokens and the global settings the maps read. |
| `src/utilities/`, `src/base.scss`, `src/_preflight.scss` | Utility classes, base layer and reset. |
| `docs/` | Source of the documentation site. `npm run styleguide` builds it with Vite SSG into `styleguide/`, which is generated and git ignored. |

A component map is a nested structure of `element`, `modifier`, `state`, `pseudo`,
`breakpoint` and `transition` keys. Two keys are not CSS and drive the generator instead:
`_alias` gives an element a second selector for plain markup (`_alias: '> small'` next to
`.vv-select__hint`), and `_combinator` scopes it. An `_alias` must be a single selector, never
a comma separated list.

## Definition of done

Run all of these before reporting a change as finished, and report a skipped one as skipped.

```bash
npm run stylelint      # stylelint over src/**/*.scss
npm run lint           # eslint over the repository
npm run build          # compiles dist/ and regenerates design-tokens.json
npm run stylelint:dist # stylelint over the compiled dist/**/*.css
```

There are no unit tests. Correctness is established by compiling and reading the emitted CSS,
so the two checks below carry the weight tests would carry elsewhere.

### The compiled output is the test

Snapshot `dist/` before touching anything, rebuild, and diff:

```bash
cp -R dist /tmp/dist-before
npm run build
diff -r /tmp/dist-before dist
```

Say in the changelog which of the two outcomes you got and why:

- **Identical byte for byte.** Expected for a refactor, and for a fix to a branch that no
  component map reaches yet. This is the strongest evidence a change is safe.
- **Changed.** Then every changed rule is intentional and accounted for. Read the diff rule by
  rule, do not skim it.

`npm run build` also rewrites `design-tokens.json` and the `exports` map in `package.json`.
Both are tracked, and both should come back unchanged unless tokens or entry points actually
moved.

### Probe a branch the library does not reach

Much of the generator is only exercised by shapes no component map uses today. Do not conclude
such a branch is fine because `dist/` did not move: compile a synthetic map that walks straight
into it, and read the selectors it emits.

```bash
cat > /tmp/probe.scss <<'EOF'
@use 'src/context' as *;

$m: (/* the shape under test */);

@include spread-map-into-bem($map: $m, $block: 'vv-probe', $bps: $breakpoints);
EOF

node -e "
const sass = require('sass-embedded');
console.log(sass.compile('/tmp/probe.scss', { loadPaths: ['.'] }).css);
"
```

Pass `$bps: $breakpoints`, otherwise the breakpoint branches compile to nothing and the probe
silently proves less than it looks. Run the probe with and without the change, and diff the two
outputs: that is what tells you which rules moved.

## Things that have bitten before

- **A selector list is not a selector.** The generator passes selectors around as strings glued
  with commas. Suffixing or compounding one of those as a whole reaches its last entry alone
  and leaves the ones before it bare. Walk the list, or send it through `list-to-string`, which
  is how the rest of the generator emits one.
- **`list.append` on a single value gives a space separated list.** A list of one has no
  separator, so Sass falls back to a space, and the result interpolates to a descendant
  selector instead of two alternatives.
- **`@for $i from 1 through 0` counts down.** It runs the body with an index that reaches past
  an empty list rather than skipping it.
- **The empty string is truthy in Sass.** `@if $modifier` is true for the `''` default, so test
  `$modifier != ''` when the difference matters.
- **Assignment reaches the enclosing scope.** Reusing a variable name inside a nested loop or a
  recursive mixin writes to the outer one. The generator relies on this on purpose in places
  and has been broken by it in others.
- **A `var()` inside a custom property is substituted where that property is declared**, not
  where it is read. A declaration that has to follow a token written further down the tree
  (`--input-range-progress`, `--direction`) is emitted as a plain declaration, wrapped in
  `[brackets]` in the map, instead of going through the generated `--vv-*` property.

## Conventions

- Write everything that lands in the repository in English: commits, comments, changelog.
- Prose carries no em dashes or en dashes.
- Every fix gets a `CHANGELOG.md` entry under the release it ships in, written as prose that
  explains the mechanism and the consequence, not as a one line summary. Match the surrounding
  entries.
- `version` in `package.json` stays `0.0.0` and is set at publish time. The changelog heading
  is what names a release.
- Commit only when asked, and group the work into coherent commits rather than one per edit.
