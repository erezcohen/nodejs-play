const factorial = require('./jobs/factorial');
const fibonacci = require('../lib/jobs/fibonacci');
const fibRecursionCached = require('./jobs/fibonacci-cached');

const funcs = {
  'fact-loop': factorial.factLoop,
  'fact-loop-2': factorial.factLoop2,
  'fact-recur': factorial.factRecursion,
  'fib-loop': fibonacci.fibLoop,
  'fib-recur': fibonacci.fibRecursion,
  'fib-recur-linear': fibonacci.fibRecursionLinear,
  'fib-recur-memo': fibonacci.fibRecursionMemoized,
  'fib-recur-cache': fibRecursionCached
}

const calc  = ({func, n}) => {
  console.debug(`Going to perform ${func} with ${n}`);
  return funcs[func](n);
};

module.exports = {
  calc,
  funcNames: Object.keys(funcs)
}
