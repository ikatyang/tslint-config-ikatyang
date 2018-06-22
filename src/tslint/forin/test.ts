declare const someObject: {};

// good

for (let key in someObject) {
  if (someObject.hasOwnProperty(key)) {
    console.log(key);
  }
}

// bad

for (let key in someObject) {
  console.log(key);
}
