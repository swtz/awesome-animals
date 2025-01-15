import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import path from 'path';
import { fileURLToPath } from 'url';

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

export default [
  ...compat.config({
    extends: 'airbnb-base',
    env: {
      es2022: true,
      browser: true,
    },
    rules: {
      semi: 'error',
      'no-param-reassign': 0,
      'import/extensions': 0,
      'no-console': 0,
      'no-underscore-dangle': 0,
      'import/prefer-default-export': 0,
    },
  }),
];
