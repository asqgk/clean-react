import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import reactPlugin from 'eslint-plugin-react'
import globals from 'globals'

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parserOptions: {
        project: './tsconfig-eslint.json'
      },
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    plugins: {
      react: reactPlugin
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    rules: {
      '@typescript-eslint/consistent-type-definitions': 'off',
      '@typescript-eslint/strict-boolean-expressions': 'off',
      '@typescript-eslint/no-floating-promises': 'off',
      '@typescript-eslint/comma-spacing': 'off',
      '@typescript-eslint/return-await': 'off',

      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',

      'import/export': 'off'
    }
  },
  {
    ignores: [
      'node_modules',
      '.vscode',
      'coverage',
      'public',
      'dist',
      '*.scss',
      '*.json'
    ]
  }
]
