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
                show: false,
                timeout: undefined
            }
        },
        methods: {
            toggle() {
                if (this.timeout) {
                    clearTimeout(this.timeout)
                }
                this.show = !this.show
            }
        },
        watch: {
            show(newValue) {
                if (newValue) {
                    this.timeout = setTimeout(() => {
                        if (this.show) {
                            this.show = false
                        }
                    }, 5000)
                }
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
            <label class="vv-input-radio" for="position-center">
                <input 
                    v-model="positionInline"
                    id="position-center" 
                    type="radio" 
                    name="position-inline" 
                    value="center" 
                        />
                center
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
                vv-toast--dismissable
                vv-toast--fixed" 
         aria-live="assertive" 
         aria-atomic="true"
         :class="[`vv-toast--${positionBlock}`, `vv-toast--${positionInline}`]"
         :style="{'--toast-pie-animation-duration': '5s'}">
        <div class="vv-toast__header">
            <IconifyIcon icon="akar-icons:check" class="mr-12"/>
            Success!
            <small class="ml-auto font-extralight text-14">11 mins ago</small>
            <button type="button" class="vv-toast__pie" @click="toggle">
                <div class="vv-toast__pie-mask"></div>
            </button>
        </div>
    </div>
</template>