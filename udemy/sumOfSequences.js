// 수열의 합
// 공차 1인 등차수열의 제 n항까지의 합
function sequenceAlgorithms(n) {
  return (n * (n + 1)) / 2;
}
let startTimeAg = performance.now();
console.log(sequenceAlgorithms(1000000000));
let endTimeAg = performance.now();
console.log(`걸린 시간 : ${(endTimeAg - startTimeAg) / 1000} 초.`);

//////////////////////////////////////////////////

function nSum(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
let startTimeTo = performance.now();
console.log(nSum(1000000000));
let endTimeTo = performance.now();
console.log(`걸린 시간 : ${(endTimeTo - startTimeTo) / 1000} 초.`);
