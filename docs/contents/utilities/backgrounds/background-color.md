---
title: Background Color
description: Utilities for controlling an element's background color.
customProperties: true
colors: true
---
<table-utility prefix="bg" property="colors" attribute="background-color" class="mb-lg">
  <template #value="{ key }">
    background-color: var(--color-{{ key }});
  </template>
</table-utility>
<card-example property="colors" v-slot="{ items }">
      <div class="grid grid-cols-3 md:grid-cols-4 gap-sm">
        <div
          v-for="(value, key) in items"
          :key="key"
          class="aspect-square relative">
          <div
            class="absolute inset-0 m-auto"
            :class="`bg-${key}`"></div>
          <div
            class="vv-badge vv-badge--rounded vv-badge--white absolute bottom-xs right-xs">
            {{ key }}
          </div>
        </div>
      </div>
    </card-example>