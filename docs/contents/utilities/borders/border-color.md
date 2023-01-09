---
title: Border Color
description: Utilities for controlling the color of an element's borders.
customProperties: true
colors: true
---
<table-utility prefix="border" property="colors" attribute="border-color">
  <template #value="{ key }">
    border-color: var(--color-{{ key }});
  </template>
</table-utility>