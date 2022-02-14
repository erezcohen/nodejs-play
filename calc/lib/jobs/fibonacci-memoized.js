const fs = require('fs');
const { promisify } = require('util');
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

const { fibRecursion } = require('./fibonacci');

const CACHE_FILE_PATH = './lib/jobs/fibonacci-memoized-cache.json';


const fibRecursionMemoized = async (n) => {
  const cacheStr = fs.existsSync(CACHE_FILE_PATH)
    ? await readFile(CACHE_FILE_PATH, 'utf-8')
    : '{}';
  const cache = JSON.parse(cacheStr);

  if (cache[n]) {
    return cache[n];
  }

  const newVal = calcNewValue(cache, n);

  cache[n] = newVal;

  console.debug(`Adding new entry to cache. n: ${n}, value: ${newVal}`)
  await writeFile(CACHE_FILE_PATH, JSON.stringify(cache, null, 2));
  return newVal;
};

const calcNewValue = (cache, n) =>
  (cache[n - 1] !== undefined && cache[n - 2] !== undefined )
    ? cache[n - 1] + cache[n - 2]
    : fibRecursion(n);


module.exports = {
  fibRecursionMemoized
}
