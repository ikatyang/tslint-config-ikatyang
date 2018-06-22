// good

let bad1 = 1;

(function () {
  let bad2 = 1;
})();


// bad

let bad1 = 1;

(function () {
  let bad1 = 1;
})();
