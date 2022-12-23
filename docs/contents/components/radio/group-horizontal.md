---
title: Group Horizontal
wrapperClass: w-full
---

<fieldset class="vv-radio-group 
                 vv-radio-group--horizontal">
    <legend>Group Horizontal</legend>
    <div class="vv-radio-group__wrapper">
        <label class="vv-radio" for="radio-group-option-1">
            <input id="radio-group-option-1" 
                    type="radio" 
                    name="radio-group-horizontal" 
                    value="1" 
                    checked="checked" 
                    aria-describedby="radio-group-horizontal-hint" />
            Option 1
        </label>
        <label class="vv-radio" for="radio-group-option-2">
            <input id="radio-group-option-2" 
                   type="radio" 
                   name="radio-group-horizontal" 
                   value="2" 
                   aria-describedby="radio-group-horizontal-hint" />
            Option 2
        </label>
        <label class="vv-radio" for="radio-group-option-3">
            <input id="radio-group-option-3" 
                   type="radio" 
                   name="radio-group-horizontal" 
                   value="3" 
                   aria-describedby="radio-group-horizontal-hint" />
            Option 3
        </label>
        <label class="vv-radio" for="radio-group-option-4">
            <input id="radio-group-option-4" 
                   type="radio" 
                   name="radio-group-horizontal" 
                   value="4" 
                   disabled="disabled" 
                   aria-describedby="radio-group-horizontal-hint" />
            Option 4
        </label>
    </div>
    <small id="radio-group-horizontal-hint" class="vv-radio-group__hint">
        Please fill the input above.
    </small>
</fieldset>