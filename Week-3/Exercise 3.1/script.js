// memoize() stores computation results in cache, and retrieves that same information from the cache the next time it's needed instead of computing it again.
function memoize(fn) {
  const cache = new Map();
  return function (...args) {
    const key = args.toString();
    if (cache.has(key)) {
      return cache.get(key); //if cache has the key, return the stored result for that key instead of computing again.
    }
    cache.set(key, fn(...args)); //if key is unique, compute the result for the key and store it in cache.
    return cache.get(key);
  };
}

// add() takes n arguments and returns the sum
function add(...args) {
  return args.reduce(function (acc, cur) {
    return acc + cur;
  });
}

//countTime() takes a function as input and returns the time taken to execute the input function
function countTime(fn) {
  console.time();
  fn();
  console.timeEnd();
}

const memoizeAdd = memoize(add);

//if the same key is passed again, the result stored in cache is returned.
// This is evident through the time logged when the same key is passed again.
countTime(() => memoizeAdd(100, 100, 100, 500));
countTime(() => memoizeAdd(100, 100, 100, 500));
