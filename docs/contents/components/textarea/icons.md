---
title: Icons
wrapperClass: flex-1 grid md:grid-cols-2 gap-md items-start
---

<div class="vv-textarea 
            vv-textarea--icon-left">
    <label for="textarea-icon-left">Icon left</label>
    <div class="vv-textarea__wrapper">
        <IconifyIcon icon="akar-icons:heart" />
        <textarea id="textarea-icon-left" 
                  name="textarea-icon-left" 
                  placeholder="Placeholder text"></textarea>
    </div>
</div>
<div class="vv-textarea 
            vv-textarea--icon-right">
    <label for="textarea-icon-right">Icon right</label>
    <div class="vv-textarea__wrapper">
        <textarea id="textarea-icon-right" 
                  name="textarea-icon-right" 
                  placeholder="Placeholder text"></textarea>
        <IconifyIcon icon="akar-icons:heart" />
    </div>
</div>
<div class="vv-textarea 
            vv-textarea--valid 
            vv-textarea--icon-left 
            vv-textarea--icon-right">
    <label for="textarea-valid-icon">
        Valid Textarea with left and right icon
    </label>
    <div class="vv-textarea__wrapper">
        <IconifyIcon icon="akar-icons:heart" />
        <textarea id="textarea-valid-icon" 
                  name="textarea-invalid-icon" 
                  placeholder="Placeholder text" 
                  aria-describedby="textarea-valid-icon-hint" 
                  aria-invalid="false"></textarea>
        <IconifyIcon icon="akar-icons:check" />
    </div>
    <small id="textarea-valid-icon-hint" class="vv-textarea__hint">
        The input above is successful.
    </small>
</div>
<div class="vv-textarea 
            vv-textarea--invalid 
            vv-textarea--icon-left 
            vv-textarea--icon-right">
    <label for="textarea-invalid-icon">
        Invalid Textarea with left and right icon
    </label>
    <div class="vv-textarea__wrapper">
        <IconifyIcon icon="akar-icons:heart" />
        <textarea id="textarea-invalid-icon" 
                  name="textarea-invalid-icon" 
                  placeholder="Placeholder text" 
                  aria-describedby="textarea-invalid-icon-hint" 
                  aria-invalid="true"></textarea>
        <IconifyIcon icon="akar-icons:circle-alert" />
    </div>
    <small id="textarea-invalid-icon-hint" class="vv-textarea__hint">
        There was an error with the input above.
    </small>
</div>