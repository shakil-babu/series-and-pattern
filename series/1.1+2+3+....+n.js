// summetion of --> 1 + 2 + 3 + 4 + ..... + n
let sum = 0;
const sumOfNumbers = (n) => {
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};

const result = sumOfNumbers(10);
console.log(result);
