---
title: Example
wrapperClass: flex flex-1 flex-wrap gap-md items-center
---

<script>
    export default {
        data() {
            return {
                positionBlock: 'top',
                positionInline: 'right',
                show: false
            }
        },
        methods: {
            toggle() {
                this.show = !this.show
            }
        }
    }
</script>

<template>
    <fieldset class="vv-input-radio-group vv-input-radio-group--horizontal">
        <legend>Position Inline</legend>
        <div class="vv-input-radio-group__wrapper">
            <label class="vv-input-radio" for="position-right">
                <input 
                    v-model="positionInline"
                    id="position-right" 
                    type="radio" 
                    name="position-inline" 
                    value="right" 
                        />
                right
            </label>
            <label class="vv-input-radio" for="position-left">
                <input 
                    v-model="positionInline"
                    id="position-left" 
                    type="radio" 
                    name="position-inline" 
                    value="left" 
                        />
                left
            </label>
        </div>
    </fieldset>
    <fieldset class="vv-input-radio-group vv-input-radio-group--horizontal">
        <legend>Position Block</legend>
        <div class="vv-input-radio-group__wrapper">
            <label class="vv-input-radio" for="position-top">
                <input 
                    v-model="positionBlock"
                    id="position-top" 
                    type="radio" 
                    name="position-block" 
                    value="top" />
                top
            </label>
            <label class="vv-input-radio" for="position-bottom">
                <input 
                    v-model="positionBlock"
                    id="position-bottom" 
                    type="radio" 
                    name="position-block" 
                    value="bottom" 
                        />
                bottom
            </label>
        </div>
    </fieldset>
    <button class="vv-button" @click="toggle">Toggle Toast</button>
    <div v-if="show" 
         class="vv-toast 
                vv-toast--success
                vv-toast--close
                fixed
                z-toast" 
         aria-live="assertive" 
         aria-atomic="true"
         :class="[`${positionBlock}-lg`, `${positionInline}-lg`]">
        <div class="vv-toast__header">
            <IconifyIcon icon="akar-icons:check" class="mr-xs"/>
            Success!
            <small class="ml-auto font-extralight text-14">11 mins ago</small>
            <button class="vv-toast__close" type="buttom" aria-label="Close" @click="toggle"></button>
        </div>
    </div>
</template>