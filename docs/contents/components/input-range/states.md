---
title: States
wrapperClass: flex-1
---

<script>
    export default {
        data() {
            return {
                // every example below runs from 0 to 100, so the value is
                // already the share of the track to fill
                values: {
                    basic: 30,
                    disabled: 30,
                    readonly: 30,
                    valid: 70,
                    invalid: 95,
                },
            }
        },
    }
</script>

<template>
    <div class="grid md:grid-cols-2 gap-md items-start">
        <div class="vv-input-range" 
             :style="{ '--input-range-progress': `${values.basic}%` }">
            <label for="range-basic">Range</label>
            <div class="vv-input-range__wrapper">
                <input id="range-basic" 
                       v-model.number="values.basic" 
                       type="range" 
                       name="range-basic" 
                       min="0" 
                       max="100" 
                       aria-describedby="range-basic-hint" />
                <div class="vv-input-range__value">{{ values.basic }}</div>
            </div>
            <small id="range-basic-hint" class="vv-input-range__hint">
                Please move the slider above.
            </small>
        </div>

        <div class="vv-input-range" 
             :style="{ '--input-range-progress': `${values.disabled}%` }">
            <label for="range-disabled">Disabled Range</label>
            <div class="vv-input-range__wrapper">
                <input id="range-disabled" 
                       v-model.number="values.disabled" 
                       type="range" 
                       name="range-disabled" 
                       min="0" 
                       max="100" 
                       disabled="disabled" />
                <div class="vv-input-range__value">{{ values.disabled }}</div>
            </div>
        </div>

        <div class="vv-input-range 
                    vv-input-range--readonly" 
             :style="{ '--input-range-progress': `${values.readonly}%` }">
            <label for="range-readonly">Readonly Range</label>
            <div class="vv-input-range__wrapper">
                <input id="range-readonly" 
                       v-model.number="values.readonly" 
                       type="range" 
                       name="range-readonly" 
                       min="0" 
                       max="100" 
                       disabled="disabled" 
                       tabindex="-1" />
                <div class="vv-input-range__value">{{ values.readonly }}</div>
            </div>
        </div>

        <div class="vv-input-range 
                    vv-input-range--valid" 
             :style="{ '--input-range-progress': `${values.valid}%` }">
            <label for="range-valid">Valid Range</label>
            <div class="vv-input-range__wrapper">
                <input id="range-valid" 
                       v-model.number="values.valid" 
                       type="range" 
                       name="range-valid" 
                       min="0" 
                       max="100" 
                       aria-describedby="range-valid-hint" 
                       aria-invalid="false" />
                <div class="vv-input-range__value">{{ values.valid }}</div>
            </div>
            <small id="range-valid-hint" class="vv-input-range__hint">
                The value above is in the recommended range.
            </small>
        </div>

        <div class="vv-input-range 
                    vv-input-range--invalid" 
             :style="{ '--input-range-progress': `${values.invalid}%` }">
            <label for="range-invalid">Invalid Range</label>
            <div class="vv-input-range__wrapper">
                <input id="range-invalid" 
                       v-model.number="values.invalid" 
                       type="range" 
                       name="range-invalid" 
                       min="0" 
                       max="100" 
                       aria-describedby="range-invalid-hint" 
                       aria-invalid="true" />
                <div class="vv-input-range__value">{{ values.invalid }}</div>
            </div>
            <small id="range-invalid-hint" class="vv-input-range__hint">
                The value above is too high.
            </small>
        </div>
    </div>
</template>
