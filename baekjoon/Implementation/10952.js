//백준->구현->A+B-5(10952)

const data = require('fs').readFileSync('10952.txt').toString().trim().replaceAll('\r', '').split('\n');
// const data = require('fs').readFileSync('/dev/stdin').toString().trim().replaceAll('\r', '').split('\n');

for (let i = 0; i < data.length; i++) {
  let A = parseInt(data[i].toString().split(' ')[0]);
  let B = parseInt(data[i].toString().split(' ')[1]);
  if (0 < A && B < 10) {
    console.log(A + B);
  }
}
