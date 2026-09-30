---
title: Toolbar
wrapperClass: flex-1
---

<div class="vv-field">
    <label for="field-message">Message</label>
    <div class="vv-field__wrapper">
        <textarea id="field-message" class="vv-field__control" rows="2" placeholder="Write a message"></textarea>
        <div class="vv-field__toolbar">
            <button type="button" class="vv-button vv-button--action-quiet vv-button--icon-only" aria-label="Attach">
                <IconifyIcon icon="akar-icons:attach" />
            </button>
            <button type="button" class="vv-button vv-button--icon-only vv-button--rounded ml-auto" aria-label="Send">
                <IconifyIcon icon="akar-icons:arrow-up" />
            </button>
        </div>
    </div>
</div>
