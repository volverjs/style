---
title: Opacity
description: Utilities for controlling the opacity of an element.
customProperties: true
---

<table-utility prefix="opacity" property="opacity" custom-property="opacity" class="mb-lg"></table-utility>
<card-example>
    <div class="absolute inset-0 bg-grid mix-blend-plus-lighter"></div>
    <div class="grid grid-cols-4 gap-sm relative text-xs font-semibold">
        <div v-for="i in [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]" class="break-inside-avoid mb-sm flex justify-center items-center relative">
            <div class="absolute inset-0 bg-info rounded-md" :class="`opacity-${i}`"></div>
            <span class="relative p-sm">opacity-{{i}}</span>
        </div>
    </div>
</card-example>