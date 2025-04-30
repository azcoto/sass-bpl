import eslint from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import turboPlugin from 'eslint-plugin-turbo';
import tseslint, { type Config } from 'typescript-eslint';

export const config = tseslint.config(
  eslintConfigPrettier,
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      turbo: turboPlugin
    },
    rules: {
      'turbo/no-undeclared-env-vars': 'warn'
    }
  },
  {
    ignores: ['dist/**']
  }
) satisfies Config;
