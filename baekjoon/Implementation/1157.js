//백준->구현->단어 공부(1157)

let input = require('fs').readFileSync('1157.txt').toString().toUpperCase();
// let input = require('fs').readFileSync('/dev/stdin').toString().toUpperCase();

let alphabet = new Array(26).fill(0);

for (let i = 0; i < input.length; i++) {
  alphabet[input.charCodeAt(i) - 65]++;
}

let maxCnt = Math.max(...alphabet);
let maxIndex = alphabet.indexOf(maxCnt);
let cnt = 0;

for (let j = 0; j < alphabet.length; j++) {
  if (maxCnt === alphabet[j]) {
    cnt++;
  }
}

console.log(cnt > 1 ? '?' : String.fromCharCode(maxIndex + 65));

// charCodeAt : 문자 -> 아스키코드 번호 ( 문자열중 하나를 선택하여 아스키코드 번호로 변환 ) -65(대문자) 필요
// fromCharCode : 아스키코드 번호 -> 문자 +65필요
