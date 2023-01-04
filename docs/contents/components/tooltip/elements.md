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
			title="Accent rounded">
		<IconifyIcon icon="akar-icons:pencil" />
		<span class="vv-tooltip" role="tooltip" inert>
			I'm a tooltip
		</span>
	</button>
	<span>Hover me
		<span class="vv-tooltip" role="tooltip" inert>
			I'm a tooltip
		</span>
	</span>
</div>
