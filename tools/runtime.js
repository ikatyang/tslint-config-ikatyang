const assert = require('assert');
const path = require('path');
const tslint = require('tslint');
const { createMarkupFromErrors } = require('tslint/lib/verify/parse');

/**
 * @param {string} filename
 * @param {string} source
 */
function lint(filename, source) {
  const lineContents = source.split('\n');

  const goodComment = '// good';
  const goodLine = lineContents.findIndex(is(goodComment));
  assert(goodLine !== -1, `'${goodComment}' should exist`);

  const badComment = '// bad';
  const badLine = lineContents.findIndex(is(badComment));
  assert(badLine !== -1, `'${badComment}' should exist`);

  assert(
    goodLine < badLine,
    `'${goodComment}' should be in front of '${badComment}'`,
  );

  const dirname = path.dirname(filename);
  const configPath = path.join(dirname, 'tslint.json');

  const config = tslint.Linter.findConfiguration(configPath).results;
  const linter = new tslint.Linter({ fix: false });

  linter.lint(filename, source, config);
  const results = linter.getResult();

  assert(
    results.failures.length !== 0,
    'There should be at least one linter error for bad things',
  );

  assert(
    results.failures.some(
      failure =>
        failure.getStartPosition().getLineAndCharacter().line > badLine,
    ),
    `Linter error(s) should be in the '${badComment}' section`,
  );

  const lintErrors = results.failures.map(failureToLintError);
  return createMarkupFromErrors(source, lintErrors);
}

/**
 * @template T
 * @param {T} something
 */
function is(something) {
  return /** @type {(x: any) => x is T} */ (x => x === something);
}

/**
 * @param {import('tslint').RuleFailure} failure
 * @returns {import('tslint/lib/verify/lintError').LintError}
 */
function failureToLintError(failure) {
  return {
    startPos: lineAndCharactorToLineAndCol(
      failure.getStartPosition().getLineAndCharacter(),
    ),
    endPos: lineAndCharactorToLineAndCol(
      failure.getEndPosition().getLineAndCharacter(),
    ),
    message: failure.getFailure(),
  };
}

/**
 * @param {import('typescript').LineAndCharacter} lineAndCharacter
 */
function lineAndCharactorToLineAndCol(lineAndCharacter) {
  return { line: lineAndCharacter.line, col: lineAndCharacter.character };
}

module.exports = {
  lint,
};
