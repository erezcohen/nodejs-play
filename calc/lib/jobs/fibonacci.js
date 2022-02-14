
const fibLoop = (n) => {
  let prev = 0;
  let last = 1;
  let i = 0;
  while (i < n) {
    let res = prev + last;
    prev = last;
    last = res;
    i++;
  }
  return last;
};


const fibRecursion = (n) => n < 2
    ? n
    : fibRecursion(n - 1) + fibRecursion(n - 2);


const fibRecursionLinear = (n) => fibLinear(n)[1];
const fibLinear = (n) => {
  const [prev, last] = (n === 0) ? [0, 1] : fibLinear(n - 1);
  return [last, prev + last]
};

const fibRecursionMemoized = (n, memo = {}) => {
  if (n < 2) {
    return n;
  }

  if (memo[n]) {
    return memo[n];
  }

  memo[n] = fibRecursionMemoized(n - 1, memo) + fibRecursionMemoized(n - 2, memo);
  return memo[n];
}


module.exports = {
  fibLoop,
  fibRecursion,
  fibRecursionLinear,
  fibRecursionMemoized
}
