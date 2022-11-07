---
title: Indeterminate
wrapperClass: flex-1
---

<script>
    import { ref, onMounted } from 'vue'
    export default {
        setup() {
            const progress = ref(null)

            onMounted(() => {
                progress.value.indeterminate = true
            })

            return {
                progress
            }
        }
    }
</script>

<template>
    <label for="progress-indeterminate" class="block text-xs text-word-3 mb-xs">Indeterminate</label>
    <progress id="progress-indeterminate" 
              ref="progress" 
              class="vv-progress vv-progress--indeterminate"></progress>
</template>
