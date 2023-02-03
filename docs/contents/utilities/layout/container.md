---
title: Container
description: A component for fixing an element's width to the current breakpoint.
---
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