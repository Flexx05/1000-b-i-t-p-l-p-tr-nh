const tinhtoan = (x, n) => {
  if (n === 1) return Math.sqrt(x);
  return Math.sqrt(x ** n + tinhtoan(x, n - 1));
};

console.log(tinhtoan(2, 2));
