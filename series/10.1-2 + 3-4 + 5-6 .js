// 1-2 + 3-4 + 5-6 + ......
let even = 0,odd = 0;
const seriesSum = (n) => {
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      even += i;
    } else {
      odd += i;
    }
  }
  return odd - even;
};
console.log(seriesSum(6));
