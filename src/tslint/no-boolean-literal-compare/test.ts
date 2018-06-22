declare const boolean: boolean;
declare const booleanOrUndefined: boolean | undefined;

// good

if (boolean) {

}

if (booleanOrUndefined === false) {

}

// bad

if (boolean === true) {

}
