---
title: Backdrop Blur
description: Utilities for blurring what is behind an element.
customProperties: true
---
The element needs a background that lets what is behind it show through, such as a translucent surface. The class for the default 8px is `.backdrop-blur`, like `.blur`; `.backdrop-blur-blur`, its earlier name, still works. The classes read the blur tokens, the same as the [blur](/style/utilities/filters/blur) utilities.

<div>
    <table-utility prefix="backdrop-blur" property="blur" attribute="backdrop-filter" custom-property="blur">
        <template #class="{ key }">
            {{ key === 'blur' ? '.backdrop-blur' : '.backdrop-blur-' + key }}
        </template>
    </table-utility>
</div>
