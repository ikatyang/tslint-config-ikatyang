// good

function good1(a = 1) {

}

// bad

function bad1(a) {
  a = a || 1;
}
