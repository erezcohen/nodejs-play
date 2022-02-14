const argsParser = require('../lib/args');
const { calc } = require('../lib');

(async () => {
  try {
    const { func, n } = argsParser(process);
    const res = await calc({func, n});
    console.log('Result: ' + res);
  } catch (e) {
    console.error('Error: ' + e.message);
    process.exit(1);
  }
})()
