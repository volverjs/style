---
title: Z-Index
description: Utilities for controlling the stack order of an element.
---
<div>
    <table-utility prefix="z" property="z-index" class="mb-lg"></table-utility>
	<card-example>
		<div class="relative container h-full rounded-md bg-surface-1 p-64">
			<div class="absolute inset-0 bg-grid mix-blend-plus-lighter"></div>
			<div class="relative w-full">
				<div class="absolute z-fixed w-100 h-80 top-56 left-0 bg-info flex flex-col justify-center items-center text-white">
					<strong>#1</strong>
					<div>Fixed</div>
				</div>		
				<div class="relative z-dropdown h-100 top-8 left-16 bg-brand flex flex-col justify-center items-center text-white">
					<strong>#2</strong>
					<div>Dropdown</div>
				</div>
				<div class="absolute z-sticky w-150 top-0 right-0 bg-accent flex flex-col justify-center items-center text-white">
					<strong>#3</strong>
					<div>Sticky</div>
				</div>
				<div class="absolute z-modal w-2/3 h-44 left-80 bg-shadow flex flex-col justify-center items-center text-white">
					<strong>#4</strong>
					<div>Modal</div>
				</div>
			</div>
		</div>
	</card-example>
</div>