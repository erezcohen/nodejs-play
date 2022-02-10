
const factLoop = (n) => [...Array(n + 1).keys()]
  .slice(1)
  .reduce((acc, curr) => acc * curr, 1);

const factRecursion = (n) => n === 1
  ? 1
  : n * factRecursion(n - 1);

module.exports = {
  'fact-loop': factLoop,
  'fact-recur': factRecursion
}
