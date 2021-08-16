// 1 + 4 + 7 + .... + n
let sum = 0;
const series = (n) => {
  for (let i = 1; i <= n; i += 3) {
    sum += i;
  }
  return sum;
};
const result = series(100);
console.log(result);
