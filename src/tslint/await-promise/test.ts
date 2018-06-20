// good

async function good1(promise: Promise<any>) {
  await promise;
}

async function good2(promiseLike: PromiseLike<any>) {
  await promiseLike;
}

// bad

async function bad1(number: number) {
  await number;
}
