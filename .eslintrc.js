module.exports = {
  extends: 'airbnb',
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },

  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      generators: true,
      experimentalObjectRestSpread: true,
    },
  },
  rules: {
    'react/prefer-stateless-function': 0,
    'react/jsx-filename-extension': 0,
    'react/prop-types': 1,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/img-redundant-alt': 0,
    'jsx-a11y/href-no-hash': 'off',
    'no-underscore-dangle': 0,
    'no-case-declarations': 0,
    'max-len': ['error', 120, 2]
  }
};