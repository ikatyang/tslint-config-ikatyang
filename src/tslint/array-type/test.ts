// good

type good1 = string[];
type good2 = Array<(x: any) => any>;

// bad

type bad2 = Array<string[]>;
type bad1 = ((x: any) => any)[];
