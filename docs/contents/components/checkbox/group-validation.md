---
title: Group Validation
wrapperClass: flex flex-1
---

<div class="md:w-1/2">
    <fieldset class="vv-input-checkbox-group 
                     vv-input-checkbox-group--valid">
        <legend>Group Valid</legend>
        <div class="vv-input-checkbox-group__wrapper">
            <label class="vv-input-checkbox" for="checkbox-group-option-vertical-invalid-1">
                <input id="checkbox-group-option-vertical-valid-1" 
                       type="checkbox"
                       name="checkbox-group-vertical-valid" 
                       value="1" 
                       checked="checked" 
                       aria-describedby="checkbox-group-vertical-valid-hint"
                       aria-invalid="false" />
                Option 1
            </label>
            <label class="vv-input-checkbox" for="checkbox-group-option-vertical-valid-2">
                <input id="checkbox-group-option-vertical-valid-2" 
                       type="checkbox"
                       name="checkbox-group-vertical-valid" 
                       value="2" 
                       aria-describedby="checkbox-group-vertical-valid-hint"
                       aria-invalid="false" />
                Option 2
            </label>
            <label class="vv-input-checkbox" for="checkbox-group-option-vertical-valid-3">
                <input id="checkbox-group-option-vertical-valid-3" 
                       type="checkbox"
                       name="checkbox-group-vertical-valid" 
                       value="3" 
                       aria-describedby="checkbox-group-vertical-valid-hint"
                       aria-invalid="false" />
                Option 3
            </label>
            <label class="vv-input-checkbox" for="checkbox-group-option-vertical-valid-4">
                <input id="checkbox-group-option-vertical-valid-4" 
                       type="checkbox"
                       name="checkbox-group-vertical-valid" 
                       value="4" 
                       disabled="disabled" 
                       aria-describedby="checkbox-group-vertical-valid-hint"
                       aria-invalid="false" />
                Option 4
            </label>
        </div>
        <small id="checkbox-group-vertical-valid-hint" class="vv-input-checkbox-group__hint">
            The input above is successful.
        </small>
    </fieldset>
</div>
<div class="md:w-1/2">
    <fieldset class="vv-input-checkbox-group 
                     vv-input-checkbox-group--invalid">
        <legend>Group Invalid</legend>
        <div class="vv-input-checkbox-group__wrapper">
            <label class="vv-input-checkbox" for="checkbox-group-option-vertical-invalid-1">
                <input id="checkbox-group-option-vertical-invalid-1" 
                       type="checkbox" 
                       name="checkbox-group-vertical-invalid" 
                       value="1" 
                       checked="checked" 
                       aria-describedby="checkbox-group-vertical-invalid-hint"
                       aria-invalid="true" />
                Option 1
            </label>
            <label class="vv-input-checkbox" for="checkbox-group-option-vertical-invalid-2">
                <input id="checkbox-group-option-vertical-invalid-2" 
                       type="checkbox" 
                       name="checkbox-group-vertical-invalid" 
                       value="2" 
                       aria-describedby="checkbox-group-vertical-invalid-hint"
                       aria-invalid="true" />
                Option 2
            </label>
            <label class="vv-input-checkbox" for="checkbox-group-option-vertical-invalid-3">
                <input id="checkbox-group-option-vertical-invalid-3" 
                       type="checkbox" 
                       name="checkbox-group-vertical-invalid" 
                       value="3" 
                       aria-describedby="checkbox-group-vertical-invalid-hint"
                       aria-invalid="true" />
                Option 3
            </label>
            <label class="vv-input-checkbox" for="checkbox-group-option-vertical-invalid-4">
                <input id="checkbox-group-option-vertical-invalid-4" 
                       type="checkbox" 
                       name="checkbox-group-vertical-invalid" 
                       value="4" 
                       disabled="disabled" 
                       aria-describedby="checkbox-group-vertical-invalid-hint"
                       aria-invalid="true" />
                Option 4
            </label>
        </div>
        <small id="checkbox-group-vertical-invalid-hint" class="vv-input-checkbox-group__hint">
            There was an error with the input above.
        </small>
    </fieldset>
</div>