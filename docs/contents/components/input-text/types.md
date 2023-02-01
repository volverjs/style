---
title: Other Types
wrapperClass: flex-1 grid md:grid-cols-2 gap-md items-end
---

<div class="vv-input-text 
            vv-input-text--floating 
            vv-input-text--icon-before">
    <label for="textfield-password">Password</label>
    <div class="vv-input-text__wrapper">
        <IconifyIcon icon="akar-icons:lock-on" />
        <input id="textfield-password" 
               type="password" 
               name="textfield-password" 
               autocomplete="new-password" 
               placeholder="Floating label" 
               aria-describedby="textfield-password-hint" />
    </div>
    <small id="textfield-password-hint" class="vv-input-text__hint">
        Please fill the input above.
    </small>
</div>

<div class="vv-input-text 
            vv-input-text--floating 
            vv-input-text--dirty 
            vv-input-text--icon-after">
    <label for="textfield-datetime">Datetime</label>
    <div class="vv-input-text__wrapper">
        <input id="textfield-datetime" 
               type="datetime-local" 
               name="textfield-datetime" 
               placeholder="Floating label" 
               aria-describedby="textfield-date-hint" />
        <IconifyIcon icon="akar-icons:calendar" />
    </div>
    <small id="textfield-datetime-hint" class="vv-input-text__hint">
        Please fill the input above.
    </small>
</div>

<div class="vv-input-text 
            vv-input-text--floating 
            vv-input-text--dirty 
            vv-input-text--icon-after">
    <label for="textfield-date">Date</label>
    <div class="vv-input-text__wrapper">
        <input id="textfield-date" 
               type="date" 
               name="textfield-date" 
               placeholder="Floating label" 
               aria-describedby="textfield-date-hint" />
        <IconifyIcon icon="akar-icons:calendar" />
    </div>
    <small id="textfield-date-hint" class="vv-input-text__hint">
        Please fill the input above.
    </small>
</div>

<div class="vv-input-text 
            vv-input-text--floating 
            vv-input-text--dirty 
            vv-input-text--icon-after">
    <label for="textfield-time">Time</label>
    <div class="vv-input-text__wrapper">
        <input id="textfield-time" 
               type="time" 
               name="textfield-time" 
               placeholder="Floating label" 
               aria-describedby="textfield-time-hint" />
        <IconifyIcon icon="akar-icons:clock" />
    </div>
    <small id="textfield-time-hint" class="vv-input-text__hint">
        Please fill the input above.
    </small>
</div>

<div class="vv-input-text 
            vv-input-text--floating 
            vv-input-text--icon-after">
    <label for="textfield-search">Search</label>
    <div class="vv-input-text__wrapper">
        <input id="textfield-search" 
               type="search" 
               name="textfield-search" 
               placeholder="Floating label" 
               aria-describedby="textfield-search-hint" />
        <IconifyIcon icon="akar-icons:search" />
    </div>
    <small id="textfield-search-hint" class="vv-input-text__hint">
        Please fill the input above.
    </small>
</div>

<div class="vv-input-text 
            vv-input-text--icon-after">
    <label for="textfield-color">Color</label>
    <div class="vv-input-text__wrapper">
        <input id="textfield-color" 
               type="color" 
               name="textfield-color" 
               aria-describedby="textfield-color-hint" 
               value="#1976d2">
        <IconifyIcon icon="akar-icons:water" />
    </div>
    <small id="textfield-color-hint" class="vv-input-text__hint">
        Please fill the input above.
    </small>
</div>