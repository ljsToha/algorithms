//백준->구현->크로아티아 알파벳(2941)

const input = require('fs').readFileSync('2941.txt').toString().trim();
// const input = require('fs').readFileSync('/dev/stdin').toString().trim();

let croatia = /c\=|c\-|dz\=|d\-|lj|nj|s\=|z\=/g;
const result = input.replace(croatia, ' ');
console.log(result.length);
