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

You can configure the specificity of components and utilities by setting the `$zero-specificity-for-compoenents` and the `$zero-specificity-for-utilities` variables.

```scss
// disable zero specificity for compoenents
$zero-specificity-for-compoenents: false;

// enable zero specificity for utilities
$zero-specificity-for-utilities: true;
```


### CSS Custom Properties
By default every component attribute is defined by a *CSS Custom Property* so it can be overwritten easily. If you want to disable this feature you can set the `$use-custom-props-for-components` variable to `false`.

```scss
$use-custom-props-for-components: false;
```

### Components Names
By default all components are defined with [BEM](https://getbem.com/) methodology and the they have a `vv-` prefix. If you want to change the prefix or the methodology you can set the `$components-prefix` variable.

```scss
// components prefix
$components-prefix: my;

// now all components have a `my-` prefix
// example: my-button, my-button--primary, my-button__icon
```

If you want a completely different name for a component you can set the `$components-names` variable.

```scss
@use 'sass:map';

$components-names: map.deep-merge(
	$components-names,
	(
		// change button name
		vv-button: 'btn',
	)
);

// now vv-button class is btn
// example: btn, btn--primary, btn__icon
```
