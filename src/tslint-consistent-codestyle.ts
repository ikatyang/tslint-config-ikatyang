import * as tslint from 'tslint';

export const tslint_consistent_codestyle_rules: tslint.Configuration.RawRulesConfig = {
  'const-parameters': false, // tslint: no-parameter-reassignent
  'early-exit': [true],
  'ext-curly': false,
  'naming-convention': [
    true,
    {
      format: 'snake_case',
      leadingUnderscore: 'forbid',
      trailingUnderscore: 'forbid',
      type: 'default',
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
  'parameter-properties': [true, 'leading'],
  'prefer-const-enum': true,
  'prefer-while': true,
};
