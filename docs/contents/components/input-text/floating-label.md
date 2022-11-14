---
title: Floating label
wrapperClass: w-full md:w-9/12
---

<div class="vv-input-text 
            vv-input-text--floating">
    <label for="textfield-floating">Floating label</label>
    <div class="vv-input-text__wrapper">
        <input id="textfield-floating" 
               type="text" 
               name="textfield-floating" 
               placeholder="Floating label" 
               aria-describedby="textfield-floating-hint" />
    </div>
    <small id="textfield-floating-hint" class="vv-input-text__hint">
        Please fill the input above.
    </small>
</div>