---
title: States
wrapperClass: flex-1 grid md:grid-cols-3 gap-md items-start
---

<div class="vv-field vv-field--invalid">
    <label id="field-invalid-label">Invalid</label>
    <div class="vv-field__wrapper">
        <div class="vv-field__control" contenteditable="true" role="textbox" aria-invalid="true" aria-labelledby="field-invalid-label" aria-describedby="field-invalid-hint">{ "name": </div>
    </div>
    <small id="field-invalid-hint" class="vv-field__hint">The JSON is not complete.</small>
</div>

<div class="vv-field vv-field--loading">
    <label id="field-loading-label">Loading</label>
    <div class="vv-field__wrapper">
        <div class="vv-field__control" contenteditable="true" role="textbox" aria-labelledby="field-loading-label" aria-busy="true">Checking the address</div>
    </div>
</div>

<div class="vv-field">
    <label for="field-disabled">Disabled</label>
    <div class="vv-field__wrapper">
        <textarea id="field-disabled" class="vv-field__control" rows="1" disabled="disabled">Locked by an administrator</textarea>
    </div>
</div>
