const tinhtoan = (x, n) => {
  if (n === 1) return -(x ** 2);
  if (n === 0) return 1;
  return (-1) ** n * x ** (2 * n) + tinhtoan(x, n - 1);
};

console.log(tinhtoan(2, 3));
