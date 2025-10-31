const sumManureUpToN = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += 1 / (i * (i + 1));
  }
  return sum;
};

console.log(sumManureUpToN(5));
