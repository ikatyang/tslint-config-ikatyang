import * as tslint from 'tslint';

export const tslint_rules: tslint.Configuration.RawRulesConfig = {
  'adjacent-overload-signatures': true,
  align: [true, 'arguments', 'parameters', 'statements', 'elements', 'members'],
  'array-type': [true, 'array'],
  'arrow-parens': [true, 'ban-single-arg-parens'],
  'arrow-return-shorthand': [true, 'multiline'],
  'await-promise': [true, 'PromiseLike'],
  ban: false,
  'ban-types': [
    true,
    ['Boolean', 'Use boolean instead.'],
    ['Number', 'Use number instead.'],
    ['String', 'Use string instead.'],
    ['Object', 'Use object instead.'],
  ],
  'binary-expression-operand-order': true,
  'callable-types': true,
  'class-name': false, // tslint-consistent-codestyle: naming-convention
  'comment-format': [true, 'check-space'],
  'completed-docs': false,
  curly: true,
  'cyclomatic-complexity': [true, 20],
  deprecation: true,
  encoding: true,
  eofline: true,
  'file-header': false,
  forin: true,
  'import-blacklist': false,
  'import-spacing': true,
  indent: [true, 'spaces', 2],
  'interface-name': false, // tslint-consistent-codestyle: naming-convention
  'interface-over-type-literal': true,
  'jsdoc-format': true,
  'label-position': true,
  'linebreak-style': [true, 'LF'],
  'match-default-export-name': false,
  'max-classes-per-file': [true, 1],
  'max-file-line-count': [true, 300],
  'max-line-length': [true, 120],
  'member-access': true,
  'member-ordering': [
    true,
    {
      order: [
        'public-static-field',
        'protected-static-field',
        'private-static-field',
        'public-instance-field',
        'protected-instance-field',
        'private-instance-field',
        'constructor',
        'public-static-method',
        'protected-static-method',
        'private-static-method',
        'public-instance-method',
        'protected-instance-method',
        'private-instance-method',
      ],
    },
  ],
  'new-parens': true,
  'newline-before-return': false,
  'no-angle-bracket-type-assertion': true,
  'no-any': false,
  'no-arg': true,
  'no-bitwise': false,
  'no-boolean-literal-compare': true,
  'no-conditional-assignment': true,
  'no-consecutive-blank-lines': true,
  'no-console': [true],
  'no-construct': true,
  'no-debugger': true,
  'no-default-export': true,
  'no-duplicate-imports': true,
  'no-duplicate-super': true,
  'no-duplicate-switch-case': true,
  'no-duplicate-variable': [true, 'check-parameters'],
  'no-empty': true,
  'no-empty-interface': true,
  'no-eval': true,
  'no-floating-promises': true,
  'no-for-in-array': true,
  'no-implicit-dependencies': true,
  'no-import-side-effect': true,
  'no-inferrable-types': [true, 'ignore-params', 'ignore-properties'],
  'no-inferred-empty-object-type': true,
  'no-internal-module': true,
  'no-invalid-template-strings': true,
  'no-invalid-this': true,
  'no-irregular-whitespace': true,
  'no-magic-numbers': false,
  'no-mergeable-namespace': true,
  'no-misused-new': true,
  'no-namespace': [true, 'allow-declarations'],
  'no-non-null-assertion': false,
  'no-null-keyword': false,
  'no-object-literal-type-assertion': true,
  'no-parameter-properties': false, // tslint-plugin-ikatyang: no-mixed-parameter-properties
  'no-parameter-reassignment': true,
  'no-redundant-jsdoc': true,
  'no-reference': true,
  'no-reference-import': true,
  'no-require-imports': false,
  'no-return-await': true,
  'no-shadowed-variable': true,
  'no-sparse-arrays': true,
  'no-string-literal': true,
  'no-string-throw': true,
  'no-submodule-imports': true,
  'no-switch-case-fall-through': true,
  'no-this-assignment': true,
  'no-trailing-whitespace': true,
  'no-unbound-method': true,
  'no-unnecessary-callback-wrapper': true,
  'no-unnecessary-initializer': true,
  'no-unnecessary-qualifier': true,
  'no-unnecessary-type-assertion': true,
  'no-unsafe-any': false,
  'no-unsafe-finally': true,
  'no-unused-expression': true,
  'no-unused-variable': [true, { 'ignore-pattern': '^_' }],
  'no-use-before-declare': true,
  'no-var-keyword': true,
  'no-var-requires': true,
  'no-void-expression': [true, 'ignore-arrow-function-shorthand'],
  'number-literal-format': true,
  'object-literal-key-quotes': [true, 'as-needed'],
  'object-literal-shorthand': true,
  'object-literal-sort-keys': false,
  'one-line': [
    true,
    'check-open-brace',
    'check-catch',
    'check-else',
    'check-finally',
    'check-whitespace',
  ],
  'one-variable-per-declaration': [true],
  'only-arrow-functions': [true, 'allow-declarations', 'allow-named-functions'],
  'ordered-imports': [
    true,
    {
      'import-sources-order': 'lowercase-first',
      'named-imports-order': 'lowercase-first',
    },
  ],
  'prefer-conditional-expression': [true, 'check-else-if'],
  'prefer-const': true,
  'prefer-for-of': true,
  'prefer-function-over-method': true,
  'prefer-method-signature': false,
  'prefer-object-spread': true,
  'prefer-switch': false,
  'prefer-template': true,
  'promise-function-async': true,
  quotemark: [true, 'single', 'avoid-escape', 'jsx-double'],
  radix: false,
  'restrict-plus-operands': true,
  'return-undefined': true,
  semicolon: [true, 'always'],
  'space-before-function-paren': [
    true,
    {
      anonymous: 'always',
      asyncArrow: 'always',
      constructor: 'never',
      method: 'never',
      named: 'never',
    },
  ],
  'space-within-parens': false, // tslint-eslint-rules: space-in-parens
  'strict-boolean-expressions': [true],
  'strict-type-predicates': true,
  'switch-default': true,
  'switch-final-break': [true, 'always'],
  'trailing-comma': [true, { multiline: 'always', singleline: 'never' }],
  'triple-equals': true,
  typedef: false,
  'typedef-whitespace': [
    true,
    {
      'call-signature': 'nospace',
      'index-signature': 'nospace',
      parameter: 'nospace',
      'property-declaration': 'nospace',
      'variable-declaration': 'nospace',
    },
    {
      'call-signature': 'onespace',
      'index-signature': 'onespace',
      parameter: 'onespace',
      'property-declaration': 'onespace',
      'variable-declaration': 'onespace',
    },
  ],
  'typeof-compare': true,
  'unified-signatures': true,
  'use-default-type-parameter': true,
  'use-isnan': true,
  'variable-name': [true, 'ban-keywords'], // tslint-consistent-codestyle: naming-convention
  whitespace: [
    true,
    'check-branch',
    'check-decl',
    'check-operator',
    'check-preblock',
    'check-separator',
    'check-type',
  ],
};
