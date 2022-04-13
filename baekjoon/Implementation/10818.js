//백준->구현->최소,최대(10818)

let [N, ...data] = require('fs').readFileSync('10818.txt').toString().trim().split('\n');
// let [N, ...data] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
data = data
  .toString()
  .trim()
  .split(' ')
  .map((n) => +n);

console.log(`${Math.min(...data)} ${Math.max(...data)}`);
