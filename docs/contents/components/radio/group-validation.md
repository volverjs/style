---
title: Group Validation
wrapperClass: flex flex-1 flex-col md:flex-row
---

<div class="md:w-1/2">
    <fieldset class="vv-radio-group
                     vv-radio-group--valid">
        <legend>Group Valid</legend>
        <div class="vv-radio-group__wrapper">
            <label class="vv-radio" 
                   for="radio-group-option-vertical-valid-1">
                <input id="radio-group-option-vertical-valid-1"
                       type="radio" 
                       name="radio-group-vertical-valid"
                       value="1"
                       checked="checked" 
                       aria-describedby="radio-group-valid-hint"
                       aria-invalid="false" />
                Option 1
            </label>
            <label class="vv-radio" 
                   for="radio-group-option-vertical-valid-2">
                <input id="radio-group-option-vertical-valid-2"
                       type="radio" 
                       name="radio-group-vertical-valid"
                       value="2"
                       aria-describedby="radio-group-valid-hint"
                       aria-invalid="false" />
                Option 2
            </label>
            <label class="vv-radio" 
                   for="radio-group-option-vertical-valid-3">
                <input id="radio-group-option-vertical-valid-3"
                       type="radio" 
                       name="radio-group-vertical-valid"
                       value="3"
                       aria-describedby="radio-group-valid-hint"
                       aria-invalid="false" />
                Option 3
            </label>
            <label class="vv-radio" 
                   for="radio-group-option-vertical-valid-4">
                <input id="radio-group-option-vertical-valid-4"
                       type="radio" 
                       name="radio-group-vertical-valid"
                       value="4"
                       disabled="disabled" 
                       aria-describedby="radio-group-valid-hint" />
                Option 4
            </label>
        </div>
        <small id="radio-group-valid-hint" class="vv-radio-group__hint">
            The input above is successful.
        </small>
    </fieldset>
</div>
<div class="md:w-1/2">
    <fieldset class="vv-radio-group 
                     vv-radio-group--invalid">
        <legend>Group Invalid</legend>
        <div class="vv-radio-group__wrapper">
            <label class="vv-radio" 
                   for="radio-group-option-vertical-invalid-1">
                <input id="radio-group-option-vertical-invalid-1" 
                       type="radio"
                       name="radio-group-vertical-invalid"
                       value="1" 
                       checked="checked" 
                       aria-describedby="radio-group-invalid-hint"
                       aria-invalid="true" />
                Option 1
            </label>
            <label class="vv-radio" 
                   for="radio-group-option-vertical-invalid-2">
                <input id="radio-group-option-vertical-invalid-2" 
                       type="radio"
                       name="radio-group-vertical-invalid"
                       value="2" 
                       aria-describedby="radio-group-invalid-hint"
                       aria-invalid="true" />
                Option 2
            </label>
            <label class="vv-radio" 
                   for="radio-group-option-vertical-invalid-3">
                <input id="radio-group-option-vertical-invalid-3" 
                       type="radio"
                       name="radio-group-vertical-invalid"
                       value="3" 
                       aria-describedby="radio-group-invalid-hint"
                       aria-invalid="true" />
                Option 3
            </label>
            <label class="vv-radio" 
                   for="radio-group-option-vertical-invalid-4">
                <input id="radio-group-option-vertical-invalid-4" 
                       type="radio"
                       name="radio-group-vertical-invalid"
                       value="4" 
                       disabled="disabled" 
                       aria-describedby="radio-group-invalid-hint" />
                Option 4
            </label>
        </div>
        <small id="radio-group-invalid-hint" class="vv-radio-group__hint">
            There was an error with the input above.
        </small>
    </fieldset>
</div>