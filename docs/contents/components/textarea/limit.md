---
title: Limit
wrapperClass: md:w-9/12
---

<script>
    export default {
        data() {
            return {
                value: ''
            }
        },
    }
</script>

<template>
    <div class="vv-textarea
                vv-textarea--limit">
        <label for="textarea-limit">Limit</label>
        <div class="vv-textarea__wrapper">
            <textarea id="textarea-limit" 
                    v-model="value"
                    name="textarea-limit" 
                    placeholder="Resizable" 
                    aria-describedby="textarea-limit-hint"
                    maxlength="100"></textarea>
            <span class="vv-textarea__limit">{{value.length}} / 100</span>
        </div>
        <small id="textarea-limit-hint" class="vv-textarea__hint">
            Please fill the input above.
        </small>
    </div>
</template>