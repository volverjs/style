---
title: Form fields
wrapperClass: md:w-9/12 mx-auto
---

<form>
    <label for="field-username">Text</label>
    <input 
        id="field-username" 
        type="text" 
        name="text" 
        placeholder="Insert the text" />
    <label for="field-password">Password</label>
    <input 
        id="field-password" 
        type="password" 
        name="password" 
        placeholder="Insert the password" />
    <label for="field-select">Select</label>
    <select id="field-select" name="select">
        <optgroup label="Option Group">
            <option disabled selected>Select an option</option>
            <option value="1">Option One</option>
            <option value="2">Option Two</option>
            <option value="3">Option Three</option>
        </optgroup>
    </select>
    <label for="field-textarea">Textarea</label>
    <textarea id="field-textarea" rows="8" cols="48" placeholder="Enter your message here"></textarea>
    <fieldset>
        <legend>Switch</legend>
        <label for="field-switch-1">
            <input 
                id="field-switch-1"
                type="checkbox"
                role="switch"
                value="1"
                name="switch"
                checked="checked" />
        Choice A
        </label>
        <label for="field-switch-2">
            <input 
                id="field-switch-2"
                type="checkbox"
                role="switch"
                name="switch" 
                value="b" />
            Choice B
        </label>
        <label for="field-switch-3">
            <input 
                id="field-switch-3"
                type="checkbox"
                role="switch"
                name="switch" 
                value="c"
                disabled="disabled" />
            Choice C
        </label>
    </fieldset>
    <fieldset>
        <legend>Checkbox</legend>
        <label for="field-checkbox-1">
            <input id="field-checkbox-1" name="checkbox" value="a" type="checkbox" checked="checked" />
            Choice A
        </label>
        <label for="field-checkbox-2">
            <input id="field-checkbox-2" name="checkbox" value="b" type="checkbox" />
            Choice B
        </label>
        <label for="field-checkbox-3">
            <input id="field-checkbox-3" name="checkbox" value="c" type="checkbox" disabled />
            Choice C
        </label>
    </fieldset>
    <fieldset>
        <legend>Radio buttons</legend>
        <label for="field-radio-1">
            <input id="field-radio-1" name="checkradiobox" value="a" type="radio" checked="checked" />
            Choice A
        </label>
        <label for="field-radio-2">
            <input id="field-radio-2" name="radio" value="b" type="radio" />
            Choice B
        </label>
        <label for="field-radio-3">
            <input id="field-radio-3" name="radio" value="c" type="radio" disabled />
            Choice C
        </label>
    </fieldset>
    <button type="reset">Reset</button>
    <button type="submit">Login</button>
</form>
