---
title: Mobile menu
wrapperClass: flex flex-1 flex-wrap gap-md items-center justify-center
---
<template>
  <iframe ></iframe>
</template>

<script setup>
    import { onMounted } from 'vue'

    var cssLink = document.createElement("link");

    onMounted(() => {
      document.querySelector('iframe')
          .contentDocument.write(/* html */`
            <link href="https://unpkg.com/@volverjs/style@0.1.10/dist/volver.css" type="text/css" rel="Stylesheet" />
            <link href="https://unpkg.com/@volverjs/style@0.1.10/dist/themes/dark/volver.css" type="text/css" rel="Stylesheet" />
            <div class="theme theme--dark">
              <div class="vv-dropdown vv-dropdown--mobile-fullscreen">
                <ul class="vv-dropdown__list" role="menu">
                  <li role="presentation">
                    <button role="menuitem" type="button" class="vv-dropdown-action">
                      Create
                    </button>
                  </li>
                  <li role="presentation">
                    <button role="menuitem" type="button" class="vv-dropdown-action">
                      Update
                    </button>
                  </li>
                  <li role="presentation">
                    <button role="menuitem" type="button" class="vv-dropdown-action" disabled>
                      Delete
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          `)
    })
</script>