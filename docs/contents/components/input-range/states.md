---
title: States
wrapperClass: flex-1 grid md:grid-cols-2 gap-md items-start
---

<div class="vv-input-range" style="--input-range-progress: 30%">
    <label for="range-basic">Range</label>
    <div class="vv-input-range__wrapper">
        <input id="range-basic" 
               type="range" 
               name="range-basic" 
               min="0" 
               max="100" 
               value="30" 
               aria-describedby="range-basic-hint" />
        <div class="vv-input-range__value">30</div>
    </div>
    <small id="range-basic-hint" class="vv-input-range__hint">
        Please move the slider above.
    </small>
</div>

<div class="vv-input-range" 
     style="--input-range-progress: 30%">
    <label for="range-disabled">Disabled Range</label>
    <div class="vv-input-range__wrapper">
        <input id="range-disabled" 
               type="range" 
               name="range-disabled" 
               min="0" 
               max="100" 
               value="30" 
               disabled="disabled" />
        <div class="vv-input-range__value">30</div>
    </div>
</div>

<div class="vv-input-range 
            vv-input-range--readonly" 
     style="--input-range-progress: 30%">
    <label for="range-readonly">Readonly Range</label>
    <div class="vv-input-range__wrapper">
        <input id="range-readonly" 
               type="range" 
               name="range-readonly" 
               min="0" 
               max="100" 
               value="30" 
               disabled="disabled" 
               tabindex="-1" />
        <div class="vv-input-range__value">30</div>
    </div>
</div>

<div class="vv-input-range 
            vv-input-range--valid" 
     style="--input-range-progress: 70%">
    <label for="range-valid">Valid Range</label>
    <div class="vv-input-range__wrapper">
        <input id="range-valid" 
               type="range" 
               name="range-valid" 
               min="0" 
               max="100" 
               value="70" 
               aria-describedby="range-valid-hint" 
               aria-invalid="false" />
        <div class="vv-input-range__value">70</div>
    </div>
    <small id="range-valid-hint" class="vv-input-range__hint">
        The value above is in the recommended range.
    </small>
</div>

<div class="vv-input-range 
            vv-input-range--invalid" 
     style="--input-range-progress: 95%">
    <label for="range-invalid">Invalid Range</label>
    <div class="vv-input-range__wrapper">
        <input id="range-invalid" 
               type="range" 
               name="range-invalid" 
               min="0" 
               max="100" 
               value="95" 
               aria-describedby="range-invalid-hint" 
               aria-invalid="true" />
        <div class="vv-input-range__value">95</div>
    </div>
    <small id="range-invalid-hint" class="vv-input-range__hint">
        The value above is too high.
    </small>
</div>
