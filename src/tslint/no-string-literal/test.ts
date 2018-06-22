declare const x: { hello: any };

// good

x.hello;

// bad

x["hello"];
