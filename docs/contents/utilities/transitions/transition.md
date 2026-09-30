---
title: Transition
description: Utilities for applying a CSS transition.
---
<div>
    <table-utility prefix="transition" property="transition-property">
        <template #value="{ key, value }">
            <pre v-if="key === 'none'" class="whitespace-pre">transition-property: none;</pre>
            <pre v-else class="whitespace-pre">
transition-property: {{ value }};
transition-duration: var(--duration-300);
transition-timing-function: var(--ease-in-out);</pre>
        </template>
    </table-utility>
</div>