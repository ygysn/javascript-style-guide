const base = require('./base/react-a11y');

module.exports = {
  plugins: [
    'jsx-a11y',
    'react'
  ],
  parserOptions: base.parserOptions,
  rules: base.rules
};
