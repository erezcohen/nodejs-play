const fs = require('fs');

const { fibRecursion } = require('./fibonacci');

const CACHE_FILE_PATH = './lib/jobs/fibonacci-memoized-cache.json';


const fibRecursionMemoized = (n) => {


  const cacheStr = fs.existsSync(CACHE_FILE_PATH)
    ? fs.readFileSync(CACHE_FILE_PATH, 'utf-8')
    : '{}';
  const cache = JSON.parse(cacheStr);

  if (cache[n]) {
    return cache[n];
  }

  const newVal = calcNewValue(cache, n);

  cache[n] = newVal;
  console.debug(`Adding new entry to cache. n: ${n}, value: ${newVal}`)
  fs.writeFileSync(CACHE_FILE_PATH, JSON.stringify(cache, null, 2));
  return newVal;
};

const calcNewValue = (cache, n) =>
  (cache[n - 1] !== undefined && cache[n - 2] !== undefined )
    ? (console.log(`About to reuse ${n-1}, value: ${cache[n - 1]} and ${n-2}, value: ${cache[n - 2]}`) || cache[n - 1] + cache[n - 2])
    : fibRecursion(n);


module.exports = {
  fibRecursionMemoized
}
