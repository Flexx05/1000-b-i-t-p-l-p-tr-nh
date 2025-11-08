const tinhGiaiThua = (n) => {
  if (n === 0 || n === 1) return 1;
  return n * tinhGiaiThua(n - 1);
};

const tinhtoan = (n) => {
  if (n === 1) return 1;
  if (n === 0) return;
  return Math.sqrt(tinhGiaiThua(n) + tinhtoan(n - 1));
};

console.log(tinhtoan(2));
