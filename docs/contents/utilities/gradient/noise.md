---
title: Noise
description: Utilities for controlling the noise with background-image.
customProperties: true
---

<table-utility property="noise" custom-property="noise" hide-class class="mb-lg">
  <template #custom-property="{ key }">
    --noise-{{ key }}
  </template>
  <template #value="{ value }">
    {{ value }}
  </template>
</table-utility>


## Noise-filter

<table-utility property="noise-filter" custom-property="noise-filter" hide-class class="mb-lg">
  <template #custom-property="{ key }">
    --noise-filter-{{ key }}
  </template>
  <template #value="{ value }">
    {{ value }}
  </template>
</table-utility>