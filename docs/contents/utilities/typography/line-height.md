---
title: Line Height
description: Utilities for controlling the leading (line height) of an element. ​
---
<div>
	<table-utility prefix="leading" property="line-height" class="mb-lg"></table-utility>
    <card-example>
		<div class="container h-full grid rounded-md bg-surface-1 text-white p-24" style="grid-template-columns: repeat(2, minmax(0, 1fr));">
			<div class="leading-none border-b border-alpha-1 mb-24 pb-24">
				<p>First line</p>
				<p>Second line</p>
			</div>
			<div class="leading-tight border-b border-alpha-1 mb-24 pb-24">
				<p>First line</p>
				<p>Second line</p>
			</div>
			<div class="leading-snug border-b border-alpha-1 mb-24 pb-24">
				<p>First line</p>
				<p>Second line</p>
			</div>
			<div class="leading-normal border-b border-alpha-1 mb-24 pb-24">
				<p>First line</p>
				<p>Second line</p>
			</div>
			<div class="leading-relaxed">
				<p>First line</p>
				<p>Second line</p>
			</div>
			<div class="leading-loose">
				<p>First line</p>
				<p>Second line</p>
			</div>
		</div>
    </card-example>
</div>