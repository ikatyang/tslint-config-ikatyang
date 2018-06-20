const assert = require('assert');
const fs = require('fs');
const path = require('path');
const prettier = require('prettier');

/** @type {string[]} */
const rulesets = [];

/** @type {Record<string, import('tslint').Configuration.RawRuleConfig>} */
const rules = {};

const sourceDirname = path.resolve(__dirname, '../src');
fs.readdirSync(sourceDirname).forEach(rulesetName => {
  if (rulesetName !== 'tslint') {
    rulesets.push(rulesetName);
  }

  const rulesetDirname = path.resolve(sourceDirname, rulesetName);
  fs.readdirSync(rulesetDirname)
    .filter(x => x !== 'tslint.json')
    .forEach(ruleName => {
      const ruleDirname = path.resolve(rulesetDirname, ruleName);

      const configFilename = path.resolve(ruleDirname, 'tslint.json');

      /** @type {import('tslint').Configuration.RawConfigFile} */
      const config = JSON.parse(fs.readFileSync(configFilename, 'utf8'));

      const configRules =
        /** @type {NonNullable<typeof config.rules>} */ (config.rules);
      const ruleNames = Object.keys(configRules);
      assert(
        ruleNames.length === 1 && ruleNames[0] === ruleName,
        `Unexpected rule found in ${configFilename}`,
      );
      assert(!(ruleName in rules), `Duplicate rule found in ${configFilename}`);

      const ruleValue = /** @type {boolean | any[]} */ (configRules[ruleName]);

      // enabled rules must have tests
      if (Array.isArray(ruleValue) ? ruleValue[0] : ruleValue) {
        const testBasename = 'test.ts';
        assert(
          fs.existsSync(path.resolve(ruleDirname, testBasename)),
          `Missing ${testBasename} for ${rulesetName}/${ruleName}`,
        );
      }

      rules[ruleName] = ruleValue;
    });
});

console.log(
  prettier.format(
    JSON.stringify({ extends: rulesets, rules, jsRules: rules }),
    { parser: 'json' },
  ),
);
