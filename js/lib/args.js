module.exports = () => {
  const args = process.argv.slice(2);
  const n = parseInt(args[0]);
  if (typeof n !== 'number') {
    throw new Error('you must supply a positive integer as input');
  }
  return n;
}
