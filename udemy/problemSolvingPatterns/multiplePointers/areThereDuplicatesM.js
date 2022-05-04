// 전달된 인수에 중복이 있는지 확인하는 areThereDuplicates 함수를 구현하라.
// frequencyCounter 또는 multiplePointers 패턴으로 해당 문제를 풀 수 있다.

// multiplePointers 풀이 => ★ 정렬 필수 ★
const areThereDuplicates = (...args) => {
  if (typeof args[0] === 'string') {
    args.sort();
  } else if (typeof args[0] === 'number') {
    args.sort((a, b) => a - b);
  }
  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
};

// function areThereDuplicates() {
//   // ★★★ 한줄 코딩 ★★★
//   // new Set으로 중복 제거 후 기존 길이 비교
//   // new Set(arguments).size => size는 new Set 개수 구하기
//   return new Set(arguments).size !== arguments.length;
// }

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(2, 1, 2)); // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true
