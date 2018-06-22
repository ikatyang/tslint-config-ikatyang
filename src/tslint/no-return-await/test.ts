// good

async function good1() {
  return Promise.resolve(null);
}

// bad

async function bad1() {
  return await Promise.resolve(null);
}
