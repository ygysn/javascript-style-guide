module.exports = [
  ...require('./flat'), // eslint-disable-line global-require
  {
    rules: {
      // disable requiring trailing commas because it might be nice to revert to
      // being JSON at some point, and I don't want to make big changes now.
      'comma-dangle': 0,
    }
  }
];
