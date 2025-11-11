const tinhtoan = (n) => {
  if (n === 1) return 1;
  return (-1) ** (n + 1) * (1 / ((n * (n + 1)) / 2)) + tinhtoan(n - 1);
};

console.log(tinhtoan(3));
