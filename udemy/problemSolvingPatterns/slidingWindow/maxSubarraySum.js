// 두번째 인자 숫자만큼의 배열의 최대합 구하기

const maxSubarraySum = (arr, num) => {
  if (arr.length < num) return null;
  let sum = 0;
  for (let i = 0; i < num; i++) sum += arr[i];
  let tempSum = sum;
  for (let i = num; i < arr.length; i++) {
    tempSum += arr[i] - arr[i - num];
    sum = Math.max(sum, tempSum); // 입력된 숫자 중 가장 큰 숫자를 반환
  }
  return sum;
};

console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
console.log(maxSubarraySum([2, 3], 3)); // null
