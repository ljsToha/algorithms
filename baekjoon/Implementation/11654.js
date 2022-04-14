//백준->구현->아스키 코드(11654)

const alphabet = require('fs').readFileSync('11654.txt').toString().trim();
// const alphabet = require('fs').readFileSync('/dev/stdin').toString().trim();
console.log(alphabet.charCodeAt());
