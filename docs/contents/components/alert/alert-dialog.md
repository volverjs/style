---
title: Alert Dialog
wrapperClass: flex flex-1 items-center flex-col gap-md 
---

<div class="vv-alert" 
     role="alertdialog"
     aria-labelledby="alert-title"
     aria-describedby="alert-content">
  <div class="vv-alert__header">
    <IconifyIcon icon="akar-icons:triangle-alert" />
    <strong id="alert-title" 
            class="vv-alert__title">
      Attention!
    </strong>
  </div>
  <div id="alert-content" 
       class="vv-alert__content">
    Would you like to save your changes?
  </div>
  <div class="vv-alert__footer">
    <div class="vv-button-group" role="group">
      <button 
        type="button" 
        class="vv-button vv-button--action">
        <IconifyIcon icon="akar-icons:save" />
        Save
      </button>
      <button 
        type="button" 
        class="vv-button vv-button--action-quiet">
        <IconifyIcon icon="akar-icons:cross" />
        Close
      </button>
    </div>
  </div>
</div>

<div class="vv-alert vv-alert--notification" 
     role="alertdialog"
     aria-labelledby="notification-title"
     aria-describedby="notification-content">
  <div class="vv-alert__header">
    <IconifyIcon icon="akar-icons:triangle-alert" />
    <strong id="notification-title" class="vv-alert__title">
      Attention!
    </strong>
  </div>
  <div id="notification-content" class="vv-alert__content">
    Would you like to save your changes?
  </div>
  <div class="vv-alert__footer">
    <div class="vv-button-group" role="group">
      <button 
          type="button" 
          class="vv-button vv-button--action">
        <IconifyIcon icon="akar-icons:save" />
        Save
      </button>
      <button 
        type="button" 
        class="vv-button vv-button--action-quiet">
        <IconifyIcon icon="akar-icons:cross" />
        Close
      </button>
    </div>
  </div>
</div>
