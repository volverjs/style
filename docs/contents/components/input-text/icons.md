---
title: Icons
wrapperClass: flex-1 grid md:grid-cols-2 gap-md items-start
---

<div class="vv-input-text 
            vv-input-text--icon-left">
    <label for="textfield-icon-left">Icon left</label>
    <div class="vv-input-text__wrapper">
        <IconifyIcon icon="akar-icons:heart" />
        <input id="textfield-icon-left" 
               type="text" 
               name="textfield-icon-left" 
               placeholder="Placeholder text" />
    </div>
</div>

<div class="vv-input-text 
            vv-input-text--icon-right">
    <label for="textfield-icon-right">Icon right</label>
    <div class="vv-input-text__wrapper">
        <input id="textfield-icon-right" 
               type="text" 
               name="textfield-icon-right" 
               placeholder="Placeholder text" />
        <IconifyIcon icon="akar-icons:heart" />
    </div>
</div>

<div class="vv-input-text 
            vv-input-text--valid 
            vv-input-text--icon-left 
            vv-input-text--icon-right">
    <label for="textfield-valid-icon">
        Valid Text Field with left and right icon
    </label>
    <div class="vv-input-text__wrapper">
        <IconifyIcon icon="akar-icons:heart" />
        <input id="textfield-valid-icon" 
               type="text" 
               name="textfield-invalid-icon" 
               placeholder="Placeholder text" 
               aria-describedby="textfield-valid-icon-hint" 
               aria-invalid="false">
        <IconifyIcon icon="akar-icons:check" />
    </div>
    <small id="textfield-valid-icon-hint" class="vv-input-text__hint">
        The input above is successful.
    </small>
</div>

<div class="vv-input-text
            vv-input-text--invalid 
            vv-input-text--icon-left 
            vv-input-text--icon-right">
    <label for="textfield-invalid-icon">
        Invalid Text Field with left and right icon
    </label>
    <div class="vv-input-text__wrapper">
        <IconifyIcon icon="akar-icons:heart" />
        <input id="textfield-invalid-icon" 
               type="text" 
               name="textfield-invalid-icon" 
               placeholder="Placeholder text" 
               aria-describedby="textfield-invalid-icon-hint" 
               aria-invalid="true" />
        <IconifyIcon icon="akar-icons:circle-alert" />
    </div>
    <small id="textfield-invalid-icon-hint" class="vv-input-text__hint">
        There was an error with the input above.
    </small>
</div>