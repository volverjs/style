---
title: States
wrapperClass: flex-1 grid md:grid-cols-2 gap-md items-start
---

<div class="vv-select">
    <label for="select">Select</label>
    <div class="vv-select__wrapper">
        <select id="select"
                name="select" 
                aria-describedby="select-hint">
            <option value="" disabled="disabled" selected="selected">
                Placeholder text
            </option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
        </select>
    </div>
    <small id="select-hint" class="vv-input-text__hint">
        Please fill the input above.
    </small>
</div>
<div class="vv-select vv-select--dirty">
    <label for="select-dirty">Dirty Select</label>
    <div class="vv-select__wrapper">
        <select id="select-dirty"
                name="select" 
                aria-describedby="select-dirty-hint">
            <option value="" disabled="disabled">
                Placeholder text
            </option>
            <option value="1" selected="selected">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
        </select>
    </div>
    <small id="select-dirty-hint" class="vv-input-text__hint">
        Please fill the input above.
    </small>
</div>
<div class="vv-select">
    <label for="select-disabled">Disabled Select</label>
    <div class="vv-select__wrapper">
        <select id="select-disabled"
                name="select" 
                disabled="disabled"
                aria-describedby="select-disabled-hint">
            <option value="" disabled="disabled" selected="selected">
                Placeholder text
            </option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
        </select>
    </div>
    <small id="select-disabled-hint" class="vv-input-text__hint">
        Please fill the input above.
    </small>
</div>
<div class="vv-select vv-select--readonly vv-select--dirty">
    <label for="select-readonly">Readonly Select</label>
    <div class="vv-select__wrapper">
        <select id="select-readonly"
                name="select" 
                disabled="disabled"
                aria-describedby="select-readonly-hint"
                tabindex="-1">
            <option value="" disabled="disabled">
                Placeholder text
            </option>
            <option value="1" selected="selected">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
        </select>
    </div>
</div>
<div class="vv-select 
            vv-select--dirty
            vv-select--valid">
    <label for="select-valid">Valid Select</label>
    <div class="vv-select__wrapper">
        <select id="select-valid"
                name="select" 
                aria-describedby="select-valid-hint"
                aria-invalid="false">
            <option value="" disabled="disabled">
                Placeholder text
            </option>
            <option value="1" selected="selected">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
        </select>
    </div>
    <small id="select-valid-hint" class="vv-input-text__hint">
        The input above is successful.
    </small>
</div>
<div class="vv-select 
            vv-select--invalid">
    <label for="select-invalid">Invalid Select</label>
    <div class="vv-select__wrapper">
        <select id="select-invalid" 
                name="select" 
                aria-describedby="select-invalid-hint"
                aria-invalid="true">
            <option value="" selected="selected" disabled="disabled">
                Placeholder text
            </option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
        </select>
    </div>
    <small id="select-invalid-hint" class="vv-input-text__hint">
        There was an error with the input above.
    </small>
</div>
<div class="vv-select 
            vv-select--loading">
    <label for="select-loading">Loading Select</label>
    <div class="vv-select__wrapper">
        <select id="select-loading" 
                name="select" 
                aria-describedby="select-loading-hint">
            <option value="" selected="selected" disabled="disabled">
                Placeholder text
            </option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
        </select>
    </div>
    <small id="select-loading-hint" class="vv-input-text__hint">
        Please fill the input above.
    </small>
</div>
