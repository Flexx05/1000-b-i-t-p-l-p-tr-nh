const tinhtoan = (x, n) => {
  if (n === 1) return -x;
  return (-1) ** n * (x ** n / ((n * (n + 1)) / 2)) + tinhtoan(x, n - 1);
};

console.log(tinhtoan(3, 2));
