/* eslint global-require: 0 */

const path = require('path');
const { execSync } = require('child_process');

// NOTE: ESLint adds runtime statistics to the output (so it's no longer JSON) if TIMING is set
module.exports = JSON.parse(String(execSync(path.join(__dirname, 'whitespace-flat-async.js'), {
  env: {
    ...process.env,
    TIMING: undefined,
  }
})));
