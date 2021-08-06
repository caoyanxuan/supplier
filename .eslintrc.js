module.exports = {
  extends: ['@fe/eslint-config-pangoo-react'],
  rules: {
    indent: ['off', 2],
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/ban-ts-comment': 'off',
  },
  globals: {
    CONFIG_COMMON_URL: true,
    CONFIG_BASE_URL: true,
    YZW_ENVIRONMENT: true,
  },
};
