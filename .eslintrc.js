module.exports = {
  extends: ['airbnb-base', 'prettier'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  env: {
    browser: true,
  },
  rules: {
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'array-callback-return': 'off',
  },
};
