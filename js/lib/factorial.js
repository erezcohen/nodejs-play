
const loop = (n) => [...Array(n + 1).keys()]
  .slice(1)
  .reduce((acc, curr) => acc * curr, 1);

module.exports = {
  loop
}
