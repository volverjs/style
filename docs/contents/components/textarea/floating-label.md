---
title: Floating label
wrapperClass: md:w-9/12
---

<div class="vv-textarea 
            vv-textarea--floating">
    <label for="textarea-floating">Floating label</label>
    <div class="vv-textarea__wrapper">
        <textarea id="textarea-floating" 
                  name="textarea-floating" 
                  placeholder="Floating label" 
                  aria-describedby="textarea-floating-hint"></textarea>
    </div>
    <small id="textarea-floating-hint" class="vv-textarea__hint">
        Please fill the input above.
    </small>
</div>

<div class="vv-textarea 
            vv-textarea--floating
            vv-textarea--dirty">
    <label for="textarea-floating">Floating label with value (dirty)</label>
    <div class="vv-textarea__wrapper">
        <textarea id="textarea-floating" 
                  name="textarea-floating" 
                  placeholder="Floating label" 
                  aria-describedby="textarea-floating-hint">Lorem ipsum dolor sit amet</textarea>
    </div>
    <small id="textarea-floating-hint" class="vv-textarea__hint">
        Please fill the input above.
    </small>
</div>