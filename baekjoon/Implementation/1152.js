//백준->구현->단어의 개수(1152)

// const input = require('fs').readFileSync('1152.txt').toString().trim();
const input = require('fs').readFileSync('/dev/stdin').toString().trim();

console.log(input === '' ? 0 : input.split(' ').length);
