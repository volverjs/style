---
title: Container
description: Utilities for fixing an element's width to the current breakpoint.
---

`.container` sets `width: 100%` and `max-width: var(--breakpoint-value, 100%)`. `--breakpoint-value` holds the value of the breakpoint the viewport has reached, so the container snaps to the width of the current breakpoint, as the table shows.

<div>
    <table-utility prefix="container" custom-property="breakpoint" label-custom-property="Breakpoint" property="breakpoints" attribute="max-width">
        <template #class={key}>
            {{ key === 'xs' ? '.container' : ''}}
        </template>
        <template #custom-property={key}>
            {{ key }}
        </template>
        <template  #value="{ value, key }">
          width: 100%;<br />
          max-width: {{value}};
        </template>
    </table-utility>
</div>