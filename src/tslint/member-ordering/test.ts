// good

class good1 {
  static d1;
  static d2;
  static d3;
  static c1() {}
  static c2() {}
  static c3() {}
  b1;
  b2;
  b3;
  constructor() {}
  a1() {}
  a2() {}
  a3() {}
}

// bad

class bad1 {
  static d3;
  static d2;
  static d1;
  static c2() {}
  static c3() {}
  b1;
  b2;
  b3;
  constructor() {}
  a1() {}
  a2() {}
  a3() {}
  static c1() {}
}
