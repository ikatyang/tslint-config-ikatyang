# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="2.3.0"></a>
# [2.3.0](https://github.com/ikatyang/tslint-config-ikatyang/compare/v2.2.0...v2.3.0) (2017-08-27)


### Bug Fixes

* **deps:** update peerDependency tslint to version ^5.7.0 ([8b7afa9](https://github.com/ikatyang/tslint-config-ikatyang/commit/8b7afa9))


### Features

* **rules:** disable `no-parameter-properties` ([4750851](https://github.com/ikatyang/tslint-config-ikatyang/commit/4750851))
* **rules:** enable `no-parameter-reassignment` ([1f07953](https://github.com/ikatyang/tslint-config-ikatyang/commit/1f07953))



<a name="2.2.0"></a>
# [2.2.0](https://github.com/ikatyang/tslint-config-ikatyang/compare/v2.1.0...v2.2.0) (2017-08-09)


### Features

* **options:** [prefer-conditional-expression] enable check-else-if ([819c3de](https://github.com/ikatyang/tslint-config-ikatyang/commit/819c3de))
* **rules:** enable no-duplicate-imports ([9ef05f5](https://github.com/ikatyang/tslint-config-ikatyang/commit/9ef05f5))
* **rules:** enable no-submodule-imports ([2da5375](https://github.com/ikatyang/tslint-config-ikatyang/commit/2da5375))



<a name="2.1.0"></a>
# [2.1.0](https://github.com/ikatyang/tslint-config-ikatyang/compare/v2.0.1...v2.1.0) (2017-07-31)


### Features

* split out prettier ([#10](https://github.com/ikatyang/tslint-config-ikatyang/issues/10)) ([e8a751e](https://github.com/ikatyang/tslint-config-ikatyang/commit/e8a751e))



<a name="2.0.1"></a>
## [2.0.1](https://github.com/ikatyang/tslint-config-ikatyang/compare/v2.0.0...v2.0.1) (2017-07-30)


### Bug Fixes

* **rules:** prettier-related rules should be overridden ([afc35fc](https://github.com/ikatyang/tslint-config-ikatyang/commit/afc35fc))



<a name="2.0.0"></a>
# [2.0.0](https://github.com/ikatyang/tslint-config-ikatyang/compare/v1.0.2...v2.0.0) (2017-07-30)


### Features

* **options:** [object-curly-spacing] replace 'never' with 'always' ([3ecd25e](https://github.com/ikatyang/tslint-config-ikatyang/commit/3ecd25e))
* **options:** [object-literal-key-quotes] replace 'consistent-as-needed' with 'as-need' ([0bb0056](https://github.com/ikatyang/tslint-config-ikatyang/commit/0bb0056))
* **options:** [quotemark] remove 'no-template' ([6aec04f](https://github.com/ikatyang/tslint-config-ikatyang/commit/6aec04f))
* **options:** [ter-indent] set parameters to 1 ([779b62c](https://github.com/ikatyang/tslint-config-ikatyang/commit/779b62c))
* **plugins:** add tslint-plugin-ikatyang ([5239174](https://github.com/ikatyang/tslint-config-ikatyang/commit/5239174))
* **plugins:** add tslint-plugin-prettier ([93f0ec3](https://github.com/ikatyang/tslint-config-ikatyang/commit/93f0ec3))
* **rules:** enable filename-convention ([31940e0](https://github.com/ikatyang/tslint-config-ikatyang/commit/31940e0))
* **rules:** enable no-mixed-parameter-properties ([eb23711](https://github.com/ikatyang/tslint-config-ikatyang/commit/eb23711))
* **rules:** enable parameter-properties ([dbc86b7](https://github.com/ikatyang/tslint-config-ikatyang/commit/dbc86b7))

### BREAKING CHANGES

* remove prettier configs in `tslint-config-ikatyang/prettier` ([17008e5](https://github.com/ikatyang/tslint-config-ikatyang/commit/17008e5))

<a name="1.0.2"></a>
## [1.0.2](https://github.com/ikatyang/tslint-config-ikatyang/compare/v1.0.1...v1.0.2) (2017-07-24)


### Bug Fixes

* **rules:** disable rules conflict with prettier ([31232e3](https://github.com/ikatyang/tslint-config-ikatyang/commit/31232e3))

## v1.0.1 (2017-07-23)

- [prettier] add typescript definition ([0d66a81](https://github.com/ikatyang/tslint-config-ikatyang/commit/0d66a81))

## v1.0.0 (2017-07-21)

- [prettier] add prettier configs ([6668f32](https://github.com/ikatyang/tslint-config-ikatyang/commit/6668f32))
- [enable-rules] add tslint-consistent-codestyle rules ([b6218c1](https://github.com/ikatyang/tslint-config-ikatyang/commit/b6218c1))
- [disable-rules] disable rules handled by prettier ([87aea61](https://github.com/ikatyang/tslint-config-ikatyang/commit/87aea61))

## v0.10.0 (2017-07-09)

- [enable-option] `await-promise`: `PromiseLike`
- [disable-rule] `no-require-imports`

## v0.9.0 (2017-07-06)

- [tslint] Upgrade v5.5.0
- [enable-new-rule] `no-this-assignment`
- [disable-rule] `no-bitwise`
- [disable-option] `whitespace`: `check-module`, `check-typecast`

## v0.8.0 (2017-06-13)

- [disable-rule] `no-magic-numbers`
- [disable-rule] `prefer-method-signature`
- [disable-option] `strict-boolean-expressions`: `allow-null-union`, `allow-undefined-union`

## v0.7.0 (2017-06-02)

- [tslint] Upgrade v5.4.2
- [enable-new-rule] `switch-final-break`
- [enable-new-rule] `use-default-type-parameter`
- [enable-new-rule] `binary-expression-operand-order`
- [enable-new-option] `no-duplicate-variable`: `check-parameters`
- [disable-rule] `no-non-null-assertion`

## v0.6.0 (2017-05-27)

- [disable-rule] `interface-name`

## v0.5.0 (2017-05-24)

- [tslint] Upgrade v5.3.2
- [enable-option] `strict-boolean-expressions`: `allow-null-union`, `allow-undefined-union`
- [enable-option] `only-arrow-functions`: `allow-declarations`, `allow-named-functions`
- [enable-new-option] `indent`: 2 spaces
- [enable-new-option] `quotemark`: `no-template`
- [enable-new-rule] `prefer-object-spread`
- [enable-new-rule] `encoding`
- [enable-new-rule] `prefer-conditional-expression`
- [tslint-eslint-rules] Upgrade v4.1.0
- [enable-new-rule] `ter-func-call-spacing`

## v0.4.0 (2017-05-08)

- [disable-rule] `typedef`: unnecessary typedef for known types, `--noImplicitAny` is enough for unknown types.

## v0.3.0 (2017-05-04)

- [tslint] Upgrade v5.2.0
- [enable-option] `align`: `members`, `elements`
- [enable-rule] `ordered-imports`
- [enable-rule] `prefer-function-over-method`
- [enable-new-rule] `no-object-literal-type-assertion`
- [enable-new-rule] `no-irregular-whitespace` ( disable same rule from tslint-eslint-rules )
- [enable-new-rule] `number-literal-format`
- [enable-new-rule] `deprecation`
- [enable-new-rule] `no-unnecessary-type-assertion`
- [adjust-rule] `object-curly-spacing`: never curly spacing in object
- [adjust-rule] `no-console`: ban all console methods
- [disable-new-rule] `prefer-switch`

## v0.2.0 (2017-04-22)

- [adjust] `variable-name`: add `allow-leading-underscore` option
- [disable] `no-any`
- [disable] `no-unsafe-any`
- [disable] `prefer-function-over-method`

## v0.1.1 (2017-04-18)

- fix entry point

## v0.1.0 (2017-04-18)

- first release
