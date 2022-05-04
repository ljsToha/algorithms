// 정렬된 정수 배열과 목표 평균이 주어지면 배열에 쌍의 평균이 목표 평균과 같은 쌍이 있는지 확인합니다.
// 평균 목표와 일치하는 쌍이 두개 이상 있을 수 있습니다.

const averagePair = (arr, num) => {
  let first = arr[0];
  let last = arr[arr.length - 1];
  let temp = num * 2;
  let fcnt = 0;
  let lcnt = arr.length - 1;
  while (first < last) {
    if (first + last < temp) {
      fcnt++;
      first = arr[fcnt];
    } else if (first + last > temp) {
      lcnt--;
      last = arr[lcnt];
    } else {
      return true;
    }
  }
  return false;
};

console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false
