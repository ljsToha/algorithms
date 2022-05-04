// 0되는 값 찾기
// 오름차순 정렬 필요
//왼쪽끝와 오른쪽 끝 이동 방식

// function sumZero(arr){
//     // 시간 복잡도 : O(n2)
//     for(let i = 0; i < arr.length; i++){
//         for(let j = i+1; j < arr.length; j++){
//             if(arr[i] + arr[j] === 0){
//                 return [arr[i], arr[j]];
//             }
//         }
//     }
// }

function sumZero(arr) {
  // 시간 복잡도 : O(n)
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

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]));
