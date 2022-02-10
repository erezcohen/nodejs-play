
const factLoop = (n) => [...Array(n + 1).keys()]
  .slice(1)
  .reduce((acc, curr) => acc * curr, 1);

const factRecursion = (n) => {
  if (n === 1) {
    return 1;
  }
  return n * factRecursion(n - 1);
}

module.exports = {
  'fact-loop': factLoop,
  'fact-recur': factRecursion
}
