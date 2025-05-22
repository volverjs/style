import globals from 'globals'
import pluginJs from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import autoImports from './.eslintrc-auto-import.json' assert { type: 'json' }

export default [
    {
        ignores: [
            'eslint.config.js',
            'stylelint.config.cjs',
            'postcss.config.cjs',
            'vite.config.js',
            '**/dist/*',
            '**/styleguide/*',
            '**/node_modules/**',
            '**/@volverjs/**',
            '**/volver/**',
            '**/*.json',
        ],
    },
    pluginJs.configs.recommended,
    ...pluginVue.configs['flat/recommended'],
    {
        languageOptions: {
            ...autoImports,
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                ...autoImports.globals,
                ...globals.browser
            }
        },
        rules: {
            'no-debugger': 'warn',
            'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
            'vue/multi-word-component-names': 'off',
            'no-unused-vars': 'off',
            'sort-imports': 'off',
            'vue/block-lang': 'off',
            // for shims Window interface
            '@intlify/vue-i18n/no-raw-text': 'off',
        },
    },
    eslintPluginPrettierRecommended,
]
