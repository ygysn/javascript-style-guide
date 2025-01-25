const globals = require('globals');
const base = require('../base/es6');

module.exports = [{
  name: 'eslint-config-airbnb-base/es6',
  languageOptions: {
    globals: globals.es2015,
    parserOptions: base.parserOptions
  },
  rules: base.rules
}];
