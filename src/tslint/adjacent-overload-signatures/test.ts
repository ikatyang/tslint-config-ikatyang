// good

interface I {
  a();
  a();
  b();
}

// bad

interface I {
  a();
  b();
  a();
}
