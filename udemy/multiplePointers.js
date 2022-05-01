// 오름차순 정렬 필요
//왼쪽끝와 오른쪽 끝 이동 방식
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}
console.log(sumZero([-4, -3, -2, -1, 0, 5, 10]));
