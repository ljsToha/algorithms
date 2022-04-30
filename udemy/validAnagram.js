function validAnagram(first, second) {
  if (first.length !== second.length) return false;
  let lookup = {};
  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    console.log(letter);
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}

// 나의 O(n) 방식 풀이
// function validAnagram(strA, strB) {
//   if (strA.length !== strB.length) return false;
//   let charCountA = {};
//   let charCountB = {};
//   for (let char of strA) {
//     charCountA[char] = (charCountA[char] || 0) + 1;
//   }
//   for (let char of strB) {
//     charCountB[char] = (charCountB[char] || 0) + 1;
//   }
//   for (let key in charCountA) {
//     if (charCountA[key] !== charCountB[key]) {
//       return false;
//     }
//   }
//   return true;
// }
console.log(validAnagram('', ''));
console.log(validAnagram('aaz', 'zza'));
console.log(validAnagram('anagraam', 'nagaramm'));
console.log(validAnagram('rat', 'car'));
console.log(validAnagram('awesome', 'awesom'));
console.log(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana'));
console.log(validAnagram('awertv', 'aevwrt'));

//Time - O(n)
