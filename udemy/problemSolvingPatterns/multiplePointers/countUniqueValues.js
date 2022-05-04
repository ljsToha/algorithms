// 정렬된 배열의 고유한 숫자 개수 구하기
// 숫자 순서대로 정렬 및 개수 카운트
const countUniqueValues = (num) => {
  let first = num[0];
  let second = 0;
  let cnt = 0;
  if (num.length === 0) {
    return 0;
  }
  for (let i = 1; i < num.length; i++) {
    second = num[i];
    if (first < second) {
      cnt++;
      num[cnt] = second;
      first = second;
    }
  }
  return cnt + 1;
};

console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2, -1, -1, 0, 1]));
