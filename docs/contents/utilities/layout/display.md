---
title: Display
description: Utilities for controlling the display box type of an element.
breakpoints: true
---
<div>
	<table-utility property="display-with-breakpoints" custom-property="display" class="mb-lg"></table-utility>
    <details id="accordion-item-1" class="vv-accordion vv-accordion--bordered vv-accordion--marker-right bg-surface mb-lg">
		<summary class="vv-accordion__summary flex items-center" aria-controls="#accordion-item-1" aria-expanded="false">
			<iconify-icon icon="akar-icons:info" class="mr-sm"></iconify-icon>
			Accept breakpoint utilities
		</summary>
		<div aria-hidden="true" class="vv-accordion__content">
			<p class="font-light text-word-3">
				You can also use the breakpoint modifier to apply the class at only a specific screen size and above.<br />
				Example: md:{block|inline-block|inline|flex|inline-flex|grid|inline-grid|none}
			</p>
		</div>
	</details>
	<table-utility property="display-without-breakpoints" custom-property="display"></table-utility>
</div>