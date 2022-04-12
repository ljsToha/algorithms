//백준->구현->알파벳 찾기(10809)

const input = require('fs').readFileSync('10809.txt').toString().split('');
// const input = require('fs').readFileSync('/dev/stdin').toString().split('');
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let result = '';
for (let i = 0; i < alphabet.length; i++) {
  result += input.indexOf(alphabet[i].trim()) + ' ';
}
console.log(result);
