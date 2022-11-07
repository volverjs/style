---
title: Example
wrapperClass: flex-1 flex flex-col 
---

<script>
    export default {
        data() {
            return {
                transition: 'fade-block',
                size: 'standard',
                transitionClasses: new Set()
            }
        },
        methods:{
            openDialog() {
                this.transitionClasses.add(`vv-dialog--${this.transition}-enter-from`)
                this.$nextTick(() => {
                    this.$refs.dialog.showModal()
                    this.transitionClasses.add(`vv-dialog--${this.transition}-enter-active`)
                    this.transitionClasses.delete(`vv-dialog--${this.transition}-enter-from`)
                })
                this.$refs.dialog.addEventListener('transitionend', () => {
                    this.transitionClasses.delete(`vv-dialog--${this.transition}-enter-active`)
                }, { once: true })
            },
            closeDialog() {
                this.transitionClasses.add(`vv-dialog--${this.transition}-leave-to`)
                this.$nextTick(() => {
                    this.transitionClasses.add(`vv-dialog--${this.transition}-leave-active`)
                })
                this.$refs.dialog.addEventListener('transitionend', () => {
                    this.$refs.dialog.close()
                    this.transitionClasses.delete(`vv-dialog--${this.transition}-leave-to`)
                    this.transitionClasses.delete(`vv-dialog--${this.transition}-leave-active`)
                }, { once: true })
            }
        },
        computed: {
            dialogClasses() {
                const toReturn = Array.from(this.transitionClasses)
                toReturn.push(`vv-dialog--${this.size}`)
                return toReturn
            }
        }
    }
</script>

<template>
    <fieldset class="vv-input-radio-group vv-input-radio-group--horizontal">
        <legend>Transition</legend>
        <div class="vv-input-radio-group__wrapper">
            <label class="vv-input-radio" for="fade-block">
                <input 
                    v-model="transition"
                    id="fade-block" 
                    type="radio" 
                    name="transition" 
                    value="fade-block" />
                fade-block
            </label>
            <label class="vv-input-radio" for="fade-inline">
                <input 
                    v-model="transition"
                    id="fade-inline" 
                    type="radio" 
                    name="transition" 
                    value="fade-inline" 
                        />
                fade-inline
            </label>
            <label class="vv-input-radio" for="scale">
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
    <fieldset class="vv-input-radio-group vv-input-radio-group--horizontal">
        <legend>Size</legend>
        <div class="vv-input-radio-group__wrapper">
            <label class="vv-input-radio" for="standard">
                <input 
                    v-model="size"
                    id="standard" 
                    type="radio" 
                    name="size" 
                    value="standard" />
                standard
            </label>
            <label class="vv-input-radio" for="small">
                <input 
                    v-model="size"
                    id="small" 
                    type="radio" 
                    name="size" 
                    value="small" 
                        />
                small
            </label>
            <label class="vv-input-radio" for="fullscreen">
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
    <button type="button" class="vv-button mr-auto" @click.stop="openDialog">
        Open Dialog
    </button>
    <dialog id="dialog" ref="dialog" class="vv-dialog" :class="dialogClasses">
        <article class="vv-dialog__wrapper">
            <header class="vv-dialog__header">
                Dialog title 
                <button type="buttom" aria-label="Close" class="vv-dialog__close" @click.stop="closeDialog">
                    <IconifyIcon icon="akar-icons:cross" />
                </button>
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
                    <button type="button" class="vv-button vv-button--secondary" @click.stop="closeDialog">
                        Cancel
                    </button>
                    <button type="button" class="vv-button" @click.stop="closeDialog">
                        Confirm
                    </button>
                </div>
            </footer>
        </article>
    </dialog>
</template>