---
title: States
wrapperClass: flex-1 grid md:grid-cols-2 gap-md items-start
---

<div class="vv-input-range">
    <label for="range-basic">Range</label>
    <div class="vv-input-range__wrapper">
        <input id="range-basic" 
               type="range" 
               name="range-basic" 
               min="0" 
               max="100" 
               value="30" 
               aria-describedby="range-basic-hint" />
    </div>
    <small id="range-basic-hint" class="vv-input-range__hint">
        Please move the slider above.
    </small>
</div>

<div class="vv-input-range">
    <label for="range-hover">Hover Range</label>
    <div class="vv-input-range__wrapper hover">
        <input id="range-hover" 
               type="range" 
               name="range-hover" 
               min="0" 
               max="100" 
               value="30" 
               aria-describedby="range-hover-hint" />
    </div>
    <small id="range-hover-hint" class="vv-input-range__hint">
        Please move the slider above.
    </small>
</div>

<div class="vv-input-range">
    <label for="range-focus">Focus Range</label>
    <div class="vv-input-range__wrapper focus-within">
        <input id="range-focus" 
               type="range" 
               name="range-focus" 
               min="0" 
               max="100" 
               value="30" 
               aria-describedby="range-focus-hint" />
    </div>
    <small id="range-focus-hint" class="vv-input-range__hint">
        Please move the slider above.
    </small>
</div>

<div class="vv-input-range">
    <label for="range-disabled">Disabled Range</label>
    <div class="vv-input-range__wrapper">
        <input id="range-disabled" 
               type="range" 
               name="range-disabled" 
               min="0" 
               max="100" 
               value="30" 
               aria-describedby="range-disabled-hint" 
               disabled="disabled" />
    </div>
    <small id="range-disabled-hint" class="vv-input-range__hint">
        Please move the slider above.
    </small>
</div>

<div class="vv-input-range 
            vv-input-range--readonly">
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
    </div>
</div>

<div class="vv-input-range 
            vv-input-range--loading">
    <label for="range-loading">Loading Range</label>
    <div class="vv-input-range__wrapper">
        <input id="range-loading" 
               type="range" 
               name="range-loading" 
               min="0" 
               max="100" 
               value="30" 
               aria-describedby="range-loading-hint" />
    </div>
    <small id="range-loading-hint" class="vv-input-range__hint">Loading...</small>
</div>

<div class="vv-input-range 
            vv-input-range--valid">
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
    </div>
    <small id="range-valid-hint" class="vv-input-range__hint">
        The value above is in the recommended range.
    </small>
</div>

<div class="vv-input-range 
            vv-input-range--invalid">
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
    </div>
    <small id="range-invalid-hint" class="vv-input-range__hint">
        The value above is too high.
    </small>
</div>
