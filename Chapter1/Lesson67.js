const tinhtoan = (x, n) => {
  if (n === 1) return x;
  if (n === 0) return 1;
  return (-1) ** (n + 1) * x ** n + tinhtoan(x, n - 1);
};

console.log(tinhtoan(2, 3));
