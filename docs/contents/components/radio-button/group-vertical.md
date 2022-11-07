---
title: Group Vertical
wrapperClass: flex-1
---

<fieldset class="vv-input-radio-group">
    <legend>Group Vertical</legend>
    <div class="vv-input-radio-group__wrapper">
        <label class="vv-input-radio" for="radio-group-option-vertical-1">
            <input id="radio-group-option-vertical-1" 
                   type="radio" 
                   name="radio-group-vertical"
                   value="1" 
                   checked="checked" 
                   aria-describedby="radio-group-vertical-hint" />
            Option 1
        </label>
        <label class="vv-input-radio" for="radio-group-option-vertical-2">
            <input id="radio-group-option-vertical-2" 
                   type="radio" 
                   name="radio-group-vertical"
                   value="2" 
                   aria-describedby="radio-group-vertical-hint" />
            Option 2
        </label>
        <label class="vv-input-radio" for="radio-group-option-vertical-3">
            <input id="radio-group-option-vertical-3" 
                   type="radio" 
                   name="radio-group-vertical"
                   value="3" 
                   aria-describedby="radio-group-vertical-hint" />
            Option 3
        </label>
        <label class="vv-input-radio" for="radio-group-option-vertical-4">
            <input id="radio-group-option-vertical-4" 
                   type="radio" 
                   name="radio-group-vertical"
                   value="4" 
                   disabled="disabled"
                   aria-describedby="radio-group-vertical-hint" />
            Option 4
        </label>
    </div>
    <small id="radio-group-vertical-hint" class="vv-input-radio-group__hint">
        Please fill the input above.
    </small>
</fieldset>