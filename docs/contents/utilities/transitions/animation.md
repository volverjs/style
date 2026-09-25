---
title: Animation
description: Custom properties for animating elements with CSS animations.
customProperties: true
---

There are no `animate-*` classes: apply a token with `animation: var(--animation-spin)`. Every token is `none` unless the user allows motion (`prefers-reduced-motion: no-preference`), so an animation read from a token stops by itself for those who asked for less motion.

<div>
    <table-utility prefix="animate" property="animation" custom-property="animation" hide-class hide-value></table-utility>
</div>