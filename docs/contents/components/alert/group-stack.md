---
title: Group Stack
wrapperClass: max-w-full
---

<div class="vv-alert-group vv-alert-group--stack">
  <ul role="group">
    <li class="vv-alert 
                vv-alert--danger 
                vv-alert--dismissable" role="alert">
      <div class="vv-alert__header">
        <IconifyIcon icon="akar-icons:block" />
        <strong class="vv-alert__title">Danger!</strong>
        <button class="vv-alert__close" type="button" aria-label="Close"></button>
      </div>
      <div class="vv-alert__content">
        Operation not allowed.
      </div>
    </li>
    <li class="vv-alert 
                vv-alert--success 
                vv-alert--dismissable" role="alert">
      <div class="vv-alert__header">
        <IconifyIcon icon="akar-icons:circle-check" />
        <strong class="vv-alert__title">Success!</strong>
        <button class="vv-alert__close" type="button" aria-label="Close"></button>
      </div>
      <div class="vv-alert__content">
        Succeeded in saving your changes.
      </div>
    </li>
    <li class="vv-alert 
                vv-alert--warning 
                vv-alert--dismissable" role="alert">
      <div class="vv-alert__header">
        <IconifyIcon icon="akar-icons:triangle-alert" />
        <strong class="vv-alert__title">Warning!</strong>
        <button class="vv-alert__close" type="button" aria-label="Close"></button>
      </div>
      <div class="vv-alert__content">
          No more than 5 items can be selected.
      </div>
    </li>
  </ul>
</div>
