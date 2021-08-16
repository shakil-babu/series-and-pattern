// 1.3 + 2.5 + 3.7 + ... + n1.n2
let sum = 0;
let a = 1,
  b = 3;
const seriesSum = (n1, n2) => {
  while (a <= n1 && b <= n2) {
    sum += a * b;
    a++;
    b += 2;
  }

  return sum;
};

const result = seriesSum(10, 20);
console.log(result);
