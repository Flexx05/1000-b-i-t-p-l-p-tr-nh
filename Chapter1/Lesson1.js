// Tính S(n) = 1 + 2 + 3 + ... + n

const sumUpToN = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};

console.log(sumUpToN(5));
