---
index: 0
label: Installation
title: Get Started
description: 'Volver Style is a JavaScript agnostic responsive CSS components and utility library. There are several ways you can use it in your project: package managers, CDN or manual install.'
---

### Install with Package Managers

```bash
# pnpm
pnpm add @volverjs/style

# yarn
yarn add @volverjs/style

# npm 
npm i @volverjs/style
```

Then you can load the whole compiled *CSS* file, and the dark theme after it if you need one.

```css
@import '@volverjs/style';
@import '@volverjs/style/themes/dark';
```

Or cherry pick what you want.

```css
/* reset */
@import '@volverjs/style/reset';

/* every custom property: the tokens the utilities and the components read */
@import '@volverjs/style/props';

/* utility classes for layout */
@import '@volverjs/style/utilities/layout';

/* one component */
@import '@volverjs/style/components/vv-button';
```

`@volverjs/style/base` bundles the reset and the custom properties in one file.

<div class="vv-alert vv-alert--callout vv-alert--warning mb-lg">
  <div class="vv-alert__header">
    <div class="vv-alert__title">Warning</div>
  </div>
  <div class="vv-alert__content"><code>@volverjs/style/props</code> are required by both <code>@volverjs/style/utilities</code> and <code>@volverjs/style/components</code>: a utility for layout reads the spacing and color tokens too, not only the layout ones. <a href="/style/get-started/preflight">Preflight</a> ships only in <code>@volverjs/style</code> and <code>@volverjs/style/scss/preflight</code>: the cherry-picked files do not include it.</div>
</div>

You can also import the *SCSS* source for customization or theming.

```scss
@use '@volverjs/style/scss';
```

Or cherry pick the *SCSS* of a component.

```scss
@use '@volverjs/style/scss/components/vv-button';
```

Or only *SCSS* context for *variables*, *mixins* and *functions*.

```scss
@use '@volverjs/style/scss/context';
@debug context.$font-family-sans;
```

### Install with CDN
Alternatively, you can use the [unpkg](https://unpkg.com/) CDN and load the style directly in document `head`.

```html
<link rel="stylesheet" href="https://unpkg.com/@volverjs/style" />
<!-- the dark theme, after the library -->
<link rel="stylesheet" href="https://unpkg.com/@volverjs/style/dist/themes/dark/volver.css" />
```

### Install Manually
Download the compiled and minified [Volver Style CSS file](https://github.com/volverjs/style/releases) 
and include `volver.css` file located in `/dist` in your website or Web App.

```html
<link rel="stylesheet" href="volver.css" />
```