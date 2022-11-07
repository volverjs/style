---
title: States
wrapperClass: md:w-9/12 mx-auto flex justify-center flex-wrap
---

<script>
    import { ref, onMounted } from 'vue'
    export default {
        setup() {
            const checkbox = ref(null)

            onMounted(() => {
                checkbox.value.indeterminate = true
            })

            return {
                checkbox
            }
        },
    }
</script>

<template>
    <label class="vv-input-checkbox" 
           for="checkbox-option">
        <input id="checkbox-option" 
               type="checkbox"
               name="checkbox-option" 
               value="checkbox-option" />
        Option
    </label>
    <label class="vv-input-checkbox" 
           for="checkbox-option-checked">
        <input id="checkbox-option-checked" 
               type="checkbox"
               name="checkbox-option-checked" 
               value="checkbox-option-checked" 
               checked="checked" />
        Checked
    </label>
    <label class="vv-input-checkbox" 
           for="checkbox-option-indeterminate">
        <input id="checkbox-option-indeterminate" 
               ref="checkbox" 
               type="checkbox" 
               name="checkbox-option-indeterminate" 
               value="checkbox-option-indeterminate" />
        Indeterminate
    </label>
    <label class="vv-input-checkbox" 
           for="checkbox-option-checked">
        <input id="checkbox-option-focus" 
               type="checkbox"
               name="checkbox-option-focus" 
               value="checkbox-option-focus" 
               checked="checked" 
               class="focus-visible" />
        Focus
    </label>
    <label class="vv-input-checkbox" 
           for="checkbox-option-disabled">
        <input id="checkbox-option-disabled" 
               type="checkbox"
               name="checkbox-option-disabled" 
               value="checkbox-option-disabled" 
               disabled="disabled" />
        Disabled
    </label>
    <label class="vv-input-checkbox" 
           for="checkbox-option-disabled-checked">
        <input id="checkbox-option-disabled-checked" 
               type="checkbox"
               name="checkbox-option-disabled-checked" 
               value="checkbox-option-disabled-checked" 
               disabled="disabled" 
               checked="checked" />
        Disabled Checked
    </label>
    <label class="vv-input-checkbox 
                  vv-input-checkbox--readonly" 
           for="checkbox-option-readonly">
        <input id="checkbox-option-readonly" 
               type="checkbox"
               name="checkbox-option-readonly" 
               value="checkbox-option-readonly" 
               disabled="disabled"
               tabindex="-1" />
        Readonly
    </label>
    <label class="vv-input-checkbox 
                  vv-input-checkbox--readonly" 
           for="checkbox-option-readonly-checked">
        <input id="checkbox-option-readonly-checked" 
               type="checkbox"
               name="checkbox-option-readonly-checked" 
               value="checkbox-option-readonly-checked" 
               disabled="disabled" 
               checked="checked" 
               tabindex="-1" />
        Readonly Checked
    </label>
</template>