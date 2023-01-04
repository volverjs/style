---
title: Z-Index
description: Utilities for controlling the stack order of an element.
---
<div>
    <table-utility prefix="z" property="z-index" custom-property="z" class="mb-lg"></table-utility>
	<card-example>
		<div class="relative container rounded-md bg-surface-1 p-24">
			<div class="absolute inset-0 bg-grid mix-blend-plus-lighter"></div>
			<div class="relative h-80 mx-auto w-11/12 bg-brand-lighten-5 z-dropdown"></div>
			<div class="relative h-80 nt-40 mx-auto w-10/12 bg-brand-lighten-4 z-sticky"></div>
			<div class="relative h-80 nt-40 mx-auto w-9/12 bg-brand-lighten-3 z-fixed"></div>
			<div class="relative h-80 nt-40 mx-auto w-8/12 bg-brand-lighten-2 z-modal-backdrop"></div>
			<div class="relative h-80 nt-40 mx-auto w-7/12 bg-brand-lighten-1 z-modal"></div>
			<div class="relative h-80 nt-40 mx-auto w-6/12 bg-brand z-confirm-backdrop"></div>
			<div class="relative h-80 nt-40 mx-auto w-5/12 bg-brand-darken-1 z-confirm"></div>
			<div class="relative h-80 nt-40 mx-auto w-4/12 bg-brand-darken-2 z-popover"></div>
			<div class="relative h-80 nt-40 mx-auto w-3/12 bg-brand-darken-3 z-tooltip"></div>
			<div class="relative h-80 nt-40 mx-auto w-2/12 bg-brand-darken-4 z-toast"></div>
			<div class="relative h-80 nt-40 mx-auto w-1/12 bg-brand-darken-5 z-notification-alert"></div>
			<!-- <div class="relative w-full">
				<div class="absolute z-fixed w-100 h-80 top-56 left-0 bg-info flex flex-col justify-center items-center text-white">
					<strong>#3</strong>
					<div>Fixed</div>
				</div>		
				<div class="relative z-dropdown h-100 top-8 left-16 bg-brand flex flex-col justify-center items-center text-white">
					<strong>#1</strong>
					<div>Dropdown</div>
				</div>
				<div class="absolute z-sticky w-150 top-0 right-0 bg-accent flex flex-col justify-center items-center text-white">
					<strong>#2</strong>
					<div>Sticky</div>
				</div>
				<div class="absolute z-modal w-2/3 h-44 left-80 bg-shadow flex flex-col justify-center items-center text-white">
					<strong>#4</strong>
					<div>Modal</div>
				</div>
			</div> -->
		</div>
	</card-example>
</div>