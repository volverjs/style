---
title: Icons
wrapperClass: flex-1 grid md:grid-cols-2 gap-md items-start
---

<div class="vv-select vv-select--icon-before">
    <label for="select-icon-before">Icon Left</label>
    <div class="vv-select__wrapper">
        <IconifyIcon icon="akar-icons:heart" />
        <select name="select" id="select-icon-before" aria-describedby="select-icon-before-hint">
            <option value="" selected="selected" disabled="disabled">Placeholder text</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
        </select>
    </div>
    <small id="select-icon-before-hint" class="vv-select__hint">
        Please fill the input above.
    </small>
</div>
<div class="vv-select vv-select--icon-after">
    <label for="select-icon-after">Icon Right</label>
    <div class="vv-select__wrapper">
        <select name="select" id="select-icon-after" aria-describedby="select-icon-after-hint">
            <option value="" selected="selected" disabled="disabled">Placeholder text</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
        </select>
        <IconifyIcon icon="akar-icons:heart" />
    </div>
    <small id="select-icon-after-hint" class="vv-select__hint">
        Please fill the input above.
    </small>
</div>
<div class="vv-select vv-select--valid vv-select--icon-before vv-select--icon-after">
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
    <small id="select-icon-valid-hint" class="vv-select__hint">
        The input above is successful.
    </small>
</div>
<div class="vv-select vv-select--invalid vv-select--icon-before vv-select--icon-after">
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
    <small id="select-icon-invalid-hint" class="vv-select__hint">
        There was an error with the input above.
    </small>
</div>