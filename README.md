# tslint-config-ikatyang

[![npm](https://img.shields.io/npm/v/tslint-config-ikatyang.svg)](https://www.npmjs.com/package/tslint-config-ikatyang)
[![build](https://img.shields.io/travis/ikatyang/tslint-config-ikatyang/master.svg)](https://travis-ci.org/ikatyang/tslint-config-ikatyang/builds)

[tslint](https://palantir.github.io/tslint/) config for ikatyang

## Install

```sh
# using npm
npm install --save-dev tslint-config-ikatyang

# using yarn
yarn add --dev tslint-config-ikatyang
```

**NOTE**: It's recommended to use [prettier](https://github.com/prettier/prettier) simultaneously, since this config disabled all `prettier`-related tslint rules.

## Usage

(tslint.json)

```json
{
  "extends": "tslint-config-ikatyang"
}
```

(prettier.config.js)

```js
module.exports = require('tslint-config-ikatyang/prettier');
```
