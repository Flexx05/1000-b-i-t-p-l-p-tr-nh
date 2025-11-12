const tinhGiaiThua = (n) => {
  if (n === 0 || n === 1) return 1;
  return n * tinhGiaiThua(n - 1);
};

const tinhtoan = (x, n) => {
  if (n === 1) return -x;
  return (-1) ** n * (x ** n / tinhGiaiThua(n)) + tinhtoan(x, n - 1);
};

console.log(tinhtoan(3, 2));
