---
index: 2
label: Configuration
title: Define your Preferences
description: Specificity, custom properties and components names can be configured as you want.
---

### Specificity
By design Volver Style has zero specificity. This means that you can easily overwrite the style of any component or utility class without `!important` or complex selector filters.

In some circumstances you may want to increase the specificity of components or utilities. For example, if you want to use Volver Style in a CMS or a framework that already has its own style or if you want to use Volver Style in a legacy project.

An other reason could be to avoid the change of components style with utilities.

You can configure the specificity of components and utilities by setting the `$zero-specificity-for-components` and the `$zero-specificity-for-utilities` variables.

```scss
@use '@volverjs/style/scss/context' with (
  // disable zero specificity for components
  $zero-specificity-for-components: false,
  // enable zero specificity for utilities
  $zero-specificity-for-utilities: true
);
@use '@volverjs/style/scss';
```


### CSS Custom Properties
By default every component attribute is defined by a *CSS Custom Property* so it can be overwritten easily. If you want to disable this feature you can set the `$use-custom-props-for-components` variable to `false`.

```scss
@use '@volverjs/style/scss/context' with (
  // disable custom properties for components
  $use-custom-props-for-components: false
);
@use '@volverjs/style/scss';
```

<div class="vv-alert vv-alert--callout vv-alert--warning mb-lg">
  <div class="vv-alert__header">
    <div class="vv-alert__title">Warning</div>
  </div>
  <div class="vv-alert__content">
    Disabling the use of CSS Custom Properties for components will not permit to use themes.
  </div>
</div>


### Components Names
By default all components are defined with [BEM](https://getbem.com/) methodology and the they have a `vv-` prefix. If you want to change the prefix you can set the `$components-prefix` variable.

```scss
@use '@volverjs/style/scss/context' with (
  // custom components prefix
  $components-prefix: my
);
@use '@volverjs/style/scss';

// now all components have a `my-` prefix
// example: my-button, my-button--primary, my-button__icon
```

If you want a completely different name for a component you can set the `$components-names` variable.

```scss
@use 'sass:map';

// import default settings, functions and mixins
@use '@volverjs/style/scss/context';

// override components names
context.$components-names: map.deep-merge(
  context.$components-names,
  (
    // change button name
    vv-button: 'btn'
  )
);
@use '@volverjs/style/scss';

// now vv-button class is btn
// example: btn, btn--primary, btn__icon
```
