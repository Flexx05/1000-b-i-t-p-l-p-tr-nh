const tinhtoan = (n) => {
  if (n === 1) return Math.sqrt(2);
  return (n + 1 + tinhtoan(n - 1)) ** (1 / (n + 1));
};

console.log(tinhtoan(2));
