module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier'],
	rules: {
		'no-console': process.env.NODE_ENV === 'development' ? 'off' : 'error',
		'no-debugger': process.env.NODE_ENV === 'development' ? 'off' : 'error',
		'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
		'no-unused-vars': 'off',
		'sort-imports': 'off',
	},
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
}
