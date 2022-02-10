const factortial = require('../lib/jobs/factorial');

const funcs = { ...factortial };

module.exports = ({func, n}) => {
  console.debug(`Going to perform ${func} with ${n}`);
  return funcs[func](n);
}
