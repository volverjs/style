---
title: Letter Spacing
description: Utilities for controlling the tracking (letter spacing) of an element.
customProperties: true
---
<div>
	<table-utility prefix="tracking" property="letter-spacing" custom-property="tracking" class="mb-lg"></table-utility>
    <card-example>
		<div class="container h-full grid rounded-md bg-surface-1 p-24" style="grid-template-columns: repeat(2, minmax(0, 1fr));">
			<div class="border-b border-alpha-1 mb-24 pb-24">
				<p class="tracking-tighter">Volverjs</p>
			</div>
			<div class="border-b border-alpha-1 mb-24 pb-24">
				<p class="tracking-tight">Volverjs</p>
			</div>
			<div class="border-b border-alpha-1 mb-24 pb-24">
				<p class="tracking-normal">Volverjs</p>
			</div>
			<div class="border-b border-alpha-1 mb-24 pb-24">
				<p class="tracking-wide">Volverjs</p>
			</div>
			<div>
				<p class="tracking-wider">Volverjs</p>
			</div>
			<div>
				<p class="tracking-widest">Volverjs</p>
			</div>
		</div>
    </card-example>
</div>