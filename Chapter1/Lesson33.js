const tinhtoan = (n) => {
  if (n === 1) return Math.sqrt(2);
  return Math.sqrt(2 + tinhtoan(n - 1));
};

console.log(tinhtoan(2));
