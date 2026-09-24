---
title: Before and after
wrapperClass: flex-1 grid md:grid-cols-2 gap-md items-start
---

<div class="vv-field">
    <label id="field-folder-label">Folder</label>
    <div class="vv-field__wrapper">
        <span class="vv-field__before"><IconifyIcon icon="akar-icons:folder" /></span>
        <button type="button" id="field-folder-value" class="vv-field__control text-left" aria-labelledby="field-folder-label field-folder-value">Documents / Contracts</button>
        <span class="vv-field__after"><IconifyIcon icon="akar-icons:chevron-down" /></span>
    </div>
</div>

<div class="vv-field">
    <label id="field-timeout-label">Timeout</label>
    <div class="vv-field__wrapper">
        <div class="vv-field__control font-mono" contenteditable="true" role="textbox" aria-labelledby="field-timeout-label">30</div>
        <span class="vv-field__after">seconds</span>
    </div>
</div>
