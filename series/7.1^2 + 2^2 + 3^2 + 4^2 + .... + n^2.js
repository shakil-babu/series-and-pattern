// 1^2 + 2^2 + 3^2 + 4^2 + .... + n^2
let sum = 0;
const series = (n) => {
  for (let i = 1; i <= n; i++) {
    sum += Math.pow(i, 2); // or --> i*i
  }

  return sum;
};

const sumOfSquares = series(10);
console.log(sumOfSquares);
