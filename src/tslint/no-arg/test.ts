// good

function good1() {
  good1();
}

// bad

function bad1() {
  arguments.callee();
}
