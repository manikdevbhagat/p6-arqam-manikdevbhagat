let Fib = (n) => ({
  i1: 0,
  i2: 0,
  count: 1,
  [Symbol.iterator]() {
    return this;
  },
  next() {
    [this.i1, this.i2] = [this.i2, this.i1 + this.i2 || 1];
    return { value: this.i1, done: this.count++ > n };
  },
});

console.log("The Fibonacci Series is:");

for (const el of Fib(10)) {
  console.log(el);
}
