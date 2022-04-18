//백준->그리디->30(10610)

const num = require('fs').readFileSync('10610.txt').toString().split('');
// const num = require('fs').readFileSync('/dev/stdin').toString().split('');
const temp = num.includes('0') ? num.sort((a, b) => b - a) : -1;
if (temp === -1) {
  console.log(-1);
} else {
  let sum = 0;
  for (let i = 0; i < temp.length; i++) {
    sum += Number(num[i]);
  }
  const result = sum % 3 === 0 ? temp.join('') : -1;
  console.log(result);
}

// 숫자의 자릿수를 합하고 3으로 나누어 떨어지면 3의 배수
