---
title: Picker
wrapperClass: flex-1
---

<div class="vv-item-group vv-item-group--framed">
    <div class="vv-item-group__header">
        <nav class="vv-breadcrumb" aria-label="Folder">
            <ol>
                <li><a href="#">Documents</a></li>
                <li>Contracts</li>
            </ol>
        </nav>
    </div>
    <ul class="vv-item-group__list" role="list">
        <li class="vv-item">
            <button type="button" class="vv-item__entry" aria-pressed="true">
                <span class="vv-item__media"><IconifyIcon icon="akar-icons:folder" /></span>
                <span class="vv-item__title">2026</span>
                <IconifyIcon icon="akar-icons:check" class="vv-item__check" />
            </button>
            <button type="button" class="vv-item__open" aria-label="Open 2026">
                <IconifyIcon icon="akar-icons:chevron-right" />
            </button>
        </li>
        <li class="vv-item">
            <button type="button" class="vv-item__entry" aria-pressed="false">
                <span class="vv-item__media"><IconifyIcon icon="akar-icons:folder" /></span>
                <span class="vv-item__title">2025</span>
                <span class="vv-item__note">synced</span>
            </button>
            <button type="button" class="vv-item__open" aria-label="Open 2025">
                <IconifyIcon icon="akar-icons:chevron-right" />
            </button>
        </li>
        <li class="vv-item">
            <button type="button" class="vv-item__entry" disabled="disabled">
                <span class="vv-item__media"><IconifyIcon icon="akar-icons:folder" /></span>
                <span class="vv-item__title">Archive</span>
            </button>
        </li>
    </ul>
</div>
