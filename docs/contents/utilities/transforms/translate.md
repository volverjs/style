---
title: Translate
description: Utilities for translating elements with transform.
---
<table-utility prefix="translate" property="translate" class="mb-lg">
  <template #value="{ value }">
    translate: {{ value }} {{ value }};
  </template>
</table-utility>

<table-utility prefix="-translate" property="translate" class="mb-lg">
  <template #value="{ value }">
    translate: -{{ value }} -{{ value }};
  </template>
</table-utility>

### Translate X
Translate an element by a given factor on the X axis.

<table-utility prefix="translate-x" property="translate" class="mb-lg">
  <template #value="{ value }">
      translate: {{ value }};
  </template>
</table-utility>

<table-utility prefix="-translate-x" property="translate" class="mb-lg">
  <template #value="{ value }">
      translate: -{{ value }};
  </template>
</table-utility>

### Translate Y
Translate an element by a given factor on the Y axis.

<table-utility prefix="translate-y" property="translate">
    <template #value="{ value }">
      translate: 0 {{ value }};
  </template>
</table-utility>

<table-utility prefix="-translate-y" property="translate">
    <template #value="{ value }">
      translate: 0 -{{ value }};
  </template>
</table-utility>