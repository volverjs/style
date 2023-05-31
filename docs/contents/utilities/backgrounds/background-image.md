---
title: Background Image
description: Utilities for controlling an element's background image.
customProperties: true
---
<table-utility prefix="bg" property="background-image" custom-property="bg" class="mb-lg"></table-utility>
<card-example class="mb-lg" v-slot="{ items }" property="background-image">
	<div class="grid grid-cols-3 md:grid-cols-5 gap-sm">
		<div v-for="(value, key) in items"
          :key="key" class="aspect-square relative bg-white bg-center" 
          :class="[`bg-${key}`, key === 'grid' ? 'bg-auto bg-repeat' : 'bg-cover bg-no-repeat' ]">
      <div
        class="vv-badge vv-badge--rounded vv-badge--white absolute bottom-xs right-xs">
        {{ key }}
      </div>
    </div>
	</div>
</card-example>

### Gradients
Utilities for controlling the gradient.

<div class="mb-lg">
    <table-utility prefix="bg-gradient" property="gradient" attribute="background-image" custom-property="gradient" class="mb-lg"></table-utility>
    <card-example property="gradient" v-slot="{ items }">
      <div class="grid grid-cols-3 md:grid-cols-5 gap-sm">
        <div
          v-for="(value, key) in items"
          :key="key"
          class="aspect-square relative">
          <div
            class="absolute inset-0 m-auto"
            :class="`bg-gradient-${key}`"></div>
          <div
            class="vv-badge vv-badge--rounded vv-badge--white absolute bottom-xs right-xs">
            {{ key }}
          </div>
        </div>
      </div>
    </card-example>
</div>

#### Acknoledgements

`--gradient-{1-30}` variables are based on [open-props](https://github.com/argyleink/open-props).
