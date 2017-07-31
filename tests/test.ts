export {};
// tslint:disable:no-unused-variable no-unused

declare function do_something(): void;
declare const condition: boolean;
declare const foo: boolean;
declare const bar: boolean;

// early-exit
(() => {
  if (condition) {
    do_something();
  }
  do_something();
  do_something();
  do_something();
})();

// naming-convention & ordered-imports
class MyClass {
  public static my_static_public_property: any;
  protected static _my_static_protected_property: any;
  private static _my_static_private_property: any;
  public my_public_property: any;
  protected _my_protected_property: any;
  private _my_private_property: any;
  constructor() {
    /* ... */
  }
  public static my_static_public_method(): void {
    /* ... */
  }
  protected static _my_static_protected_method(): void {
    /* ... */
  }
  private static _my_static_private_method(): void {
    /* ... */
  }
  public my_public_method(): this {
    return this;
  }
  protected _my_protected_method(): this {
    return this;
  }
  private _my_private_method(): this {
    return this;
  }
}
type MyType = any;
interface MyInterface {
  my_property: any;
}
const my_const = 0;
function my_function(param_a: any, _param_b: any): void {
  /* ... */
}

// tslint:disable-next-line:no-use-before-declare https://github.com/palantir/tslint/issues/2551
const { a: _a, ...b_and_c } = { a: 1, b: 2, c: 3 };

// no-collapsible-if
if (foo && bar) {
  do_something();
}
if (foo && bar) {
  do_something();
}
if (foo) {
  do_something();
} else if (bar) {
  do_something();
} else {
  do_something();
}
if (foo) {
  if (bar) {
    do_something();
  } else {
    do_something();
  }
}
if (foo) {
  if (bar) {
    do_something();
  }
} else {
  do_something();
}

// no-return-undefined
let var_for_return_void;
function return_void(): void {
  return void (var_for_return_void = 1);
}

// prefer-const-enum
const enum MyEnum {
  Enum1,
  Enum2,
}
