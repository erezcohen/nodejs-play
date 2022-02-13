
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

const fibRecursionWrapper = (n) => fibRecursion(n)[1];

const fibRecursion = (n) => {
  if (n === 0) {
    return [0, 1];
  }
  const [prev, last] = fibRecursion(n - 1);
  return [last, prev + last]
};

module.exports = {
  'fib-loop': fibLoop,
  'fib-recur': fibRecursionWrapper
}
