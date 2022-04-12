//백준->구현->상수(2908)
let [A, B] = require('fs').readFileSync('./2908.txt').toString().split(' ');
// let [A, B] = require('fs').readFileSync('/dev/stdin').toString().split(' ');
A = Number(A.split('').reverse().join(''));
B = Number(B.split('').reverse().join(''));

A > B ? console.log(A) : console.log(B);
