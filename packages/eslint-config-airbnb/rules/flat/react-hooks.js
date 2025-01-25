const reactHooksPlugin = require('eslint-plugin-react-hooks');
const base = require('../base/react-hooks');

module.exports = [{
  plugins: {
    'react-hooks': reactHooksPlugin,
  },
  languageOptions: {
    parserOptions: base.parserOptions
  },
  rules: base.rules
}];
