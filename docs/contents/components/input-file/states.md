---
title: States
wrapperClass: flex-1 grid md:grid-cols-2 gap-md items-start
---

<div class="vv-input-file">
    <label for="filefield">File Field</label>
    <div class="vv-input-file__wrapper">
        <input id="filefield" 
               type="file" 
               name="filefield" 
               aria-describedby="filefield-hint" />
    </div>
    <small id="filefield-hint" class="vv-input-file__hint">
        Please fill the input above.
    </small>
</div>

<div class="vv-input-file">
    <label for="filefield-hover">Hover File Field</label>
    <div class="vv-input-file__wrapper hover">
        <input id="filefield-hover" 
               type="file" 
               name="filefield-hover" 
               aria-describedby="filefield-hover-hint" />
    </div>
    <small id="filefield-hover-hint" class="vv-input-file__hint">
        Please fill the input above.
    </small>
</div>

<div class="vv-input-file">
    <label for="filefield-focus">Focus File Field</label>
    <div class="vv-input-file__wrapper focus-within">
        <input id="filefield-focus" 
               type="file" 
               name="filefield-focus" 
               aria-describedby="filefield-focus-hint" />
    </div>
    <small id="filefield-focus-hint" class="vv-input-file__hint">
        Please fill the input above.
    </small>
</div>

<div class="vv-input-file">
    <label for="filefield-disabled">Disabled File Field</label>
    <div class="vv-input-file__wrapper">
        <input id="filefield-disabled" 
               type="file" 
               name="filefield-disabled" 
               aria-describedby="filefield-disabled-hint" 
               disabled="disabled" />
    </div>
    <small id="filefield-disabled-hint" class="vv-input-file__hint">
        Please fill the input above.
    </small>
</div>

<div class="vv-input-file
            vv-input-file--readonly">
    <label for="filefield-readonly">Readonly File Field</label>
    <div class="vv-input-file__wrapper">
        <input id="filefield-readonly" 
               type="file" 
               name="filefield-readonly" 
               disabled="disabled" 
               tabindex="-1" />
    </div>
</div>

<div class="vv-input-file 
            vv-input-file--valid">
    <label for="filefield-success">Valid File Field</label>
    <div class="vv-input-file__wrapper">
        <input id="filefield-success" 
               type="file" 
               name="filefield-success"
               aria-describedby="filefield-success-hint" 
               aria-invalid="false" />
    </div>
    <small id="filefield-success-hint" class="vv-input-file__hint">
        The input above is successful.
    </small>
</div>

<div class="vv-input-file 
            vv-input-file--invalid">
    <label for="filefield-invalid">Invalid File Field</label>
    <div class="vv-input-file__wrapper">
        <input id="filefield-invalid" 
               type="file" 
               name="filefield-invalid" 
               aria-describedby="filefield-invalid-hint" 
               aria-invalid="true" />
    </div>
    <small id="filefield-invalid-hint" class="vv-input-file__hint">
        There was an error with the input above.
    </small>
</div>

<div class="vv-input-file 
            vv-input-file--loading">
    <label for="filefield-loading">Loading File Field</label>
    <div class="vv-input-file__wrapper">
        <input id="filefield-loading" 
               type="file" 
               name="filefield-loading" 
               aria-describedby="filefield-loading-hint" />
    </div>
    <small id="filefield-loading-hint" class="vv-input-file__hint">Loading...</small>
</div>

<div class="vv-input-file">
    <label for="filefield-progress">Progress File Field</label>
    <div class="vv-input-file__wrapper">
        <input id="filefield-progress" 
               type="file" 
               name="filefield-progress" 
               aria-describedby="filefield-progress-hint" />
        <progress class="vv-input-file__progress" value="33" max="100">33%</progress>
    </div>
    <small id="filefield-progress-hint" class="vv-input-file__hint">33%</small>
</div>
