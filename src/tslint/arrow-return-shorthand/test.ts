// good

const good1 = x => x;
const good2 = x => x
  .long
  .long
  .long
  .long;

// bad

const bad1 = x => { return x };
const bad2 = x => {
  return x
    .long
    .long
    .long
    .long;
}
