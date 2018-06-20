/** @type {jest.InitialOptions} */
const config = {
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'js', 'json'],
  testMatch: ['**/src/**/test.ts'],
  transform: { '/src/.+/test\\.ts$': '<rootDir>/tools/transform.js' },
  snapshotSerializers: ['jest-snapshot-serializer-raw'],
};

module.exports = config;
