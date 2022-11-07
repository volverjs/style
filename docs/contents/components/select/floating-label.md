---
title: Floating label
wrapperClass: md:w-9/12
---

<div class="vv-select
            vv-select--floating">
    <label for="select">Floating label</label>
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

<div class="vv-select
            vv-select--floating
            vv-select--dirty">
    <label for="select">Floating label with value (dirty)</label>
    <div class="vv-select__wrapper">
        <select id="select"
                name="select" 
                aria-describedby="select-hint">
            <option value="" disabled="disabled">
                Placeholder text
            </option>
            <option value="1" selected="selected">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
        </select>
    </div>
    <small id="select-hint" class="vv-input-text__hint">
        Please fill the input above.
    </small>
</div>