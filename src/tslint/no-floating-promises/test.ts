// good

function good1() {
  return Promise.resolve(null);
}

// bad

function bad1() {
  Promise.resolve(null);
}
