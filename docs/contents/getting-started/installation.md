---
title: Getting Started with Volver
description: 'Volver Style is a JavaScript agnostic responsive CSS components and utility library. There are several ways you can use it in your project: package managers, CDN or manual install.'
---

### Install with Package Managers

```bash
# pnpm
pnpm add @volverjs/style

# yarn
yarn add @volverjs/style

# npm 
npm install @volverjs/style --save
```

Then you can load the whole compiled *CSS* file.

```css
@import '@volverjs/style';
```

Or cherry pick what you want.

```css
/* reset */
@import '@volverjs/style/reset';

/* custom properties for layout */
@import '@volverjs/style/props/layout';

/* utility classes for layout */
@import '@volverjs/style/utilities/layout';

/* vv-button component */
@import '@volverjs/style/components/vv-button';
```

You can also import the *SCSS* source for customization or theming.

```scss
@import '@volverjs/style/scss';
```

Or only *SCSS* context for *variables*, *mixins* and *functions*.

```scss
@import '@volverjs/style/scss/context';
```

### Install with CDN
Alternatively, you can use the [unpkg](https://unpkg.com/) CDN and load the style directly in document `head`.

```html
<link rel="stylesheet" href="https://unpkg.com/@volverjs/style" />
```

### Install Manually
Download the compiled and minified [Volver Style CSS file](https://github.com/volverjs/style/releases) 
and include `volver.css` file located in `/dist` in your website or Web App.

```html
<link rel="stylesheet" href="volver.css" />
```