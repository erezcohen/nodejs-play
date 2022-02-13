const {fibRecursion} = require('./fibonacci');


const fibRecursionMemoized = (n) => {
  const cache = {};

  if (cache[n]) {
    return cache[n];
  }

  const newVal = calcNewValue(cache, n);

  cache[n] = newVal;
  return newVal;
};

const calcNewValue = (cache, n) =>
  (cache[n - 1] !== undefined && cache[n - 2] !== undefined )
    ? cache[n - 1] + cache[n - 2]
    : fibRecursion(n);


module.exports = {
  fibRecursionMemoized
}
