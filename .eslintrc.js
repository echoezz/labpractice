module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react',
    'security'
  ],
  rules: {
    'no-unused-vars': 'warn',
    'security/detect-eval-with-expression': 'error'
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};