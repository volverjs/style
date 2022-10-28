---
title: Visibility
description: Utilities for controlling the visibility of an element.
---
<div>
    <details id="accordion-item-1" class="vv-accordion">
		<summary class="vv-accordion__summary" aria-controls="#accordion-item-1" aria-expanded="false">
			Accept breakpoint utilities
		</summary>
		<div aria-hidden="true" class="vv-accordion__content">
			<p class="font-light text-word-3">You can also use the breakpoint modifier to apply the class at only a specific screen size and above. Example: md-{visible|invisible}</p>
		</div>
	</details>
    <table-utility property="visibility" class="mb-lg"></table-utility>
	<card-example>
		<div class="container h-full rounded-md bg-surface-1 p-24">
			<div class="border-b border-alpha-1 mb-24 pb-24">
				<div class="w-150 border-x border-y border-accent p-2">
					<div class="w-full visible rounded-md py-20 bg-info text-center"></div>
				</div>
			</div>
			<div>
				<div class="w-150 border-x border-y border-accent p-2">
					<div class="w-full invisible rounded-md py-20 bg-info text-center"><div>
				</div>
			</div>
		</div>
	</card-example>
</div>