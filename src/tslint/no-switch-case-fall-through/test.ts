// good

switch (1) {
  case 1:
    console.log(1);
  // falls through
  default:
    console.log(2);
}

// bad

switch (1) {
  case 1:
    console.log(1);
  default:
    console.log(2);
}
