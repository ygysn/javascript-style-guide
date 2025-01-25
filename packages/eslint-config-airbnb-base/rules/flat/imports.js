const importPlugin = require('eslint-plugin-import');
const globals = require('globals');
const base = require('../base/imports');

module.exports = [importPlugin.flatConfigs.recommended, {
  name: 'eslint-config-airbnb-base/imports',
  languageOptions: {
    globals: globals.es2015,
    parserOptions: base.parserOptions
  },
  settings: base.settings,
  rules: base.rules
}];
