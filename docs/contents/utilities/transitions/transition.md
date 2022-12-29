---
title: Transition
description: Utilities for apply a CSS transition.
---
<div>
    <table-utility prefix="transition" property="transition-property" :exclude="['none']">
        <template #value="{ key }">
            <pre class="whitespace-pre">
transition-property: var(--transition-property-{{ key }});
transition-duration: var(--duration-300);
transition-timing-function: var(--ease-in-out);</pre>
        </template>
    </table-utility>
</div>