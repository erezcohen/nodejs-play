
const factLoop = (n) => {
  let res = 1;
  let i = 1;
  while (i <= n) {
    res *= i;
    i++;
  }
  return res;
}


const factLoop2 = (n) => [...Array(n + 1).keys()]
  .slice(1)
  .reduce((acc, curr) => acc * curr, 1);


const factRecursion = (n) => n === 1
  ? 1
  : n * factRecursion(n - 1);


module.exports = {
  factLoop,
  factLoop2,
  factRecursion
}
