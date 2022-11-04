---
title: Word Break
description: Utilities for controlling word breaks in an element.
---
<div>
    <card-example>
		<div class="container h-full rounded-md bg-surface-1 p-24">
			<p class="text-white break-normal border-b border-alpha-1 mb-24 pb-24">This is some
				very very very long word:
				pneumonoultramicroscopicsilicovolcanoconiosis. The long word will
				not break and wrap to the next line.</p>
			<p class="text-white break-words border-b border-alpha-1 mb-24 pb-24">This is some
				very very very long word:
				pneumonoultramicroscopicsilicovolcanoconiosis. The long word will
				break and wrap to the next line.</p>
			<p class="text-white break-all">This is some very very very long word:
				pneumonoultramicroscopicsilicovolcanoconiosis. This text will break
				at any character.</p>
		</div>
    </card-example>
</div>