const mathPow = (x, n) => {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= x;
  }
  return result;
};

console.log(mathPow(2, 3));
