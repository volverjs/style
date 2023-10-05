---
title: Preview
wrapperClass: flex-1 grid grid-cols-2 md:grid-cols-5 gap-md items-start
---

<div class="vv-input-file 
            vv-input-file--hidden
            vv-input-file--circle">
    <label for="circle">Circle</label>
    <div class="vv-input-file__drop-area">
        <div class="vv-input-file__preview">
          <IconifyIcon icon="akar-icons:image" />
        </div>
    </div>
    <div class="vv-input-file__wrapper">
        <input id="circle" 
               type="file" 
               name="droparea" 
               placeholder="Placeholder text" 
               aria-describedby="droparea-hint" />
    </div>
</div>

<div class="vv-input-file 
            vv-input-file--hidden
            vv-input-file--square">
    <label for="square">Square</label>
    <div class="vv-input-file__drop-area">
        <picture class="vv-input-file__preview">
          <img src="https://picsum.photos/200/300" alt="Preview" />
        </picture>
    </div>
    <div class="vv-input-file__wrapper">
        <input id="square" 
               type="file" 
               name="droparea" 
               placeholder="Placeholder text" 
               aria-describedby="droparea-hint" />
    </div>
</div>