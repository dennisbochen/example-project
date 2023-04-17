const config = require('@demo/jest-config/default.config');

module.exports = {
  ...config,
  moduleNameMapper: {
    // '^~/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
  },
};
