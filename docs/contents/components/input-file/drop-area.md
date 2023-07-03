---
title: Drop Area
wrapperClass: flex-1 grid md:grid-cols-2 gap-md items-start
---

<div class="vv-input-file 
            vv-input-file--hidden">
    <label for="droparea">File Field</label>
    <div class="vv-input-file__drop-area">
      Drag one or more files to this drop zone.
    </div>
    <div class="vv-input-file__wrapper">
        <input id="droparea" 
               type="file" 
               name="droparea" 
               placeholder="Placeholder text" 
               aria-describedby="droparea-hint" />
    </div>
    <small id="droparea-hint" class="vv-input-file__hint">
        Please fill the input above.
    </small>
</div>

<div class="vv-input-file
            vv-input-file--disabled
            vv-input-file--hidden">
    <label for="droparea-disabled">Disabled File Field</label>
    <div class="vv-input-file__drop-area">
      Drag one or more files to this drop zone.
    </div>
    <div class="vv-input-file__wrapper">
        <input id="droparea-disabled" 
               type="file" 
               name="droparea-disabled" 
               placeholder="Placeholder text" 
               aria-describedby="droparea-disabled-hint" 
               disabled="disabled" />
    </div>
    <small id="droparea-disabled-hint" class="vv-input-file__hint">
        Please fill the input above.
    </small>
</div>

<div class="vv-input-file
            vv-input-file--hidden
            vv-input-file--dragging">
    <label for="droparea-dragging">Dragging File Field</label>
    <div class="vv-input-file__drop-area">
      Drag one or more files to this drop zone.
    </div>
    <div class="vv-input-file__wrapper">
        <input id="droparea-dragging" 
               type="file" 
               name="droparea-dragging" 
               placeholder="Placeholder text" 
               aria-describedby="droparea-dragging-hint" />
    </div>
    <small id="droparea-dragging-hint" class="vv-input-file__hint">
        Please drag files to the drop zone.
    </small>
</div>

<div class="vv-input-file 
            vv-input-file--hidden
            vv-input-file--valid">
    <label for="droparea-success">Valid File Field</label>
    <div class="vv-input-file__drop-area">
      Drag one or more files to this drop zone.
    </div>
    <div class="vv-input-file__wrapper">
        <input id="droparea-success" 
               type="file" 
               name="droparea-success"
               placeholder="Placeholder text" 
               aria-describedby="droparea-success-hint" 
               aria-invalid="false" />
    </div>
    <small id="droparea-success-hint" class="vv-input-file__hint">
        The input above is successful.
    </small>
</div>

<div class="vv-input-file 
            vv-input-file--hidden
            vv-input-file--invalid">
    <label for="droparea-invalid">Invalid File Field</label>
    <div class="vv-input-file__drop-area">
      Drag one or more files to this drop zone.
    </div>
    <div class="vv-input-file__wrapper">
        <input id="droparea-invalid" 
               type="file" 
               name="droparea-invalid" 
               placeholder="Placeholder text" 
               aria-describedby="droparea-invalid-hint" 
               aria-invalid="true" />
    </div>
    <small id="droparea-invalid-hint" class="vv-input-file__hint">
        There was an error with the input above.
    </small>
</div>

<div class="vv-input-file 
            vv-input-file--hidden
            vv-input-file--loading">
    <label for="droparea-loading">Loading File Field</label>
    <div class="vv-input-file__drop-area">
      Drag one or more files to this drop zone.
    </div>
    <div class="vv-input-file__wrapper">
        <input id="droparea-loading" 
               type="file" 
               name="droparea-loading" 
               placeholder="Placeholder text" 
               aria-describedby="droparea-loading-hint" />
    </div>
    <small id="droparea-loading-hint" class="vv-input-file__hint">
        Loading...
    </small>
</div>
