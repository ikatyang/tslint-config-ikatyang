import * as tslint from 'tslint';
import { tslint_rules } from './tslint';
import { tslint_consistent_codestyle_rules } from './tslint-consistent-codestyle';
import { tslint_eslint_rules } from './tslint-eslint-rules';
import { tslint_plugin_ikatyang_rules } from './tslint-plugin-ikatyang';

const config: tslint.Configuration.RawConfigFile = {
  extends: [
    'tslint-eslint-rules',
    'tslint-consistent-codestyle',
    'tslint-plugin-ikatyang',
  ],
  rules: {
    ...tslint_rules,
    ...tslint_eslint_rules,
    ...tslint_consistent_codestyle_rules,
    ...tslint_plugin_ikatyang_rules,
  },
};

export = config;
