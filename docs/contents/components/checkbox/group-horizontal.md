---
title: Group Horizontal
wrapperClass: w-full
---

<fieldset class="vv-input-checkbox-group 
                 vv-input-checkbox-group--horizontal">
    <legend>Group Horizontal</legend>
    <div class="vv-input-checkbox-group__wrapper">
        <label class="vv-input-checkbox" for="checkbox-group-option-1">
            <input id="checkbox-group-option-1" 
                   type="checkbox" 
                   name="checkbox-group-horizontal" 
                   value="1" 
                   checked="checked" 
                   aria-describedby="checkbox-group-horizontal-hint" />
            Option 1
        </label>
        <label class="vv-input-checkbox" for="checkbox-group-option-2">
            <input id="checkbox-group-option-2" 
                   type="checkbox" 
                   name="checkbox-group-horizontal" 
                   value="2" 
                   aria-describedby="checkbox-group-horizontal-hint" />
            Option 2
        </label>
        <label class="vv-input-checkbox" for="checkbox-group-option-3">
            <input id="checkbox-group-option-3" 
                   type="checkbox" 
                   name="checkbox-group-horizontal" 
                   value="3" 
                   aria-describedby="checkbox-group-horizontal-hint" />
            Option 3
        </label>
        <label class="vv-input-checkbox" for="checkbox-group-option-4">
            <input id="checkbox-group-option-4" 
                   type="checkbox" 
                   name="checkbox-group-horizontal" 
                   value="4" 
                   disabled="disabled" 
                   aria-describedby="checkbox-group-horizontal-hint">
            Option 4
        </label>
    </div>
    <small id="checkbox-group-horizontal-hint" class="vv-input-checkbox-group__hint">
        Please fill the input above.
    </small>
</fieldset>