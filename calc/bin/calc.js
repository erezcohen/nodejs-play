const argsParser = require('../lib/args');
const { calc } = require('../lib');

try {
  const { func, n } = argsParser(process);
  const res = calc({func, n});
  console.log('Result: ' + res);
} catch (e) {
  console.error('Error: ' + e.message);
  process.exit(1);
}
