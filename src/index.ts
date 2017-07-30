import * as prettier_options from 'prettier-config-ikatyang';

const config: {
  extends: string[];
  rules: { [rule: string]: boolean | any[] };
} = {
  extends: ['./rules', 'tslint-config-prettier-ext', 'tslint-plugin-prettier'],
  rules: {
    prettier: [true, prettier_options],
  },
};

export = config;
