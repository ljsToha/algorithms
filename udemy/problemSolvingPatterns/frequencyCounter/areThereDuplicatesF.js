// 전달된 인수에 중복이 있는지 확인하는 areThereDuplicates 함수를 구현하라.
// frequencyCounter 또는 multiplePointers 패턴으로 해당 문제를 풀 수 있다.

// frequencyCounter 풀이

const areThereDuplicates = (...num) => {
  let duplicate = {};
  for (let data of num) {
    duplicate[data] = (duplicate[data] || 0) + 1;
  }
  for (let key in duplicate) {
    if (duplicate[key] >= 2) {
      return true;
    }
  }
  return false;
};

// function areThereDuplicates() {
//   // arguments통한 인자 전달
//   let collection = {};
//   for (let val in arguments) {
//     collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
//   }
//   for (let key in collection) {
//     if (collection[key] > 1) return true;
//   }
//   return false;
// }

// function areThereDuplicates() {
//   // ★★★ 한줄 코딩 ★★★
//   // new Set으로 중복 제거 후 기존 길이 비교
//   // new Set(arguments).size => size는 new Set 개수 구하기
//   return new Set(arguments).size !== arguments.length;
// }

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true
