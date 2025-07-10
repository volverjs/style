module.exports = {
	extends: [
		'stylelint-config-standard-scss',
		'stylelint-config-recommended-vue/scss',
	],
	rules: {
		'property-no-unknown': null,
		'selector-class-pattern': null,
		'function-no-unknown': null,
		'custom-property-pattern': null,
		// vendor prefix are usefull in some cases
		'property-no-vendor-prefix': null,
		'value-no-vendor-prefix': null,
		// conflict with prettier
		'scss/operator-no-newline-after': null,
		// brokes calc with css var es. calc(10px + var(--zero)) == calc(10px + 0) is an error
		'length-zero-no-unit': null,
		// conflict with :export
		'selector-pseudo-class-no-unknown': null,
		// mixins
		'scss/at-mixin-pattern': null,
	},
}
