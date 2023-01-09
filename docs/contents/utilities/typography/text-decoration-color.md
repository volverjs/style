---
title: Text Decoration Color
description: Utilities for controlling the color of text decorations.
customProperties: true
colors: true
---
<table-utility prefix="decoration" property="colors" attribute="text-decoration">
  <template #value="{ key }">
    text-decoration-color: var(--color-{{ key }});
  </template>
</table-utility>