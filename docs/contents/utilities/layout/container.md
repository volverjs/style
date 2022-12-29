---
title: Container
description: A component for fixing an element's width to the current breakpoint.
customProperties: true
---
<div>
    <table-utility prefix="container" property="breakpoints" attribute="max-width">
        <template #value={value}>
            <pre class="whitespace-pre">
widht: 100%;
@media (min-width: {{value}}) {
    max-width: {{value}};
}</pre>
        </template>
    </table-utility>
</div>