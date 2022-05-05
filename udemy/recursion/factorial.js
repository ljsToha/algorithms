// 0!은 1 인 팩토리얼 재귀 구하기
function factorial(num) {
  if (num === 0) return 1;
  return num * factorial(num - 1);
}
console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(4));
console.log(factorial(7));

// factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040
