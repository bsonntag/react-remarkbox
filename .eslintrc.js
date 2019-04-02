module.exports = {
  env: {
    browser: 1,
  },
  extends: 'seegno',
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'react/prop-types': 'error',
  },
  settings: {
    react: {
      version: '16.3',
    },
  },
};
