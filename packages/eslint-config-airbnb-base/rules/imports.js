const base = require('./base/imports');

module.exports = {
  env: {
    es6: true
  },
  plugins: [
    'import'
  ],
  parserOptions: base.parserOptions,
  rules: base.rules
};
