---
title: Elements
wrapperClass: flex-1
---

<div class="flex flex-col gap-xl items-center">
	<button class="vv-button"
			type="button">
		Hover me
		<span class="vv-tooltip" role="tooltip" inert>
			I'm a tooltip
		</span>
	</button>
	<button class="vv-button 
				   vv-button--action 
				   focus-visible" 
			type="button"
			aria-label="Edit">
		<IconifyIcon icon="akar-icons:pencil" />
		<span class="vv-tooltip" role="tooltip" inert>
			Edit
		</span>
	</button>
	<a href="#">Hover or focus me
		<span class="vv-tooltip" role="tooltip" inert>
			I'm a tooltip
		</span>
	</a>
</div>
