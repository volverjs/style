---
title: Example
wrapperClass: flex flex-1 flex-wrap gap-md items-center 
---

<script>
    export default {
        data() {
            return {
                transition: 'fade-block',
                size: 'standard',
                open: false,
                openAttribute: false,
            }
        },
        computed: {
            transitionName: function() {
                return `vv-dialog--${this.transition}`
            }
        },
        methods: {
            toggleOpen() {
                this.open = !this.open;
            },
            toggleOpenAttribute() {
                this.openAttribute = !this.openAttribute;
            },
        }
    }
</script>

<template>
    <fieldset class="vv-radio-group">
        <legend>Transition</legend>
        <div class="vv-radio-group__wrapper">
            <label class="vv-radio" for="fade-block">
                <input 
                    v-model="transition"
                    id="fade-block" 
                    type="radio" 
                    name="transition" 
                    value="fade-block" />
                fade-block
            </label>
            <label class="vv-radio" for="fade-inline">
                <input 
                    v-model="transition"
                    id="fade-inline" 
                    type="radio" 
                    name="transition" 
                    value="fade-inline" 
                        />
                fade-inline
            </label>
            <label class="vv-radio" for="scale">
                <input 
                    v-model="transition"
                    id="scale" 
                    type="radio" 
                    name="transition" 
                    value="scale" />
                scale
            </label>
        </div>
    </fieldset>
    <fieldset class="vv-radio-group">
        <legend>Size</legend>
        <div class="vv-radio-group__wrapper">
            <label class="vv-radio" for="standard">
                <input 
                    v-model="size"
                    id="standard" 
                    type="radio" 
                    name="size" 
                    value="standard" />
                standard
            </label>
            <label class="vv-radio" for="small">
                <input 
                    v-model="size"
                    id="small" 
                    type="radio" 
                    name="size" 
                    value="small" 
                        />
                small
            </label>
            <label class="vv-radio" for="fullscreen">
                <input 
                    v-model="size"
                    id="fullscreen" 
                    type="radio" 
                    name="size" 
                    value="fullscreen" />
                fullscreen
            </label>
        </div>
    </fieldset>
    <button type="button" class="vv-button mr-auto" @click.stop="toggleOpen">
        Open Dialog
    </button>
    <Transition :name="transitionName" @after-leave="toggleOpenAttribute" @before-enter="toggleOpenAttribute">
        <dialog v-show="open" id="dialog" ref="dialog" class="vv-dialog" :class="`vv-dialog--${size}`" :open="openAttribute">
            <article class="vv-dialog__wrapper">
                <header class="vv-dialog__header">
                    Dialog title 
                    <button class="vv-dialog__close" type="buttom" aria-label="Close" @click.stop="toggleOpen"></button>
                </header>
                <div class="vv-dialog__content">
                    <p>
                        Nunc nec ligula a tortor sollicitudin dictum in vel enim.
                        Quisque facilisis turpis vel eros dictum aliquam et nec
                        turpis. Sed eleifend a dui nec ullamcorper. Praesent
                        vehicula lacus ac justo accumsan ullamcorper.
                    </p>
                </div>
                <footer class="vv-dialog__footer">
                    <div class="vv-button-group" role="group">
                        <button type="button" class="vv-button vv-button--secondary" @click.stop="toggleOpen">
                            Cancel
                        </button>
                        <button type="button" class="vv-button" @click.stop="toggleOpen">
                            Confirm
                        </button>
                    </div>
                </footer>
            </article>
        </dialog>
    </Transition>
</template>