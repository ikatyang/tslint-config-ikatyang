// good

function good1() {
  throw new Error('message');
}

// bad

function bad1() {
  throw 'message';
}
