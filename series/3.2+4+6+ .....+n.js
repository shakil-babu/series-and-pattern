// summetion of -->  2+4+6+ .....+n
let sum = 0;
const sumOfNumbers = (n) => {
  for (let i = 2; i <= n; i = i + 2) {
    sum += i;
  }
  return sum;
};

const result = sumOfNumbers(10);
console.log(result);
