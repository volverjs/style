---
title: Align / Justify Self
description: Utilities for controlling how an individual flex or grid item is positioned along its container's cross axis.
breakpoints: true
---
### Align Self
The `align-self` property aligns flex items along the cross axis of the current line of the flex container. It helps distribute extra free space left over when either all the flex items on a line are inflexible, or are flexible but have reached their maximum size. It also exerts some control over the alignment of items when they overflow the line.

<table-utility prefix="self" property="justify-align-self" attribute="align-self" class="mb-lg"></table-utility>

### Justify Self
The `justify-self` property aligns grid items along the inline (row) axis of their grid area. It helps distribute extra free space left over when either all the grid items on a line are inflexible, or are flexible but have reached their maximum size. It also exerts some control over the alignment of items when they overflow the line.

<table-utility prefix="justify-self" property="justify-align-self" attribute="justify-self"></table-utility>

### Self First Line
`self-first-line` aligns an icon with the first line of a label that wraps, instead of with the centre of the whole block. `self-center` centres the icon on the flex line, which is the whole block once the label wraps, and `self-start` drops the half leading that sits above the first line. This class starts the icon at the top and pushes it down by half the difference between the line box and the icon, so it holds at any font size and at any icon size.

Set `--icon-size` to the rendered size of the icon. It defaults to `1em`, the size an inline SVG carries. The offset itself is never zero, but on a label that fits on one line it places the icon exactly where `self-center` would, because the first line is then the whole block. That is why the class is safe to apply at every width and needs no breakpoint variant.

<div class="max-h-288 overflow-y-auto mb-lg preflight-revert">
  <table class="vv-table vv-table--inline-spacing">
    <thead class="sticky z-sticky top-0">
      <tr>
        <th>
          Class
        </th>
        <th>
          Value
        </th>
      </tr>
    </thead>
    <tbody class="align-baseline">
      <tr>
        <td translate="no" class="font-mono text-accent whitespace-nowrap">
          self-first-line
        </td>
        <td translate="no" class="font-mono text-info">
          flex-shrink: 0;<br>align-self: flex-start;<br>transform: translateY(calc((1lh - var(--icon-size, 1em)) / 2));
        </td>
      </tr>
    </tbody>
  </table>
</div>

<card-example>
	<div class="grid md:grid-cols-2 gap-lg max-w-384">
		<ul class="flex flex-col gap-sm">
			<li class="flex gap-sm items-center">
				<IconifyIcon icon="akar-icons:check" class="text-brand" />
				<span>self-center centres the icon on the whole block</span>
			</li>
		</ul>
		<ul class="flex flex-col gap-sm">
			<li class="flex gap-sm">
				<IconifyIcon icon="akar-icons:check" class="text-brand self-first-line" />
				<span>self-first-line keeps the icon on the first line</span>
			</li>
		</ul>
	</div>
</card-example>
