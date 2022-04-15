//백준->그리디->설탕 배달(2839)

let input = Number(require('fs').readFileSync('2839.txt').toString().trim());
// let input = Number(require('fs').readFileSync('/dev/stdin').toString().trim());
let result = 0;
let cnt = 0;

while (input >= 0) {
  if (input % 5 === 0) {
    result = Math.floor(input / 5) + cnt;
    break;
  }
  input -= 3;
  if (input < 0) {
    result = -1;
    break;
  }
  cnt++;
}
console.log(result);
