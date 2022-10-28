---
title: Aspect Ratio
description: Utilities for controlling the aspect ratio of an element.
---
<div>
    <table-utility prefix="aspect" property="aspect-ratio" class="mb-lg"></table-utility>
    <card-example>
        <div class="absolute inset-0 bg-grid mix-blend-plus-lighter"></div>
        <div class="relative gap-sm columns-2 md:columns-3">
            <div class="aspect-square break-inside-avoid mb-sm flex justify-center items-center rounded-md bg-info">
                <span class="text-xs text-white font-semibold">square</span>
            </div>
            <div class="aspect-tv break-inside-avoid mb-sm flex justify-center items-center rounded-md bg-info">
                <span class="text-xs text-white font-semibold">tv</span>
            </div>
            <div class="aspect-photo break-inside-avoid mb-sm flex justify-center items-center rounded-md bg-info">
                <span class="text-xs text-white font-semibold">photo</span>
            </div>
            <div class="aspect-wide break-inside-avoid mb-sm flex justify-center items-center rounded-md bg-info">
                <span class="text-xs text-white font-semibold">wide</span>
            </div>
            <div class="aspect-ultrawide break-inside-avoid mb-sm flex justify-center items-center rounded-md bg-info">
                <span class="text-xs text-white font-semibold">ultrawide</span>
            </div>
        </div>
    </card-example>
</div>