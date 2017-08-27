import * as tslint from 'tslint';

export const tslint_plugin_ikatyang_rules: tslint.Configuration.RawRulesConfig = {
  'filename-convention': [
    true,
    { namingStyle: 'kebab-case', allowSuffixes: ['.test'] },
  ],
  'no-mixed-parameter-properties': true,
};
