---
index: 1
label: Customization
title: Make your own Style
description: 'Volver Style is made to be hightly configurable and customizable. You can use both CSS custom properties or SCSS variables maps.'
stackblitzExample: https://stackblitz.com/edit/volverjs-customization?file=src%2Fstyle.scss
---

### Zero Specificity
By default all components and utilities are defined with `:where()` and have zero specificity.
The style of each class can be overwritten easily without `!important` or complex selector filters.


```css
.vv-button {
    background: green;
    font-weight: light;
}

.font-sans {
    font-family: "Open Sans", sans-serif;
}
```

### CSS Custom Properties
By default every component attribute is defined by a *CSS Custom Property* so it can be overwritten easily. 

```css
.vv-button--new-variant {
    --vv-button-background: green;
    --vv-button-font-weight: light;
}
```

You can also overwrite utilities *CSS Custom Property* defined globally.

```css
:root, :host, .theme {
    --font-sans: "Open Sans", sans-serif;
    --color-brand-hue: 150deg;
    --color-brand-saturation: 64%;
    --color-brand-lightness: 40%;
}
```

### SCSS Variables Maps
All components are defined with [BEM](https://getbem.com/) methodology. The style is generated starting from a *SCSS Map* with some keywords.

```scss
$vv-button: (
    background: blue
    element: (
        icon: (
            font-size: 1.2rem,
        )
    ),
    modifier: (
        primary: (
            color: black,
        )
    )
);

/* will generate */
.vv-button { 
    background: blue;
}
.vv-button__icon {
    font-size: 1.2rem;
}
.vv-button--primary {
     color: black;
}
```

All the properties in the map root define the *block* class. 
`element` sub-map contains the elements specifications and `modifier` the component variants.

#### Alias
Each `element` can have an `_alias`, a selector with the same properites. 

```scss
$vv-button: (
    background: blue
    element: (
        icon: (
            _alias: '> svg',
            font-size: 1.2rem,
        )
    ),
);

/* will generate */
.vv-button__icon, 
.vv-button > svg {
    font-size: 1.2rem;
}
```

#### State

States (`:hover`, `:active`, `:disabled`, ecc.) can be defined with `state` keyword.

```scss
$vv-button: (
    state: (
        hover: (
            text-decoration: undeline
        )
    )
);

/* will generate */
.vv-button--hover, 
.vv-button.hover, 
.vv-button:hover { 
    text-decoration: undeline;
}
```

`state` and `modifier` can contain `element` keyword. 

```scss
$vv-button: (
    modifier: (
        danger: (
            element: (
                icon: (
                    color: red
                )
            )
        )
    )
);

/* will generate */
.vv-button--danger .vv-button__icon {
    color: red;
}
```

`modifier` can contain `state` keyword. 

```scss
$vv-button: (
    modifier: (
        danger: (
            state: (
                hover: (
                    background: red
                )
            )
        )
    )
);

/* will generate */
.vv-button--danger.vv-button--hover, 
.vv-button--danger.hover, 
.vv-button--danger:hover { 
    background: red;
}
```

#### Pseudo
Pseudo elements (like `::before` and `::after`) can be defined with the `pseudo` keyword.

```scss
$vv-button: (
    pseudo: (
        before: (
            width: 1rem,
            height: 1rem,
            background: red,
        )
    )
);

/* will generate */
.vv-button::before {
    content: '';
    width: 1rem;
    height: 1rem;
    backgound: red;
} 
```

Pseudo elements, by default, have an empty `content` attribute but can be customized.

#### Custom properties
Inside the map can also be defined some *custom properties*. Attributes that use these props must be escaped with `[]`.

```scss
$vv-button: (
    --button-padding: 1rem,
    [padding]: var(--button-padding),
    modifier: (
        small: (
            --button-padding: .5rem
        )
    )
);

/* will generate */
.vv-button {
    --button-padding: 1rem;

    padding: var(--button-padding);
}
.vv-button--small {
     --button-padding: .5rem;
}
```

#### Default override
Default maps can be easily overridden without useless code generation.

```scss
@use 'sass:map';

// import default settings, functions and mixins
@import '@volverjs/style/scss/context';

// override vv-button map
$vv-button: map.deep-merge(
	$vv-button,
	(
		// change button background
		background: blue,
	)
);

// import volverjs style
@import '@volverjs/style/scss';
```

Also the utilities classes can be modified with the same approach. 

```scss
// override aspect-ratio map
$aspect-ratio: map.deep-merge(
	$aspect-ratio,
	(
		// add cinemascope aspect ratio
		cinemascope: '2.35/1',
	)
);
```