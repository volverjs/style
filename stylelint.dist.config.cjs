// Stylelint config for the COMPILED CSS in dist/.
// Values nested inside SCSS maps (e.g. `flex-wrap: no-wrap`) are opaque strings
// to the SCSS linter, so invalid CSS slips through until it reaches dist.
// This config validates property values on the generated output to catch them.
module.exports = {
	rules: {
		'declaration-property-value-no-unknown': [
			true,
			{
				// Values that are valid CSS but unknown to stylelint's parser
				// grammar. Listed under the all-properties key so the rule still
				// flags genuine typos (e.g. `flex-wrap: no-wrap`) everywhere else.
				ignoreProperties: {
					'/.*/': [
						/var\(/, // any custom property reference
						/^hsl\(from /, // relative color syntax
						'all', // page-break-after / page-break-before
						'from-font', // text-underline-offset
						'after-white-space', // -webkit-line-break (reset)
					],
				},
			},
		],
	},
}
