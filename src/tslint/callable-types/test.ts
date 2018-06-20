// good

type good1 = (x: any) => any;

// bad

type bad1 = {
  (x: any): any;
}

interface bad2 {
  (x: any): any;
}
