
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

const fibRecursion = () => {};

module.exports = {
  'fib-loop': fibLoop,
  'fib-recur': fibRecursion
}
