// good

class good1 extends Error {
  constructor() {
    super();
  }
}

// bad

class bad1 extends Error {
  constructor() {
    super();
    super();
  }
}
