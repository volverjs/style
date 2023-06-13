---
title: Example
wrapperClass: grid grid-cols-2 sm:grid-cols-4 flex-1 gap-md items-center
---

<script>
    export default {
        data() {
            return {
                autoCloseEnabled: false,
                stackEnabled: false,
                reverseEnabled: false,
                notificationEnabled: false,
                positionBlock: 'top',
                positionInline: 'end',
                isVisible: false,
                items: new Map()
            }
        },
        methods: {
          setItem() {
              const id = Math.random().toString(36).substr(2, 9)
              const toSet = {
                  color: ['success', 'danger', 'warning', 'info'][Math.floor(Math.random() * 4)],
                  icon: ['heart', 'block', 'music', 'key'][Math.floor(Math.random() * 4)],
                  autoClose: this.autoCloseEnabled,
              }
              if (this.autoCloseEnabled) {
                toSet.timeout = setTimeout(() => {
                  if (this.items.has(id)) {
                      this.items.delete(id)
                  }
                }, 5000)
              }
              this.items.set(id, toSet)
          },
          deleteItem(id) {
              this.items.delete(id)
          },
          clearItems() {
              this.items.clear()
          },
          onMouseover(id) {
            if (this.items.has(id) && this.items.get(id).timeout) {
              clearTimeout(this.items.get(id).timeout)
            }
          },
          onMouseleave(id) {
            if (this.items.has(id) && this.items.get(id).autoClose) {
              this.items.get(id).timeout = setTimeout(() => {
                if (this.items.has(id)) {
                    this.items.delete(id)
                }
              }, 5000)
            }
          }
        },
        computed: {
          transitionName() {
            if (this.positionInline === 'start') {
              return 'vv-alert--fade-inline-start'
            }
            if (this.positionInline === 'end') {
              return 'vv-alert--fade-inline-end'
            }
            if (this.positionBlock === 'top') {
              return 'vv-alert--fade-block-top'
            }
            if (this.positionBlock === 'bottom') {
              return 'vv-alert--fade-block-bottom'
            }
            return 'vv-alert--fade'
          }
       }
    }
</script>

<template>
    <fieldset class="vv-radio-group vv-radio-group--vertical">
        <legend>Position Inline</legend>
        <div class="vv-radio-group__wrapper">
            <label class="vv-radio" for="position-start">
                <input 
                    v-model="positionInline"
                    id="position-start" 
                    type="radio" 
                    name="position-inline" 
                    value="start" 
                        />
                start
            </label>
            <label class="vv-radio" for="position-middle">
                <input 
                    v-model="positionInline"
                    id="position-middle" 
                    type="radio" 
                    name="position-inline" 
                    value="middle" 
                        />
                middle
            </label>
            <label class="vv-radio" for="position-end">
                <input 
                    v-model="positionInline"
                    id="position-end" 
                    type="radio" 
                    name="position-inline" 
                    value="end" 
                        />
                end
            </label>
        </div>
    </fieldset>
    <fieldset class="vv-radio-group vv-radio-group--vertical">
        <legend>Position Block</legend>
        <div class="vv-radio-group__wrapper">
            <label class="vv-radio" for="position-top">
                <input 
                    v-model="positionBlock"
                    id="position-top" 
                    type="radio" 
                    name="position-block" 
                    value="top" />
                top
            </label>
            <label class="vv-radio" for="position-center">
                <input 
                    v-model="positionBlock"
                    id="position-center" 
                    type="radio" 
                    name="position-block" 
                    value="center" 
                        />
                center
            </label>
            <label class="vv-radio" for="position-bottom">
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
    <fieldset class="vv-checkbox-group vv-checkbox-group--vertical">
      <label class="vv-checkbox vv-checkbox--toggle" for="auto-close">
          <input 
              v-model="autoCloseEnabled"
              id="auto-close" 
              type="checkbox" 
              name="auto-close" />
          Auto close
      </label>
      <label class="vv-checkbox vv-checkbox--toggle" for="stack">
          <input 
              v-model="stackEnabled"
              id="stack" 
              type="checkbox" 
              name="stack" />
          Stack
      </label>
      <label class="vv-checkbox vv-checkbox--toggle" for="reverse">
          <input 
              v-model="reverseEnabled"
              id="reverse" 
              type="checkbox" 
              name="reverse" />
          Reverse
      </label>
      <label class="vv-checkbox vv-checkbox--toggle" for="notification">
          <input 
              v-model="notificationEnabled"
              id="notification" 
              type="checkbox" 
              name="notification" />
          Notification
      </label>
    </fieldset>
    <button class="vv-button" @click="setItem">Add Alert</button>
    <div class="vv-alert-group vv-alert-group--fixed" 
         :class="[
            `vv-alert-group--${positionBlock}-${positionInline}`, 
            {'vv-alert-group--stack': stackEnabled, 'vv-alert-group--reverse': reverseEnabled}
          ]" role="group">
        <TransitionGroup :name="transitionName">
          <div
              v-for="item in items"
              :key="item[0]"
              :class="[
                `vv-alert--${item[1].color}`, {
                  'vv-alert--notification': notificationEnabled, 
                  'vv-alert--auto-close': item[1].autoClose
                }
              ]"
              @mouseover.passive="onMouseover(item[0])"
              @mouseleave.passive="onMouseleave(item[0])"
              class="vv-alert 
                    vv-alert--dismissable" 
              :style="{'--alert-duration': '5s'}"
              role="alert">
              <div class="vv-alert__header">
                  <IconifyIcon :icon="`akar-icons:${item[1].icon}`" />
                  <strong class="vv-alert__title">Message!</strong> 
                  <button type="button" class="vv-alert__close" aria-label="Close" @click="deleteItem(item[0])">
                    <div class="vv-alert__close-mask"></div>
                  </button>
              </div>
              <div class="vv-alert__content">
                Lorem ipsum dolor sit amet.
              </div>
          </div>
        </TransitionGroup>
    </div>
</template>