export = {
  extends: ['tslint-eslint-rules', 'tslint-consistent-codestyle'],
  rules: {
    // tslint
    'adjacent-overload-signatures': true,
    align: false, // conflict with prettier
    'array-type': [true, 'array'],
    'arrow-parens': false, // conflict with prettier
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
    eofline: false, // conflict with prettier
    'file-header': false,
    forin: true,
    'import-blacklist': false,
    'import-spacing': false, // conflict with prettier
    indent: false, // conflict with prettier
    'interface-name': false, // tslint-consistent-codestyle: naming-convention
    'interface-over-type-literal': true,
    'jsdoc-format': true,
    'label-position': true,
    'linebreak-style': false, // conflict with prettier
    'match-default-export-name': false,
    'max-classes-per-file': [true, 1],
    'max-file-line-count': [true, 300],
    'max-line-length': false, // conflict with prettier
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
    'new-parens': false, // conflict with prettier
    'newline-before-return': false,
    'no-angle-bracket-type-assertion': true,
    'no-any': false,
    'no-arg': true,
    'no-bitwise': false,
    'no-boolean-literal-compare': true,
    'no-conditional-assignment': true,
    'no-consecutive-blank-lines': false, // conflict with prettier
    'no-console': [true],
    'no-construct': true,
    'no-debugger': true,
    'no-default-export': true,
    'no-duplicate-super': true,
    'no-duplicate-variable': [true, 'check-parameters'],
    'no-empty': true,
    'no-empty-interface': true,
    'no-eval': true,
    'no-floating-promises': true,
    'no-for-in-array': true,
    'no-import-side-effect': true,
    'no-inferrable-types': [true, 'ignore-params', 'ignore-properties'],
    'no-inferred-empty-object-type': true,
    'no-internal-module': true,
    'no-invalid-template-strings': true,
    'no-invalid-this': true,
    'no-irregular-whitespace': false, // conflict with prettier
    'no-magic-numbers': false,
    'no-mergeable-namespace': true,
    'no-misused-new': true,
    'no-namespace': [true, 'allow-declarations'],
    'no-non-null-assertion': false,
    'no-null-keyword': false,
    'no-object-literal-type-assertion': true,
    'no-parameter-properties': true,
    'no-reference': true,
    'no-reference-import': true,
    'no-require-imports': false,
    'no-shadowed-variable': true,
    'no-sparse-arrays': true,
    'no-string-literal': true,
    'no-string-throw': true,
    'no-switch-case-fall-through': true,
    'no-this-assignment': true,
    'no-trailing-whitespace': false, // conflict with prettier
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
    'object-literal-key-quotes': false, // conflict with prettier
    'object-literal-shorthand': true,
    'object-literal-sort-keys': false,
    'one-line': false, // conflict with prettier
    'one-variable-per-declaration': [true],
    'only-arrow-functions': [
      true,
      'allow-declarations',
      'allow-named-functions',
    ],
    'ordered-imports': [
      true,
      {
        'import-sources-order': 'lowercase-first',
        'named-imports-order': 'lowercase-first',
      },
    ],
    'prefer-conditional-expression': true,
    'prefer-const': true,
    'prefer-for-of': true,
    'prefer-function-over-method': true,
    'prefer-method-signature': false,
    'prefer-object-spread': true,
    'prefer-switch': false,
    'prefer-template': true,
    'promise-function-async': true,
    quotemark: false, // conflict with prettier
    radix: false,
    'restrict-plus-operands': true,
    'return-undefined': true,
    semicolon: false, // conflict with prettier
    'space-before-function-paren': false, // conflict with prettier
    'strict-boolean-expressions': [true],
    'strict-type-predicates': true,
    'switch-default': true,
    'switch-final-break': [true, 'always'],
    'trailing-comma': false, // conflict with prettier
    'triple-equals': true,
    typedef: false,
    'typedef-whitespace': false, // conflict with prettier
    'typeof-compare': true,
    'unified-signatures': true,
    'use-default-type-parameter': true,
    'use-isnan': true,
    'variable-name': [true, 'ban-keywords'], // tslint-consistent-codestyle: naming-convention
    whitespace: false, // conflict with prettier

    // tslint-eslint-rules
    'arrow-body-style': false, // tslint: arrow-return-shorthand
    'array-bracket-spacing': false, // conflict with prettier
    'block-spacing': false, // conflict with prettier
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
    'no-multi-spaces': false, // conflict with prettier
    'no-regex-spaces': true,
    'no-unexpected-multiline': true,
    'object-curly-spacing': false, // conflict with prettier
    'sort-imports': false, // tslint: ordered-imports
    'space-in-parens': false, // conflict with prettier
    'ter-arrow-parens': false, // tslint: arrow-parens
    'ter-arrow-spacing': false, // tslint: whitespace
    'ter-func-call-spacing': false, // conflict with prettier
    'ter-indent': false, // conflict with prettier
    'ter-max-len': false, // tslint: max-line-length
    'ter-no-irregular-whitespace': false, // tslint: no-irregular-whitespace
    'ter-no-sparse-arrays': false, // tslint: no-sparse-arrays
    'ter-prefer-arrow-callback': false, // tslint: only-arrow-functions
    'valid-jsdoc': false,
    'valid-typeof': false, // tslint: typeof-compare

    // tslint-consistent-codestyle
    'early-exit': [true],
    'ext-curly': false,
    'naming-convention': [
      true,
      {
        type: 'default',
        format: 'snake_case',
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid',
      },
      { type: 'parameter', leadingUnderscore: 'allow', final: true },
      { type: 'variable', modifiers: 'rename', leadingUnderscore: 'allow' },
      { type: 'member', modifiers: 'private', leadingUnderscore: 'require' },
      { type: 'member', modifiers: 'protected', leadingUnderscore: 'require' },
      { type: 'type', format: 'PascalCase' },
      { type: 'enumMember', format: 'PascalCase' },
    ],
    'no-as-type-assertion': false,
    'no-collapsible-if': true,
    'no-else-after-return': true,
    'no-return-undefined': [true, 'allow-void-expression'],
    'no-static-this': false,
    'no-unnecessary-else': true,
    'no-unused': [
      true,
      'ignore-imports',
      'unused-function-expression-name',
      'unused-class-expression-name',
    ],
    'no-var-before-return': true,
    'object-shorthand-properties-first': false,
    'oddness-check': false,
    'parameter-properties': false,
    'prefer-const-enum': true,
    'prefer-while': true,
  },
};
