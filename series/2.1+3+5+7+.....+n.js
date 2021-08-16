// summetion of --> 1+3+5+7+.....+n
let sum = 0;
const sumOfNumbers = (n) => {
  for (let i = 1; i <= n; i = i + 2) {
    sum += i;
  }
  return sum;
};

const result = sumOfNumbers(10);
console.log(result);
