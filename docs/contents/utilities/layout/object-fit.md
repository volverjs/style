---
title: Object Fit
description: Utilities for controlling how a replaced element's content should be resized.
---
<table-utility prefix="object" property="object-fit" class="mb-lg"></table-utility>
<card-example>
    <div class="absolute inset-0 bg-grid mix-blend-plus-lighter"></div>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-sm">
      <div class="relative bg-info h-208">
        <img class="absolute w-full h-full object-fill" src="https://unsplash.it/80/40">
        <span role="status" class="vv-badge absolute top-sm left-sm">Fill</span>
      </div>
      <div class="relative bg-info h-208">
        <img class="absolute w-full h-full object-contain" src="https://unsplash.it/80/40">
        <span role="status" class="vv-badge absolute top-sm left-sm">Contain</span>
      </div>
      <div class="relative bg-info h-208">
        <img class="absolute w-full h-full object-cover" src="https://unsplash.it/80/40">
        <span role="status" class="vv-badge absolute top-sm left-sm">Cover</span>
      </div>
      <div class="relative bg-info h-208">
        <img class="absolute w-full h-full object-scale-down" src="https://unsplash.it/80/40">
        <span role="status" class="vv-badge absolute top-sm left-sm">Scale
          down</span>
      </div>
    </div>
  </div>
</card-example>