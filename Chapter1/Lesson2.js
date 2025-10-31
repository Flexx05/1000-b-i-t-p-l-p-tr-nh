// Tính S(n) = 1^2 + 2^2 + 3^2 + ... + n^2

const sumOfSquaresUpToN = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i * i;
  }
  return sum;
};

console.log(sumOfSquaresUpToN(5));
