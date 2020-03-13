module.exports = {
  env: {
    es6: true,
  },
  extends: [
    'airbnb',
    'prettier',
    'prettier/react'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier'
  ],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', '.js']
      }
    ],
    'import/prefer-default-export': 'off',
    // Alterar a validação de declaração de variáveis antes de componentes
    'react/sort-comp': 'off',
    // Criar estados dentro da classe, sem precisar utilizar constructor
    "react/state-in-constructor": "off",
    // Criar variáveis estáticas, como a propTypes, dentro da sua classe
    "react/static-property-placement": "off"

  },
};
