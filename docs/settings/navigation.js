export const mainMenu = [
	{
		name: 'Getting Started',
		children: [
			{
				name: 'Installation',
				to: {
					name: 'content',
					params: {
						name: 'installation',
					},
				},
			},
			{
				name: 'Customization',
				to: {
					name: 'content',
					params: {
						name: 'customization',
					},
				},
			},
			{
				name: 'Configuration',
				to: {
					name: 'content',
					params: {
						name: 'configuration',
					},
				},
			},
			{
				name: 'Theming',
				to: {
					name: 'content',
					params: {
						name: 'theming',
					},
				},
			},
			{
				name: 'Preflight',
				to: {
					name: 'content',
					params: {
						name: 'preflight',
					},
				},
			},
		],
	},
	{
		name: 'Components',
		children: [
			{
				name: 'Badges',
				to: {
					name: 'component',
					params: {
						componentName: 'badges',
					},
				},
			},
			{
				name: 'Breadcrumbs',
				to: {
					name: 'component',
					params: {
						componentName: 'breadcrumbs',
					},
				},
			},
			{
				name: 'Buttons',
				to: {
					name: 'component',
					params: {
						componentName: 'buttons',
					},
				},
			},
		],
	},
	{
		name: 'Layout',
		children: [
			{
				name: 'Aspect Ratio',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'layout',
						utilityName: 'aspect-ratio',
					},
				},
			},
			{
				name: 'Container',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'layout',
						utilityName: 'container',
					},
				},
			},
			{
				name: 'Columns',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'layout',
						utilityName: 'columns',
					},
				},
			},
			{
				name: 'Break After',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'layout',
						utilityName: 'break-after',
					},
				},
			},
			{
				name: 'Break Before',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'layout',
						utilityName: 'break-before',
					},
				},
			},
			{
				name: 'Break Inside',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'layout',
						utilityName: 'break-inside',
					},
				},
			},
			{
				name: 'Display',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'layout',
						utilityName: 'display',
					},
				},
			},
			{
				name: 'Object Fit',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'layout',
						utilityName: 'object-fit',
					},
				},
			},
			{
				name: 'Object Position',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'layout',
						utilityName: 'object-position',
					},
				},
			},
			{
				name: 'Overflow',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'layout',
						utilityName: 'overflow',
					},
				},
			},
			{
				name: 'Position',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'layout',
						utilityName: 'position',
					},
				},
			},
			{
				name: 'Visibility',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'layout',
						utilityName: 'visibility',
					},
				},
			},
			{
				name: 'Top / Right / Bottom / Left',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'layout',
						utilityName: 'top-right-bottom-left',
					},
				},
			},
			{
				name: 'Z-Index',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'layout',
						utilityName: 'z-index',
					},
				},
			},
		],
	},
	{
		name: 'Flexbox & Grid',
		children: [
			{
				name: 'Flex Direction',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'flexbox-grid',
						utilityName: 'flex-direction',
					},
				},
			},
			{
				name: 'Flex Wrap',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'flexbox-grid',
						utilityName: 'flex-wrap',
					},
				},
			},
			{
				name: 'Flex',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'flexbox-grid',
						utilityName: 'flex',
					},
				},
			},
			{
				name: 'Flex Grow',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'flexbox-grid',
						utilityName: 'flex-grow',
					},
				},
			},
			{
				name: 'Flex Shrink',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'flexbox-grid',
						utilityName: 'flex-shrink',
					},
				},
			},
			{
				name: 'Order',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'flexbox-grid',
						utilityName: 'order',
					},
				},
			},
			{
				name: 'Grid Template Columns',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'flexbox-grid',
						utilityName: 'grid-template-columns',
					},
				},
			},
			{
				name: 'Grid Column Start / End',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'flexbox-grid',
						utilityName: 'grid-column-start-end',
					},
				},
			},
			{
				name: 'Grid Template Rows',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'flexbox-grid',
						utilityName: 'grid-template-rows',
					},
				},
			},
			{
				name: 'Grid Row Start / End',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'flexbox-grid',
						utilityName: 'grid-row-start-end',
					},
				},
			},
			{
				name: 'Grid Auto Flow',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'flexbox-grid',
						utilityName: 'grid-auto-flow',
					},
				},
			},
			{
				name: 'Grid Auto Columns',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'flexbox-grid',
						utilityName: 'grid-auto-columns',
					},
				},
			},
			{
				name: 'Grid Auto Rows',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'flexbox-grid',
						utilityName: 'grid-auto-rows',
					},
				},
			},
			{
				name: 'Gap',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'flexbox-grid',
						utilityName: 'gap',
					},
				},
			},
			{
				name: 'Justify Content',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'flexbox-grid',
						utilityName: 'justify-content',
					},
				},
			},
			{
				name: 'Justify Items',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'flexbox-grid',
						utilityName: 'justify-items',
					},
				},
			},
			{
				name: 'Justify Self',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'flexbox-grid',
						utilityName: 'justify-self',
					},
				},
			},
			{
				name: 'Align Content',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'flexbox-grid',
						utilityName: 'align-content',
					},
				},
			},
			{
				name: 'Align Items',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'flexbox-grid',
						utilityName: 'align-items',
					},
				},
			},
			{
				name: 'Align Self',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'flexbox-grid',
						utilityName: 'align-self',
					},
				},
			},
		],
	},
	{
		name: 'Spacing',
		children: [
			{
				name: 'Padding',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'spacing',
						utilityName: 'padding',
					},
				},
			},
			{
				name: 'Margin',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'spacing',
						utilityName: 'margin',
					},
				},
			},
		],
	},
	{
		name: 'Sizing',
		children: [
			{
				name: 'Width',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'sizing',
						utilityName: 'width',
					},
				},
			},
			{
				name: 'Min Width',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'sizing',
						utilityName: 'min-width',
					},
				},
			},
			{
				name: 'Max Width',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'sizing',
						utilityName: 'max-width',
					},
				},
			},
			{
				name: 'Height',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'sizing',
						utilityName: 'height',
					},
				},
			},
			{
				name: 'Min Height',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'sizing',
						utilityName: 'min-height',
					},
				},
			},
			{
				name: 'Max Height',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'sizing',
						utilityName: 'max-height',
					},
				},
			},
		],
	},
	{
		name: 'Typography',
		children: [
			{
				name: 'Font Family',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'typography',
						utilityName: 'font-family',
					},
				},
			},
			{
				name: 'Font Size',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'typography',
						utilityName: 'font-size',
					},
				},
			},
			{
				name: 'Font Smoothing',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'typography',
						utilityName: 'font-smoothing',
					},
				},
			},
			{
				name: 'Font Style',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'typography',
						utilityName: 'font-style',
					},
				},
			},
			{
				name: 'Font Weight',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'typography',
						utilityName: 'font-weight',
					},
				},
			},
			{
				name: 'Font Variant Numeric',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'typography',
						utilityName: 'font-variant-numeric',
					},
				},
			},
			{
				name: 'Letter Spacing',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'typography',
						utilityName: 'letter-spacing',
					},
				},
			},
			{
				name: 'Line Height',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'typography',
						utilityName: 'line-height',
					},
				},
			},
			{
				name: 'List Style Type',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'typography',
						utilityName: 'list-style-type',
					},
				},
			},
			{
				name: 'List Style Position',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'typography',
						utilityName: 'list-style-position',
					},
				},
			},
			{
				name: 'Text Align',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'typography',
						utilityName: 'text-align',
					},
				},
			},
			{
				name: 'Text Color',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'typography',
						utilityName: 'text-color',
					},
				},
			},
			{
				name: 'Text Decoration Line',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'typography',
						utilityName: 'text-decoration-line',
					},
				},
			},
			{
				name: 'Text Decoration Color',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'typography',
						utilityName: 'text-decoration-color',
					},
				},
			},
			{
				name: 'Text Decoration Style',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'typography',
						utilityName: 'text-decoration-style',
					},
				},
			},
			{
				name: 'Text Decoration Thickness',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'typography',
						utilityName: 'text-decoration-thickness',
					},
				},
			},
			{
				name: 'Text Overflow',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'typography',
						utilityName: 'text-overflow',
					},
				},
			},
			{
				name: 'Text Transform',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'typography',
						utilityName: 'text-transform',
					},
				},
			},
			{
				name: 'Text Underline Offset',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'typography',
						utilityName: 'text-underline-offset',
					},
				},
			},
			{
				name: 'Vertical Align',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'typography',
						utilityName: 'vertical-align',
					},
				},
			},
			{
				name: 'Whitespace',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'typography',
						utilityName: 'whitespace',
					},
				},
			},
			{
				name: 'Word Break',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'typography',
						utilityName: 'word-break',
					},
				},
			},
		],
	},
	{
		name: 'Backgrounds',
		children: [
			{
				name: 'Background Attachment',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'backgrounds',
						utilityName: 'background-attachment',
					},
				},
			},
			{
				name: 'Background Clip',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'backgrounds',
						utilityName: 'background-clip',
					},
				},
			},
			{
				name: 'Background Color',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'backgrounds',
						utilityName: 'background-color',
					},
				},
			},
			{
				name: 'Background Origin',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'backgrounds',
						utilityName: 'background-origin',
					},
				},
			},
			{
				name: 'Background Position',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'backgrounds',
						utilityName: 'background-position',
					},
				},
			},
			{
				name: 'Background Repeat',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'backgrounds',
						utilityName: 'background-repeat',
					},
				},
			},
			{
				name: 'Background Size',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'backgrounds',
						utilityName: 'background-size',
					},
				},
			},
			{
				name: 'Background Image',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'backgrounds',
						utilityName: 'background-image',
					},
				},
			},
		],
	},
	{
		name: 'Borders',
		children: [
			{
				name: 'Border Radius',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'borders',
						utilityName: 'border-radius',
					},
				},
			},
			{
				name: 'Border Width',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'borders',
						utilityName: 'border-width',
					},
				},
			},
			{
				name: 'Border Color',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'borders',
						utilityName: 'border-color',
					},
				},
			},
			{
				name: 'Border Style',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'borders',
						utilityName: 'border-style',
					},
				},
			},
		],
	},
	{
		name: 'Effects',
		children: [
			{
				name: 'Mix Blend Mode',
				to: {
					name: 'utility',
					params: {
						utilityGroup: 'effects',
						utilityName: 'mix-blend-mode',
					},
				},
			},
		],
	},
]
