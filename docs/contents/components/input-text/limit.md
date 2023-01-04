---
title: Limit
wrapperClass: md:w-9/12
---

<script>
    export default {
        data() {
            return {
                value: '',
                iconValue: ''
            }
        },
    }
</script>

<template>
    <div class="vv-input-text">
        <label for="textfield-limit">Limit</label>
        <div class="vv-input-text__wrapper">
            <input id="textfield-limit" 
                v-model="value"
                type="text" 
                name="textfield-limit" 
                placeholder="Placeholder text" 
                aria-describedby="textfield-limit-hint"
                maxlength="10" />
            <span class="vv-input-text__limit">{{value.length}} / 10</span>
        </div>
        <small id="textfield-limit-hint" class="vv-input-text__hint">
            Please fill the input above.
        </small>
    </div>
    <div class="vv-input-text 
                vv-input-text--icon-right">
        <label for="textfield-limit-icon">Limit with icon right</label>
        <div class="vv-input-text__wrapper">
            <input id="textfield-limit-icon" 
                v-model="iconValue"
                type="text" 
                name="textfield-limit-icon" 
                placeholder="Placeholder text" 
                aria-describedby="textfield-limit-icon-hint"
                maxlength="10" />
            <IconifyIcon icon="akar-icons:heart" />
            <span class="vv-input-text__limit">{{iconValue.length}} / 10</span>
        </div>
        <small id="textfield-limit-icon-hint" class="vv-input-text__hint">
            Please fill the input above.
        </small>
    </div>
</template>