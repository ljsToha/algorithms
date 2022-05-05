// 반복문의로 팩토리얼 구하기

const factorial = (num) => {
  let result = 1;
  for (let i = num; i > 0; i--) {
    result *= i;
  }
  return result;
};

console.log(factorial(5));

// function factorial(num){
//     let total = 1;
//     for(let i = num; i > 1; i--){
//         total *= i
//     }
//     return total;
// }
