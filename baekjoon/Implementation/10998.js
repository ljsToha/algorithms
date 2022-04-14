//백준->구현->A×B(10998)

const [A, B] = require('fs').readFileSync('10998.txt').toString().trim().split(' ');
// const [A, B] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

const result = parseInt(A) * parseInt(B);

console.log(result);
