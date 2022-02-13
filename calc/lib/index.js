const { factLoop, factRecursion } = require('./jobs/factorial');
const { fibLoop, fibRecursion } = require('../lib/jobs/fibonacci');
const { fibRecursionMemoized } = require('../lib/jobs/fibonacci-memoized');

const funcs = {
  'fact-loop': factLoop,
  'fact-recur': factRecursion,
  'fib-loop': fibLoop,
  'fib-recur': fibRecursion,
  'fib-recur-memo': fibRecursionMemoized
}

const calc  = ({func, n}) => {
  console.debug(`Going to perform ${func} with ${n}`);
  return funcs[func](n);
};

module.exports = {
  calc,
  funcNames: Object.keys(funcs)
}
