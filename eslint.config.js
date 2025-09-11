// eslint.config.js

// @ts-check
import js from '@eslint/js'
import react from 'eslint-plugin-react-x'
import tseslint from 'typescript-eslint'
import { defineConfig } from 'eslint/config'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

export default defineConfig({
  files: ['**/*.ts', '**/*.tsx'],
  ignores: ['vite.config.ts'],
  extends: [
    js.configs.recommended,
    tseslint.configs.recommended,
    react.configs.recommended,
    eslintPluginPrettierRecommended,
  ],
  languageOptions: {
    parser: tseslint.parser,
    parserOptions: {
      projectService: true,
      tsconfigRootDir: import.meta.dirname,
    },
  },
  rules: {
    // Put rules you want to override here
    'react-x/no-class-component': 'warn',
  },
})
