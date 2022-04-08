//백준->구현->A+B(1000)

const [A, B] = require('fs').readFileSync('1000.txt').toString().trim().split(' ');
// const [A, B] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

const result = parseInt(A) + parseInt(B);

console.log(result);
