---
title: Elements
wrapperClass: n-24 p-24 flex-1
---

<div class="flex flex-col gap-xl items-center">
	<button class="vv-button 
				   vv-tooltip" type="button">
		Hover me
		<span inert role="tooltip" class="vv-tooltip__content">
			I'm a tooltip
		</span>
	</button>
	<button class="vv-button 
				   vv-button--rounded 
				   vv-tooltip" title="Accent rounded">
		<IconifyIcon icon="akar-icons:pencil" />
		<span inert role="tooltip" class="vv-tooltip__content">
			I'm a tooltip
		</span>
	</button>
	<span class="vv-tooltip">Hover me
		<span inert role="tooltip" class="vv-tooltip__content">
			I'm a tooltip
		</span>
	</span>
</div>
