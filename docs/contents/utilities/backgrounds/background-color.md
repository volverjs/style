---
title: Background Color
description: Utilities for controlling an element's background color.
customProperties: true
colors: true
---
<table-utility prefix="bg" property="colors" attribute="background-color">
  <template #value="{ key }">
    background-color: var(--color-{{ key }});
  </template>
</table-utility>