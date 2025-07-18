import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { globalIgnores } from 'eslint/config'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    settings: {
      'import/resolver': {
        alias: {
          map: [
            ['@', path.resolve(__dirname, './src')],
            ['@app', path.resolve(__dirname, './src/app')],
            ['@entities', path.resolve(__dirname, './src/Entities')],
            ['@features', path.resolve(__dirname, './src/features')],
            ['@widgets', path.resolve(__dirname, './src/widgets')],
            ['@pages', path.resolve(__dirname, './src/Pages')],
            ['@shared', path.resolve(__dirname, './src/shared')],
          ],
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
        }
      }
    },
  },
])
