---
title: Scale
description: Utilities for scaling elements with transform.
---
Scale an element by a given factor.

<table-utility prefix="scale" property="scale" attribute="transform" class="mb-lg">
  <template #value="{ value }">
    scale: {{ value }};
  </template>
</table-utility>

### Scale X
Scale an element by a given factor on the X axis.

<table-utility prefix="scale-x" property="scale" attribute="transform" class="mb-lg">
  <template #value="{ value }">
    scale: {{ value }} 1;
  </template>
</table-utility>

### Scale Y
Scale an element by a given factor on the Y axis.

<table-utility prefix="scale-y" property="scale" attribute="transform">
  <template #value="{ value }">
    scale: 1 {{ value }};
  </template>
</table-utility>