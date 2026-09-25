---
title: Default
wrapperClass: flex-1
---

<div class="vv-command">
    <div class="vv-command__search">
        <IconifyIcon icon="akar-icons:search" />
        <input class="vv-command__input" type="text" role="combobox" aria-expanded="true" aria-controls="command-list" aria-activedescendant="command-new" aria-autocomplete="list" placeholder="Type a command" />
    </div>
    <ul id="command-list" class="vv-command__list" role="listbox" aria-label="Commands">
        <li role="presentation">
            <div class="vv-command__heading" id="command-group-documents">Documents</div>
            <ul role="group" aria-labelledby="command-group-documents">
                <li id="command-new" class="vv-command__option" role="option" aria-selected="true">
                    <IconifyIcon icon="akar-icons:file" />
                    New document
                    <span class="vv-command__shortcut"><kbd class="vv-kbd">N</kbd></span>
                </li>
                <li class="vv-command__option" role="option">
                    <IconifyIcon icon="akar-icons:cloud-upload" />
                    Import
                    <span class="vv-command__shortcut"><kbd class="vv-kbd">I</kbd></span>
                </li>
            </ul>
        </li>
        <li role="presentation">
            <div class="vv-command__heading" id="command-group-account">Account</div>
            <ul role="group" aria-labelledby="command-group-account">
                <li class="vv-command__option" role="option" aria-disabled="true">
                    <IconifyIcon icon="akar-icons:credit-card" />
                    Billing
                </li>
            </ul>
        </li>
    </ul>
</div>
