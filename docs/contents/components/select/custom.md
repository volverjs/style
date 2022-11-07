---
title: Custom Dropdown
wrapperClass: md:w-9/12
---

<div class="vv-select vv-select--dirty">
    <label>Custom Select with Dropdown</label>
    <details role="list" class="vv-select__wrapper">
        <summary class="vv-select__input" aria-haspopup="listbox">
            Option 1
        </summary>
        <ul class="vv-dropdown" role="listbox">
            <li>
                <label for="select-single-option-1">
                    <input type="radio" id="select-single-option-1" name="select-single-option" value="1" checked="checked">
                    Option 1
                </label>
            </li>
            <li>
                <label for="select-single-option-2">
                    <input type="radio" id="select-single-option-2" name="select-single-option" value="2">
                    Option 2
                </label>
            </li>
            <li>
                <label for="select-single-option-3">
                    <input type="radio" id="select-single-option-3" name="select-single-option" value="3">
                    Option 3
                </label>
            </li>
        </ul>
    </details>
</div>
<div class="vv-select vv-select--dirty">
    <label>Custom Multiple Select with Dropdown</label>
    <details role="list" class="vv-select__wrapper">
        <summary class="vv-select__input" aria-haspopup="listbox">
            Option 1, Option 3
        </summary>
        <ul class="vv-dropdown" role="listbox">
            <li>
                <label for="select-multiple-option-1">
                    <input type="checkbox" id="select-multiple-option-1" name="select-multiple-option" value="1" checked="checked">
                    Option 1
                </label>
            </li>
            <li>
                <label for="select-multiple-option-2">
                    <input type="checkbox" id="select-multiple-option-2" name="select-multiple-option" value="2">
                    Option 2
                </label>
            </li>
            <li>
                <label for="select-multiple-option-3">
                    <input type="checkbox" id="select-multiple-option-3" name="select-multiple-option" value="3" checked="checked">
                    Option 3
                </label>
            </li>
        </ul>
    </details>
</div>
<div class="vv-select vv-select--dirty">
    <label>Custom Select with Top Dropdown</label>
    <details role="list" class="vv-select__wrapper">
        <summary class="vv-select__input" aria-haspopup="listbox">
            Option 2
        </summary>
        <ul class="vv-dropdown vv-dropdown--place-top" role="listbox">
            <li>
                <label for="select-single-option-top-1">
                    <input type="radio" id="select-single-option-top-1" name="select-single-option-top" value="1">
                    Option 2
                </label>
            </li>
            <li>
                <label for="select-single-option-top-2">
                    <input type="radio" id="select-single-option-top-2" name="select-single-option-top" value="2" checked="checked">
                    Option 2
                </label>
            </li>
            <li>
                <label for="select-single-option-top-3">
                    <input type="radio" id="select-single-option-top-3" name="select-single-option-top" value="3">
                    Option 3
                </label>
            </li>
        </ul>
    </details>
</div>