---
title: Files
wrapperClass: flex-1 grid md:grid-cols-2 gap-md items-start
---

<div class="vv-input-file">
    <label for="file-list">File List</label>
    <div class="vv-input-file__drop-area">
      Drag one or more files to this drop zone.
    </div>
    <div class="vv-input-file__wrapper">
        <input id="file-list" 
               type="file" 
               name="file-list" 
               placeholder="Placeholder text" 
               aria-describedby="file-list-hint" />
    </div>
    <ul class="vv-input-file__list">
      <li class="vv-input-file__item">
        <IconifyIcon class="vv-input-file__item-icon" icon="akar-icons:file" />
        <div class="vv-input-file__item-name">
          file1.txt
        </div>
        <small class="vv-input-file__item-info">300 KB</small>
        <button type="button" class="vv-input-file__item-remove" title="Remove" />
      </li>
      <li class="vv-input-file__item">
        <IconifyIcon class="vv-input-file__item-icon" icon="akar-icons:file" />
        <div class="vv-input-file__item-name">
          long-long-long-long-long-long-file-name.txt
        </div>
        <small class="vv-input-file__item-info">300 KB</small>
        <button type="button" class="vv-input-file__item-remove" title="Remove" />
      </li>
    </ul>
    <small id="file-list-hint" class="vv-input-file__hint">
        Please fill the input above.
    </small>
</div>

<div class="vv-input-file 
            vv-input-file--hidden">
    <label for="file-list-hidden">File List Hidden input</label>
    <div class="vv-input-file__drop-area">
      Drag one or more files to this drop zone.
    </div>
    <div class="vv-input-file__wrapper">
        <input id="file-list-hidden" 
               type="file" 
               name="file-list-hidden" 
               placeholder="Placeholder text" 
               aria-describedby="file-list-hidden-hint" />
    </div>
    <ul class="vv-input-file__list">
      <li class="vv-input-file__item">
        <IconifyIcon class="vv-input-file__item-icon" icon="akar-icons:file" />
        <div class="vv-input-file__item-name">
          file1.txt
        </div>
        <small class="vv-input-file__item-info">300 KB</small>
        <button type="button" class="vv-input-file__item-remove" title="Remove" />
      </li>
      <li class="vv-input-file__item">
        <IconifyIcon class="vv-input-file__item-icon" icon="akar-icons:file" />
        <div class="vv-input-file__item-name">
          long-long-long-long-long-long-file-name.txt
        </div>
        <small class="vv-input-file__item-info">300 KB</small>
        <button type="button" class="vv-input-file__item-remove" title="Remove" />
      </li>
    </ul>
    <small id="file-list-hidden-hint" class="vv-input-file__hint">
        Please fill the input above.
    </small>
</div>