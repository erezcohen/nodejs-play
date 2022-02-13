const minimist = require('minimist');

const { funcNames } = require('./index');


module.exports = ({argv}) => {
  const args = argv.slice(2);
  const switches = minimist(args);

  const n = parseInt(switches.val);
  if (isNaN(n) || n < 1) {
    throw new Error('you must supply a positive integer for "val"');
  }

  const func = switches.func;

  if (!funcNames.includes(func)) {
    throw new Error('"func" value must be one of ' + funcNames.join(', '));
  }

  return {
    n,
    func
  };
}
