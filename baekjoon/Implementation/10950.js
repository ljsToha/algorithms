//백준->구현->A+B-3(10950)
let [T, ...nums] = require('fs').readFileSync('10950.txt').toString().trim().replaceAll('\r', '').split('\n');
// let [T, ...nums] = require('fs').readFileSync('/dev/stdin').toString().trim().replaceAll('\r', '').split('\n');
let A = 0;
let B = 0;
for (let i = 0; i < T; i++) {
  A = parseInt(nums[i].split(' ')[0]);
  B = parseInt(nums[i].split(' ')[1]);
  console.log(A + B);
}
