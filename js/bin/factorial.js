const factortial = require('../lib/factorial');
const argsParser = require('../lib/args');

try {
  const n = argsParser();
  const res = factortial.loop(n);
  console.log(res);
} catch (e) {
  console.log('Error calculating factorial: ' + e.message);
}
