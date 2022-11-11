---
title: Elements
wrapperClass: flex-1
---

<div class="flex flex-col gap-xl items-center">
	<button class="vv-button"
			type="button">
		Hover me
		<span inert role="tooltip" class="vv-tooltip">
			I'm a tooltip
		</span>
	</button>
	<button class="vv-button 
				   vv-button--rounded" 
			title="Accent rounded">
		<IconifyIcon icon="akar-icons:pencil" />
		<span inert role="tooltip" class="vv-tooltip">
			I'm a tooltip
		</span>
	</button>
	<span>Hover me
		<span inert role="tooltip" class="vv-tooltip">
			I'm a tooltip
		</span>
	</span>
</div>
