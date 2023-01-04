---
title: Example
wrapperClass: flex flex-1 flex-wrap gap-md items-center
---

<script>
  export default {
    data() {
      return {
        position: 'top',
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
    <fieldset class="vv-radio-group vv-radio-group--horizontal">
        <legend>Position</legend>
        <div class="vv-radio-group__wrapper">
            <label class="vv-radio" for="position-top">
                <input 
                    v-model="position"
                    id="position-top" 
                    type="radio" 
                    name="position" 
                    value="top" />
                top
            </label>
            <label class="vv-radio" for="position-bottom">
                <input 
                    v-model="position"
                    id="position-bottom" 
                    type="radio" 
                    name="position" 
                    value="bottom" 
                        />
                bottom
            </label>
        </div>
    </fieldset>
    <button class="vv-button" @click="toggle">Toggle Alert</button>
    <div v-if="show" 
         class="vv-alert 
                vv-alert--close
                vv-alert--icon
                vv-alert--success
                vv-alert--fixed"
        :class="`vv-alert--${position}`"
        role="alert">
        <button class="vv-alert__close" type="button" aria-label="Close" @click="toggle"></button>
        <IconifyIcon icon="akar-icons:circle-check" />
        <div class="vv-alert__title">Tip!</div>
        <div class="vv-alert__content">Indicates an informal message.</div>
    </div>
</template>
