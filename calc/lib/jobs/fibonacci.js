
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

const fibRecursion = (n) => fibDoRecursion(n)[1];

const fibDoRecursion = (n) => {
  const [prev, last] = (n === 0) ? [0, 1] : fibDoRecursion(n - 1);
  return [last, prev + last]
};

module.exports = {
  fibLoop,
  fibRecursion
}
