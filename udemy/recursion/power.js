function power(a, b) {
  if (b === 0) return 1;
  return a * power(a, b - 1);
}

console.log(power(2, 0));
console.log(power(2, 2));
console.log(power(2, 4));
