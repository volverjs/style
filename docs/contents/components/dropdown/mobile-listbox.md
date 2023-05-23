---
title: Listbox
wrapperClass: flex flex-1 flex-wrap gap-md items-center justify-center
---
<template>
  <iframe styles="height: 1000px; width: 500px;"></iframe>
</template>

<script setup>
    import { onMounted } from 'vue'

    var cssLink = document.createElement("link");

    onMounted(() => {
      document.querySelector('iframe')
          .contentDocument.write(/* html */`
            <link href="https://unpkg.com/@volverjs/style@0.1.10/dist/volver.css" type="text/css" rel="Stylesheet" />
            <link href="https://unpkg.com/@volverjs/style@0.1.10/dist/themes/dark/volver.css" type="text/css" rel="Stylesheet" />
            <div class="vv-dropdown vv-dropdown--mobile-options">
              <ul class="vv-dropdown__list" role="listbox">
                <li class="vv-dropdown-optgroup" 
                  role="presentation" 
                  tabindex="-1">
                  <span class="vv-dropdown-option__label">Option group</span>
                </li>
                <li class="vv-dropdown-option" 
                  role="option" 
                  aria-selected="false" 
                  aria-disabled="false" 
                  tabindex="0">
                  <span class="vv-dropdown-option__label">Option</span>
                </li>
                <li class="vv-dropdown-option" 
                  role="option" 
                  aria-selected="false" 
                  aria-disabled="true" 
                  tabindex="0">
                  <span class="vv-dropdown-option__label">Option disabled</span>
                </li>
                <li class="vv-dropdown-option focus-visible" 
                  role="option" 
                  aria-selected="false"
                  aria-disabled="false" 
                  tabindex="0">
                  <span class="vv-dropdown-option__label">Option focused</span>
                  <span class="vv-dropdown-option__hint">Press enter to select</span>
                </li>
                <li class="vv-dropdown-option" 
                  role="option" 
                  aria-selected="true" 
                  aria-disabled="false" 
                  tabindex="0">
                  <span class="vv-dropdown-option__label">Option selected</span>
                </li>
                <li class="vv-dropdown-option vv-dropdown-option--unselectable focus-visible" 
                  role="option" 
                  aria-selected="true" 
                  aria-disabled="false" 
                  tabindex="0">
                  <span class="vv-dropdown-option__label">Option selected focused</span>
                  <span class="vv-dropdown-option__hint">Press enter to remove</span>
                </li>
              </ul>
            </div>
            `)
    })
</script>