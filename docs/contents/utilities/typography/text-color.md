---
title: Text Color
description: Utilities for controlling the text color of an element.
customProperties: true
colors: true
---
<table-utility prefix="text" property="colors" attribute="color">
  <template #value="{ key }">
    color: var(--color-{{ key }});
  </template>
</table-utility>