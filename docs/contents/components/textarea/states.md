---
title: States
wrapperClass: flex-1 grid md:grid-cols-2 gap-md items-start
---

<div class="vv-textarea">
    <label for="textarea">Textarea</label>
    <div class="vv-textarea__wrapper">
        <textarea id="textarea" 
                  name="textarea" 
                  placeholder="Placeholder text" 
                  aria-describedby="textarea-hint"></textarea>
    </div>
    <small id="textarea-hint" class="vv-textarea__hint">Please fill the
        input above.</small>
</div>
<div class="vv-textarea 
            vv-textarea--disabled">
    <label for="textarea-disabled">Disabled Textarea</label>
    <div class="vv-textarea__wrapper">
        <textarea id="textarea-disabled" 
                  name="textarea-disabled" 
                  placeholder="Placeholder text" 
                  aria-describedby="textarea-disabled-hint" 
                  disabled="disabled"></textarea>
    </div>
    <small id="textarea-disabled-hint" class="vv-textarea__hint">Please
        fill the input above.</small>
</div>
<div class="vv-textarea 
            vv-textarea--readonly
            vv-textarea--dirty">
    <label for="textarea-readonly">Readonly Textarea</label>
    <div class="vv-textarea__wrapper">
        <textarea id="textarea-readonly" 
                  name="textarea-readonly" 
                  placeholder="Placeholder text" 
                  aria-describedby="textarea-readonly-hint" 
                  readonly="readonly" 
                  value="Lorem ipsum dolor sit amet" 
                  tabindex="-1">Lorem ipsum dolor sit amet</textarea>
    </div>
</div>
<div class="vv-textarea 
            vv-textarea--valid">
    <label for="textarea-success">Valid Textarea</label>
    <div class="vv-textarea__wrapper">
        <textarea id="textarea-success" 
                  name="textarea-success" 
                  placeholder="Placeholder text" 
                  aria-describedby="textarea-success-hint" 
                  aria-invalid="false"></textarea>
    </div>
    <small id="textarea-success-hint" class="vv-textarea__hint">The
        input above is successful.</small>
</div>
<div class="vv-textarea 
            vv-textarea--invalid">
    <label for="textarea-invalid">Invalid Textarea</label>
    <div class="vv-textarea__wrapper">
        <textarea id="textarea-invalid" 
                  name="textarea-invalid" 
                  placeholder="Placeholder text" 
                  aria-describedby="textarea-invalid-hint" 
                  aria-invalid="true"></textarea>
    </div>
    <small id="textarea-invalid-hint" class="vv-textarea__hint">There
        was an error with the input above.</small>
</div>
<div class="vv-textarea 
            vv-textarea--loading">
    <label for="textarea-loading">Loading Textarea</label>
    <div class="vv-textarea__wrapper">
        <textarea id="textarea-loading" 
                  name="textarea-loading" 
                  placeholder="Placeholder text" 
                  aria-describedby="textarea-loading-hint"></textarea>
    </div>
    <small id="textarea-loading-hint" class="vv-textarea__hint">Loading...</small>
</div>