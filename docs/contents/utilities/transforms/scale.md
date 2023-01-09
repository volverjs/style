---
title: Scale
description: Utilities for scaling elements with transform.
---
Scale an element by a given factor.

<table-utility prefix="scale" property="scale" attribute="transform" class="mb-lg">
  <template #value="{ value }">
    transform: scale({{ value }});
  </template>
</table-utility>

### Scale X
Scale an element by a given factor on the X axis.

<table-utility prefix="scale-x" property="scale" attribute="transform" class="mb-lg">
  <template #value="{ value }">
    transform: scaleX({{ value }});
  </template>
</table-utility>

### Scale Y
Scale an element by a given factor on the Y axis.

<table-utility prefix="scale-y" property="scale" attribute="transform">
  <template #value="{ value }">
    transform: scaleY({{ value }});
  </template>
</table-utility>