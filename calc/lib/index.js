const factortial = require('../lib/jobs/factorial');
const fibonacci = require('../lib/jobs/fibonacci');

const funcs = { ...factortial, ...fibonacci };

module.exports = ({func, n}) => {
  console.debug(`Going to perform ${func} with ${n}`);
  return funcs[func](n);
}
