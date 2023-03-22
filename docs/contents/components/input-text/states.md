---
title: States
wrapperClass: flex-1 grid md:grid-cols-2 gap-md items-start
---

<div class="vv-input-text">
    <label for="textfield">Text Field</label>
    <div class="vv-input-text__wrapper">
        <input id="textfield" 
               type="text" 
               name="textfield" 
               placeholder="Placeholder text" 
               aria-describedby="textfield-hint" />
    </div>
    <small id="textfield-hint" class="vv-input-text__hint">
        Please fill the input above.
    </small>
</div>

<div class="vv-input-text">
    <label for="textfield-dirty">Dirty Text Field</label>
    <div class="vv-input-text__wrapper">
        <input id="textfield-dirty" 
               type="text" 
               value="Lorem ipsum dolor sit amet"
               name="textfield-dirty" 
               placeholder="Placeholder text" 
               aria-describedby="textfield-dirty-hint" />
    </div>
    <small id="textfield-dirty-hint" class="vv-input-text__hint">
        Please fill the input above.
    </small>
</div>

<div class="vv-input-text">
    <label for="textfield-hover">Hover Text Field</label>
    <div class="vv-input-text__wrapper hover">
        <input id="textfield-hover" 
               type="text" 
               name="textfield-hover" 
               placeholder="Placeholder text" 
               aria-describedby="textfield-hover-hint" />
    </div>
    <small id="textfield-hover-hint" class="vv-input-text__hint">
        Please fill the input above.
    </small>
</div>

<div class="vv-input-text">
    <label for="textfield-focus">Focus Text Field</label>
    <div class="vv-input-text__wrapper focus-within">
        <input id="textfield-focus" 
               type="text" 
               name="textfield-focus" 
               placeholder="Placeholder text" 
               aria-describedby="textfield-focus-hint" />
    </div>
    <small id="textfield-focus-hint" class="vv-input-text__hint">
        Please fill the input above.
    </small>
</div>

<div class="vv-input-text 
            vv-input-text--disabled">
    <label for="textfield-disabled">Disabled Text Field</label>
    <div class="vv-input-text__wrapper">
        <input id="textfield-disabled" 
               type="text" 
               name="textfield-disabled" 
               placeholder="Placeholder text" 
               aria-describedby="textfield-disabled-hint" 
               disabled="disabled" />
    </div>
    <small id="textfield-disabled-hint" class="vv-input-text__hint">
        Please fill the input above.
    </small>
</div>

<div class="vv-input-text 
            vv-input-text--readonly
            vv-input-text--dirty">
    <label for="textfield-readonly">Readonly Text Field</label>
    <div class="vv-input-text__wrapper">
        <input id="textfield-readonly" 
               type="text" 
               name="textfield-readonly" 
               placeholder="Placeholder text" 
               aria-describedby="textfield-readonly-hint" 
               readonly="readonly" 
               value="Lorem ipsum dolor sit amet" 
               tabindex="-1" />
    </div>
</div>

<div class="vv-input-text 
            vv-input-text--valid">
    <label for="textfield-success">Valid Text Field</label>
    <div class="vv-input-text__wrapper">
        <input id="textfield-success" 
               type="text" 
               name="textfield-success"
               placeholder="Placeholder text" 
               aria-describedby="textfield-success-hint" 
               aria-invalid="false" />
    </div>
    <small id="textfield-success-hint" class="vv-input-text__hint">
        The input above is successful.
    </small>
</div>

<div class="vv-input-text 
            vv-input-text--invalid">
    <label for="textfield-invalid">Invalid Text Field</label>
    <div class="vv-input-text__wrapper">
        <input id="textfield-invalid" 
               type="text" 
               name="textfield-invalid" 
               placeholder="Placeholder text" 
               aria-describedby="textfield-invalid-hint" 
               aria-invalid="true" />
    </div>
    <small id="textfield-invalid-hint" class="vv-input-text__hint">
        There was an error with the input above.
    </small>
</div>

<div class="vv-input-text 
            vv-input-text--loading">
    <label for="textfield-loading">Loading Text Field</label>
    <div class="vv-input-text__wrapper">
        <input id="textfield-loading" 
               type="text" 
               name="textfield-loading" 
               placeholder="Placeholder text" 
               aria-describedby="textfield-loading-hint" />
    </div>
    <small id="textfield-loading-hint" class="vv-input-text__hint">Loading...</small>
</div>
