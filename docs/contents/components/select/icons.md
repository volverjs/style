---
title: Icons
wrapperClass: flex-1 grid md:grid-cols-2 gap-md items-start
---

<div class="vv-select vv-select--icon-left">
    <label for="select-icon-left">Icon Left</label>
    <div class="vv-select__wrapper">
        <IconifyIcon icon="akar-icons:heart" />
        <select name="select" id="select-icon-left" aria-describedby="select-icon-left-hint">
            <option value="" selected="selected" disabled="disabled">Placeholder text</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
        </select>
    </div>
    <small id="select-icon-left-hint" class="vv-input-text__hint">
        Please fill the input above.
    </small>
</div>
<div class="vv-select vv-select--icon-right">
    <label for="select-icon-right">Icon Right</label>
    <div class="vv-select__wrapper">
        <select name="select" id="select-icon-right" aria-describedby="select-icon-right-hint">
            <option value="" selected="selected" disabled="disabled">Placeholder text</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
        </select>
        <IconifyIcon icon="akar-icons:heart" />
    </div>
    <small id="select-icon-right-hint" class="vv-input-text__hint">
        Please fill the input above.
    </small>
</div>
<div class="vv-select vv-select--valid vv-select--icon-left vv-select--icon-right">
    <label for="select-icon-valid">Valid Select with left and right icon</label>
    <div class="vv-select__wrapper">
        <IconifyIcon icon="akar-icons:heart" />
        <select name="select" id="select-icon-valid" aria-describedby="select-icon-valid-hint">
            <option value="" selected="selected" disabled="disabled">Placeholder text</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
        </select>
        <IconifyIcon icon="akar-icons:check" />
    </div>
    <small id="select-icon-valid-hint" class="vv-input-text__hint">
        The input above is successful.
    </small>
</div>
<div class="vv-select vv-select--invalid vv-select--icon-left vv-select--icon-right">
    <label for="select-icon-invalid">Valid Select with left and right icon</label>
    <div class="vv-select__wrapper">
        <IconifyIcon icon="akar-icons:heart" />
        <select name="select" id="select-icon-invalid" aria-describedby="select-icon-invalid-hint">
            <option value="" selected="selected" disabled="disabled">Placeholder text</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
        </select>
        <IconifyIcon icon="akar-icons:circle-alert" />
    </div>
    <small id="select-icon-invalid-hint" class="vv-input-text__hint">
        There was an error with the input above.
    </small>
</div>