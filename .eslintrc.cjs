module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: ['eslint:recommended', 'prettier'],
	rules: {
		'no-console': process.env.NODE_ENV === 'development' ? 'off' : 'error',
		'no-debugger': process.env.NODE_ENV === 'development' ? 'off' : 'error',
		'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
	},
	parserOptions: {
		parser: '@babel/eslint-parser',
	},
}
