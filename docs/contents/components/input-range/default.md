---
title: Default
wrapperClass: flex-1
---

<div class="vv-input-range" style="--input-range-progress: 45%">
    <label for="range-default">Temperature</label>
    <div class="vv-input-range__wrapper">
        <input id="range-default" 
               type="range" 
               name="range-default" 
               min="0" 
               max="40" 
               step="1" 
               value="18" 
               aria-describedby="range-default-hint" />
        <div class="vv-input-range__value">
            18
            <span class="vv-input-range__unit">°C</span>
        </div>
    </div>
    <small id="range-default-hint" class="vv-input-range__hint">
        Drag the slider to set the target temperature.
    </small>
</div>
