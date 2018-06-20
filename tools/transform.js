/** @type {jest.Transformer} */
const transformer = {
  /**
   * @param {string} sourceText
   * @param {string} sourcePath
   */
  process(sourceText, sourcePath) {
    return `
      const path = require('path');
      const runtime = require('../../../tools/runtime');
      const serializer = require('jest-snapshot-serializer-raw');

      test('lint', () => {
        const filename = ${JSON.stringify(sourcePath)};
        const source = ${JSON.stringify(sourceText)};
        const lintResult = runtime.lint(filename, source);
        expect(serializer.wrap(lintResult)).toMatchSnapshot();
      });
    `;
  },
};

module.exports = transformer;
