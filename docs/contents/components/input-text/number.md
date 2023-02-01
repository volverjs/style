---
title: Number
wrapperClass: w-full md:w-9/12
---

<template>
    <div class="vv-input-text vv-input-text--icon-after vv-input-text--dirty vv-input-text--floating">
        <label for="textfield-number">Number</label>
        <div class="vv-input-text__wrapper">
            <input id="textfield-number" ref="input" type="number" name="textfield-number" placeholder="Floating label" aria-describedby="textfield-number-hint" value="10" step="0.1">
            <div class="vv-input-text__actions-group">
                <button type="button" @click="$refs.input.stepUp()" class="vv-input-text__action-chevron vv-input-text__action-chevron-up"></button>
                <button type="button" @click="$refs.input.stepDown()" class="vv-input-text__action-chevron"></button>
            </div>
        </div>
        <small id="textfield-number-hint" class="vv-input-text__hint">
            Please fill the input above.
        </small>
    </div>
</template>