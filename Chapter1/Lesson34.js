const tinhtoan = (n) => {
  if (n === 1) return 1;
  return Math.sqrt(n + tinhtoan(n - 1));
};

console.log(tinhtoan(2));
