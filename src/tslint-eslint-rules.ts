import * as tslint from 'tslint';

export const tslint_eslint_rules: tslint.Configuration.RawRulesConfig = {
  'array-bracket-spacing': [true, 'never'],
  'arrow-body-style': false, // tslint: arrow-return-shorthand
  'block-spacing': [true, 'always'],
  'brace-style': false, // tslint: one-line
  'handle-callback-err': [
    true,
    '^(err|error)$|^.+Error$',
    { allowProperties: true },
  ],
  'no-constant-condition': true,
  'no-control-regex': true,
  'no-duplicate-case': true,
  'no-empty-character-class': true,
  'no-ex-assign': true,
  'no-extra-boolean-cast': true,
  'no-extra-semi': true,
  'no-inner-declarations': [true, 'both'],
  'no-invalid-regexp': true,
  'no-multi-spaces': [
    true,
    {
      exceptions: {
        BinaryExpression: false,
        PropertyAssignment: false,
        VariableDeclaration: false,
      },
    },
  ],
  'no-regex-spaces': true,
  'no-unexpected-multiline': true,
  'object-curly-spacing': [true, 'always'],
  'sort-imports': false, // tslint: ordered-imports
  'space-in-parens': [true, 'never'],
  'ter-arrow-parens': false, // tslint: arrow-parens
  'ter-arrow-spacing': false, // tslint: whitespace
  'ter-func-call-spacing': [true, 'never'],
  'ter-indent': [
    true,
    2,
    {
      CallExpression: {
        arguments: 1,
      },
      FunctionDeclaration: {
        body: 1,
        parameters: 1,
      },
      FunctionExpression: {
        body: 1,
        parameters: 1,
      },
      MemberExpression: 1,
      SwitchCase: 1,
      VariableDeclarator: 1,
      outerIIFEBody: 1,
    },
  ],
  'ter-max-len': false, // tslint: max-line-length
  'ter-no-irregular-whitespace': false, // tslint: no-irregular-whitespace
  'ter-no-sparse-arrays': false, // tslint: no-sparse-arrays
  'ter-prefer-arrow-callback': false, // tslint: only-arrow-functions
  'valid-jsdoc': false,
  'valid-typeof': false, // tslint: typeof-compare
};
