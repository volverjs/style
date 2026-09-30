---
title: Sortable and selectable
wrapperClass: flex-1
---

<table class="vv-table vv-table--inline-spacing">
    <thead>
        <tr>
            <th aria-sort="ascending"><button type="button" class="vv-table__sort">Name</button></th>
            <th aria-sort="none"><button type="button" class="vv-table__sort">Documents</button></th>
            <th>Status</th>
        </tr>
    </thead>
    <tbody>
        <tr><td>Contracts</td><td>42</td><td>Synced</td></tr>
        <tr class="current"><td>Invoices</td><td>118</td><td>Synced</td></tr>
        <tr class="selected"><td>Policies</td><td>9</td><td>Syncing</td></tr>
    </tbody>
</table>
