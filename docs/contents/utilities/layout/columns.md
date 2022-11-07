---
title: Columns
description: Utilities for controlling the number of columns within an element.
breakpoints: true
---
<div>
    <table-utility prefix="column" property="columns" custom-property="column-count" class="mb-lg"></table-utility>
	<details id="accordion-item-1" class="vv-accordion vv-accordion--bordered vv-accordion--marker-right bg-surface mb-lg">
		<summary class="vv-accordion__summary flex items-center" aria-controls="#accordion-item-1" aria-expanded="false">
			<iconify-icon icon="akar-icons:info" class="mr-sm"></iconify-icon>
			Accept breakpoint utilities
		</summary>
		<div aria-hidden="true" class="vv-accordion__content bg-surface">
			<p class="font-light text-word-3">
				You can also use the breakpoint modifier to apply the class at only a specific screen size and above.<br />
				Example: md:columns-3
			</p>
		</div>
	</details>
    <card-example>
        <div class="relative container h-full rounded-md bg-surface-1 p-24">
			<div class="absolute inset-0 bg-grid mix-blend-soft-light"></div>
				<div class="relative columns-3">
				    <p>
					Lorem ipsum dolor sit amet. Rem enim quia qui numquam itaque sit voluptatum nihil aut numquam autem sed voluptas deserunt. Quo adipisci dolor aut molestiae vitae aut enim iure eum eveniet esse qui nulla rerum ut dolores nihil et dolorem galisum. Ut facilis aspernatur sed fuga perspiciatis internos velit ad fugiat officia et consectetur incidunt. Et quam odit ut asperiores odio sit doloribus ducimus ea iste nihil qui autem.
					</p>
				</div>
			</div>
    </card-example>
</div>