import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import path from 'path'
import { fileURLToPath } from 'url'

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const compat = new FlatCompat({
    baseDirectory: __dirname, // optional; default: process.cwd()
    resolvePluginsRelativeTo: __dirname, // optional
    recommendedConfig: js.configs.recommended, // optional unless you're using "eslint:recommended"
})

export default [
    {
        ignores: [
            'stylelint.config.cjs',
            '/dist',
            '**/node_modules/**',
            '**/@volverjs/**',
            '**/volver/**',
        ],
    },
    ...compat.config({
        globals: {
            request: true,
        },
        extends: [
            './.eslintrc-auto-import.json',
            'eslint:recommended',
            'plugin:vue/vue3-recommended',
            'prettier',
        ],
        rules: {
            'no-debugger': 'warn',
            'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
            'vue/multi-word-component-names': 'off',
            'no-unused-vars': 'off',
            'sort-imports': 'off',
            // for shims Window interface
            '@typescript-eslint/no-empty-interface': 'off',
        },
        parserOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
        },
    }),
]
