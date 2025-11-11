const tinhtoan = (x, n) => {
  if (n === 0) return x;
  return (-1) ** n * x ** (2 * n + 1) + tinhtoan(x, n - 1);
};

console.log(tinhtoan(2, 2));
