// 1 * 2 * 3 * .... * n
let multipication = 1,
  n;
const multipication_result = (n) => {
  for (let i = 1; i <= n; i++) {
    multipication *= i;
  }
  return multipication;
};

const result = multipication_result(6);
console.log(result);
