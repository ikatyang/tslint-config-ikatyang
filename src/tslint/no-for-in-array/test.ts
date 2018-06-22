// good

[1, 2].forEach((_, index) => {

});

// bad

for (const key in [1, 2]) {

}
