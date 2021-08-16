// 1.2 + 2.3 + 3.4 + 4.5 + 5.6 + ... + n1.n2
let sum = 0;
let a = 1,
  b = 2;
const seriesSum = (n1, n2) => {
  while (a <= n1 && b <= n2) {
    sum += a * b;
    a++;
    b++;
  }

  return sum;
};

const result = seriesSum(10, 20);
console.log(result);
