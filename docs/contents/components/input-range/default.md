---
title: Default
wrapperClass: flex-1
---

<script>
    export default {
        data() {
            return {
                min: 0,
                max: 40,
                temperature: 18,
            }
        },
        computed: {
            progress() {
                const share =
                    (this.temperature - this.min) / (this.max - this.min)
                return `${share * 100}%`
            },
        },
    }
</script>

<template>
    <div class="vv-input-range" 
         :style="{ '--input-range-progress': progress }">
        <label for="range-default">Temperature</label>
        <div class="vv-input-range__wrapper">
            <input id="range-default" 
                   v-model.number="temperature" 
                   type="range" 
                   name="range-default" 
                   :min="min" 
                   :max="max" 
                   step="1" 
                   aria-describedby="range-default-hint" />
            <div class="vv-input-range__value">
                {{ temperature }}
                <span class="vv-input-range__unit">°C</span>
            </div>
        </div>
        <small id="range-default-hint" class="vv-input-range__hint">
            Drag the slider to set the target temperature.
        </small>
    </div>
</template>
