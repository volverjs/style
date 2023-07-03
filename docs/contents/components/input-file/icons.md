---
title: Icons
wrapperClass: flex-1 grid md:grid-cols-2 gap-md items-start
---

<div class="vv-input-file 
            vv-input-file--icon-before">
    <label for="filefield-icon-before">Icon left</label>
    <div class="vv-input-file__wrapper">
        <IconifyIcon icon="akar-icons:heart" />
        <input id="filefield-icon-before" 
               type="file" 
               name="filefield-icon-before" 
               placeholder="Placeholder text" />
    </div>
</div>

<div class="vv-input-file 
            vv-input-file--icon-after">
    <label for="filefield-icon-after">Icon right</label>
    <div class="vv-input-file__wrapper">
        <input id="filefield-icon-after" 
               type="file" 
               name="filefield-icon-after" 
               placeholder="Placeholder text" />
        <IconifyIcon icon="akar-icons:heart" />
    </div>
</div>

<div class="vv-input-file 
            vv-input-file--valid 
            vv-input-file--icon-before 
            vv-input-file--icon-after">
    <label for="filefield-valid-icon">
        Valid File Field with left and right icon
    </label>
    <div class="vv-input-file__wrapper">
        <IconifyIcon icon="akar-icons:heart" />
        <input id="filefield-valid-icon" 
               type="file" 
               name="filefield-invalid-icon" 
               placeholder="Placeholder text" 
               aria-describedby="filefield-valid-icon-hint" 
               aria-invalid="false">
        <IconifyIcon icon="akar-icons:check" />
    </div>
    <small id="filefield-valid-icon-hint" class="vv-input-file__hint">
        The input above is successful.
    </small>
</div>

<div class="vv-input-file
            vv-input-file--invalid 
            vv-input-file--icon-before 
            vv-input-file--icon-after">
    <label for="filefield-invalid-icon">
        Invalid File Field with left and right icon
    </label>
    <div class="vv-input-file__wrapper">
        <IconifyIcon icon="akar-icons:heart" />
        <input id="filefield-invalid-icon" 
               type="file" 
               name="filefield-invalid-icon" 
               placeholder="Placeholder text" 
               aria-describedby="filefield-invalid-icon-hint" 
               aria-invalid="true" />
        <IconifyIcon icon="akar-icons:circle-alert" />
    </div>
    <small id="filefield-invalid-icon-hint" class="vv-input-file__hint">
        There was an error with the input above.
    </small>
</div>