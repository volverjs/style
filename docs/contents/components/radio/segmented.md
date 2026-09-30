---
title: Segmented
wrapperClass: w-full
---

<fieldset class="vv-radio-group vv-radio-group--segmented">
    <legend>View</legend>
    <div class="vv-radio-group__wrapper">
        <label class="vv-radio vv-radio--segment">
            <input type="radio" name="radio-segmented" value="day" checked="checked" aria-describedby="radio-segmented-hint" />
            <span>Day</span>
        </label>
        <label class="vv-radio vv-radio--segment">
            <input type="radio" name="radio-segmented" value="week" aria-describedby="radio-segmented-hint" />
            <span>Week</span>
        </label>
        <label class="vv-radio vv-radio--segment">
            <input type="radio" name="radio-segmented" value="month" aria-describedby="radio-segmented-hint" />
            <span>Month</span>
        </label>
        <label class="vv-radio vv-radio--segment">
            <input type="radio" name="radio-segmented" value="year" disabled="disabled" aria-describedby="radio-segmented-hint" />
            <span>Year</span>
        </label>
    </div>
    <small id="radio-segmented-hint" class="vv-radio-group__hint">
        The native radio stays in the tree for the keyboard: use the arrow keys to move between the options.
    </small>
</fieldset>
