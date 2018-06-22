declare function returnGeneric<T>(): T;

// good

const good1 = returnGeneric<any>()

// bad

const bad1 = returnGeneric();
