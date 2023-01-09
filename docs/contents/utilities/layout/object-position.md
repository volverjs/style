---
title: Object Position
description: Utilities for controlling how a replaced element's content should be positioned within its container.
---
<table-utility prefix="object" property="object-position" class="mb-lg"></table-utility>
<card-example>
    <div class="absolute inset-0 bg-grid mix-blend-plus-lighter"></div>
    <div class="grid grid-cols-3 md:grid-cols-4 gap-sm">
      <div class="relative bg-info h-150">
        <img class="absolute w-full h-full object-scale-down object-bottom" src="https://unsplash.it/80">
        <span role="status" class="vv-badge absolute top-sm left-sm">Bottom</span>
      </div>
      <div class="relative bg-info h-150">
        <img class="absolute w-full h-full object-scale-down object-center" src="https://unsplash.it/80">
        <span role="status" class="vv-badge absolute top-sm left-sm">Center</span>
      </div>
      <div class="relative bg-info h-150">
        <img class="absolute w-full h-full object-scale-down object-left" src="https://unsplash.it/80">
        <span role="status" class="vv-badge absolute top-sm left-sm">Left</span>
      </div>
      <div class="relative bg-info h-150">
        <img class="absolute w-full h-full object-scale-down object-left-bottom" src="https://unsplash.it/80">
        <span role="status" class="vv-badge absolute top-sm left-sm">Left
          bottom</span>
      </div>
      <div class="relative bg-info h-150">
        <img class="absolute w-full h-full object-scale-down object-left-top" src="https://unsplash.it/80">
        <span role="status" class="vv-badge absolute top-sm left-sm">Left
          top</span>
      </div>
      <div class="relative bg-info h-150">
        <img class="absolute w-full h-full object-scale-down object-right" src="https://unsplash.it/80">
        <span role="status" class="vv-badge absolute top-sm left-sm">Right</span>
      </div>
      <div class="relative bg-info h-150">
        <img class="absolute w-full h-full object-scale-down object-right-bottom" src="https://unsplash.it/80">
        <span role="status" class="vv-badge absolute top-sm left-sm">Right
          bottom</span>
      </div>
      <div class="relative bg-info h-150">
        <img class="absolute w-full h-full object-scale-down object-right-top" src="https://unsplash.it/80">
        <span role="status" class="vv-badge absolute top-sm left-sm">Right
          top</span>
      </div>
      <div class="relative bg-info h-150">
        <img class="absolute w-full h-full object-scale-down object-top" src="https://unsplash.it/80">
        <span role="status" class="vv-badge absolute top-sm left-sm">Top</span>
      </div>
    </div>
</card-example>